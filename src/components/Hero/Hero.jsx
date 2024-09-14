import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
          Intercâmbio cultural para celebrar e promover a cultura Okinawana
        </h1>
        <p>
          Promovemos a cultura de Okinawa por meio da troca de experiências e
          conhecimentos, conectando pessoas e tradições. 
        </p>
        <button className="btn">
          Veja mais <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
