"use client";

import Link from "next/link";
import Image from "next/image";
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
      "A pet care application designed to help pet owners manage pet information and conveniently access pet care services in one place. The application focuses on providing a simple and user-friendly experience, allowing users to manage appointments, pet profiles, search for animal hospitals and pet-related services, and record pet care information easily. In addition, the app includes a community feature where users can share information and discuss pet-related topics through an intuitive and easy-to-use interface.",
    image: "/02 HappyPet Club.png",
    link: "/HappyPet",
  },
  {
    title: "Dental Appointment App (Flutter ) ",
    description:
      "A case study project developed to practice mobile application design and development using Flutter. The application allows users to search, book, and manage dental appointments conveniently through a mobile device, reducing the need for phone calls and long waiting times at clinics.Users can select dentists, appointment dates, and available time slots, while also receiving appointment reminders and viewing treatment history. The application was developed using Flutter for cross-platform mobile development and Firebase for database management and user authentication.",
    image: "/Dental-app.png",
    link: "/DentalAppointment",
  },
  {
    title: "WeChat (Intern Project)",
    description:
      "A communication and online messaging application that enables users to connect with others quickly and conveniently. It supports text messaging, image sharing, video sharing, document transfers, and group chats. The platform also provides features that facilitate communication for both everyday use and professional collaboration, helping users stay connected and exchange information efficiently.",
    image: "/InternProject_WChat.png",
    link: "/WeChat",
  },
  {
    title: "Feature : Sakit Brain Brain Training Application (Intern Project)",
    description:
      "Responsible for designing and improving features within the brain training application to enhance user engagement and overall user experience. Contributed to the website redesign by creating a more modern and user-friendly interface, while also producing promotional materials and marketing visuals to support application campaigns and strengthen the product's visual identity across multiple platforms.",
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
      {/* Background Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[500px] h-[500px]
        bg-purple-600/5 blur-[150px]
        rounded-full pointer-events-none"
      />

      {/* Heading */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-[1px] bg-purple-400" />

          <p
            className="uppercase tracking-[0.25em]
            text-xs font-semibold text-purple-400"
          >
            Selected Works
          </p>
        </div>

        <h2
          className="text-4xl md:text-5xl
          font-black tracking-tight
          bg-gradient-to-r from-white via-white to-white/70
          bg-clip-text text-transparent"
        >
          My Projects
        </h2>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{ y: -6 }}
            className="group flex flex-col justify-between
            overflow-hidden rounded-[24px]
            border border-white/[0.06]
            bg-gradient-to-b from-white/[0.03] to-transparent
            backdrop-blur-xl
            hover:border-purple-500/30
            hover:bg-white/[0.05]
            transition duration-300
            shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
          >
            <div>
              {/* Image */}
              <div
                className="relative overflow-hidden
  h-[220px] md:h-[260px]
  bg-[#120a21]"
              >
               <img
  src={project.image}
  alt={project.title}
  className="h-full w-full object-cover"
/>

                {/* Overlay */}
                <div
                  className="absolute inset-0
                  bg-gradient-to-t
                  from-[#090414]
                  via-transparent
                  to-transparent
                  opacity-60"
                />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                {/* Title */}
                <h3
                  className="text-xl lg:text-2xl
                  font-bold mb-3 tracking-tight
                  group-hover:text-purple-300 transition"
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-400
                  leading-relaxed text-sm
                  font-light line-clamp-4"
                >
                  {project.description}
                </p>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="px-6 pb-6 lg:px-8 lg:pb-8">
              {project.link ? (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={project.link}
                    className="w-full inline-flex
                    items-center justify-center gap-2
                    rounded-xl border border-white/[0.08]
                    bg-white/[0.02]
                    backdrop-blur-md
                    py-3 text-xs font-semibold
                    text-white tracking-wide
                    group-hover:bg-purple-600
                    group-hover:border-purple-500
                    transition duration-200 shadow-lg"
                  >
                    View Project

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-3.5 h-3.5
                      transform
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      transition"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </Link>
                </motion.div>
              ) : (
                <div
                  className="w-full text-center py-3
                  text-xs font-medium text-gray-500
                  border border-dashed border-white/5
                  rounded-xl"
                >
                  Case Study Coming Soon
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}