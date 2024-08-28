import React, { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaPencilRuler,
  FaFireAlt,
  FaSnowflake,
  FaUtensils,
  FaTemperatureHigh,
  FaTint,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import Logo from "../assets/logo-sin-slogan.svg";

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen ${darkMode ? "dark" : ""} bg-white dark:bg-gray-900`}
    >
      <header className="bg-white dark:bg-gray-800 py-4 flex flex-col items-center">
        {/* Botón para alternar modo oscuro */}
        <button
          onClick={toggleDarkMode}
          className="absolute top-8 right-12 p-4 text-gray-900 dark:text-gray-100"
        >
          {darkMode ? (
            <FaSun className="text-3xl" /> // Ajusta el tamaño aquí
          ) : (
            <FaMoon className="text-3xl" /> // Ajusta el tamaño aquí
          )}
        </button>
        <div className="w-full flex flex-col items-center">
          {/* Logo */}
          <div className="w-full flex justify-center">
            <img src={Logo} alt="Logo" className="h-auto max-h-96" />
          </div>

          {/* Texto debajo del logo */}
          <div className="w-full text-center mt-4 cursor-default">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 dark:text-blue-300">
              Servicios de Gasista Matriculado y Plomero
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">
              Soluciones profesionales y confiables para todas tus necesidades
              de gas y plomería
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section id="servicios" className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-8 text-center cursor-default">
            Servicios
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FaPencilRuler, title: "Dibujo técnico de planos de gas" },
              { icon: FaFireAlt, title: "Habilitaciones de gas" },
              {
                icon: FaSnowflake,
                title: "Reparación e instalación de heladeras",
              },
              {
                icon: FaTint,
                title: "Reparación e instalación de lavarropas",
              },
              {
                icon: FaUtensils,
                title: "Reparación e instalación de cocinas",
              },
              {
                icon: FaTemperatureHigh,
                title: "Reparación e instalación de calefactores",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-start space-x-4 transform transition duration-500 hover:scale-105 cursor-default"
              >
                <service.icon className="text-blue-500 dark:text-blue-300 text-3xl flex-shrink-0" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="rounded-lg p-4 mb-16">
          <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-6 text-center cursor-default">
            Consultas por
          </h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://wa.me/542235297819"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer"
            >
              <FaWhatsapp className="mr-3 text-3xl" />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/plomeriacacho"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer"
            >
              <FaInstagram className="mr-3 text-3xl" />
              Instagram
            </a>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-6 cursor-default">
            Garantía de confianza
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Experiencia",
                description: "Más de 10 años en el sector",
              },
              {
                title: "Profesionalismo",
                description: "Matricula de Gasista habilitado",
              },
              {
                title: "Atención al cliente",
                description: "Servicio personalizado y eficiente",
              },
            ].map((reason, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 cursor-default"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 dark:bg-gray-800 text-white dark:text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center cursor-default">
            <h3 className="text-2xl font-semibold mb-2">
              Servicios de Gasista y Plomería General
            </h3>
            <p className="text-blue-200 dark:text-blue-400">
              Atención en Mar del Plata, Buenos Aires, Argentina.
            </p>
          </div>
          <div className="mt-8 text-center text-blue-200 dark:text-blue-400 cursor-default">
            <p>&copy; 2024 Plomería Cacho. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
