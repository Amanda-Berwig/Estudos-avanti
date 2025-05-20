import { useState } from "react";
import styles from "./Accordion.module.css";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    // Se o índice ativo for igual ao índice clicado, fecha o acordeão (null), caso contrário, abre o acordeão (índice clicado).
  };

  //array de objetos, com uma perguta e uma resposta
  const items = [
    {
      question: "O que é React?",
      answer:
        "React é uma biblioteca JavaScript para construir interfaces de usuário.",
    },
    {
      question: "O que é um componente?",
      answer: "Um componente é uma parte reutilizável da interface do usuário.",
    },
    {
      question: "O que é estado (state)?",
      answer:
        "Estado é um objeto que representa a parte dinâmica de um componente.",
    },
  ];

  return (
    <div className={styles.accordion}>
      {/* Percorre o array "items" e renderiza um botão para cada item */}
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.item} ${
            activeIndex === index ? styles.open : ""
          }`}
        >
          {/* Botão que, ao ser clicado, chama a função toggleAccordion passando o índice do item */}
          <button
            className={styles.button}
            onClick={() => toggleAccordion(index)}
          >
            {/* Mostra a pergunta (question) no botão */}
            {item.question}
          </button>

          {/* Se o índice ativo (activeIndex) for igual ao índice atual, mostra a resposta */}
          {activeIndex === index && (
            <p className={styles.answer}>{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
// Se o índice ativo for igual ao índice clicado, exibe a resposta.
