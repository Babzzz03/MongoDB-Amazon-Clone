import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
 
  return (
    <>
      <div className="footer__container">
        <div className="footer__wrap">
          <div className="footer__links__container">
            <div className="footer__link__wrapper">
              <div className="footer__link__items">
                <h1 className="footer__link__title">About Us </h1>
                <Link className="footer__link" to="/">
                  About us
                </Link>
                <Link className="footer__link" to="/">
                  How it works
                </Link>
                <Link className="footer__link" to="/">
                  Testimonials
                </Link>
                <Link className="footer__link" to="/">
                  careers
                </Link>
                <Link className="footer__link" to="/">
                  Investors
                </Link>
                <Link className="footer__link" to="/">
                  Terms of service
                </Link>
              </div>
              <div className="footer__link__items">
                <h1 className="footer__link__title">Amazon Payment Products</h1>
                <Link className="footer__link" to="/">
                  Amazon Business Card
                </Link>
                <Link className="footer__link" to="/">
                  Shop with Points
                </Link>
                <Link className="footer__link" to="/">
                  Reload Your Balance
                </Link>
                <Link className="footer__link" to="/">
                  Amazon Currency Converter
                </Link>
              </div>
            </div>
            <div className="footer__link__wrapper">
              <div className="footer__link__items">
                <h1 className="footer__link__title">Make Money with Us</h1>
                <Link className="footer__link" to="/">
                  Sell products on Amazon
                </Link>
                <Link className="footer__link" to="/">
                  Sell on Amazon Business
                </Link>
                <Link className="footer__link" to="/">
                  Become an Affiliate
                </Link>
                <Link className="footer__link" to="/">
                  Advertise Your Products
                </Link>
                <Link className="footer__link" to="/">
                  Self-Publish with Us
                </Link>
                <Link className="footer__link" to="/">
                  Host an Amazon Hub
                </Link>
              </div>
              <div className="footer__link__items">
                <h1 className="footer__link__title">Contact Us </h1>
                <Link className="footer__link" to="/">
                  Facebook
                </Link>
                <Link className="footer__link" to="/">
                  Whatsapp
                </Link>
                <Link className="footer__link" to="/">
                  Twitter
                </Link>
                <Link className="footer__link" to="/">
                  Instagram
                </Link>
                <Link className="footer__link" to="/">
                  You-tube
                </Link>
              </div>
            </div>
          </div>
          <div className="social__media">
            <div className="social__media__wrap">
              <Link className="social__logo" to="/">
                Babzzz
              </Link>
              <small className="website__rights">
                Babzzz © {new Date().getFullYear()} All rights reserved
              </small>
              <div className="social__icon">
                <a
                  className="social__icon__link"
                  href="https://wa.me/message/43KEVC47D6HVM1"
                  target="_blank"
                  aria-label="whatsapp"
                  rel="noreferrer"
                >
                  <i class="fa fa-whatsapp" aria-hidden="true"></i>
                </a>
                <a
                  className="social__icon__link"
                  href="mailto:babawale.emmanuel10@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="instagram"
                >
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </a>
                <a
                  className="social__icon__link"
                  href="https://twitter.com/Babzzz110?t=SXTsW1t33ozVu9q11jJkrg&s=09"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="twitter"
                >
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a
                  className="social__icon__link"
                  href="https://www.facebook.com/ola.babs.7121"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="facebook"
                >
                  <i class="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
