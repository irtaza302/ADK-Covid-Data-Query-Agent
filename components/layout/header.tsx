import Link from "next/link";

export function Header() {
  return (
    <header className="border-b py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link 
          href="/" 
          className="text-xl font-bold flex items-center gap-2"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="h-6 w-6"
          >
            <path d="M12 2a5 5 0 0 0-5 5v2a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5Z"></path>
            <path d="M2 12a10 10 0 0 0 20 0"></path>
          </svg>
          COVID-19 Data Assistant
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/data-sources" className="hover:underline">Data Sources</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 