import OtherHeader from '../../component/OtherHeader';
import headerImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';
import './about.css';
const About = () => {
  return (
    <>
      <OtherHeader title="About Us" image={headerImage}
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo in distinctio facere, veniam temporibus mollitia?</OtherHeader>
      <div className="about_story">
        <div className="container about_story_container">
          <div className="about_section_image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about_section_content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde libero voluptas quaerat, quo ipsum quisquam quis ex eos voluptates non eveniet pariatur aliquid tempora ut dignissimos.  libero aut esse quam fugit labore explicabo harum optio, illum ratione iure! Corrupti, dolore at possimus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde libero voluptas quaerat, quo ipsum quisquam quis ex eos voluptates non eveniet pariatur aliquid tempora ut dignissimos.  </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde libero voluptas quaerat</p>
          </div>
        </div>
      </div>
      <div className="about_Vision">
        <div className="container about_Vision_container">

          <div className="about_section_content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde libero voluptas quaerat, quo ipsum quisquam quis ex eos voluptates non eveniet pariatur aliquid tempora ut dignissimos.  libero aut esse quam fugit labore explicabo harum optio, illum ratione iure! Corrupti, dolore at possimus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde libero voluptas quaerat, quo ipsum quisquam quis ex eos voluptates non eveniet pariatur aliquid tempora ut dignissimos. Beatae magnam </p>
          </div>
          <div className="about_section_image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </div>

      <div className="about_Mission">
        <div className="container about_Mission_container">
          <div className="about_section_image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about_section_content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde libero voluptas quaerat, quo ipsum quisquam quis ex eos voluptates non eveniet pariatur aliquid tempora ut dignissimos.  libero aut esse quam fugit labore explicabo harum optio, illum ratione iure! Corrupti, dolore at possimus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde libero voluptas quaerat, quo ipsum quisquam quis ex eos voluptates non eveniet pariatur aliquid tempora ut dignissimos.  </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde libero voluptas quaerat, quo ipsum quisquam quis ex eos voluptates non eveniet pariatur aliquid tempora ut dignissimos.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About