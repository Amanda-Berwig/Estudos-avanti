import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //[e.target.name] é uma chave dinâmica, dependendo do nome do campo que está sendo alterado, ele vai atualizar aquele valor específico.
    //e.target.value é o novo valor que vai ser atribuído àquela chave.
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário de recarregar a página
    console.log("Dados enviados:", formData);
    // Aqui você pode adicionar a lógica para enviar os dados para um servidor ou API
    setFormData({
      nome: "",
      email: "",
      mensagem: "",
    }); // Limpa os campos do formulário após o envio
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        placeholder="Nome:"
        value={formData.nome}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="E-mail:"
        value={formData.email}
        onChange={handleChange}
      />

      <textarea
        name="mensagem"
        placeholder="Mensagem:"
        value={formData.mensagem}
        onChange={handleChange}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;
