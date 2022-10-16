import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
const Footer = () => {
    return (
        <footer>
            <div className="container footer_container">
                <article>
                    <Link to='/'>
                        <img src={Logo} alt="Footer Logo" className='logo' />
                    </Link>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, rerum! Eligendi atque nostrum dolore ducimus.</p>
                    <div className="footer_socials">
                        <a href="https://linkedin.com" target="_blank">{<FaLinkedin />}</a>
                        <a href="https://twitter.com" target="_blank">{<AiOutlineTwitter />}</a>
                        <a href="https://facebook.com" target="_blank">{<FaFacebook />}</a>
                        <a href="https://instagram.com" target="_blank">{<AiFillInstagram />}</a>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to='/about'>About</Link>
                    <Link to='/plans'>Plans</Link>
                    <Link to='/trainers'>Trainers</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/contact'>Contact</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/studio'>Case Studios</Link>
                    <Link to='/event'>Evemt</Link>
                    <Link to='/communites'>Communites</Link>
                    <Link to='/faqs'>FAQs</Link>
                </article>
                <article>
                    <h4>Get On Tuch</h4>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/support'>Support</Link>

                </article>
            </div>
            <div className="footer_copyright">
                <small>
                    2022 MKTECH &copy; All Rights Reserved
                </small>
            </div>
        </footer>
    )
}

export default Footer