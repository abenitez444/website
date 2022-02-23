import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../assets/images/landingpage/banner-img.png";

const Banner2 = () => {
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center">
            <div className="d-flex justify-content-center">
             <div className="p-2 col-6 text-left">
              <img className="rounded-circle w-75 p-6" src="https://lh3.googleusercontent.com/a-/AOh14GgA_6BAWOepY0txuNaTjUiZDL5m8W_Bx6DwqJcuCQ=s432-p-rw-no"></img>
             </div>
            </div>
            <h1 className="title">
              Ingeniero en informática
            </h1>
            <h4 className="subtitle font-light">
               Autor
              <br /> Alejandro Benitez
            </h4>
            <a
              href="/basic"
              className="btn btn-danger m-r-20 btn-md m-t-30 "
            >
              Acerca de mí
            </a>
            <Link href="/#coming">
              <a className="btn btn-md m-t-30  btn-outline-light ">
                Upgrade To Pro
              </a>
            </Link>
          </Col>
          <Col lg="6" md="6">
            <Image src={bannerimg} alt="hero banner" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
