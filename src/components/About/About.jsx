import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>Sobre o Niseta</h3>
        <h2>Um Evento Internacional de Integração Cultural</h2>
        <p>
          O Niseta Tour é um evento internacional dedicado à integração de
          jovens, com o propósito de promover e celebrar a rica cultura de
          uchinanchu. Tradicionalmente realizado em diferentes países, o evento
          é sediado rotativamente no Peru, Argentina, Bolívia e Brasil,
          proporcionando uma plataforma única para a troca cultural entre jovens
          de todo o mundo.
        </p>
        <p>
          Desde sua criação, o Niseta Tour já contou com 12 edições
          bem-sucedidas, reunindo mais de 1000 participantes de diversos países,
          incluindo EUA/Havai, Japão, França e México. Cada edição oferece uma
          oportunidade valiosa para o compartilhamento de tradições, histórias e
          experiências culturais, fortalecendo a conexão global e a compreensão
          mútua.
        </p>
        <p>
          Através de uma programação rica em atividades culturais, workshops e
          eventos sociais, o Niseta Tour cria um ambiente vibrante onde jovens
          podem aprender e se inspirar com a diversidade cultural e histórica de
          uchinanchu. É um evento que celebra a união e a amizade global,
          promovendo a continuidade e a valorização das tradições culturais.
        </p>
      </div>
    </div>
  );
};

export default About;
