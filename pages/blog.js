import '@/app/globals.css';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Calendar,
    User,
    Tag,
    Clock,
    ArrowRight,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Mock Data for Blog Posts (Replace with your actual data source)
const blogPosts = [
    {
        id: '1',
        title: 'The Future of Web Development',
        summary: 'Explore the latest trends and technologies shaping the future of web development.',
        date: '2024-07-28',
        author: 'Jane Doe',
        tags: ['Web Development', 'Technology', 'Future'],
        readingTime: 8, // in minutes
        imageUrl: 'https://placehold.co/800x400/EEE/31343C', // Replace with actual image URL
        content: `
## The Future of Web Development

Web development is a rapidly evolving field, with new technologies and trends emerging all the time. In this article, we'll explore some of the most exciting developments on the horizon.

### Key Trends

* **Serverless Architecture:** Serverless computing allows developers to build and run applications without managing servers.  This can significantly reduce costs and complexity.
* **Progressive Web Apps (PWAs):** PWAs offer a hybrid approach, combining the best of web and mobile apps.  They load quickly, work offline, and can be installed on users' devices.
* **AI-Powered Development:** Artificial intelligence is starting to play a role in code generation, testing, and debugging, making the development process more efficient.
* **WebAssembly:** This technology allows developers to run languages like C++ and Rust in the browser, opening up new possibilities for performance-intensive web applications.
* **Low-Code/No-Code Platforms:** These platforms are making web development more accessible to non-programmers, enabling faster development cycles for certain types of applications.

### The Impact

These trends are transforming the way we build and experience the web.  We can expect to see:

* Faster loading times
* More interactive and engaging experiences
* Increased accessibility across devices
* More powerful and complex web applications

The future of web development is bright, and it's an exciting time to be a part of this dynamic field.
        `,
    },
    {
        id: '2',
        title: 'Mastering React Hooks',
        summary: 'A comprehensive guide to understanding and effectively using React Hooks.',
        date: '2024-07-25',
        author: 'John Smith',
        tags: ['React', 'Hooks', 'Frontend'],
        readingTime: 12,
        imageUrl: 'https://placehold.co/800x400/EEE/31343C', // Replace with actual image URL
        content: `
## Mastering React Hooks

React Hooks are a powerful feature that allows you to use state and other React features in functional components.  In this guide, we'll dive deep into how to use them effectively.

### What are Hooks?

Before Hooks, stateful logic could only be used within class components.  Hooks change that, letting you "hook into" React features from functional components.

### Common Hooks

* **useState:** For managing state within a component.
* **useEffect:** For performing side effects (like fetching data or setting up subscriptions).
* **useContext:** For consuming values from a React context.
* **useRef**: For accessing DOM nodes.
* **useMemo:** For memoizing expensive calculations.
* **useCallback:** For memoizing functions.

### Best Practices

* **Follow the Rules of Hooks:** Only call Hooks at the top level of your functional components or custom Hooks.  Don't call them inside loops, conditions, or nested functions.
* **Use the Dependency Array Wisely:** In useEffect, the dependency array determines when the effect runs.  An empty array means it runs only once on mount.  Include variables that the effect depends on to ensure it runs correctly.
* **Keep Your Components Clean:** Hooks help you organize your component logic, but it's still important to keep your components focused and avoid unnecessary complexity.

By mastering React Hooks, you can write cleaner, more efficient, and more maintainable React code.
        `,
    },
    {
        id: '3',
        title: 'Building Accessible Websites',
        summary: 'Learn how to create websites that are accessible to everyone, including users with disabilities.',
        date: '2024-07-20',
        author: 'Alice Johnson',
        tags: ['Accessibility', 'Web Development', 'Best Practices'],
        readingTime: 10,
        imageUrl: 'https://placehold.co/800x400/EEE/31343C',  // Replace
        content: `
## Building Accessible Websites

Web accessibility is the practice of making websites usable by as many people as possible, including those with disabilities.  It's not just a nice-to-have; it's an ethical and often legal requirement.

### Why Accessibility Matters

* **Inclusivity:** Everyone deserves access to information and services on the web.
* **Legal Requirements:** Many countries have laws that require websites to be accessible (e.g., ADA in the US, WCAG).
* **Business Benefits:** Accessible websites can reach a wider audience and improve SEO.

### Key Principles (POUR)

The Web Content Accessibility Guidelines (WCAG) are the international standard for web accessibility.  They are based on four principles:

* **Perceivable:** Users must be able to perceive the information being presented (e.g., through alternative text for images, captions for videos).
* **Operable:** Users must be able to operate the interface (e.g., using a keyboard, voice input).
* **Understandable:** The content and interface must be understandable to users.
* **Robust:** The content must be robust enough that it can be interpreted reliably by a wide range of user agents, including assistive technologies.

### Practical Tips

* **Use semantic HTML:** Use appropriate HTML elements for their purpose (e.g., \`<nav>\`, \`<article>\`, \`<h1>\`-\`<h6>\`).
* **Provide alternative text for images:** Use the \`alt\` attribute to describe the content of images for screen reader users.
* **Ensure sufficient color contrast:** Make sure there is enough contrast between text and background colors.
* **Make forms accessible:** Use labels, fieldsets, and legends correctly.
* **Provide keyboard navigation:** Ensure that users can navigate and interact with your website using only a keyboard.

By following these guidelines, you can create websites that are accessible to everyone and provide a better experience for all users.
        `,
    },
];

