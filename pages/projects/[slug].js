import '@/app/globals.css';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  Link as LucideLink,
  Image as LucideImage,
  Code2,
  Layers,
  ChevronLeft,
  ChevronRight,
  X,
  Home,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { workData } from '@/assets/assets';
import Link from 'next/link';

const ProjectDetailPage = ({ project }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [rotateInterval, setRotateInterval] = useState(5000);
  const galleryIntervalRef = useRef(null);

  const nextImage = useCallback(() => {
    if (project?.images?.length > 0) {
      setSelectedImageIndex(
        prevIndex => (prevIndex + 1) % project.images.length
      );
    }
  }, [project?.images]);

  const prevImage = useCallback(() => {
    if (project?.images?.length > 0) {
      setSelectedImageIndex(prevIndex =>
        prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
      );
    }
  }, [project?.images]);

  useEffect(() => {
    if (isGalleryOpen && autoRotate && project?.images?.length > 1) {
      galleryIntervalRef.current = setInterval(nextImage, rotateInterval);
    } else if (galleryIntervalRef.current) {
      clearInterval(galleryIntervalRef.current);
      galleryIntervalRef.current = null;
    }

    return () => {
      if (galleryIntervalRef.current) {
        clearInterval(galleryIntervalRef.current);
      }
    };
  }, [
    isGalleryOpen,
    autoRotate,
    nextImage,
    rotateInterval,
    project?.images?.length,
  ]);

  useEffect(() => {
    const handleKeyDown = e => {
      if (!isGalleryOpen || !project?.images) return;
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'Escape') {
        closeGallery();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGalleryOpen, prevImage, nextImage, project?.images]);

  // Early return after all hooks
  if (!project) {
    return (
      <div className="bg-darkTheme text-white min-h-screen flex items-center justify-center">
        Project not found
      </div>
    );
  }

  const openGallery = index => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setAutoRotate(true);
  };

  const primaryImage = project.primaryImage || project.bgImage;

  return (
    <div className="bg-darkTheme text-white min-h-screen">
      <header className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-black py-16 px-4 sm:px-6 lg:px-8 text-center">
        <Link
          href="/#work"
          className="absolute top-4 left-4 sm:top-6 sm:left-6"
        >
          <Button
            variant="outline"
            className="bg-transparent text-gray-300 hover:bg-gray-800/50 hover:text-white border-gray-700 flex items-center gap-2 font-Outfit"
          >
            <Home className="w-4 h-4" />
            Back to Projects
          </Button>
        </Link>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-Ovo font-bold tracking-tight">
            {project.title}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 font-Outfit">
            {project.summary || project.description.substring(0, 100) + '...'}
          </p>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-Ovo font-semibold">
                Project Overview
              </h2>
              <p className="text-gray-300 leading-relaxed font-Outfit">
                {project.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg border border-gray-800 shadow-black"
              onClick={() =>
                project.images && project.images.length > 0 && openGallery(0)
              }
              style={{
                cursor: project?.images?.length > 0 ? 'pointer' : 'default',
              }}
            >
              <img
                src={primaryImage}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-Ovo font-semibold">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack &&
                  project.techStack.map(tech => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-purple-800/80 text-purple-200 border-purple-800 font-Outfit"
                    >
                      {tech}
                    </Badge>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h2 className="text-3xl font-Ovo font-semibold mb-6">
            Explore the Project
          </h2>
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <Button
                variant="outline"
                className="bg-purple-800/80 text-purple-200 hover:bg-purple-700/90 hover:text-purple-100 border-purple-800 flex items-center gap-2 font-Outfit"
                asChild
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repo
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>
            )}
            {project.liveDemo && (
              <Button
                variant="outline"
                className="bg-purple-800/80 text-purple-200 hover:bg-purple-700/90 hover:text-purple-100 border-purple-800 flex items-center gap-2 font-Outfit"
                asChild
              >
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <LucideLink className="w-4 h-4" />
                  Live Demo
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </motion.div>

        {project?.images && project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h2 className="text-3xl font-Ovo font-semibold mb-6">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-lg border border-gray-800 cursor-pointer transition-transform duration-300 hover:scale-105 shadow-black"
                  onClick={() => openGallery(index)}
                >
                  <img
                    src={image}
                    alt={`Project Screenshot ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </main>

      <AnimatePresence>
        {isGalleryOpen && project?.images && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-4xl max-h-full">
              <button
                onClick={closeGallery}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.img
                src={project.images[selectedImageIndex]}
                alt={`Project Gallery ${selectedImageIndex + 1}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-xl border border-gray-700 shadow-black"
              />

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white rounded-full p-2 z-10 flex items-center gap-2 font-Outfit">
                <input
                  type="checkbox"
                  id="autoRotate"
                  checked={autoRotate}
                  onChange={() => setAutoRotate(prev => !prev)}
                  className="mr-1"
                />
                <label htmlFor="autoRotate">Auto Rotate</label>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = workData.map(project => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const project = workData.find(p => p.slug === slug);

  return {
    props: {
      project,
    },
  };
}

export default ProjectDetailPage;
