'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "./Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="w-full h-screen  relative"
      style={{ backgroundImage: "url('/IMG_6589.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="fixed top-0 left-0 w-full bg-white z-10 bg-blend-multiply">
        <Link href="/" className="font-bold p-4 self-start text-xl w-full md:text-2xl cursor-default ">
          m1seria
        </Link>
      </div>
      <video
        src="/anim2.mov"
        autoPlay
        loop
        muted
        className=" inset-0 w-full h-full object-cover"
      />
      <div className="p-4 h-screen self-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/IMG_6589.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="bg-white shadow-lg p-4 w-fit flex flex-col justify-center items-center">
          <Image
            src="/rojo.jpeg"
            alt="m2seria"
            width={300}
            height={225}
            className="object-cover"
          />
          <p className="font-bold mt-2 text-lg md:text-xl">M2SERIA</p>
          <p className="text-md md:text-lg">$ 25.000 </p>
          <p className="text-xs text-center">
            libro de 15x15cm <br></br>
            3OO páginas de am0r <br></br>
            retiros x caba <br></br>
            envíos a todo el país</p>
          <button
            onClick={openModal}
            className="border border-black  w-[300px] h-fit py-2 flex items-center justify-center text-center mt-2 cursor-pointer hover:bg-black hover:border-black hover:text-white"
          >
            comprar
          </button>
        </div>
      </div>
      <div className="flex gap-x-4 justify-end fixed bottom-0 w-full p-4">
        <p className="font-bold cursor-default text-sm md:text-base">contacto</p>
        <Link href="mailto:m1seriaw@gmail.com" className="text-sm md:text-base hover:underline">mail</Link>
        <Link href="https://www.instagram.com/m1seria" className="text-sm md:text-base hover:underline">instagram</Link>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
