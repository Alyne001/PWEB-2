import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow bg-white">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        <Link href={`/post/${post.id}`} className="text-blue-600 hover:text-blue-800 transition-colors">
          {post.title}
        </Link>
      </h2>
      <p className="text-gray-600">{post.body.substring(0, 100)}...</p>
    </div>
  );
}