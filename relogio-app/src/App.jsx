import "./App.css";
import Accordion from "./Components/Accordion/Accordion";
import Clock from "./Components/Clock/Clock";
import ContactForm from "./Components/ContactForm/ContactForm";
import Modal from "./Components/Modal/Modal";

function App() {
  return (
    <>
      <h1>Relogio</h1>
      <Clock />
      <hr />
      <h2>Modal</h2>
      <Modal />
      <hr />
      <h2>ContactForm</h2>
      <ContactForm />
      <hr />
      <h2>Accordion</h2>
      <Accordion />
    </>
  );
}

export default App;
