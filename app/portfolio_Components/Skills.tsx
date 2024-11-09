import Image from "next/image"

export default function SkillsComponent() {
  const skills = [
    { name: "Javascript", icon: "/placeholder.svg" },
    { name: "Typescript", icon: "/placeholder.svg" },
    { name: "React", icon: "/placeholder.svg" },
    { name: "Next.js", icon: "/placeholder.svg" },
    { name: "Node.js", icon: "/placeholder.svg" },
    { name: "Express.js", icon: "/placeholder.svg" },
    { name: "Nest.js", icon: "/placeholder.svg" },
    { name: "Socket.io", icon: "/placeholder.svg" },
    { name: "PostgreSQL", icon: "/placeholder.svg" },
    { name: "MongoDB", icon: "/placeholder.svg" },
    { name: "Sass/Scss", icon: "/placeholder.svg" },
    { name: "Tailwindcss", icon: "/placeholder.svg" },
    { name: "Figma", icon: "/placeholder.svg" },
    { name: "Cypress", icon: "/placeholder.svg" },
    { name: "Storybook", icon: "/placeholder.svg" },
    { name: "Git", icon: "/placeholder.svg" },
  ]

  return (
    <section className="py-12 bg-[#0a0a0a]" id="skills">
      <div className="container mx-auto px-4">
        <div className="inline-block mb-8 px-4 py-1.5 bg-gray-800 rounded-full text-sm text-white">
          Skills
        </div>
        <h2 className="text-2xl font-bold text-white mb-12">
          The skills, tools and technologies I am really good at:
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 md:gap-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div className="relative w-16 h-16 flex items-center justify-center">
                <Image
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <span className="text-gray-400 text-sm text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}