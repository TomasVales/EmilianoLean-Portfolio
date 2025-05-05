import React, { useState } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-[#0a0c19] text-gray-100 font-sans">
      {/* Navbar Minimalista */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0a0c19]/95 z-50 border-b border-[#1a1d3a]/30 backdrop-blur-sm">
        <div className="container mx-auto px-5 py-3">
          <div className="flex justify-between items-center">
            {/* Menú izquierda - Versión minimalista */}
            <div className="hidden md:flex space-x-6 items-center">
              <a href="#about" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-200 font-light">Perfil</a>
              <a href="#experience" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-200 font-light">Experiencia</a>
              <a href="#education" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-200 font-light">Educación</a>
            </div>

            {/* Logo minimalista */}
            <div className="relative group">
              <a href="#home" className="flex items-center">
                <div className="
            text-white text-sm font-light tracking-[0.3em]
            border border-white/20 
            px-4 py-2
            hover:bg-white/5 hover:border-white/30
            transition-all duration-200
          ">
                  EL
                </div>
              </a>
            </div>

            {/* Menú derecha - Versión minimalista */}
            <div className="hidden md:flex space-x-6 items-center">
              <a href="#skills" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-200 font-light">Habilidades</a>
              <a href="#contact" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-200 font-light">Contacto</a>
              <a
                href="https://www.linkedin.com/in/emiliano-lean/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-200 font-light py-1.5"
              >
                LinkedIn
              </a>
            </div>

            {/* Menú móvil - Versión minimalista */}
            <button
              className="md:hidden text-gray-400 hover:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Menú móvil desplegable - Estilo minimalista */}
          {isMenuOpen && (
            <div className="md:hidden mt-3 space-y-2 pb-3">
              <a href="#about" className="block text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-200 font-light py-1.5">Perfil</a>
              <a href="#experience" className="block text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-200 font-light py-1.5">Experiencia</a>
              <a href="#education" className="block text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-200 font-light py-1.5">Educación</a>
              <a href="#skills" className="block text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-200 font-light py-1.5">Habilidades</a>
              <a href="#contact" className="block text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-200 font-light py-1.5">Contacto</a>
              <a
                href="https://www.linkedin.com/in/emiliano-lean/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-200 font-light py-1.5"
              >
                LinkedIn
              </a>
            </div>
          )}
        </div>
      </nav>


      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative bg-[#0a0c19]">
        {/* Fondo minimalista con gradiente sutil */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0c19] to-[#121631] opacity-95"></div>
          {/* Efecto de partículas sutiles */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              {[...Array(30)].map((_, i) => (
                <circle
                  key={i}
                  cx={`${Math.random() * 100}%`}
                  cy={`${Math.random() * 100}%`}
                  r={Math.random() * 1.5}
                  fill="#6366F1"
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            {/* Título con efecto sutil */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-light text-white mb-2 tracking-tight">
                Emiliano <span className="font-medium">Lean</span>
              </h1>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto my-4"></div>
              <h2 className="text-xl text-gray-400 font-normal">
                Marketing Analytics & Data Strategy
              </h2>
            </div>

            {/* Descripción breve */}
            <p className="text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
              Especializado en análisis de métricas y optimización de campañas en <span className="text-white">Blumie</span>.
              Combinando datos y estrategia para resultados medibles.
            </p>

            {/* Botones minimalistas */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-16">
              <a
                href="#contact"
                className="px-6 py-2.5 border border-white text-white rounded-sm font-medium hover:bg-white hover:text-[#0a0c19] transition-all duration-200 text-sm"
              >
                Contactar
              </a>
              <a
                href="#experience"
                className="px-6 py-2.5 border border-gray-600 text-gray-300 rounded-sm font-medium hover:border-white hover:text-white transition-all duration-200 text-sm"
              >
                Ver Trayectoria
              </a>
            </div>

            {/* Habilidades como tags minimalistas */}
            <div className="flex flex-wrap justify-center gap-2 max-w-xs mx-auto">
              {['Data Analysis', 'Marketing Strategy', 'Power BI', 'Campaign Optimization'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs text-gray-400 border border-gray-800 rounded-sm hover:text-indigo-300 hover:border-indigo-400 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Enlace discreto a LinkedIn */}
            <div className="mt-12">
              <a
                href="https://linkedin.com/in/emiliano-lean"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-gray-500 hover:text-gray-400 transition-colors"
              >
                <span>Ver credenciales completas</span>
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-[#0e1122] border-t border-b border-[#1a1d3a]/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Columna izquierda - Foto y datos rápidos */}
            <div className="w-full md:w-1/3 space-y-6">

              <div className="aspect-square rounded-sm border border-[#2a2d4a] overflow-hidden group">
                <img
                  src="/EmilianoLean.jpeg"
                  alt="Emiliano Lean - Marketing Analytics Specialist"
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Datos rápidos */}
              <div className="space-y-3">
                <div className="border-b border-[#2a2d4a] pb-3">
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-1">Ubicación</h4>
                  <p className="text-sm text-white">Quilmes, Argentina</p>
                </div>
                <div className="border-b border-[#2a2d4a] pb-3">
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-1">Email</h4>
                  <p className="text-sm text-white">emilianolean2003@gmail.com</p>
                </div>
                <div className="border-b border-[#2a2d4a] pb-3">
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-1">Teléfono</h4>
                  <p className="text-sm text-white">11 3451-2222</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-1">LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/emiliano-lean"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    linkedin.com/in/emiliano-lean
                  </a>
                </div>
              </div>
            </div>

            {/* Columna derecha - Contenido profesional */}
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-light text-white mb-6 border-b border-[#2a2d4a] pb-2">
                Sobre <span className="font-medium">Mí</span>
              </h2>

              <div className="space-y-5">
                <p className="text-gray-400 leading-relaxed">
                  Soy estudiante de la <span className="text-white">Licenciatura en Comercialización en UADE</span>, actualmente en mi cuarto año, con una sólida base en marketing estratégico, digital y análisis del comportamiento del consumidor.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  Como <span className="text-white">Prospect Marketing Analytics Intern en Blumie</span>, una consultora de datos e inteligencia artificial, me especializo en el análisis de métricas, optimización de campañas y generación de estrategias outbound. Mis responsabilidades incluyen el monitoreo de campañas digitales, elaboración de informes estratégicos y soporte en la organización de webinars.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  Complemento mi formación en marketing con conocimientos técnicos en <span className="text-white">React.js, Power BI y análisis de datos</span>, lo que me permite abordar los desafíos de marketing con una perspectiva cuantitativa y basada en datos.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  Me apasiona aprender, asumir desafíos y trabajar en equipo para contribuir al crecimiento de proyectos y organizaciones mediante estrategias de marketing efectivas y basadas en datos.
                </p>
              </div>

              {/* Educación */}
              <div className="mt-10">
                <h3 className="text-lg font-light text-white mb-4 border-b border-[#2a2d4a] pb-2">
                  Formación <span className="font-medium">Académica</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white text-sm font-medium">Licenciatura en Marketing</h4>
                    <p className="text-gray-500 text-xs">UADE | Mar 2022 - Mar 2026 (En curso)</p>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">Licenciatura en Analítica de Negocios</h4>
                    <p className="text-gray-500 text-xs">Universidad del CEMA | Mar 2021 - Feb 2022</p>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">Desarrollo Frontend con React</h4>
                    <p className="text-gray-500 text-xs">Coderhouse | 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Work Section */}
      <section id="experience" className="py-20 bg-[#0e1122] border-t border-[#1a1d3a]/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-white mb-2">
              Experiencia <span className="font-medium">Profesional</span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-4"></div>
            <p className="text-gray-400 text-sm">Mi contribución actual en el ámbito del marketing analítico</p>
          </div>

          {/* Tarjeta de experiencia principal */}
          <div className="bg-[#1a1d3a] rounded-xl border border-[#2a2d4a] overflow-hidden transition-all duration-300 hover:border-indigo-400/50">
            {/* Encabezado con gradiente */}
            <div className="bg-gradient-to-r from-indigo-900/30 to-[#1a1d3a] p-6 border-b border-[#2a2d4a]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-white">Analista de Marketing</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-indigo-400 text-sm">Blumie</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400 text-sm">Consultora de Datos e IA</span>
                  </div>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/40 text-indigo-400 text-sm font-medium">
                  <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                  Feb 2024 - Presente
                </span>
              </div>
            </div>

            {/* Cuerpo de la experiencia */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Columna de responsabilidades */}
                <div>
                  <h4 className="text-sm font-medium text-white mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    Responsabilidades Clave
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-indigo-500 mr-2"></span>
                      <span className="text-gray-400 text-sm leading-relaxed">
                        Monitoreo avanzado de KPIs y métricas de campañas digitales
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-indigo-500 mr-2"></span>
                      <span className="text-gray-400 text-sm leading-relaxed">
                        Desarrollo de informes estratégicos con insights accionables
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-indigo-500 mr-2"></span>
                      <span className="text-gray-400 text-sm leading-relaxed">
                        Optimización de estrategias outbound basadas en análisis de datos
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-indigo-500 mr-2"></span>
                      <span className="text-gray-400 text-sm leading-relaxed">
                        Gestión de contenido y actualizaciones del sitio web corporativo
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Columna de logros/tecnologías */}
                <div>
                  <h4 className="text-sm font-medium text-white mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Tecnologías y Logros
                  </h4>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {['Power BI', 'Google Analytics', 'Excel', 'React', 'Data Studio'].map((tech, i) => (
                        <span key={i} className="text-xs px-3 py-1.5 bg-[#2a2d4a] text-gray-300 rounded-full flex items-center">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#0e1122] rounded-lg p-4 border border-[#2a2d4a]">
                    <h5 className="text-xs font-medium text-indigo-400 mb-2">IMPACTO</h5>
                    <p className="text-gray-400 text-sm">
                      Contribución clave en la optimización y seguimiento de campañas digitales, aportando reportes analíticos y mejoras estratégicas en procesos de marketing outbound.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer con enlace */}
            <div className="px-6 pb-6">
              <a
                href="https://blumie.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <span>Ver sitio web de Blumie</span>
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 bg-[#0e1122] border-t border-b border-[#1a1d3a]/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-white mb-3">
              Formación <span className="font-medium">Académica</span>
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Trayectoria educativa y certificaciones profesionales</p>
          </div>

          <div className="space-y-8">
            {/* Educación Universitaria */}
            <div className="bg-[#1a1d3a] rounded-xl border border-[#2a2d4a] p-6 hover:border-indigo-400/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-medium text-white">Licenciatura en Marketing</h3>
                  <p className="text-indigo-400">Universidad Argentina de la Empresa (UADE)</p>
                </div>
                <span className="text-sm px-3 py-1 bg-indigo-900/30 text-indigo-400 rounded-full whitespace-nowrap">
                  Mar 2022 - Mar 2026 (En curso)
                </span>
              </div>

              <div className="space-y-4">
                <p className="text-gray-400">
                  Formación integral en estrategias de marketing, comportamiento del consumidor y análisis de mercados.
                  Enfoque especial en marketing digital y herramientas analíticas para la toma de decisiones.
                </p>

                <div className="mt-4 pt-4 border-t border-[#2a2d4a]">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">Enfoques principales:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Marketing Digital', 'Investigación de Mercado', 'Análisis del Consumidor', 'Estrategias Comerciales', 'Business Intelligence'].map((item, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-[#2a2d4a] text-gray-300 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Carrera previa */}
            <div className="bg-[#1a1d3a] rounded-xl border border-[#2a2d4a] p-6 hover:border-blue-400/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-medium text-white">Licenciatura en Analítica de Negocios</h3>
                  <p className="text-blue-400">Universidad del CEMA</p>
                </div>
                <span className="text-sm px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full whitespace-nowrap">
                  Mar 2021 - Feb 2022
                </span>
              </div>

              <div className="space-y-4">
                <p className="text-gray-400">
                  Formación especializada en análisis de datos aplicados a los negocios, con enfoque en herramientas cuantitativas
                  para la toma de decisiones estratégicas.
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {['Análisis de Datos', 'Estadística', 'Visualización', 'Modelos Predictivos', 'Excel Avanzado'].map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-[#2a2d4a] text-gray-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certificación Inbound */}
            <div className="bg-[#1a1d3a] rounded-xl border border-[#2a2d4a] p-6 hover:border-green-400/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-medium text-white">Certificación en Metodología Inbound</h3>
                  <p className="text-green-400">HubSpot Academy</p>
                </div>
                <span className="text-sm px-3 py-1 bg-green-900/30 text-green-400 rounded-full whitespace-nowrap">
                  Abr 2025
                </span>
              </div>

              <div className="space-y-4">
                <p className="text-gray-400">
                  Certificación que acredita competencia en la metodología inbound para desarrollar modelos de negocios
                  que atraen, interactúan y deleitan prospectos y clientes.
                </p>

                <div className="bg-[#0e1122] rounded-lg p-4 border border-[#2a2d4a] mt-3">
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-300 text-sm">
                      Validado mediante examen de mejores prácticas en estrategias de marketing inbound
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <span className="text-xs px-3 py-1 bg-[#2a2d4a] text-gray-300 rounded-full">
                    ID: 607fbsdf4742a593090aaa4ef7b470
                  </span>
                  <a href="https://www.linkedin.com/in/emiliano-lean/details/education/1745606141801/single-media-viewer/?profileId=ACoAADLuYOUBrVNcNAFHx-EQAl4gbOBWirloVe8" className="text-xs text-green-400 hover:text-green-300 transition-colors flex items-center">
                    <span>Ver credencial</span>
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Carrera Frontend - Coderhouse */}
            <div className="bg-[#1a1d3a] rounded-xl border border-[#2a2d4a] p-6 hover:border-purple-400/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-medium text-white">Carrera de Desarrollo Frontend</h3>
                  <p className="text-purple-400">Coderhouse</p>
                </div>
                <span className="text-sm px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full whitespace-nowrap">
                  Sep 2022 - Sep 2023
                </span>
              </div>

              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-medium text-white">Nota final: <span className="text-purple-400">8/10</span></h4>
                    <p className="text-gray-400 text-xs">Promedio de la carrera</p>
                  </div>
                  <a href="https://www.linkedin.com/in/emiliano-lean/details/education/1002929545/multiple-media-viewer/?profileId=ACoAADLuYOUBrVNcNAFHx-EQAl4gbOBWirloVe8&treasuryMediaId=1722382530941" className="text-xs text-purple-400 hover:text-purple-300 transition-colors flex items-center">
                    <span>Ver certificado</span>
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-[#0e1122] rounded-lg p-3 border border-[#2a2d4a]">
                    <h5 className="text-xs font-medium text-purple-400 mb-1">Desarrollo Web</h5>
                    <p className="text-gray-400 text-xs">Fundamentos de HTML, CSS y diseño responsive</p>
                  </div>
                  <div className="bg-[#0e1122] rounded-lg p-3 border border-[#2a2d4a]">
                    <h5 className="text-xs font-medium text-purple-400 mb-1">JavaScript</h5>
                    <p className="text-gray-400 text-xs">Programación frontend y lógica aplicada</p>
                  </div>
                  <div className="bg-[#0e1122] rounded-lg p-3 border border-[#2a2d4a]">
                    <h5 className="text-xs font-medium text-purple-400 mb-1">React Js</h5>
                    <p className="text-gray-400 text-xs">Componentes, hooks y consumo de APIs</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#2a2d4a]">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">Tecnologías aprendidas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'JavaScript', 'HTML5', 'CSS3', 'GitHub', 'Firebase', 'Vercel'].map((tech, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-[#2a2d4a] text-gray-300 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-[#0e1122] border-t border-b border-[#1a1d3a]/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-white mb-3">
              Mis <span className="font-medium">Habilidades</span>
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Conocimientos técnicos y competencias profesionales</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Columna izquierda - Habilidades técnicas */}
            <div className="bg-[#1a1d3a] rounded-xl border border-[#2a2d4a] p-6 hover:border-indigo-400/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-900/30 rounded-lg">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white">Habilidades <span className="text-indigo-400">Técnicas</span></h3>
              </div>

              <div className="space-y-5">
                {[
                  { skill: 'Análisis de Datos', level: 85, tools: 'Power BI, Excel, Google Analytics' },
                  { skill: 'Marketing Digital', level: 80, tools: 'Google Ads, Email Marketing, SEO' },
                  { skill: 'Desarrollo Frontend', level: 75, tools: 'React.js, JavaScript, HTML/CSS' },
                  { skill: 'Investigación de Mercado', level: 80, tools: 'Encuestas, Focus Groups, Data Analysis' }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">{item.skill}</span>
                      <span className="text-xs text-gray-500">{item.level}%</span>
                    </div>
                    <div className="w-full bg-[#0e1122] rounded-full h-1.5">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-indigo-300 h-1.5 rounded-full"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{item.tools}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna derecha - Habilidades profesionales */}
            <div className="bg-[#1a1d3a] rounded-xl border border-[#2a2d4a] p-6 hover:border-blue-400/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-900/30 rounded-lg">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white">Competencias <span className="text-blue-400">Profesionales</span></h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  'Estrategias Outbound',
                  'Trabajo en Equipo',
                  'Comunicación Efectiva',
                  'Resolución de Problemas',
                  'Pensamiento Analítico',
                  'Gestión de Proyectos',
                  'Adaptabilidad',
                  'Aprendizaje Continuo'
                ].map((skill, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-400">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Idiomas */}
              <div className="mt-8 pt-6 border-t border-[#2a2d4a]">
                <h4 className="text-sm font-medium text-gray-300 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <span>Idiomas</span>
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">Español</span>
                      <span className="text-xs text-gray-500">Nativo</span>
                    </div>
                    <div className="w-full bg-[#0e1122] rounded-full h-1.5">
                      <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">Inglés</span>
                      <span className="text-xs text-gray-500">Intermedio</span>
                    </div>
                    <div className="w-full bg-[#0e1122] rounded-full h-1.5">
                      <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0e1122] border-t border-[#1a1d3a]/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-white mb-3">
              <span className="font-medium">Contacto</span> Directo
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Disponible para oportunidades profesionales y colaboraciones</p>
          </div>

          <div className="bg-[#1a1d3a] rounded-xl border border-[#2a2d4a] p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Información de contacto */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-indigo-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-300 mb-1">Correo Electrónico</h3>
                    <a href="mailto:emilianolean2003@gmail.com" className="text-white hover:text-indigo-300 transition-colors">emilianolean2003@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-300 mb-1">Teléfono</h3>
                    <a href="tel:+541134512222" className="text-white hover:text-blue-300 transition-colors">+54 11 3451-2222</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-300 mb-1">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/in/emiliano-lean"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-300 transition-colors"
                    >
                      linkedin.com/in/emiliano-lean
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gray-700 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-300 mb-1">Ubicación</h3>
                    <p className="text-white">Quilmes, Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>

              {/* Mapa de ubicación simple */}
              <div className="bg-[#0e1122] rounded-lg border border-[#2a2d4a] overflow-hidden h-full min-h-[200px] flex items-center justify-center">
                <div className="text-center p-4">
                  <svg className="w-16 h-16 mx-auto text-gray-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h4 className="text-gray-300 font-medium mb-1">Zona de Trabajo</h4>
                  <p className="text-gray-500 text-sm">Buenos Aires Metropolitan Area</p>
                  <p className="text-gray-500 text-xs mt-2">Disponible para trabajo remoto</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </div>
  );
};

export default App;