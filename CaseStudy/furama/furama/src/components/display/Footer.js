import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function Footer() {
  const settings = {
    pauseOnHover : false,
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <footer>
      <hr />
      <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", fontFamily: "Roboto" }}>
        <p style={{ fontSize: "30px" }}>
          Relax in Style at Our Danang Beach Resort.
        </p>
        <p style={{ fontSize: "18px" }}>
          With inventive design by star architect Bill Bensley, Furama Resort celebrates sunshine and seclusion in an unspoiled rainforest setting. Experience culinary artistry at La Maison 1888, led by three-Michelin-star Chef Pierre Gagnaire; soothe your body and soul at Mi Sol Spa; or indulge in various other wellness offerings to rejuvenate your mind, body, and soul.
        </p></div>
        <hr />
        <div style={{ maxWidth: "100%", width: "100vw", margin: "auto" }}>
          <Slider {...settings}>
            <div>
              <img style={{ width: "100%" }} src="https://wallpaperaccess.com/full/81566.jpg" alt="ko có 1" />
            </div>
            <div>
              <img style={{ width: "100%" }} src="https://wallpaperbat.com/img/113066-desktop-wallpaper-may-2016.jpg" alt="ko có 3" />
            </div>
          </Slider>
        </div>
        <br></br>
        <hr></hr>
        <p style={{textAlign:"center"}}>&copy; {new Date().getFullYear()} My Application. All rights reserved.</p>
    </footer>
  );
}

export default Footer;