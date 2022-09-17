import "./style.css";
import logo from "../../images/header-background.png";
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
              <h4>clubs</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                consequatur ea modi quaerat at eius aut quasi libero quo harum
                qui possimus quod aliquam iusto, soluta maxime alias veritatis
                nulla!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
