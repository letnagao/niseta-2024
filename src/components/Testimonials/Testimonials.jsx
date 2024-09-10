import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slideForward = () => {};

  const slideBackward = () => {};
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
        <ul>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Name etc</h3>
                  <span>Sao Paulo, BRASIL</span>
                </div>
              </div>
              <p>
                Walk the layout, routines in the night Some doors have STAY OUT
                spray-painted in white While all the worlds asleep, I walk
                around instead
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Name etc</h3>
                  <span>Sao Paulo, BRASIL</span>
                </div>
              </div>
              <p>
                Through the memories, down the halls of my head Walk the layout,
                routines in the night Some doors have STAY OUT spray-painted in
                white
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Name etc</h3>
                  <span>Sao Paulo, BRASIL</span>
                </div>
              </div>
              <p>
                Im testin the limits of what a mind can do Im keepin my
                eyelids up no matter what
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Name etc</h3>
                  <span>Sao Paulo, BRASIL</span>
                </div>
              </div>
              <p>
                So beautiful, the space between A painful reminder and a
                terrible dream
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
