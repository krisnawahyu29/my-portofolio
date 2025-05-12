import React, { useState, useEffect } from "react";
import { Mail, Instagram, LineChart, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const toggleDark = () => setDark(!dark);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-200 via-white to-white dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <motion.div
          className="text-center space-y-3"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src="https://media.giphy.com/media/MdA16VIoXKKxNE8Stk/giphy.gif"
            alt="loading"
            className="w-24 h-24 mx-auto"
          />
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            Sedang memuat portofolio...
          </h1>
        </motion.div>
      </div>
    );
  }

  return (
    <main className={`${dark ? "dark" : ""} font-sans`}>
      <div className={`text-gray-800 dark:text-gray-100 bg-gradient-to-r ${dark ? "from-gray-800 via-gray-900 to-black" : "from-gray-300 via-white to-white"} scroll-smooth`}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-md p-4">
          <nav className="max-w-6xl mx-auto flex justify-between items-center font-semibold">
            <div className="flex gap-6">
              <a href="#hero" className="hover:text-blue-600">Home</a>
              <a href="#about" className="hover:text-blue-600">About</a>
              <a href="#skills" className="hover:text-blue-600">Skills</a>
              <a href="#projects" className="hover:text-blue-600">Projects</a>
              <a href="#contact" className="hover:text-blue-600">Contact</a>
            </div>
            <button onClick={toggleDark} className="ml-4">
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
        </header>

        <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-24 scroll-mt-20">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="text-center space-y-4"
          >
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-white">
              <img
                src="https://i.ibb.co/WvVK1jSM/Dipindai-20250510-2021-1.jpg"
                alt="krisna"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h1 className="text-4xl font-extrabold">Krisna Wahyu Mauludin</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 animate-pulse">
              Admin | Logistik | Analis | Accounting
            </p>
            <div className="flex justify-center gap-4 mt-4 flex-wrap">
              <button className="flex items-center gap-2 border border-gray-500 px-3 py-1 rounded">
                <LineChart size={18} />
                <a href="https://www.tradingview.com/u/Wahy_fx/">
                  TradingView
                </a>
              </button>
              <button className="flex items-center gap-2 border border-gray-500 px-3 py-1 rounded">
                <Mail size={18} />
                <a href="mailto:Kress2735@gmail.com">Email</a>
              </button>
              <button className="flex items-center gap-2 border border-gray-500 px-3 py-1 rounded">
                <Instagram size={18} />
                <a href="https://instagram.com/Wahy_fx">Instagram</a>
              </button>
            </div>
          </motion.div>
        </section>

        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
