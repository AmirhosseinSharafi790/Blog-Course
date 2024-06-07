import "./ArticleItem.css"
import Card from 'react-bootstrap/Card';
import {IoTime} from "react-icons/io5"
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
function ArticleItem ({id , image , title , description , writter , readingTime}){
    return(
        <>
                <Card className="shadow my-3" style={{backgroundColor : "#282A35" , color : "#fff"}}>
                <Card.Img variant="top" className="img-fluid imageCardStyle"  src={image} />
                    <Card.Body>
                        <Card.Title className="py-1 lalezar">{title}</Card.Title>
                        <Card.Text style={{textAlign : "justify"}}>{description}</Card.Text>
                        <div className="d-flex justify-content-start align-items-center py-1 read-more">
                            <Link to={`/article/${id}`} className="text-warning text-decoration-none">
                                <span className="me-2">ادامه مقاله</span>
                                <span className="me-2"><FaArrowCircleLeft /></span>
                            </Link>
                        </div>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between align-items-center py-3">
                        <span className="mx-1">نویسنده : <span className="lalezar">{writter}</span></span>
                        <span className="mx-1"><span className="text-warning fs-4 mx-1">{<IoTime />}</span>{readingTime} دقیقه</span>
                    </Card.Footer>
                </Card>
        </>
    )
}
export default ArticleItem