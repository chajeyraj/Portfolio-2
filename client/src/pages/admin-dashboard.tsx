
import { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trash2, Edit, Plus, Loader2, Upload, X, Image } from 'lucide-react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { apiRequest, queryClient } from '@/lib/queryClient';
import type { Project } from '@shared/schema';

interface NewProject {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: number;
  category: string;
}

export default function AdminDashboard() {
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [newProject, setNewProject] = useState<NewProject>({
    title: '',
    description: '',
    image: '',
    technologies: [],
    githubUrl: '',
    liveUrl: '',
    featured: 0,
    category: 'frontend'
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadPreview, setUploadPreview] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Fetch projects using React Query
  const { data: projects = [], isLoading, error } = useQuery<Project[]>({
    queryKey: ['/api/projects'],
  });

  // Create project mutation
  const createProjectMutation = useMutation({
    mutationFn: async (projectData: NewProject) => {
      const response = await apiRequest('POST', '/api/projects', projectData);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Project added successfully!',
      });
      
      // Reset form
      setNewProject({
        title: '',
        description: '',
        image: '',
        technologies: [],
        githubUrl: '',
        liveUrl: '',
        featured: 0,
        category: 'frontend'
      });
      
      // Invalidate and refetch projects
      queryClient.invalidateQueries({ queryKey: ['/api/projects'] });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to add project',
        variant: 'destructive',
      });
    }
  });

  // Update project mutation
  const updateProjectMutation = useMutation({
    mutationFn: async ({ id, projectData }: { id: number; projectData: Partial<NewProject> }) => {
      const response = await apiRequest('PUT', `/api/projects/${id}`, projectData);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Project updated successfully!',
      });
      
      setEditingProject(null);
      // Invalidate and refetch projects
      queryClient.invalidateQueries({ queryKey: ['/api/projects'] });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to update project',
        variant: 'destructive',
      });
    }
  });

  // Delete project mutation
  const deleteProjectMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest('DELETE', `/api/projects/${id}`);
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Project deleted successfully!',
      });
      
      // Invalidate and refetch projects
      queryClient.invalidateQueries({ queryKey: ['/api/projects'] });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to delete project',
        variant: 'destructive',
      });
    }
  });

  useEffect(() => {
    // Check admin authentication
    if (!localStorage.getItem('adminAuth')) {
      window.location.href = '/admin';
      return;
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    window.location.href = '/';
  };

  const handleTechnologiesChange = (value: string, isNew: boolean = false) => {
    const technologies = value.split(',').map(tech => tech.trim()).filter(tech => tech);
    if (isNew) {
      setNewProject(prev => ({ ...prev, technologies }));
    } else if (editingProject) {
      setEditingProject({ ...editingProject, technologies });
    }
  };

  const handleAddProject = () => {
    createProjectMutation.mutate(newProject);
  };

  const handleUpdateProject = () => {
    if (!editingProject) return;
    
    const { id, createdAt, ...projectData } = editingProject;
    updateProjectMutation.mutate({
      id: id!,
      projectData: {
        ...projectData,
        featured: projectData.featured || 0,
        technologies: Array.isArray(projectData.technologies) ? projectData.technologies : [],
        githubUrl: projectData.githubUrl || '',
        liveUrl: projectData.liveUrl || ''
      }
    });
  };

  const handleDeleteProject = (id: number) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    deleteProjectMutation.mutate(id);
  };

  // File upload handlers
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: 'Error',
          description: 'File size must be less than 10MB',
          variant: 'destructive'
        });
        return;
      }

      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: 'Error',
          description: 'Only JPEG, PNG, GIF, and WebP files are allowed',
          variant: 'destructive'
        });
        return;
      }

      setUploadedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileUpload = async () => {
    if (!uploadedFile) return;

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('image', uploadedFile);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const result = await response.json();
      setNewProject(prev => ({ ...prev, image: result.url }));
      
      toast({
        title: 'Success',
        description: 'File uploaded successfully!',
      });

      // Clear upload state
      setUploadedFile(null);
      setUploadPreview('');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to upload file. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsUploading(false);
    }
  };

  const clearFileUpload = () => {
    setUploadedFile(null);
    setUploadPreview('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="border-b bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio Admin</h1>
          <Button onClick={handleLogout} variant="outline">Logout</Button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="projects">
          <TabsList className="mb-6">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="add-project">Add Project</TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Manage Projects</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="flex justify-center items-center py-8">
                    <Loader2 className="w-6 h-6 animate-spin" />
                  </div>
                ) : error ? (
                  <div className="text-center py-8 text-red-600">
                    Failed to load projects. Please try again.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {projects.length === 0 ? (
                      <div className="text-center py-8 text-gray-500">
                        No projects found. Add your first project!
                      </div>
                    ) : (
                      projects.map((project) => (
                        <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h3 className="font-semibold">{project.title}</h3>
                            <p className="text-sm text-gray-600">{project.category} • {project.featured ? 'Featured' : 'Regular'}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              variant="outline" 
                              onClick={() => setEditingProject(project)}
                              disabled={updateProjectMutation.isPending}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive" 
                              onClick={() => handleDeleteProject(project.id!)}
                              disabled={deleteProjectMutation.isPending}
                            >
                              {deleteProjectMutation.isPending ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                              ) : (
                                <Trash2 className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="add-project">
            <Card>
              <CardHeader>
                <CardTitle>Add New Project</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={newProject.title}
                      onChange={(e) => setNewProject(prev => ({ ...prev, title: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select value={newProject.category} onValueChange={(value) => setNewProject(prev => ({ ...prev, category: value }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="figma">Figma</SelectItem>
                        <SelectItem value="frontend">Frontend</SelectItem>
                        <SelectItem value="full-stack">Full Stack</SelectItem>
                        <SelectItem value="animation">Animation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newProject.description}
                    onChange={(e) => setNewProject(prev => ({ ...prev, description: e.target.value }))}
                  />
                </div>

                {/* Image Upload Section */}
                <div>
                  <Label>Project Image/GIF</Label>
                  <div className="mt-2 space-y-4">
                    {/* File Upload */}
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6">
                      <div className="text-center">
                        <Image className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="mt-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => fileInputRef.current?.click()}
                            className="mb-2"
                          >
                            <Upload className="w-4 h-4 mr-2" />
                            Upload Image/GIF
                          </Button>
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleFileSelect}
                            className="hidden"
                          />
                          <p className="text-xs text-gray-500 mt-2">
                            Support: JPEG, PNG, GIF, WebP • Max 10MB
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Upload Preview */}
                    {uploadPreview && (
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Preview:</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={clearFileUpload}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                        <img
                          src={uploadPreview}
                          alt="Preview"
                          className="w-32 h-32 object-cover rounded-md"
                        />
                        <div className="flex justify-end mt-3">
                          <Button
                            type="button"
                            onClick={handleFileUpload}
                            disabled={isUploading}
                            size="sm"
                          >
                            {isUploading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                            {isUploading ? 'Uploading...' : 'Use This Image'}
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* OR divider */}
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white dark:bg-gray-900 text-gray-500">OR</span>
                      </div>
                    </div>

                    {/* URL Input */}
                    <div>
                      <Label htmlFor="image-url">Image URL</Label>
                      <Input
                        id="image-url"
                        value={newProject.image}
                        onChange={(e) => setNewProject(prev => ({ ...prev, image: e.target.value }))}
                        placeholder="https://example.com/image.jpg"
                        className="mt-1"
                      />
                    </div>

                    {/* Current Image Preview */}
                    {newProject.image && (
                      <div className="border rounded-lg p-4">
                        <span className="text-sm font-medium">Current Image:</span>
                        <img
                          src={newProject.image}
                          alt="Current project image"
                          className="w-32 h-32 object-cover rounded-md mt-2"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="technologies">Technologies (comma separated)</Label>
                  <Input
                    id="technologies"
                    value={newProject.technologies.join(', ')}
                    onChange={(e) => handleTechnologiesChange(e.target.value, true)}
                    placeholder="React, TypeScript, Tailwind CSS"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="github">GitHub URL</Label>
                    <Input
                      id="github"
                      value={newProject.githubUrl}
                      onChange={(e) => setNewProject(prev => ({ ...prev, githubUrl: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="live">Live URL</Label>
                    <Input
                      id="live"
                      value={newProject.liveUrl}
                      onChange={(e) => setNewProject(prev => ({ ...prev, liveUrl: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={newProject.featured === 1}
                    onChange={(e) => setNewProject(prev => ({ ...prev, featured: e.target.checked ? 1 : 0 }))}
                  />
                  <Label htmlFor="featured">Featured Project</Label>
                </div>

                <Button 
                  onClick={handleAddProject}
                  className="w-full"
                  disabled={createProjectMutation.isPending}
                >
                  {createProjectMutation.isPending ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Plus className="w-4 h-4 mr-2" />
                  )}
                  Add Project
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Edit Project Dialog */}
        {editingProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-screen overflow-y-auto">
              <h2 className="text-xl font-bold mb-4">Edit Project</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-title">Title</Label>
                    <Input
                      id="edit-title"
                      value={editingProject.title}
                      onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-category">Category</Label>
                    <Select value={editingProject.category} onValueChange={(value) => setEditingProject({ ...editingProject, category: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="figma">Figma</SelectItem>
                        <SelectItem value="frontend">Frontend</SelectItem>
                        <SelectItem value="full-stack">Full Stack</SelectItem>
                        <SelectItem value="animation">Animation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="edit-description">Description</Label>
                  <Textarea
                    id="edit-description"
                    value={editingProject.description}
                    onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-image">Image URL</Label>
                    <Input
                      id="edit-image"
                      value={editingProject.image}
                      onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-technologies">Technologies (comma separated)</Label>
                    <Input
                      id="edit-technologies"
                      value={Array.isArray(editingProject.technologies) ? editingProject.technologies.join(', ') : ''}
                      onChange={(e) => handleTechnologiesChange(e.target.value, false)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-github">GitHub URL</Label>
                    <Input
                      id="edit-github"
                      value={editingProject.githubUrl || ''}
                      onChange={(e) => setEditingProject({ ...editingProject, githubUrl: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-live">Live URL</Label>
                    <Input
                      id="edit-live"
                      value={editingProject.liveUrl || ''}
                      onChange={(e) => setEditingProject({ ...editingProject, liveUrl: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="edit-featured"
                    checked={editingProject.featured === 1}
                    onChange={(e) => setEditingProject({ ...editingProject, featured: e.target.checked ? 1 : 0 })}
                  />
                  <Label htmlFor="edit-featured">Featured Project</Label>
                </div>

                <div className="flex gap-2 justify-end">
                  <Button variant="outline" onClick={() => setEditingProject(null)}>
                    Cancel
                  </Button>
                  <Button 
                    onClick={handleUpdateProject}
                    disabled={updateProjectMutation.isPending}
                  >
                    {updateProjectMutation.isPending ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : null}
                    Update Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
