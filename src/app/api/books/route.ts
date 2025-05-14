import { NextResponse } from 'next/server';

// Sample book data
const books = [
  {
    id: '1',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    coverImage: '/images/thinking-fast-slow.jpg',
    slug: 'thinking-fast-slow',
    description: 'In this work, Kahneman presents two systems that drive the way we think and make choices, affecting our everyday lives.',
    categories: ['Psychology', 'Cognitive Science', 'Decision Making'],
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    coverImage: '/images/atomic-habits.jpg',
    slug: 'atomic-habits',
    description: 'An easy and proven way to build good habits and break bad ones, focusing on tiny changes that lead to remarkable results.',
    categories: ['Self-Help', 'Personal Development', 'Psychology'],
  },
  {
    id: '3',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    coverImage: '/images/psychology-of-money.jpg',
    slug: 'psychology-of-money',
    description: 'Timeless lessons on wealth, greed, and happiness, exploring how our relationship with money influences our financial decisions.',
    categories: ['Finance', 'Psychology', 'Economics'],
  },
  {
    id: '4',
    title: 'Deep Work',
    author: 'Cal Newport',
    coverImage: '/images/deep-work.jpg',
    slug: 'deep-work',
    description: 'Rules for focused success in a distracted world, teaching how to develop the ability to focus without distraction.',
    categories: ['Productivity', 'Self-Help', 'Business'],
  },
];

export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  return NextResponse.json({ books });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Here we'd typically validate the input and save to a database
    // For demo purposes, we'll just return the submitted data
    return NextResponse.json({ 
      message: 'Book submitted successfully', 
      book: body 
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ 
      error: 'Failed to process request' 
    }, { status: 400 });
  }
} 