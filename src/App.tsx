import { motion, AnimatePresence, color } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Section types
interface SectionDetail {
  name: string;
  desc: string;
  url?: string;
}

interface Section {
  title: string;
  text: string;
  details: SectionDetail[];

}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  const sections: Section[] = [
    {
      title: "Web Developer",
      text: "I create modern, responsive websites with smooth animations and clean UI/UX.",
      details: [
        { name: "Portfolio Website", desc: "A personal website to showcase my projects.", url: "https://kanashimi42.github.io/Portfolio/" },
        { name: "Website for cleaning company", desc: "Built a website for cleaning company and helped with dns and hosting setup.", url: "https://shinyhouse.es" },
        { name: "Artist portfolio Website", desc: "Personal website for an artist MirenArt", url: "https://kanashimi42.github.io/MirenArt-Portfolio/" }
      ],
    },
    {
      title: "Programmer",
      text: "I work with C++, JavaScript, React, SQL and love solving complex problems.",
      details: [
        { name: "University projects", desc: "I did a lot of project while working at university, all of them are present in my GitHub", url: "https://github.com/Kanashimi42" }
      ],
    },
    {
      title: "Game Developer",
      text: "I prototype games in Unity, Unreal Engine, and Godot, experimenting with mechanics and storytelling.",
      details: [
        { name: "3D FPS Prototype", desc: "Made in Unreal Engine with AI enemies." },
        { name: "2D Platformer", desc: "Unity game with sound and animations." },
        { name: "3D Racing game", desc: "Unity game, that I published on Google Play Store", url: "https://play.google.com/store/apps/details?id=com.SweetGameZero.RNGRacer" },
        { name: "Visual novel prototype", desc: "Unity prototype of visual novel game" },
        { name: "3D TPS Prototype", desc: "UE5 space horror tps game prototype" }
      ],
    },
    {
      title: "Gamer",
      text: "I play and analyze games from retro classics to modern AAA, always learning from design choices.",
      details: [
        { name: "Favorite Games", desc: "Metal Gear Solid 3, Half-Life 2, Metal Gear Rising: Revengance." },
        { name: "Currently Playing", desc: "Star Citizen, Valorant" },
      ],
    },
  ];

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center p-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I'm <span className="text-green-400">Viacheslav "KanashimiZERO" Barsukov</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl max-w-2xl"
        >
          Web Developer • Programmer • Game Developer • Gamer
        </motion.p>
      </section>

      {/* About Section */}
      <section className="p-12 md:p-24 bg-gradient-to-b from-black to-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <p className="max-w-3xl mx-auto text-center text-gray-300 text-lg">
          I'm a passionate developer who loves building websites, coding complex
          systems, creating games, and exploring the gaming world. I combine
          creativity and technical skills to bring ideas to life.
        </p>
      </section>

      {/* Sections */}
      <section className="grid md:grid-cols-2 gap-12 p-12 md:p-24">
        {sections.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            viewport={{ once: true }}
            onClick={() => setActiveSection(item)}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-green-400/30 transition cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              {item.title}
            </h3>
            <p className="text-gray-300">{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Contact Section */}
      <section className="p-12 md:p-24 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">Let's Connect</h2>
        <p className="text-gray-300 mb-6">
          You can find me on GitHub, LinkedIn, or check out my games on itch.io.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/Kanashimi42" target="_blank"><Button variant="outline" className="text-black">GitHub</Button></a>
          <a href="https://www.linkedin.com/in/viacheslav-barsukov-52b92a297/" target="_blank" ><Button variant="default" className="bg-blue-500 text-white">LinkedIn</Button></a>
          <a href="https://kanashimi42.itch.io/" target="_blank"> <Button variant="destructive" className="text-white">itch.io</Button></a>
        </div>
      </section>


      {/* Fullscreen Modal */}
      <AnimatePresence>
        {activeSection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-6"
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 p-8 rounded-2xl max-w-3xl w-full text-center relative"
            >
              <button
                onClick={() => setActiveSection(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
              >
                ✕
              </button>
              <h3 className="text-3xl font-bold mb-6 text-green-400">
                {activeSection.title}
              </h3>
              <p className="text-gray-300 mb-6">{activeSection.text}</p>
              <div className="space-y-4">
                {activeSection.details.map((d: SectionDetail, i: number) => (
                  <div
                    key={i}
                    className="bg-gray-800 p-4 rounded-xl shadow-md text-left"
                  >
                    {d.url ? (
                      <a
                        href={d.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-semibold text-green-400 hover:text-green-300 transition-colors"
                      >
                        {d.name}
                      </a>
                    ) : (
                      <h4 className="text-xl font-semibold text-white">{d.name}</h4>
                    )}
                    <p className="text-gray-400">{d.desc}</p>
                  </div>
                ))}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
