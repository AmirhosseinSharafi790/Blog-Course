import "./Course.css";
import Navbar from "../../components/navbar/NavBar";
import { Alert, Col, Container, FormCheck, Row, Form } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaSort, FaFilter } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import CoursesItem from "../../components/course/courseItem";
import Footer from "../../components/footer/Footer";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [sortType, setSortType] = useState("earliest");
  const [category, setCategory] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    if (sortType === "earliest") getCoursesOrderBy("desc", "id");
    else if (sortType === "latest") getCoursesOrderBy("asc", "id");
    else if (sortType === "expensivest") getCoursesOrderBy("desc", "mainPrice");
    else if (sortType === "cheapest") getCoursesOrderBy("asc", "mainPrice");
  }, [sortType]);

  useEffect(() => {
    if (category === "frontend") getCoursesCategoryBy("فرانت اند");
    else if (category === "backend") getCoursesCategoryBy("بک اند");
  }, [category]);
  const sortHandler = (e) => {
    setSortType(e.target.id);
  };

  useEffect(() => {
    state === "completed"
      ? getCoursesStateBy("completed")
      : state === "presell"
      ? getCoursesStateBy("presell")
      : getCoursesStateBy("recording");
  }, [state]);

  const getCoursesOrderBy = (order, column) => {
    axios
      .get(
        `http://localhost/react/api/courses/?order=${order}&column=${column}`
      )
      .then((response) => setCourses(response.data.data));
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };
  const getCoursesCategoryBy = (category) => {
    axios
      .get(`http://localhost/react/api/courses/?category=${category}`)
      .then((response) => setCourses(response.data.data));
  };

  const stateHandler = (e) => {
    setState(e.target.value);
  };

  const getCoursesStateBy = (courseState) => {
    axios
      .get(`http://localhost/react/api/courses/?state=${courseState}`)
      .then((response) => setCourses(response.data.data));
  };

  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <h1 className="my-3">لیست مقالات</h1>
        </Row>
        <Row>
          <Col lg={3}>
            <Accordion alwaysOpen className="py-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaSort className="fs-6" />
                  <b className="ms-3">مرتب سازی</b>
                </Accordion.Header>
                <Accordion.Body>
                  <FormCheck
                    type="radio"
                    id="earliest"
                    name="sort"
                    label="جدید ترین"
                    onChange={sortHandler}
                  />
                  <FormCheck
                    type="radio"
                    id="latest"
                    name="sort"
                    label="قدیمی ترین"
                    onChange={sortHandler}
                  />
                  <FormCheck
                    type="radio"
                    id="expensivest"
                    name="sort"
                    label="گران ترین"
                    onChange={sortHandler}
                  />
                  <FormCheck
                    type="radio"
                    id="cheapest"
                    name="sort"
                    label="ارزان ترین"
                    onChange={sortHandler}
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="filterWrapper">
              <div className="filterIcon">
                <MdCategory />
                <b>دسته بندی</b>
              </div>
              <Form>
                <FormCheck
                  type="checkbox"
                  value="frontend"
                  label="فرانت اند"
                  onChange={categoryHandler}
                  checked={category === "frontend" ? true : false}
                />
                <FormCheck
                  type="checkbox"
                  value="backend"
                  label="بک اند"
                  onChange={categoryHandler}
                  checked={category === "backend" ? true : false}
                />
              </Form>
            </div>

            <div className="filterWrapper">
              <div className="filterIcon">
                <FaFilter />
                <b>وضعیت دوره</b>
              </div>
              <Form>
                <FormCheck
                  type="switch"
                  value="completed"
                  label="تکمیل شده"
                  onChange={stateHandler}
                  checked={state === "completed" ? true : false}
                />
                <FormCheck
                  type="switch"
                  value="presell"
                  label="پیش فروش"
                  onChange={stateHandler}
                  checked={state === "presell" ? true : false}
                />
                <FormCheck
                  type="switch"
                  value="recording"
                  label="در حال ضبط"
                  onChange={stateHandler}
                  checked={state === "recording" ? true : false}
                />
              </Form>
            </div>
          </Col>
          <Col lg={9}>
            <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 gy-4 py-3">
              {courses.map((course) => (
                <Col key={course.id}>
                  <CoursesItem {...course} />
                </Col>
              ))}
            </Row>
            {courses.length === 0 && (
              <Alert variant="warning" className="py-3 gy-4 mt-2">
                <p>مقاله ای یافت نشد !!!!</p>
              </Alert>
            )}
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default Courses;
