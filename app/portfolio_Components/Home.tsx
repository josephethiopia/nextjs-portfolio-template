"use client"
import { Button } from "@/components/ui/button"
import { MapPin, Sun } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomeComponent() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" id="home">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            {'<SS />'}
          </Link>
          <div className="flex items-center gap-8">
            <Link href="#about" className="text-sm hover:text-gray-300">
              About
            </Link>
            <Link href="#work" className="text-sm hover:text-gray-300">
              Work
            </Link>
            <Link href="#testimonials" className="text-sm hover:text-gray-300">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm hover:text-gray-300">
              Contact
            </Link>
            <Button variant="ghost" size="icon" className="text-gray-300">
              <Sun className="h-5 w-5" />
            </Button>
            <Button className="bg-white text-black hover:bg-gray-200">
              Download CV
            </Button>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold">
              Hi, I&apos;m Sagar{" "}
              <span className="inline-block animate-wave">👋</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              I&apos;m a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing)
              exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even
              though I have been creating web applications for over 7 years, I still love it as if it was something new.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-5 w-5" />
                Ahmedabad, India
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="h-2 w-2 bg-green-500 rounded-full" />
                Available for new projects
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="text-white border-gray-700">
                GitHub
              </Button>
              <Button variant="outline" className="text-white border-gray-700">
                Twitter
              </Button>
              <Button variant="outline" className="text-white border-gray-700">
                Dribbble
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gray-800 rounded-lg transform translate-x-4 translate-y-4" />
              <Image
                alt="Profile photo"
                className="relative z-10 rounded-lg object-cover w-full h-full"
                src="/placeholder.svg"
                width={400}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </main>
      <style jsx global>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-15deg); }
          75% { transform: rotate(15deg); }
        }
        .animate-wave {
          animation: wave 1.5s infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
    </div>
  )
}