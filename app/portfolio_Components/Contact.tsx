'use client'

import { Button } from "@/components/ui/button"
import { Copy, Github, Mail, Phone, Twitter } from "lucide-react"
import { useState } from "react"

export default function ContactComponent() {
  const [copySuccess, setCopySuccess] = useState<string | null>(null)

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopySuccess(type)
      setTimeout(() => setCopySuccess(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <section className="py-12 bg-[#0a0a0a]" id="contact">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block mb-8 px-4 py-1.5 bg-gray-800 rounded-full text-sm text-white">
          Get in touch
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">
          What&apos;s next? Feel free to reach out to me if you are looking
          <br className="hidden md:block" /> for a developer, have a query, or simply want to connect.
        </h2>
        
        <div className="max-w-2xl mx-auto space-y-6 mt-12">
          <div className="flex items-center justify-center gap-4">
            <Mail className="w-6 h-6 text-gray-400" />
            <a
              href="mailto:reachsagarshah@gmail.com"
              className="text-xl md:text-2xl text-white hover:text-gray-300 transition-colors"
            >
              reachsagarshah@gmail.com
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
              onClick={() => handleCopy('reachsagarshah@gmail.com', 'email')}
              aria-label="Copy email address"
            >
              <Copy className="w-5 h-5" />
            </Button>
            {copySuccess === 'email' && (
              <span className="absolute mt-8 text-sm text-green-500">Copied!</span>
            )}
          </div>

          <div className="flex items-center justify-center gap-4">
            <Phone className="w-6 h-6 text-gray-400" />
            <a
              href="tel:+918980500565"
              className="text-xl md:text-2xl text-white hover:text-gray-300 transition-colors"
            >
              +91 8980500565
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
              onClick={() => handleCopy('+918980500565', 'phone')}
              aria-label="Copy phone number"
            >
              <Copy className="w-5 h-5" />
            </Button>
            {copySuccess === 'phone' && (
              <span className="absolute mt-8 text-sm text-green-500">Copied!</span>
            )}
          </div>
        </div>

        <div className="mt-12">
          <p className="text-gray-400 mb-4">You may also find me on these platforms!</p>
          <div className="flex justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
              asChild
            >
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                <Twitter className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}