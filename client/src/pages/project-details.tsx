import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useRoute } from "wouter";
import { AnimatedBackground } from "@/components/animated-background";
import { findProjectBySlug, localProjects, getSlug } from "@/data/projects";

function useQueryParams() {
  const [params, setParams] = useState<Record<string, string>>({});
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const entries: Record<string, string> = {};
    sp.forEach((v, k) => (entries[k] = v));
    setParams(entries);
  }, []);
  return params;
}

export default function ProjectDetails() {
  const qp = useQueryParams();
  const [, navigate] = useLocation();
  const [match, params] = useRoute("/project/:slug");

  const data = useMemo(() => {
    // Try sessionStorage first to keep URL short
    let stored: any = null;
    try {
      const raw = sessionStorage.getItem("selectedProject");
      if (raw) stored = JSON.parse(raw);
    } catch {}

    if (stored) {
      const title = stored.title || "Project";
      const desc = stored.description || "";
      const image = stored.image || "";
      const tech = Array.isArray(stored.technologies) ? stored.technologies : [];
      const live = stored.liveUrl || "";
      const code = stored.githubUrl || "";
      const category = stored.category || "";
      return { title, desc, image, tech, live, code, category };
    }

    // Slug-based lookup if present
    if (match && params?.slug) {
      const proj = findProjectBySlug(params.slug);
      if (proj) {
        return {
          title: proj.title,
          desc: proj.description,
          image: proj.image,
          tech: Array.isArray(proj.technologies) ? proj.technologies : [],
          live: proj.liveUrl || "",
          code: proj.githubUrl || "",
          category: proj.category || "",
        };
      }
    }

    // Fallback to query params
    const title = qp.title || "Project";
    const desc = qp.desc || "";
    const image = qp.image || "";
    const tech = (qp.tech ? qp.tech.split(",") : []).filter(Boolean);
    const live = qp.live || "";
    const code = qp.code || "";
    const category = qp.category || "";
    return { title, desc, image, tech, live, code, category };
  }, [qp, match, params?.slug]);

  // Determine current slug and index for navigation dots
  const currentSlug = useMemo(() => {
    if (match && params?.slug) return params.slug as string;
    // derive from sessionStorage-loaded data title
    if (data?.title) return getSlug(data.title);
    return "";
  }, [match, params?.slug, data?.title]);

  const currentIndex = useMemo(() => {
    const idx = localProjects.findIndex((p) => getSlug(p.title) === currentSlug);
    return idx;
  }, [currentSlug]);

  // Handle not-found case
  const isEmpty = (match && params?.slug) ? (data.title === undefined || data.title === null || data.title === "") : (!data.title && !data.desc && !data.image);

  return (
    <section className="min-h-screen py-24 px-6 relative">

       {/* Top image-circle navigation */}
      {localProjects.length > 1 && (
        <div className="mt-6 mb-4 flex items-center justify-center gap-4 flex-wrap relative z-10">
          {localProjects.map((p, i) => {
            const slug = getSlug(p.title);
            const active = i === currentIndex;
            return (
              <button
                key={slug}
                aria-label={`Go to ${p.title}`}
                title={p.title}
                onClick={() => {
                  try { sessionStorage.setItem("selectedProject", JSON.stringify(p)); } catch {}
                  navigate(`/project/${slug}`);
                }}
                className={`relative rounded-full overflow-hidden w-12 h-12 border transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  active ? "ring-2 ring-indigo-500 border-indigo-500" : "border-gray-300 dark:border-gray-700"
                }`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>
      )}
      <AnimatedBackground />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-6">
          <button
            onClick={() => {
              window.location.href = "/#projects";
            }}
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
          </button>
        </div>

        

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {isEmpty ? (
            <GlassCard className="p-8">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Project not found</h1>
              <p className="text-gray-600 dark:text-gray-400">We couldn't find this project. Please go back and try again.</p>
            </GlassCard>
          ) : (
            <>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {data.title}
          </h1>
          {data.category && (
            <p className="text-gray-600 dark:text-gray-400 mb-6">Category: {data.category}</p>
          )}

          {data.image && (
            <div className="mb-8 overflow-hidden rounded-2xl">
              <img
                src={data.image}
                alt={data.title}
                className="w-full max-h-[520px] object-cover"
              />
            </div>
          )}

          <GlassCard className="p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Description
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {data.desc}
            </p>
          </GlassCard>

          {data.tech.length > 0 && (
            <GlassCard className="p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.tech.map((t: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>
          )}

          <div className="flex flex-wrap gap-4">
            {data.live && (
              <a
                href={data.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Live Site</span>
              </a>
            )}
            {data.code && (
              <a
                href={data.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700"
              >
                <Github className="w-4 h-4" />
                <span>View Code</span>
              </a>
            )}
          </div>

         
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
