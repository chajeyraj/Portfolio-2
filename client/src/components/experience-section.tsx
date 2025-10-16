import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery, useMutation } from "@tanstack/react-query";
import { GlassCard } from "./ui/glass-card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Briefcase, User, Star, Loader2, Plus, MessageSquare, StarIcon, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { Experience, Testimonial } from "@shared/schema";

// Local fallback data in case APIs fail
const localExperiences: Experience[] = [
  
  {
    id: 1,
    title: "Studio Bright Focus [ Video Editor / Photo Editor ]",
    company: "STUDIO BRIGHT FOCUS",
    description:
      "Collaborated with clients to deliver creative visual content aligned with brand style.",
    technologies: ["Adobe After Effects", "Adobe Premiere Pro", "Capture One", "Adobe Lightroom", "Adobe Photoshop"],
    startDate: "2021-11",
    endDate: null,
    current: 1,
    createdAt: new Date(),
  },
];

const localTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Vijikaran",
    title: "Doctor",
    company: "Cliniv Arogya",
    content:
      "Someone who looked like a stranger did a project for our clinic for free on the date we mentioned.",
    avatar: "M",
    facebookId: "Viji Karan",
    rating: 5,
    createdAt: new Date(),
  },
  {
    id: 2,
    name: "Rishanu",
    title: "Owner ",
    company: "Studio Bright Focus",
    content:
      "In our studio, he is the best photo editor and a good person who can complete work within the promised time.",
    avatar: "R",
    facebookId: "Rishanu Rishanu",
    rating: 5,
    createdAt: new Date(),
  },
];

interface NewReview {
  name: string;
  title: string;
  company: string;
  content: string;
  facebookId: string;
  rating: number;
}

// Helper function to get initials from name
function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
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

  const { data: experiences, isLoading: experiencesLoading, error: experiencesError } = useQuery<Experience[]>({
    queryKey: ["/api/experiences"],
  });

  const { data: testimonials, isLoading: testimonialsLoading, error: testimonialsError } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  // Effective data with local fallbacks
  const effectiveExperiences = (experiences && experiences.length > 0) ? experiences : localExperiences;
  const effectiveTestimonials = (testimonials && testimonials.length > 0) ? testimonials : localTestimonials;

  // Create review mutation
  const createReviewMutation = useMutation({
    mutationFn: async (reviewData: NewReview) => {
      const response = await apiRequest('POST', '/api/testimonials', reviewData);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Your review has been submitted successfully!',
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
      
      // Invalidate and refetch testimonials
      queryClient.invalidateQueries({ queryKey: ['/api/testimonials'] });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to submit review. Please try again.',
        variant: 'destructive',
      });
    }
  });

  const handleSubmitReview = () => {
    if (!newReview.name || !newReview.content) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }
    createReviewMutation.mutate(newReview);
  };

  if (experiencesLoading || testimonialsLoading) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center min-h-[400px]">
            <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
          </div>
        </div>
      </section>
    );
  }

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
            {effectiveExperiences?.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-4 sm:p-6 mb-4 sm:mb-6" hover>
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center shadow-lg">
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col">
                        <div className="mb-4">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                            {experience.title}
                          </h3>
                          <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm sm:text-base">
                            {experience.company}
                          </p>
                          <div className="flex items-center flex-wrap gap-2 mt-1">
                            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                              {experience.startDate} - {experience.endDate || "Present"}
                            </p>
                            {experience.current === 1 && (
                              <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                            {experience.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {Array.isArray(experience.technologies) ? 
                              experience.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-700 dark:text-indigo-300 rounded-full text-xs sm:text-sm"
                                >
                                  {tech}
                                </span>
                              )) : null
                            }
                          </div>
                        </div>
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
            motivation <span className="gradient-text"> & review</span>
            </h2>
       
          </motion.div>

          {/* Horizontal Scrolling Testimonials */}
          <div className="overflow-x-auto horizontal-scroll pb-6">
            <div className="flex space-x-6 w-max px-1">
              {effectiveTestimonials?.map((testimonial, index) => (
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
                        <span className="text-white font-bold text-xl">
                          {getInitials(testimonial.name)}
                        </span>
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
          {testimonials && testimonials.length > 1 && (
            <div className="flex justify-center mt-4">
              <div className="flex items-center space-x-2 text-gray-400 dark:text-gray-600 text-sm">
                <span>← Scroll to see more reviews →</span>
              </div>
            </div>
          )}

  
        </div>
      </div>
    </section>
  );
}