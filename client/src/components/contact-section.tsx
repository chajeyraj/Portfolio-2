import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GlassCard } from "./ui/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Copy, Check } from "lucide-react";
import { insertContactSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContact } from "@shared/schema";

export function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      projectType: "",
      budgetRange: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("chanaka@example.com");
      setEmailCopied(true);
      toast({
        title: "Email copied to clipboard!",
        description: "chanaka@example.com",
      });
      setTimeout(() => setEmailCopied(false), 3000);
    } catch (error) {
      toast({
        title: "Failed to copy email",
        description: "Please copy the email manually: chanaka@example.com",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Do you want to start a project together? Let's collaborate and create something amazing!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">
                          First Name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="John"
                            className="glass-effect border-0 focus:ring-2 focus:ring-indigo-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">
                          Last Name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Doe"
                            className="glass-effect border-0 focus:ring-2 focus:ring-indigo-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">
                        Email *
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="john@example.com"
                          className="glass-effect border-0 focus:ring-2 focus:ring-indigo-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">
                        Project Type
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="glass-effect border-0 focus:ring-2 focus:ring-indigo-500">
                            <SelectValue placeholder="Select a project type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="web">Web Application</SelectItem>
                          <SelectItem value="mobile">Mobile Application</SelectItem>
                          <SelectItem value="aiml">AI/ML Solution</SelectItem>
                          <SelectItem value="consulting">Consulting</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budgetRange"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">
                        Budget Range
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="glass-effect border-0 focus:ring-2 focus:ring-indigo-500">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k+">$50,000+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">
                        Message *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={5}
                          placeholder="Tell me about your project..."
                          className="glass-effect border-0 focus:ring-2 focus:ring-indigo-500 resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="flex-1 gradient-bg text-white hover:shadow-xl transition-all duration-300"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                  
                  <Button
                    type="button"
                    variant="outline"
                    onClick={copyEmail}
                    className="flex-1 glass-effect border-0 hover:glass-effect-strong transition-all duration-300"
                  >
                    {emailCopied ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Email Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy My Email
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </GlassCard>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <GlassCard className="p-6 text-center" hover>
            <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
            <p className="text-gray-600 dark:text-gray-400">chanaka@example.com</p>
          </GlassCard>

          <GlassCard className="p-6 text-center" hover>
            <div className="w-12 h-12 gradient-bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
            <p className="text-gray-600 dark:text-gray-400">+94 76 XXX XXXX</p>
          </GlassCard>

          <GlassCard className="p-6 text-center" hover>
            <div className="w-12 h-12 gradient-bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
            <p className="text-gray-600 dark:text-gray-400">Colombo, Sri Lanka</p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
