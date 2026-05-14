'use client';

import { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center">Carregando...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Bem-vindo ao Meu Blog</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
