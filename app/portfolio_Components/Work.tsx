import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WorkComponent() {
  const projects = [
    {
      title: "Wingie",
      description: "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
      image: "/placeholder.svg",
      technologies: [
        "React",
        "Typescript",
        "React Bootstrap",
        "Firebase",
        "Express.js",
        "PostgreSQL",
        "Styled Components",
        "Redux",
      ],
    },
    {
      title: "Fiskil",
      description: "A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.",
      image: "/placeholder.svg",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "Tailwindcss",
        "Material UI",
        "Redux Toolkit",
        "React Query",
        "Express.js",
        "PostgreSQL",
        "Firebase",
        "AWS Amplify",
        "Cypress",
        "Storybook",
      ],
    },
    {
      title: "Pepehousing",
      description: "A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
      image: "/placeholder.svg",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "Tailwindcss",
        "Redux Toolkit",
        "React Query",
        "Storybook",
      ],
    },
  ]

  return (
    <section className="py-12 bg-[#0a0a0a]" id="work">
      <div className="container mx-auto px-4">
        <div className="inline-block mb-8 px-4 py-1.5 bg-gray-800 rounded-full text-sm text-white">
          Work
        </div>
        <h2 className="text-2xl font-bold text-white mb-12">
          Some of the noteworthy projects I have built:
        </h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="grid md:grid-cols-2 gap-8 bg-gray-800/50 rounded-xl overflow-hidden"
            >
              <div className={`p-8 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <h3 className="text-xl font-semibold text-white mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="sr-only">Visit project</span>
                </Link>
              </div>
              <div className={`relative aspect-[4/3] ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title} project`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}