import { Link } from "react-router-dom";
import Image from '../images/main_header.png';
const Header = () => {
  return (
    <header className="main_header">
      <div className="container main_header_container">
        <div className="main_header_left">
          <h4>#100DaysofWorkout</h4>
          <h1>Join The Legend of the Fitness World</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, maiores! Debitis qui laborum dolor cum consequuntur adipisci excepturi, consectetur eius!</p>
          <Link to='plans' className="btn btn-lg">Get Started</Link>
        </div>
        <div className="main_header_right">
          <div className="main_header_circle"></div>
          <div className="main_header_image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header