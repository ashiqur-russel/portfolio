import '@/app/globals.css';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowUpRight,
    Github,
    Link,
    Image,
    Layout,
    Code2,
    Layers,
    ChevronLeft,
    ChevronRight,
    X,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Mock Data 
const projectData = {
    title: 'Project title   ',
    subtitle: 'A Revolutionary Web Application',
    description:
        'Project Phoenix is a cutting-edge web application designed to streamline workflows and enhance productivity. Built with a focus on user experience, it offers a range of features, including collaborative document editing, real-time communication, and customizable dashboards.',
    technologies: ['React', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'WebSockets'],
    design: 'Modern, minimalist, and user-friendly interface with a focus on accessibility.',
    architecture: 'Microservices architecture with a RESTful API and real-time data synchronization.',
    primaryImage: 'https://placehold.co/1200x600/EEE/31343C',
    images: [
        'https://placehold.co/800x600/EEE/31343C',
        'https://placehold.co/800x600/EEE/31343C',
        'https://placehold.co/800x600/EEE/31343C',
        'https://placehold.co/800x600/EEE/31343C',
    ],
    links: [
        { name: 'Live Demo', url: 'https://example.com/phoenix' },
        { name: 'GitHub Repo', url: 'https://github.com/example/phoenix' },
    ],
    caseStudy: null,
};

const ProjectDetailsPage = () => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [autoRotate, setAutoRotate] = useState(true);
    const [rotateInterval, setRotateInterval] = useState(5000);
    const galleryIntervalRef = useRef(null);

    // Function to open the gallery
    const openGallery = (index) => {
        setSelectedImageIndex(index);
        setIsGalleryOpen(true);
    };

    // Function to close the gallery
    const closeGallery = () => {
        setIsGalleryOpen(false);
        setAutoRotate(true);
    };

    // Function to go to the next image
    const nextImage = useCallback(() => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % projectData.images.length);
    }, []);

    // Function to go to the previous image
    const prevImage = useCallback(() => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === 0 ? projectData.images.length - 1 : prevIndex - 1
        );
    }, []);

    // Set up auto-rotation when the gallery is open and autoRotate is true
    useEffect(() => {
        if (isGalleryOpen && autoRotate) {
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
    }, [isGalleryOpen, autoRotate, nextImage, rotateInterval]);

    // Keyboard navigation for gallery
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isGalleryOpen) return;
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
    }, [isGalleryOpen, prevImage, nextImage]);

    return (
        <div className="bg-darkTheme text-white min-h-screen">
            {/* Project Header */}
            <header className="bg-gradient-to-br from-gray-900 via-purple-900 to-black py-16 px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-Ovo font-bold tracking-tight">
                        {projectData.title}
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl text-gray-300 font-Outfit">
                        {projectData.subtitle}
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
                            <h2 className="text-3xl font-Ovo font-semibold">Project Overview</h2>
                            <p className="text-gray-300 leading-relaxed font-Outfit">
                                {projectData.description}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="rounded-lg overflow-hidden shadow-lg border border-gray-800 shadow-black"
                            onClick={() => openGallery(0)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={projectData.primaryImage}
                                alt={projectData.title}
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
                                {projectData.technologies.map((tech) => (
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

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-Ovo font-semibold">Design</h2>
                            <p className="text-gray-300 leading-relaxed font-Outfit">{projectData.design}</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-Ovo font-semibold">Architecture</h2>
                            <p className="text-gray-300 leading-relaxed font-Outfit">{projectData.architecture}</p>
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
                    <h2 className="text-3xl font-Ovo font-semibold mb-6">Explore the Project</h2>
                    <div className="flex flex-wrap gap-4">
                        {projectData.links.map((link) => (
                            <Button
                                key={link.name}
                                variant="outline"
                                className="bg-purple-800/80 text-purple-200 hover:bg-purple-700/90 hover:text-purple-100 border-purple-800 flex items-center gap-2 font-Outfit"
                                asChild
                            >
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    {link.name === 'Live Demo' && <Link className="w-4 h-4" />}
                                    {link.name === 'GitHub Repo' && <Github className="w-4 h-4" />}
                                    {link.name}
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </Button>
                        ))}
                    </div>
                </motion.div>

                {/* Image Gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-12"
                >
                    <h2 className="text-3xl font-Ovo font-semibold mb-6">Project Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {projectData.images.map((image, index) => (
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
            </main>

            {/* Image Gallery Modal */}
            <AnimatePresence>
                {isGalleryOpen && (
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
                                src={projectData.images[selectedImageIndex]}
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
                                    onChange={() => setAutoRotate((prev) => !prev)}
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



export default ProjectDetailsPage;

