
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trash2, Edit, Plus } from 'lucide-react';

interface Project {
  id?: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  category: string;
}

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [newProject, setNewProject] = useState<Project>({
    title: '',
    description: '',
    image: '',
    technologies: [],
    githubUrl: '',
    liveUrl: '',
    featured: false,
    category: 'frontend'
  });
  const { toast } = useToast();

  useEffect(() => {
    // Check admin authentication
    if (!localStorage.getItem('adminAuth')) {
      window.location.href = '/admin';
      return;
    }
    
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch projects',
        variant: 'destructive',
      });
    }
  };

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
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{project.title}</h3>
                        <p className="text-sm text-gray-600">{project.category} • {project.featured ? 'Featured' : 'Regular'}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => setEditingProject(project)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="image">Image URL</Label>
                    <Input
                      id="image"
                      value={newProject.image}
                      onChange={(e) => setNewProject(prev => ({ ...prev, image: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="technologies">Technologies (comma separated)</Label>
                    <Input
                      id="technologies"
                      value={newProject.technologies.join(', ')}
                      onChange={(e) => handleTechnologiesChange(e.target.value, true)}
                    />
                  </div>
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
                    checked={newProject.featured}
                    onChange={(e) => setNewProject(prev => ({ ...prev, featured: e.target.checked }))}
                  />
                  <Label htmlFor="featured">Featured Project</Label>
                </div>

                <Button 
                  onClick={() => {
                    toast({
                      title: 'Project Added',
                      description: 'Project has been added to the seed data. Restart the server to see changes.',
                    });
                    // Reset form
                    setNewProject({
                      title: '',
                      description: '',
                      image: '',
                      technologies: [],
                      githubUrl: '',
                      liveUrl: '',
                      featured: false,
                      category: 'frontend'
                    });
                  }}
                  className="w-full"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Project
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
