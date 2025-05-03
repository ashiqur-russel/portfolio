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
    Divide,
} from 'lucide-react';

// Mock Data (Replace with your actual data source - could be a CMS, API, etc.)
const projectData = {
    title: 'Project Phoenix',
    subtitle: 'A Revolutionary Web Application',
    description:
        'Project Phoenix is a cutting-edge web application designed to streamline workflows and enhance productivity. Built with a focus on user experience, it offers a range of features, including collaborative document editing, real-time communication, and customizable dashboards.',
    technologies: ['React', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'WebSockets'],
    design: 'Modern, minimalist, and user-friendly interface with a focus on accessibility.',
    architecture: 'Microservices architecture with a RESTful API and real-time data synchronization.',
    primaryImage: 'https://placehold.co/1200x600/EEE/31343C', // Replace with actual image URL
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
    caseStudy: null, // Or provide a URL to a case study
};

const ProjectDetailsPage = () => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [autoRotate, setAutoRotate] = useState(true); // Enable auto-rotate
    const [rotateInterval, setRotateInterval] = useState(5000); // Rotate every 5 seconds (adjust as needed)
    const galleryIntervalRef = useRef(null);

    // Function to open the gallery
    const openGallery = (index) => {
        setSelectedImageIndex(index);
        setIsGalleryOpen(true);
    };

    // Function to close the gallery
    const closeGallery = () => {
        setIsGalleryOpen(false);
        setAutoRotate(true); // Re-enable auto-rotate when gallery is closed.
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
        <div className='text-4xl'>hello</div>
    );
};


export default ProjectDetailsPage;

