"use client";

import { Modal } from "flowbite-react";
import { useState } from "react";

export function ImageModal({ src }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>
        <img
          className="w-2/3 border-2 border-gray-300 rounded-lg shadow-md cursor-pointer"
          src={src}
          alt=""
        />
      </button>
      <Modal
        dismissible
        show={openModal}
        size="lg"
        onClose={() => setOpenModal(false)}
      >
        <Modal.Body>
          <div className="flex justify-center items-center text-center">
            <img
              className="scale-120 transition-all duration-300 hover:scale-130"
              src={src}
              alt=""
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
