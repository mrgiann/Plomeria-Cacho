import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaPencilRuler,
  FaFireAlt,
  FaSnowflake,
  FaUtensils,
  FaTemperatureHigh,
  FaTint,
} from "react-icons/fa";
import Logo from "../assets/logo-sin-slogan.svg";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white py-8 flex flex-col items-center">
        <div className="w-full flex flex-col items-center">
          {/* Logo */}
          <div className="w-full flex justify-center">
            <img src={Logo} alt="Logo" className="h-auto max-h-96" />
          </div>

          {/* Texto debajo del logo */}
          <div className="w-full text-center mt-4 cursor-default">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800">
              Servicios de Gasista Matriculado y Plomero
            </h1>
            <p className="text-xl text-gray-600 mt-2">
              Soluciones profesionales y confiables para todas tus necesidades de gas y plomería
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section id="servicios" className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-700 mb-8 text-center cursor-default">
            Nuestros Servicios
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
                className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 transform transition duration-500 hover:scale-105 cursor-default"
              >
                <service.icon className="text-blue-500 text-3xl flex-shrink-0" />
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center cursor-default">
            Contáctanos
          </h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://wa.me/TUNUMERODEWHATSAPP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer"
            >
              <FaWhatsapp className="mr-2 text-2xl" />
              Consultar por WhatsApp
            </a>
            <a
              href="https://www.instagram.com/TUUSUARIODEINSTAGRAM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer"
            >
              <FaInstagram className="mr-2 text-2xl" />
              Consultar por Instagram
            </a>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 cursor-default">
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
              <div key={index} className="bg-white rounded-lg shadow-md p-6 cursor-default">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center cursor-default">
            <h3 className="text-2xl font-semibold mb-2">
              Servicios de Gasista y Plomería General
            </h3>
            <p className="text-blue-200">
              Soluciones profesionales para tu hogar
            </p>
          </div>
          <div className="mt-8 text-center text-blue-200 cursor-default">
            <p>&copy; 2024 Plomería Cacho. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
