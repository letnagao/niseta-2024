import { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import user_5 from "../../assets/user-5.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < -50) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Lumi Nagao</h3>
                  <span>Niseta Tour 2020, BRASIL</span>
                </div>
              </div>
              <p>
                O Niseta transformou minha visão sobre o Kaikan, a família, os
                amigos e Okinawa. Lá aprendi sobre as histórias e vivências dos
                meus avós, dos meus pais e antepassados. Ri, chorei e aproveitei
                cada momento, por isso sou grata por tudo o que o Niseta Tour me
                proporcionou.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Takeru Onaga</h3>
                  <span>Niseta Tour 2019, BOLIVIA</span>
                </div>
              </div>
              <p>
                El Niseta Tour me ayudó a tomar decisiones que mejoraron mi vida
                y me hace sentir parte de una comunidad. Agradezco que me enseñó
                a valorar el esfuerzo de nuestros antepasados para preservar la
                cultura uchinanchu y la importancia de guiar a las futuras
                generaciones en mantener nuestras costumbres.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Sebi Shimabuku</h3>
                  <span>Niseta Tour 2018, ARGENTINA</span>
                </div>
              </div>
              <p>
                El Niseta Tour es un evento de intercambio que me hizo sentirme
                más orgulloso y privilegiado de ser descendiente de uchinanchus.
                En él me rodeé de gente que comparte mis mismas culturas y
                costumbres, llevándome recuerdos y experiencias inolvidables.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Amanda Chinen</h3>
                  <span>Niseta Tour 2017, PERU</span>
                </div>
              </div>
              <p>
                O Niseta Peru 2017 foi um intercâmbio cultural incrível. Ter
                contato com outros jovens uchinanchus da América Latina
                enriqueceu minha visão de mundo. Essa experiência foi importante
                não só pela minha identidade como uchinanchu, mas também por ter
                aprendido sobre a cultura peruana.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_5} alt="" />
                <div>
                  <h3>Gabriel Hana</h3>
                  <span>Niseta Tour 2017, PERU</span>
                </div>
              </div>
              <p>
                No soy uchinanchu de sangre, pero sí de corazón, lo entendí
                gracias a Niseta. Al principio, me sentía ajeno a la cultura
                okinawense, pero con el tiempo, hice amigos , quienes se
                convirtieron en mi segunda familia. Aunque perdimos contacto
                durante un tiempo, nos reencontramos y compartimos risas, lo que
                me hizo comprender Ichariba Choode. Mis orígenes no limitan los
                sentimientos que comparto con ellos, y aunque no nos veamos, mi
                conexión permanecerá.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
