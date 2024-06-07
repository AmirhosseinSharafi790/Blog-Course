import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../../components/navbar/NavBar";
import "./AddArticle.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
function AddArticle() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const addArticleHandler = () => {
    const resetFormData = () => {
      setFormData({
        title: "",
        description: "",
        image: "",
        readingTime: "",
        category: "",
        writter: "",
      });
    };
    axios
      .post("http://localhost/react/api/articles/", formData)
      .then((response) => {
        Swal.fire({
          title: "ساخت مقاله شما با موفقیت ثبت شد",
          timer: 5000,
          icon: "success",
          timerProgressBar: true,
          showConfirmButton: false,
          showClass: {
            popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
          },
          hideClass: {
            popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
          },
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "ساخت مقاله شما ثبت نشد",
          timer: 5000,
          timerProgressBar: true,
          icon: "error",
          showConfirmButton: false,
          showClass: {
            popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
          },
          hideClass: {
            popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
          },
        });
      });
    resetFormData();
  };
  const formHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <NavBar />
      <Container className="form-conatiner">
        <Form className="my-3">
          <Row>
            <Col sm="12" md="4">
              <Form.Group className="my-3" controlId="formGroupEmail">
                <Form.Label>عنوان مقاله</Form.Label>
                <Form.Control
                  value={formData.title}
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
                  value={formData.description}
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
                  value={formData.writter}
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
                  value={formData.category}
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
            <Col sm="12" md="8">
              <Form.Group className="my-3" controlId="formGroupImage">
                <Form.Label>عکس مقاله</Form.Label>
                <Form.Control
                  value={formData.image}
                  name="image"
                  onChange={formHandler}
                  className="p-2"
                  type="text"
                  placeholder="آدرس عکس مقاله را وارد کنید"
                />
              </Form.Group>
            </Col>
            <Col sm="12" md="4">
              <Form.Group className="my-3" controlId="formGroupReadingTime">
                <Form.Label>مدت زمان خواندن</Form.Label>
                <Form.Control
                  value={formData.readingTime}
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
            onClick={addArticleHandler}
            variant="warning"
            className="p-2 w-100"
          >
            ساخت مقاله
          </Button>
        </Form>
        <Footer />
      </Container>
    </>
  );
}
export default AddArticle;
