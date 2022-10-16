import OtherHeader from '../../component/OtherHeader';
import HeaderImage from '../../images/header_bg_4.jpg';
import { trainers } from '../../data';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import './trainers.css';
import Trainer from '../../component/Trainer';
const Trainers = () => {
  return (
    <>
      <OtherHeader title="Our Trainers" image={HeaderImage}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, odit perspiciatis provident placeat </OtherHeader>
      <div className="section trainers">
        <div className="container trainers_container">
          {
            trainers.map(({ id, image, name, job, socials }) => {
              return (
                <Trainer key={id} id={id} image={image} name={name} job={job} socials={
                 [
                  { icon: <BsInstagram />, link: socials[0]},
                  { icon: <AiOutlineTwitter />, link: socials[1]},
                  { icon: <FaFacebookF />, link: socials[2]},
                  { icon: <FaLinkedinIn />, link: socials[3]},
                 ]
                }/>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Trainers