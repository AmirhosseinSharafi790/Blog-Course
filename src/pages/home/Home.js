import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../../components/navbar/NavBar";
import ArticleItem from "../ArticleItem/ArticleItem";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import CourseItem from "../../components/course/courseItem";
import SwiperButtons from "../../components/SwiperButtons/SwiperButtons";
function Home() {
  const [articles, setArticles] = useState([]);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/react/api/articles/?page=1&limit=6")
      .then((response) => setArticles(response.data.data));

    axios
      .get("http://localhost/react/api/courses/?page=1&limit=6")
      .then((response) => setCourses(response.data.data));
  }, []);
  return (
    <>
      <NavBar />
      <Hero />
      <Container>
        <Row>
          <Swiper
            className="customSwiperStyle"
            spaceBetween={25}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              1200: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 1,
              },
            }}
          >
            <div className="swiperTopSection">
              <h2 className="sectionTitle">جدیدترین دوره ها</h2>
              <SwiperButtons />
            </div>
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <Col className="my-2">
                  <CourseItem {...course} />
                </Col>
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
        <Row className="py-3">
          <Swiper
            spaceBetween={25}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              1200: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 1,
              },
            }}
            className="customSwiperStyle"
          >
            <div className="swiperTopSection">
              <h2 className="sectionTitle">جدیدترین مقالات</h2>
              <SwiperButtons />
            </div>
            {articles.map((article) => (
              <SwiperSlide key={article.id}>
                <ArticleItem {...article} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
        <Footer />
      </Container>
    </>
  );
}
export default Home;
