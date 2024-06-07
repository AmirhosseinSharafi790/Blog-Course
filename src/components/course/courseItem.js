import "./courseItem.css";
import { FaUsers } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { BiDollar } from "react-icons/bi";
import { Button} from "react-bootstrap";

function CourseItem({
  image,
  title,
  description,
  mainPrice,
  studentCount,
}) {
  return (
    <div className="cardContainer">
      <div className="cardImage">
        <img src={image} alt="" className="imgStyle img-fluid" />
        <p>
          <FaUsers size="25px" />
          <span className="px-1 userCount">{studentCount}</span>
        </p>
      </div>
      <div className="cardContent">
        <h4>{title}</h4>
        <p>{description}</p>
        <p>
          <span className="fw-bold pe-1">
            <GiTeacher size="25px" color="#FFC107" />
          </span>
          مدرس : <b className="border-bottom border-warning py-1">امیرحسین شرفی</b>
        </p>
      </div>
      <div className="cardFooter">
        <p>
          <Button variant="warning">ثبت نام دوره</Button>
        </p>
        <p>
          <span className="fw-bold">
            <BiDollar size="25px" color="#FFC107" />
          </span>
          {mainPrice}
        </p>
      </div>
    </div>
  );
}

export default CourseItem;
