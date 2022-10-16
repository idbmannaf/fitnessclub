import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
const FAQ = ({ question, answer }) => {
  const [isAnswareShowing, setIsAnswareShowing] = useState(false);
  return (
    <article className='faq' onClick={() => setIsAnswareShowing(prev => !prev)}>
      <div>
        <h5>{question}</h5>
        <button className="faq_icon" >
          {isAnswareShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}

        </button>
      </div>
      {isAnswareShowing ? <p>{answer}</p> : ''}
    </article>
  )
}

export default FAQ