"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Insurance Claim Management System",
    description:
      "An automobile insurance claim management system designed for insurance agents to improve the claim reporting and information submission process. The system helps reduce delays and missing information caused by communication through LINE by allowing staff to report incidents, upload documents and images, generate case reference numbers, track claim status, and manage customer information in one place. It also helps staff and managers monitor workflows and coordinate tasks more efficiently.",
    image: "/Project-3.png",
    link: "/Claim",
  },
  {
    title: "HappyPet Club Application",
    description:
      "A pet care application designed to help pet owners manage pet information and conveniently access pet care services in one place. The application focuses on providing a simple and user-friendly experience, allowing users to manage appointments, pet profiles, search for animal hospitals and pet-related services, and receive notifications for important pet care tasks such as vaccination schedules and medication reminders.",
    image: "/02 HappyPet Club.png",
    link: "/HappyPet",
  },
  {
    title: "Dental Appointment App (Flutter)",
    description:
      "A case study project developed to practice mobile application design and development using Flutter. The application allows users to search, book, and manage dental appointments conveniently through a mobile device, reducing the need for phone calls and long waiting times at clinics.Users can select dentists,",
    image: "/Dental-app.png",
    link: "/DentalAppointment",
  },
  {
    title: "WeChat (Intern Project)",
    description:
      "A communication and online messaging application that enables users to connect with others quickly and conveniently. It supports text messaging, image sharing, video sharing, document transfers, and group chats. The platform also provides features that facilitate communication for both everyday use and professional",
    image: "/InternProject_WChat.png",
    link: "/WeChat",
  },
  {
    title: "Feature : Sakit Brain Brain Training Application(Intern Project)",
    description:
      "Responsible for designing and improving features within the brain training application to enhance user engagement and overall user experience. Contributed to the website redesign by creating a more modern and user-friendly interface, while also producing promotional materials and marketing visuals to support",
    image: "/InternProject_sakit.png",
    link: "/SakitBrain",
  },
  {
    title: "DummyTales Ads (Intern Project)",
    description:
      "Designed promotional advertisements and marketing materials for DummyTales, including social media banners, digital campaign visuals, and branding assets to increase user engagement and product awareness.",
    image: "/InternProject_DummyTales.png",
    link: "/DummyTales",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative max-w-6xl mx-auto px-6 py-32 text-white"
    >
      {/* Ambient Glow */}
      <div
        className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[500px] h-[500px]
          bg-purple-600/5 blur-[150px]
          rounded-full pointer-events-none
        "
      />

      {/* Heading */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-[1px] bg-purple-400" />

          <p
            className="
              uppercase tracking-[0.25em]
              text-xs font-semibold text-purple-400
            "
          >
            Selected Works
          </p>
        </div>

        <h2
          className="
            text-4xl md:text-5xl
            font-black tracking-tight
            bg-gradient-to-r from-white via-white to-white/70
            bg-clip-text text-transparent
          "
        >
          My Projects
        </h2>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <Link
  key={index}
  href={project.link || "#"}
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.99 }}
              className="
                group flex flex-col justify-between
                overflow-hidden rounded-[24px]

                border border-white/[0.06]

                bg-gradient-to-b
                from-white/[0.04]
                to-transparent

                backdrop-blur-xl

                hover:border-purple-500/40
                hover:bg-white/[0.06]

                transition-all duration-300

                shadow-[0_12px_40px_rgba(0,0,0,0.25)]

                cursor-pointer
              "
            >
              <div>
                {/* Image */}
                <div
                  className="
                    relative overflow-hidden
                    h-[220px] md:h-[260px]
                    bg-[#120a21]
                  "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      h-full w-full object-cover
                      transition duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-[#090414]
                      via-transparent
                      to-transparent
                      opacity-60
                    "
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 lg:p-8 min-h-[220px]">
                  {/* Title */}
                  <h3
                    className="
                      text-xl lg:text-2xl
                      font-bold mb-3 tracking-tight
                      group-hover:text-purple-300
                      transition
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      text-gray-400
                      leading-relaxed
                      text-sm
                      font-light
                      line-clamp-4
                    "
                  >
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom Button */}
              <div className="px-6 pb-6 lg:px-8 lg:pb-8">
                <div
                  className="
                    w-full inline-flex
                    items-center justify-center gap-1.5

                    rounded-xl

                    border border-purple-400/30

                    bg-gradient-to-r
                    from-purple-500
                    via-fuchsia-500
                    to-purple-600

                    py-2.5

                    text-xs font-semibold
                    tracking-wide
                    text-white

                    shadow-[0_10px_30px_rgba(168,85,247,0.35)]

                    group-hover:brightness-110

                    transition-all duration-300
                  "
                >
                  View Project

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="
                      w-4 h-4
                      transition-transform duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}