// Component to display a single blog post preview
const PostPreview = ({ post, onSelectPost }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer" // Added cursor-pointer
            onClick={() => onSelectPost(post.id)} // Call the onSelectPost when clicked
        >
            <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-4">
                <h2 className="text-2xl font-Ovo font-semibold text-white">{post.title}</h2>
                <p className="text-gray-300 leading-relaxed font-Outfit">{post.summary}</p>
                <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-Outfit">
                            {tag}
                        </Badge>
                    ))}
                </div>
                <div className="flex items-center text-gray-400 text-sm font-Outfit">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readingTime} min read</span>
                </div>
                <Button variant="outline" className="text-purple-200 hover:text-purple-100 hover:bg-purple-700/90 border-purple-800 font-Outfit">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
            </div>
        </motion.div>
    );
};

// Component to display a single blog post
const PostPage = ({ post, onBack }) => {
    // Function to parse markdown (basic implementation for demonstration)
    const parseMarkdown = (markdown) => {
        const paragraphs = markdown.split('\n\n');
        return paragraphs.map((p, index) => {
            if (p.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold my-4">{p.slice(2)}</h1>;
            } else if (p.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-semibold my-3">{p.slice(3)}</h2>;
            } else if (p.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-medium my-2">{p.slice(4)}</h3>;
            } else {
                return <p key={index} className="text-gray-300 leading-relaxed font-Outfit">{p}</p>;
            }
        });
    };
    return (
        <div className="bg-darkTheme text-white min-h-screen">
            <header className="bg-gradient-to-br from-gray-900 via-purple-900 to-black py-16 px-4 sm:px-6 lg:px-8 text-center relative">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-Ovo font-bold tracking-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center mt-4 text-gray-400 text-lg font-Outfit">
                        <User className="w-5 h-5 mr-1" />
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <Calendar className="w-5 h-5 mr-1" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <Clock className="w-5 h-5 mr-1" />
                        <span>{post.readingTime} min read</span>
                    </div>
                </motion.div>
                <button
                    onClick={onBack}
                    className="absolute top-4 left-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 z-10 font-Outfit" // Added onBack prop
                >
                    <ArrowRight className="w-6 h-6 rotate-180" />
                </button>
            </header>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="prose prose-invert max-w-3xl mx-auto space-y-6" // Use prose for better typography
                >
                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full rounded-lg shadow-lg border border-gray-700"
                    />
                    {parseMarkdown(post.content)}
                </motion.div>
            </main>
        </div>
    );
};

const BlogPage = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const handlePostSelect = (postId) => {
        setSelectedPost(postId);
    };

    const handleBackToBlog = () => {
        setSelectedPost(null);
    }

    if (selectedPost) {
        const post = blogPosts.find(p => p.id === selectedPost);
        return <PostPage post={post} onBack={handleBackToBlog} />; // Pass onBack prop
    }
    return (
        <>
            <Navbar />
            <div className="bg-darkTheme text-white min-h-screen">
                <header className="bg-gradient-to-br from-gray-900 via-purple-900 to-black py-16 px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-Ovo font-bold tracking-tight">
                            Our Blog
                        </h1>
                        <p className="mt-4 text-lg sm:text-xl text-gray-300 font-Outfit">
                            Insights and articles on web development, design, and technology.
                        </p>
                    </motion.div>
                </header>

                <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <PostPreview
                                key={post.id}
                                post={post}
                                onSelectPost={handlePostSelect} // Pass the handler
                            />
                        ))}
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default BlogPage;
