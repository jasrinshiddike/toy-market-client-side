import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ShopCategoryDetails = () => {
    const toyDetails = useLoaderData();
    useTitle('Toy Detail');
    console.log(toyDetails);
    const { toy_picture, toy_name, price, rating, available_quantity, detail_description } = toyDetails;
    //console.log(toy_name);
    return (
        <div className="mt-6 mb-6">
            <div className="card card-compact shadow-xl mx-auto">
                            <figure className ="w-full h-4/5"><img  src={toy_picture} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Toy Name: {toy_name}</h2>
                                <p>Price: <span>${price}</span></p>
                                <span>Rating: <Rating style={{ maxWidth: 100 }} value={rating} readOnly> </Rating></span>
                                <p>Available Quantity: <span>{available_quantity}</span></p>
                                <p>Detail Description: <span>{detail_description}</span></p>
                            </div>
                        </div> 
        </div>
    );
};

export default ShopCategoryDetails;