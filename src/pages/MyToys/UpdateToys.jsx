import { useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const UpdateToys = () => {

    const [control, setControl] =useState(false);
    const updateToys = useLoaderData();

    useTitle('Update Toys');


    //console.log(updateToys);
    const { _id, price, available_quantity, detail_description } = updateToys;

    const location = useLocation();

    const from = location.state?.from?.pathname || '/mytoys'

    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();


        const form = event.target;
        const price = parseFloat(form.price.value);
        const available_quantity = parseInt(form.available_quantity.value);
        const detail_description = form.detail_description.value
        
        const updating = {
            _id,
            price: price,
            available_quantity: available_quantity,
            detail_description: detail_description
        }

        //console.log(data);
        fetch(`https://b7a11-toy-marketplace-server-side-delta.vercel.app/update/${updating._id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updating),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.modifiedCount > 0) {
              setControl(!control);
              Swal.fire({
                title: 'Updated Successfully!',
                text: 'Do you want to continue',
                confirmButtonText: 'Yes'
              })
            }
            navigate(from, { replace: true });
            console.log(result);
          });
      };

    return (
        <div>
            <h3 className="text-5xl text-center mt-6 mb-6">Add Toy</h3>
            <form onSubmit={handleUpdate}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={price} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name="available_quantity" defaultValue={available_quantity} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered" defaultValue={detail_description} name="detail_description"></textarea>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Update Toy" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToys;