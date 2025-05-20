import React from "react";
import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString()); //set time atualiza utilizando a funcao newdate
    }, 1000); //a cada um segundo atualiza o relógio
    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(timer);
  });
  return (
    <>
      <h2>Hora atual: {time}</h2>
    </>
  );
}

export default Clock;
