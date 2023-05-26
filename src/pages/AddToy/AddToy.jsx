import { useContext } from "react";
import Swal from 'sweetalert2';
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";



const AddToy = () => {

    const { user } = useContext(AuthContext);

    const location = useLocation();

    const from = location.state?.from?.pathname || '/mytoys'

    const navigate = useNavigate();

    useTitle('Add a Toy');
    const handleAddToy = event =>{
        event.preventDefault();

        const form = event.target;
        const photoURL = form.photoURL.value;
        const toyName = form.toyName.value;
        const name = user?.displayName;
        const email = user?.email;
        const subCategory = form.subCategory.value;
        const price = parseFloat(form.price.value);
        const rating = parseFloat(form.rating.value);
        const quantity = parseInt(form.quantity.value);
        const detail = form.detail.value
        
        const posting = {
            toy_picture: photoURL,
            toy_name: toyName,
            seller_name: name,
            seller_email: email, 
            sub_category: subCategory,
            price: price,
            rating: rating,
            available_quantity: quantity,
            detail_description: detail
        }

        //console.log(posting);

        fetch('https://b7a11-toy-marketplace-server-side-delta.vercel.app/post-toy', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(posting)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Toy Added Successful!',
                    text: 'Do you want to continue',
                    confirmButtonText: 'Yes'
                  })
            }
            navigate(from, { replace: true });
        })

    }


    return (
        <div>
            <h3 className="text-5xl text-center mt-6 mb-6">Add Toy</h3>
            <form onSubmit={handleAddToy}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photoURL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name="toyName" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="sellerName" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="sellerEmail" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <select className="select w-full max-w-xs select-bordered"  name="subCategory">
                            <option value="regular car">Regular Car</option>
                            <option value="police car">Police Car</option>
                            <option value="mini truck">Mini Truck</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name="quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name="detail"></textarea>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Post Toy" />
                </div>
            </form>
        </div>
    );
};

export default AddToy;