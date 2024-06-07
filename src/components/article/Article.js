import { Link, useNavigate, useParams } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import "./Article.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaPen } from "react-icons/fa";
import {
  MdOutlineAccessTimeFilled,
  MdDelete,
  MdPermContactCalendar,
} from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import Swal from "sweetalert2";
import Footer from "../footer/Footer";
function Article() {
  const articleId = useParams().articleId;
  const [articleData, setArticleData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost/react/api/articles/?id=${articleId}`)
      .then((Info) => setArticleData(Info.data.data[0]));
  }, []);
  const DeleteHandler = (articleId) => {
    Swal.fire({
      title: "میخوای مقاله رو حذف کنی؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FFC107",
      cancelButtonColor: "#282A35",
      confirmButtonText: "آره دیگه ، حذفش کن",
      cancelButtonText: "نه خواهش میکنم حذفش نکن",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "برات حذف کردم",
          icon: "success",
        });
        axios.delete(`http://localhost/react/api/articles/?id=${articleId}`);
        navigate("/");
      }
    });
  };
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <Card
              style={{ position: "sticky", top: "40px" }}
              className="shadow border border-warning my-3 bg-dark text-light"
            >
              <Card.Img
                variant="top"
                className="rounded-top"
                src={articleData.image}
              />
              <Card.Body>
                <Card.Title className="border-bottom text-warning border-2 text-center py-1">
                  <h4>{articleData.title}</h4>
                </Card.Title>
                <Card.Text className="my-3">
                  <p>
                    <FaPen className="me-2" color="#FFC107" />
                    <b>نویسنده : </b>
                    <span>{articleData.writter}</span>
                  </p>
                  <p>
                    <MdOutlineAccessTimeFilled className="me-2" color="#FFC107" />
                    <b>مدت زمان مطالعه : </b>
                    <span>{articleData.readingTime} دقیقه</span>
                  </p>
                  <p>
                    <LuLayoutDashboard className="me-2" color="#FFC107" />
                    <b>دسته بندی : </b>
                    <span>{articleData.category}</span>
                  </p>
                </Card.Text>
                <div className="d-flex justify-content-center align-items-center">
                  <Button
                    onClick={() => DeleteHandler(articleId)}
                    className="mx-2 border border-warning"
                    variant="outline-warning"
                  >
                    <MdDelete className="me-2" color="#FFC107" />
                    حذف پست
                  </Button>
                  <Link to={`/edit-article/${articleId}`}>
                    <Button
                      className="mx-2"
                      variant="warning"
                    >
                      <MdPermContactCalendar className="me-2" />
                      ویرایش پست
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={8}>
            <p className="py-3" style={{ textAlign: "justify" }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <p className="py-3" style={{ textAlign: "justify" }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <p className="py-3" style={{ textAlign: "justify" }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <p className="py-3" style={{ textAlign: "justify" }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <p className="py-3" style={{ textAlign: "justify" }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </Col>
        </Row>
        <Footer/>
      </Container>
    </>
  );
}
export default Article;
