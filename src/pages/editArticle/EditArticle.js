import NavBar from "../../components/navbar/NavBar";
import "./EditArticle.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../../components/footer/Footer";
function EditArticle() {
  const [articleData, setarticleData] = useState({});
  const articleId = useParams().articleId;
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost/react/api/articles/?id=${articleId}`)
      .then((response) => setarticleData(response.data.data[0]));
  }, []);
  const formHandler = (event) => {
    setarticleData({ ...articleData, [event.target.name]: event.target.value });
  };
  const editArticleHandler = () => {
    axios.put(
      `http://localhost/react/api/articles/?id=${articleId}`,
      articleData
    );
    Swal.fire({
      title: "ویرایش مقاله شما با موفقیت ثبت شد",
    });
    navigate(`/`);
  };
  return (
    <>
      <NavBar />
      <Container className="form-conatiner">
        <Form>
          <Row>
            <Col sm="12" md="4">
              <Form.Group className="my-3" controlId="formGroupEmail">
                <Form.Label>عنوان مقاله</Form.Label>
                <Form.Control
                  value={articleData.title}
                  name="title"
                  onChange={formHandler}
                  className="p-2"
                  type="text"
                  placeholder="عنوان مقاله را وارد کنید"
                />
              </Form.Group>
            </Col>
            <Col sm="12" md="8">
              <Form.Group className="my-3" controlId="formGroupPassword">
                <Form.Label>توضیح کوتاه</Form.Label>
                <Form.Control
                  value={articleData.description}
                  name="description"
                  onChange={formHandler}
                  className="p-2"
                  type="text"
                  placeholder="یک توضیح کوتاه در مورد مقاله وارد کنید"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="6">
              <Form.Group className="my-3" controlId="formGroupWritter">
                <Form.Label>نویسنده مقاله</Form.Label>
                <Form.Control
                  value={articleData.writter}
                  name="writter"
                  onChange={formHandler}
                  className="p-2"
                  type="text"
                  placeholder="نام نویسنده مقاله را وارد کنید"
                />
              </Form.Group>
            </Col>
            <Col sm="12" md="6">
              <Form.Group className="my-3" controlId="formGroupCategory">
                <Form.Label>موضوع مقاله</Form.Label>
                <Form.Control
                  value={articleData.category}
                  name="category"
                  onChange={formHandler}
                  className="p-2"
                  type="text"
                  placeholder="موضوع مقاله را وارد کنید"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="7">
              <Form.Group className="my-3" controlId="formGroupImage">
                <Form.Label>عکس مقاله</Form.Label>
                <Form.Control
                  value={articleData.image}
                  name="image"
                  onChange={formHandler}
                  className="p-2"
                  type="text"
                  placeholder="آدرس عکس مقاله را وارد کنید"
                />
              </Form.Group>
            </Col>
            <Col sm="12" md="5">
              <Form.Group className="my-3" controlId="formGroupReadingTime">
                <Form.Label>مدت زمان خواندن</Form.Label>
                <Form.Control
                  value={articleData.readingTime}
                  name="readingTime"
                  onChange={formHandler}
                  className="p-2"
                  type="number"
                />
              </Form.Group>
            </Col>
          </Row>
          <Button
            type="button"
            onClick={editArticleHandler}
            variant="warning"
            className="p-2 w-100 mb-3"
          >
            ویرایش مقاله
          </Button>
        </Form>
        <Footer />
      </Container>
    </>
  );
}
export default EditArticle;
