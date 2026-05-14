'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => {
          setPost(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching post:', error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div className="text-center">Carregando...</div>;
  }

  if (!post) {
    return <div className="text-center">Post não encontrado.</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
}