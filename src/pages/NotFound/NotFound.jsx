import { Link } from 'react-router-dom';
import img from '../../assets/404.png';

const NotFound = () => {
    return (
        <div>
            <div className='mt-5 mb-5 flex content-center items-center'>
                <img src={img} alt="" />
            </div>
            <Link to="/"><button className="btn btn-outline btn-primary">Back To Home</button></Link>
        </div>
    );
};

export default NotFound;