import "./Hero.css";
import { Container, Row, Col, NavLink } from "react-bootstrap";
import image from "../../assets/images/HeroArticles.png";
import HeroBox from "./heroBox/HeroBox";
import { GrChapterNext } from "react-icons/gr";
import { TbArticle, TbArticleOff } from "react-icons/tb";
import { RiArticleLine } from "react-icons/ri";
import { FaUserCheck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Container fluid style={{ backgroundColor: "#282A35" }}>
        <Row className="d-flex justify-content-around align-items-center">
          <Col
            sm={12}
            md={6}
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <img src={image} alt="" className="img-fluid" />
          </Col>
          <Col
            sm={12}
            md={6}
            className="m-auto text-center"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h3 className="mt-5 d-inline p-2 rounded lalezar text-light" >
              آمار ها باعث افتخار ما هستند
            </h3>
            <Row className="text-center m-auto justify-content-center">
              <Col sm={11} md={5} className="box-radios p-4 my-3">
                <HeroBox title="مقاله های ساخته شده" count={3623}>
                  <TbArticle size={"50px"} color="#FFC107" />
                </HeroBox>
              </Col>
              <Col sm={11} md={5} className="box-radios p-4 my-3">
                <HeroBox title="مقاله های موجود" count={2321}>
                  <RiArticleLine size={"50px"} color="#FFC107" />
                </HeroBox>
              </Col>
              <Col sm={11} md={5} className="box-radios p-4 my-3">
                <HeroBox title="مقاله های حذف شده" count={1302}>
                  <TbArticleOff size={"50px"} color="#FFC107" />
                </HeroBox>
              </Col>
              <Col sm={11} md={5} className="box-radios p-4 my-3">
                <HeroBox title="کاربر فعال" count={451}>
                  <FaUserCheck size={"50px"} color="#FFC107" />
                </HeroBox>
              </Col>
            </Row>
          </Col>
          <h2 className="text-end text-light px-5 pt-3 lalezar">
            ساخت مقاله
            <NavLink className="d-inline" href="/add-article">
              <GrChapterNext color="#FFC107" className="mx-2" />
            </NavLink>
          </h2>
        </Row>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#282A35" fill-opacity="1" d="M0,288L48,250.7C96,213,192,139,288,112C384,85,480,107,576,133.3C672,160,768,192,864,176C960,160,1056,96,1152,69.3C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </>
  );
}
export default Hero;
