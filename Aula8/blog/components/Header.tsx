import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-blue-200 transition-colors">Meu Blog</Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-blue-200 transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-200 transition-colors">Sobre</Link></li>
          <li><Link href="/contact" className="hover:text-blue-200 transition-colors">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}