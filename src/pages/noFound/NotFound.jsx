import { Link } from 'react-router-dom';
import './notFound.css';

const NotFound = () => {
  return (
    <section>
      <div className="container notFond_container">
   
        <h2> 404 Not Found</h2>
        <Link to="/" className='btn'>Go Back Home</Link>
      </div>
    </section>
  )
}

export default NotFound