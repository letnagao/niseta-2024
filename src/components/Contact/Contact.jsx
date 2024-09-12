import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Nos mande uma mensagem <img src={msg_icon} alt="" />
        </h3>
        <p>
          Sinta-se a vontate para nos contatar atraves dos links abaixo. Seu
          feedback, questões e sugestões são importantes para nos e isso nos
          ajuda a prover um excelente serviço para toda comunidade uchinanchu.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            nisetatourbr@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +55 11 97065-8734
          </li>
          <li>
            <img src={location_icon} alt="" />
            nisetatourbr@gmail.com
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Seu nome</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            required
          />
          <label>Celular</label>
          <input
            type="tel"
            name="phone"
            placeholder="Digite seu número de celular"
          />
          <label>Digite sua mensagem aqui</label>
          <textarea
            name="mensagem"
            rows="6"
            placeholder="Digite sua mensagem"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
