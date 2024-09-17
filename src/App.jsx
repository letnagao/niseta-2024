import { useState } from "react";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title
          subTitle="Conheça Nossos Eventos"
          title="Atividades Imersivas e Experiências Culturais"
        />
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subTitle="Galeria" title="Fotos dos Eventos" />
        <Campus />
        <Title subTitle="Depoimentos" title="O que ex-participantes dizem" />
        <Testimonials />
        <Title subTitle="Fale Conosco" title="Entre em Contato" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
