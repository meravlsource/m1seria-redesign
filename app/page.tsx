'use client'

import Image from "next/image";
import { useState } from "react";
import { Modal } from "./Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState("");

  const openModal = (book: string) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const header = document.querySelector("header");
    const headerHeight = header?.getBoundingClientRect().height ?? 0;
    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      headerHeight;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });
  };

  const navLinkClass =
    "text-black transition-colors duration-200 hover:text-red-600 active:text-red-600";

  const buttonClass =
    "w-full border border-black bg-black text-white py-3 transition-colors duration-200 hover:border-red-600 hover:bg-red-600 hover:text-white active:border-red-600 active:bg-red-600";

  const sectionLabelClass =
    "text-sm md:text-base text-red-600";

  return (
    <main className="min-h-screen bg-white text-black">

      {/* NAVEGACIÓN FIJA */}
      <header className="fixed top-0 left-0 z-50 w-full bg-white border-t border-b border-black">
        <div className="px-5 md:px-8 py-4 flex items-center justify-between gap-4">
          <a
            href="#inicio"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("inicio");
            }}
            className="font-bold text-xl md:text-2xl transition-colors duration-200 hover:text-red-600"
          >
            m1seria
          </a>

          <nav className="flex items-center gap-3 sm:gap-5 md:gap-8 text-xs sm:text-sm md:text-base">
            <a
              href="#inicio"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("inicio");
              }}
              className={navLinkClass}
            >
              inicio
            </a>

            <a
              href="#productos"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("productos");
              }}
              className={navLinkClass}
            >
              shop
            </a>

            <a
              href="#contacto"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("contacto");
              }}
              className={navLinkClass}
            >
              contacto
            </a>
          </nav>
        </div>
      </header>


      {/* 01 — INICIO */}
      <section
        id="inicio"
        className="relative scroll-mt-24 min-h-screen px-5 pt-24 pb-12 flex flex-col items-center justify-center text-center isolate"
      >
        {/* IMAGEN DE FONDO */}
        <div
          className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/fondo/fondo.png')",
          }}
        />

        {/* CAPA BLANCA PARA ACLARAR LA IMAGEN */}
        <div className="absolute inset-0 z-0 bg-white/65" />

        {/* CONTENIDO POR DELANTE DEL FONDO */}
        <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
          <p className="text-xs md:text-sm tracking-wide mb-5">
            publicaciones · objetos · arte
          </p>

          <h1 className="font-bold text-6xl sm:text-7xl md:text-9xl tracking-tight leading-none">
            M1SERIA
          </h1>

          <p className="mt-5 text-sm md:text-lg max-w-lg">
            Un espacio de publicaciones, imágenes y objetos.
          </p>

          <a
            href="#productos"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("productos");
            }}
            className="mt-10 border border-black bg-black text-white px-7 py-3 text-sm md:text-base transition-colors duration-200 hover:bg-red-600 hover:border-red-600 active:bg-red-600 active:border-red-600"
          >
            Explorar ↘
          </a>
        </div>
      </section>

      {/* LÍNEA SUPERIOR DE SHOP */}
      <div className="w-full border-t border-black" />

      {/* 02 — SHOP */}
      <section
        id="productos"
        className="scroll-mt-24 px-5 md:px-10 pt-12 pb-16 md:pt-16 md:pb-20"
      >
        <div className="mb-10 md:mb-12">
          <p className={sectionLabelClass}>
            02 / SHOP
          </p>

          <h2 className="font-bold text-3xl md:text-5xl mt-3">
            Publicaciones
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">

          {/* M1SERIA */}
          <article className="flex flex-col items-center text-center border border-black">
            <div className="w-full">
              <Image
                src="/blanco.jpeg"
                alt="Publicación M1SERIA"
                width={600}
                height={450}
                priority
                className="block w-full h-auto object-cover"
              />
            </div>

            <div className="w-full border-t border-black p-5">
              <div className="flex justify-between items-baseline gap-3">
                <h3 className="font-bold text-xl md:text-2xl">
                  M1SERIA
                </h3>

                <p className="text-base md:text-lg">
                  $ 30.000
                </p>
              </div>

              <p className="text-sm text-left mt-3 leading-relaxed">
                libro de 15x15cm · 452 páginas en blanc0 y negr0
              </p>

              <p className="text-sm text-left leading-relaxed">
                retiros x caba · envíos a todo el país
              </p>

              <button
                type="button"
                onClick={() => openModal("M1SERIA - $30.000")}
                className={`${buttonClass} mt-5`}
              >
                Comprar
              </button>
            </div>
          </article>

          {/* M2SERIA */}
          <article className="flex flex-col items-center text-center border border-black">
            <div className="w-full">
              <Image
                src="/rojo.jpeg"
                alt="Publicación M2SERIA"
                width={600}
                height={450}
                className="block w-full h-auto object-cover"
              />
            </div>

            <div className="w-full border-t border-black p-5">
              <div className="flex justify-between items-baseline gap-3">
                <h3 className="font-bold text-xl md:text-2xl">
                  M2SERIA
                </h3>

                <p className="text-base md:text-lg">
                  $ 27.000
                </p>
              </div>

              <p className="text-sm text-left mt-3 leading-relaxed">
                libro de 15×15cm · 300 páginas de am0r
              </p>

              <p className="text-sm text-left leading-relaxed">
                retiros x caba · envíos a todo el país
              </p>

              <button
                type="button"
                onClick={() => openModal("M2SERIA - $27.000")}
                className={`${buttonClass} mt-5`}
              >
                Comprar
              </button>
            </div>
          </article>

        </div>
      </section>

      {/* LÍNEA SUPERIOR DE CONTACTO */}
      <div className="w-full border-t border-black" />

      {/* 03 — CONTACTO */}
      <section
        id="contacto"
        className="scroll-mt-24 px-5 md:px-10 pt-12 pb-12 md:pt-16 md:pb-16"
      >
        <div className="w-full">
          {/* Número y título alineados a la izquierda */}
          <p className={sectionLabelClass}>
            03 / CONTACTO
          </p>

          {/* Contenido centrado */}
          <div className="w-full flex flex-col items-center text-center mt-8 md:mt-10">
            <h2 className="font-bold text-4xl md:text-6xl mb-8">
              CHIFLAME
            </h2>

            <div className="flex flex-col items-center gap-7">
              <div>
                <p className="text-sm mb-2">
                  correo
                </p>

                <a
                  href="mailto:m1seriaw@gmail.com"
                  className="text-lg md:text-2xl underline underline-offset-4 transition-colors duration-200 hover:text-red-600"
                >
                  m1seriaw@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm mb-2">
                  IG
                </p>

                <a
                  href="https://www.instagram.com/m1seria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg md:text-2xl underline underline-offset-4 transition-colors duration-200 hover:text-red-600"
                >
                  @m1seria
                </a>
              </div>
            </div>

            {/* DIBUJO ORIGINAL DE LAS MANOS */}
            <div className="w-full max-w-3xl mt-10 md:mt-12">
              <Image
                src="/assets/manos/manos-2.gif"
                alt=""
                width={1200}
                height={650}
                unoptimized
                className="block w-full h-auto object-contain pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-5 md:px-8">
        <div className="relative left-1/2 w-screen -translate-x-1/2 border-t border-black" />

        <div className="py-7 flex flex-col md:flex-row items-center justify-between gap-5 text-xs md:text-sm">
          <a
            href="#inicio"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("inicio");
            }}
            className="font-bold text-lg transition-colors duration-200 hover:text-red-600"
          >
            m1seria
          </a>

          <p>publicaciones · objetos · arte</p>

          <p>© 2026 m1seria</p>
        </div>

        <div className="relative left-1/2 w-screen -translate-x-1/2 border-t border-black" />
      </footer>

      {/* MODAL ORIGINAL: NO MODIFICAR */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedBook={selectedBook}
      />

    </main>
  );
}