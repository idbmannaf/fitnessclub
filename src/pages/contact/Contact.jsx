import OtherHeader from '../../component/OtherHeader';
import HeaderImage from '../../images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

import './contact.css';

const Contact = () => {
  return (
    <>
      <OtherHeader title="About Us" image={HeaderImage}
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo in distinctio facere, veniam temporibus mollitia?</OtherHeader>
      <div className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a href="mailto:idbmannaf@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
            <a href="http://m.me/abde.mannaf" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
            <a href="https://wa.me/+8801744508287" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact