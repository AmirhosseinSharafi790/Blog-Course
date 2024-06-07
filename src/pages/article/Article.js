import "./Article.css";
import NavBar from "../../components/navbar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import ArticleItem from "../ArticleItem/ArticleItem";
import { Button, Col, Container, Row, Form, Alert } from "react-bootstrap";
import { IoMdSearch } from "react-icons/io";
import Accordion from "react-bootstrap/Accordion";
import { FaSort } from "react-icons/fa";
import { TbUsersGroup } from "react-icons/tb";
import Footer from "../../components/footer/Footer";
function Articles() {
  const [articles, setArticles] = useState([]);
  const [SortType, setSortType] = useState("newest");
  const [SearchInput, setSearchInput] = useState("");
  useEffect(() => {
    if (SortType == "newest") getArticlesByOrder("desc", "id");
    else if (SortType == "oldest") getArticlesByOrder("asc", "id");
    else if (SortType == "longest") getArticlesByOrder("desc", "readingTime");
    else if (SortType == "shortest") getArticlesByOrder("asc", "readingTime");
  }, [SortType]);
  const sortHandler = (e) => {
    setSortType(e.target.id);
  };
  const getArticlesByOrder = (order, column) => {
    axios
      .get(
        `http://localhost/react/api/articles/?order=${order}&column=${column}`
      )
      .then((response) => setArticles(response.data.data));
  };
  const inputHandler = (event) => {
    setSearchInput(event.target.value);
  };
  const searchHandler = () => {
    axios
      .get(
        `http://localhost/react/api/articles/?search=${SearchInput}&column=writter`
      )
      .then((response) => setArticles(response.data.data));
  };
  return (
    <>
      <NavBar />
      <Container>
        <Row className="d-flex justify-content-start align-items-center my-4">
          <Col sm={12} md={6}>
            <h1 className="mt-3">لیست مقالات</h1>
          </Col>
          <Col
            sm={12}
            md={6}
            className="d-flex justify-content-end align-items-center"
          >
            <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    style={{ width: "250px" }}
                    type="text"
                    onChange={inputHandler}
                    placeholder="جستجو بر اساس نام نویسنده..."
                    className="p-3"
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    variant="outline-warning"
                    className="p-3"
                    type="button"
                    onClick={searchHandler}
                  >
                    <IoMdSearch size={"20px"} />
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className="col-12 col-lg-3">
            <Accordion className="py-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <b>
                    <span className="mx-2">
                      <FaSort />
                    </span>
                    مرتب سازی
                  </b>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Check
                      name="sort"
                      type="radio"
                      onChange={sortHandler}
                      id="newest"
                      label={`جدید ترین`}
                    />
                    <Form.Check
                      name="sort"
                      type="radio"
                      onChange={sortHandler}
                      id="oldest"
                      label={`قدیمی ترین`}
                    />
                    <Form.Check
                      name="sort"
                      type="radio"
                      onChange={sortHandler}
                      id="longest"
                      label={`طولانی ترین`}
                    />
                    <Form.Check
                      name="sort"
                      type="radio"
                      onChange={sortHandler}
                      id="shortest"
                      label={`کوتاه ترین`}
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col className="col-12 col-lg-9">
            <Row>
              {articles.map((Item) => (
                <Col sm={12} md={4} key={Item.id}>
                  <ArticleItem {...Item} />
                </Col>
              ))}
              {articles.length == 0 && <Alert>مقاله ای یافت نشد</Alert>}
            </Row>
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
}
export default Articles;
