import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./ui/glass-card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Briefcase, User, Star, Plus, MessageSquare, StarIcon, Facebook } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import type { Experience, Testimonial } from "../types";
import { experiences, testimonials } from "../data/staticData";

interface NewReview {
  name: string;
  title: string;
  company: string;
  content: string;
  facebookId: string;
  rating: number;
}

export function ExperienceSection() {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState<NewReview>({
    name: '',
    title: '',
    company: '',
    content: '',
    facebookId: '',
    rating: 5
  });
  const { toast } = useToast();

  // Using static data - no API calls needed
  const experiencesLoading = false;
  const testimonialsLoading = false;

  const handleSubmitReview = () => {
    if (!newReview.name || !newReview.content) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    // Frontend-only demo - just show success message
    toast({
      title: 'Success',
      description: 'Your review has been submitted successfully! (Demo mode)',
    });
    
    // Reset form
    setNewReview({
      name: '',
      title: '',
      company: '',
      content: '',
      facebookId: '',
      rating: 5
    });
    setShowReviewForm(false);
  };

  // No loading states needed for static data

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Work Experience */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center"
          >
            Work <span className="gradient-text">Experience</span>
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((experience: Experience, index: number) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8" hover>
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center shadow-lg">
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-lg text-indigo-600 dark:text-indigo-400 mb-1">
                        {experience.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        {experience.startDate} - {experience.endDate || "Present"}
                        {experience.current && (
                          <span className="ml-2 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">
                            Current
                          </span>
                        )}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {experience.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(experience.technologies) ? 
                          experience.technologies.map((tech: string, techIndex: number) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-700 dark:text-indigo-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          )) : null
                        }
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center flex-1">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <Button
              onClick={() => setShowReviewForm(true)}
              className="ml-6 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Leave a Review
            </Button>
          </motion.div>

          {/* Horizontal Scrolling Testimonials */}
          <div className="overflow-x-auto horizontal-scroll pb-6">
            <div className="flex space-x-6 w-max px-1">
              {testimonials.map((testimonial: Testimonial, index: number) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0"
                >
                  <GlassCard className="p-8 w-96 h-full" hover>
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 gradient-bg rounded-full flex items-center justify-center mr-4">
                        {testimonial.image ? (
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          <span className="text-white font-bold text-lg">
                            {testimonial.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {testimonial.title} at {testimonial.company}
                        </p>
                        {testimonial.facebookId && (
                          <div className="flex items-center mt-1">
                            <Facebook className="w-3 h-3 text-blue-600 mr-1" />
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {testimonial.facebookId}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="flex space-x-1 text-yellow-500">
                        {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-4">
              <div className="flex items-center space-x-2 text-gray-400 dark:text-gray-600 text-sm">
                <span>← Scroll to see more reviews →</span>
              </div>
            </div>
          )}

          {/* Review Form Modal */}
          {showReviewForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setShowReviewForm(false);
                }
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Leave a Review
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={newReview.name}
                      onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Your full name"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="title">Job Title</Label>
                    <Input
                      id="title"
                      value={newReview.title}
                      onChange={(e) => setNewReview(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="e.g., Software Engineer"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={newReview.company}
                      onChange={(e) => setNewReview(prev => ({ ...prev, company: e.target.value }))}
                      placeholder="e.g., Tech Corp"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="facebookId">Facebook ID (optional)</Label>
                    <Input
                      id="facebookId"
                      value={newReview.facebookId}
                      onChange={(e) => setNewReview(prev => ({ ...prev, facebookId: e.target.value }))}
                      placeholder="Your Facebook username"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="rating">Rating</Label>
                    <div className="flex items-center space-x-2 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                          className={`p-1 ${star <= newReview.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                        >
                          <StarIcon className="w-6 h-6 fill-current" />
                        </button>
                      ))}
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        {newReview.rating} star{newReview.rating !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="content">Comment *</Label>
                    <Textarea
                      id="content"
                      value={newReview.content}
                      onChange={(e) => setNewReview(prev => ({ ...prev, content: e.target.value }))}
                      placeholder="Share your experience working with me..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 mt-6">
                  <Button
                    variant="outline"
                    onClick={() => setShowReviewForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSubmitReview}
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                  >
                    Submit Review
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}