import style from '../App.module.css'
const Footer = () => {
  return (
    <footer className={`page-footer text-white ${style.footerColor}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center py-5">
            <h3 className="mb-3">Connect with me</h3>
            <div className="mb-0 flex-center">
              <a href="https://www.facebook.com/Taimee55/" className="fb-ic">
                <i  className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>

              <a href="https://twitter.com/Taimi360" className="tw-ic">
                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>

              <a href="https://www.linkedin.com/in/taimoor-khan-55a512173/" className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>

              <a href="https://www.instagram.com/letstartcoding/" className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>

              <a href="https://www.pinterest.com/khant8k83/_saved/" className="pin-ic">
                <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        © 2020 Copyright: Taimoor Khan  
  <a href="https://github.com/Taimoorkhan1122">{" | "}<i className="fab fa-github"></i> {"  "}follow me</a>
      </div>
    </footer>
  );
};

export default Footer;
