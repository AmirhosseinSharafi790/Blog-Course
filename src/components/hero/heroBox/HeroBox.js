import "./HeroBox.css";
import CountUp from 'react-countup';
function HeroBox({title , children , count}) {
  return (
        <p className="">
          {children} {title}
          <br />
          <h3 className="lalezar text-warning border-bottom border-light d-inline p-0">
            <CountUp 
                start={0}
                end={count}
                duration={3}
                separator=""
                delay={0.5}
            />
          </h3>
        </p>
  );
}
export default HeroBox;