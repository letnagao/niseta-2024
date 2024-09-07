import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Conheça Nossos Eventos' title='Atividades Imersivas e Experiências Culturais'/>
        <Programs/>
        <About/>
        <Title subTitle='Galeria' title='Fotos dos Eventos'/>
      </div>
    </div>
  );
};

export default App;