import "./style.css";
import logo from "../../images/header-background2.jpeg";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="header-img ">
              <img src={logo} alt="placeholder" />
            </div>
          </div>

          <div class=" col-lg-6 col-md-6 col-sm-12">
            <div className="header-text">
              <h4>Hi👋</h4>
              <h2>I'm Ali Hatem</h2>
              <p>
                I'm a Computer Science Student, interested in some CS branches like
programming and web development. I aim to Be a software engineer.
I have a good knowledge of HTML & CSS, JavaScript, and React.js.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
