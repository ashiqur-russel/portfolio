import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Calendar, Clock, ArrowRight } from 'lucide-react';

const PostPreview = ({ post, onSelectPost }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode]);
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
        <h2 className="text-2xl font-Ovo font-semibold text-white">
          {post.title}
        </h2>
        <p className="text-gray-300 leading-relaxed font-Outfit">
          {post.summary}
        </p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
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
        <Button
          variant="outline"
          className="text-purple-200 hover:text-purple-100 hover:bg-purple-700/90 border-purple-800 font-Outfit"
        >
          Read More <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </motion.div>
  );
};

export default PostPreview;
