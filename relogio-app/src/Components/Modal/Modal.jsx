import React from "react";
import { useState } from "react";
import styles from "./Modal.module.css";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.modal}>
      <button onClick={() => setIsOpen(true)} className={styles.openButton}>
        Open Modal
      </button>

      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Modal Title</h2>
            <p>This is a modal.</p>
            <button
              onClick={() => setIsOpen(false)}
              className={styles.closeButton}
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
//quando clica no button, ele executa a funcao que troca o estado de isOpen
// se o estado for verdadeiro, ele renderiza o modal, chamado de curto circuito lógico(começa como falso)
