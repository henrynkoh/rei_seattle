'use client';

import { useState, useEffect } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, BookmarkIcon, MagnifyingGlassIcon, SunIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid';

// Demo content for the book reader
const demoContent = `
# Chapter 1: Introduction

In the realm of cognitive psychology, few concepts have been as influential as the distinction between automatic and controlled processes. This dichotomy forms the foundation of many theories about how the human mind operates, and it has far-reaching implications for our understanding of decision-making, learning, and behavior.

## The Two Systems

The human mind can be conceptualized as operating through two distinct systems:

**System 1**: Fast, automatic, intuitive, and largely unconscious. It requires little effort and operates quickly with no sense of voluntary control.

**System 2**: Slow, effortful, deliberate, and conscious. It allocates attention to effortful mental activities and is associated with subjective experiences of agency, choice, and concentration.

These two systems interact continually as we navigate our daily lives, with System 1 generating impressions, intuitions, and feelings that System 2 may endorse, reject, or modify through more deliberate thinking.

## Heuristics and Biases

One of the most intriguing aspects of this dual-process model is how it explains the systematic errors we make in judgment and decision-making. Because System 1 operates automatically and can't be turned off, it sometimes leads us astray through various cognitive biases and heuristics:

1. **Availability heuristic**: Judging frequency or probability by the ease with which examples come to mind.
2. **Anchoring effect**: The tendency to rely too heavily on the first piece of information encountered.
3. **Framing effect**: How choices are presented significantly influences the decisions we make.
4. **Confirmation bias**: The tendency to search for and favor information that confirms our preexisting beliefs.

Understanding these biases doesn't make us immune to them, but awareness can help us recognize situations where our intuitive judgments might be leading us astray.

## Practical Implications

The interplay between these two systems has profound implications for various domains:

- **Education**: How we learn new skills and when they become automatic
- **Economics**: Why people make seemingly irrational financial decisions
- **Politics**: How messaging and framing influence public opinion
- **Personal Development**: Developing habits and breaking undesired automatic responses

By understanding the strengths and limitations of both systems, we can design environments and strategies that leverage their capabilities while mitigating their weaknesses.
`;

interface PageParams {
  params: {
    slug: string;
  };
}

export default function ReaderPage({ params }: PageParams) {
  const { slug } = params;
  const [fontSize, setFontSize] = useState(16);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [bookData, setBookData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // Simulate fetching book data
  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        // In a real app, we would fetch the specific book by slug
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data for the demo
        setBookData({
          title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
          author: 'Demo Author',
          content: demoContent
        });
      } catch (error) {
        console.error('Error fetching book:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBook();
  }, [slug]);
  
  const toggleFontSize = (amount: number) => {
    setFontSize(prev => Math.max(12, Math.min(24, prev + amount)));
  };
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Reader Header */}
      <header className="bg-white border-b border-secondary-200 py-3 px-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-secondary-600 hover:text-primary-600">
            <ArrowLeftIcon className="h-6 w-6" />
          </a>
          <h1 className="text-lg font-medium text-secondary-900 truncate">{bookData?.title}</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            className="text-secondary-600 hover:text-primary-600 p-2"
            onClick={() => toggleFontSize(-1)}
          >
            <span className="text-sm font-medium">A-</span>
          </button>
          <button 
            className="text-secondary-600 hover:text-primary-600 p-2"
            onClick={() => toggleFontSize(1)}
          >
            <span className="text-sm font-medium">A+</span>
          </button>
          <button className="text-secondary-600 hover:text-primary-600 p-2">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
          <button className="text-secondary-600 hover:text-primary-600 p-2">
            <SunIcon className="h-5 w-5" />
          </button>
          <button 
            className="text-secondary-600 hover:text-primary-600 p-2"
            onClick={() => setIsBookmarked(!isBookmarked)}
          >
            {isBookmarked ? (
              <BookmarkSolidIcon className="h-5 w-5 text-primary-600" />
            ) : (
              <BookmarkIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>
      
      {/* Reader Content */}
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div 
          className="bg-white rounded-lg shadow-sm p-8 prose prose-secondary max-w-none"
          style={{ fontSize: `${fontSize}px` }}
        >
          <div dangerouslySetInnerHTML={{ __html: bookData?.content.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\# (.*?)$/gm, '<h1>$1</h1>').replace(/\## (.*?)$/gm, '<h2>$1</h2>') }} />
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button className="btn-secondary flex items-center">
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Previous Chapter
          </button>
          <button className="btn-primary flex items-center">
            Next Chapter
            <ArrowRightIcon className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
} 