import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <Container
        fluid
        className="bg-dark border border-4 border-warning px-5 py-4 mb-5 rounded-5 shadow"
      >
        <Row>
          <Col className="my-3" sm={12} md={6}>
            <ul>
              <h4 className="text-light mb-3">دسترسی سریع</h4>
              <li>
                <Link className="text-warning" to="/">صفحه نخست</Link>
              </li>
              <li>
                <Link className="text-warning" to="/add-article">ساخت مقاله</Link>
              </li>
              <li>
                <Link className="text-warning" to="/articles">مقالات</Link>
              </li>
              <li>
                <Link className="text-warning" to="/course">دوره ها</Link>
              </li>
            </ul>
          </Col>
          <Col className="my-3" sm={12} md={6}>
            <ul>
              <h4 className="text-light mb-3">فضای مجازی</h4>
              <li>
                <Link className="text-warning" to={"https://instagram.com/amirhosseinsharafii"}>
                  صفحه اینستاگرام مارو دنبال کنید
                </Link>
              </li>
              <li>
                <Link className="text-warning" to={"https://github.com/AmirhosseinSharafi790"}>
                  صفحه گیت هاب مارو دنبال کنید
                </Link>
              </li>
              <li>
                <Link className="text-warning" to={"https:/linkedin.com/amirhosseinsharafii"}>
                  صفحه لینکدین مارو دنبال کنید
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Footer;
