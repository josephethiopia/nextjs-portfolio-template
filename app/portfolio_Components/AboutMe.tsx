import Link from "next/link"
import Image from "next/image"

export default function AboutMeComponent() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" id="about">
      <main className="container mx-auto px-4 py-12">
        <div className="inline-block mb-8 px-4 py-1.5 bg-gray-800 rounded-full text-sm">
          About me
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="relative aspect-[3/4] w-full max-w-md">
              <div className="absolute inset-0 bg-gray-800 rounded-lg transform -translate-x-4 translate-y-4" />
              <Image
                alt="Casual photo in garden"
                className="relative z-10 rounded-lg object-cover w-full h-full"
                src="/placeholder.svg"
                width={400}
                height={533}
                priority
              />
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Curious about me? Here you have it:</h1>
            <p className="text-gray-400">
              I&apos;m a passionate, <span className="underline">self-proclaimed designer</span> who specializes in full stack
              development (React.js & Node.js). I am enthusiastic about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code
              matters to me.
            </p>
            <p className="text-gray-400">
              I began my journey as a web developer in 2015, and since then, I&apos;ve continued to grow and evolve as a
              developer, taking on new challenges and learning the latest technologies along the way. Now, in my eighth year
              of web development, I&apos;m building cutting-edge web applications using modern technologies such as Next.js,
              TypeScript, Nest.js, Tailwindcss, Supabase and much more.
            </p>
            <p className="text-gray-400">
              I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to
              development.
            </p>
            <p className="text-gray-400">
              When I&apos;m not in full-on developer mode, you can find me hovering around on twitter or on indie hacker,
              witnessing the journey of early startups or enjoying some free time. You can follow me on{" "}
              <Link href="https://twitter.com" className="text-white underline">
                Twitter
              </Link>{" "}
              where I share tech-related bites and build in public, or you can follow me on{" "}
              <Link href="https://github.com" className="text-white underline">
                GitHub
              </Link>
              .
            </p>
            <div className="space-y-4">
              <p className="text-xl font-semibold">Finally, some quick bits about me:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>B.E. in Computer Engineering</li>
                  <li>Full time freelancer</li>
                </ul>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Avid learner</li>
                  <li>Aspiring indie hacker</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-400">
              One last thing, I&apos;m available for freelance work, so feel free to reach out and say hello! I promise I
              don&apos;t bite 😊
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}