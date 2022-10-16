import SectionHead from './SectionHead';
import { ImQuotesLeft } from 'react-icons/im';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { testimonials } from '../data';
import Card from '../Ui/Card';
import { useState } from 'react';
const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const { name, quote, job, avatar } = testimonials[index];

    const prevTestimonialHandler = () => {
        setIndex(prev => prev - 1);
        if (index <= 0) {
            setIndex(testimonials.length - 1);
        }

    }
    const nextTestimonialHandler = () => {

        setIndex(prev => prev + 1);
        if (index >= testimonials.length - 1) {
            setIndex(0);
        }
    }

    return (
        <div className="testimonials">
            <div className="container testimonial_container">
                <SectionHead icon={<ImQuotesLeft />} title="Testimonials" className="testimonials_head" />
                <Card className='testimonial'>
                    <div className="testimonial_avatar">
                        <img src={avatar} alt={name} />
                    </div>
                    <p className="testimonial_quote">{`"${quote} `}</p>
                    <h5>{name}</h5>
                    <small className="testimonial_title">{job}</small>
                </Card>
                <div className="tetimonials_btn_container">
                    <button className="textimonials_btn" onClick={prevTestimonialHandler}>{<IoIosArrowDropleftCircle />}</button>
                    <button className="textimonials_btn" onClick={nextTestimonialHandler}>{<IoIosArrowDroprightCircle />}</button>
                </div>
            </div>
        </div>
    )
}

export default Testimonials