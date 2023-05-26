import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import { FaArrowRight } from "react-icons/fa";


const ShopCategoryCard = ({category}) => {
    const { _id, toy_picture, toy_name, price, rating, sub_category, available_quantity } = category || {};
    return (
        <div>
            <div className="card card-compact w-96 shadow-xl">
                            <figure className ="w-full h-4/5"><img  src={toy_picture} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Toy Name: {toy_name}</h2>
                                <p><span>Price: ${price}</span></p>
                                <p><span>Available Quantity: {available_quantity}</span></p>
                                <span>Rating: <Rating style={{ maxWidth: 100 }} value={rating} readOnly> </Rating></span>
                                <p><span>Sub Category: {sub_category}</span></p>
                                <div className="card-actions justify-end">
                                    <Link to={`/toys/${_id}`}><button className="btn"><FaArrowRight></FaArrowRight></button></Link>
                                </div>
                            </div>
                        </div> 
        </div>
    );
};

export default ShopCategoryCard;