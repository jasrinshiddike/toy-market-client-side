import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
    //const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");

    useTitle('All Toy');
    useEffect( () =>{
        fetch('https://b7a11-toy-marketplace-server-side-delta.vercel.app/all-toys')
        .then(res => res.json())
        .then(data => {
            setToys(data);
        })
    }, [])

    const handleSearch = () => {
        fetch(`https://b7a11-toy-marketplace-server-side-delta.vercel.app/get-toys/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            //console.log(data);
            setToys(data);
          });
      };
    return (
        <div>
            <h3 className="text-5xl text-center mb-6">All Toys</h3>
            <div className="search-box p-2 text-center mb-6">
                <input type="text" onChange={(e) => setSearchText(e.target.value)} className="input input-bordered" />{" "}
                <button onClick={handleSearch} className="btn btn-primary">Search</button>
            </div>
            <div className="overflow-x-auto w-full mb-6">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Sl.
                            </th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Sub Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {toys?.map((toy, index) => (
                        <>
                            <tr>
                            <td>{index + 1}</td>
                            <td>
                                {toy.seller_name}
                            </td>
                            <td>
                                {toy.toy_name}
                            </td>
                            <td>
                                {toy.price}
                            </td>
                            <td>{toy.available_quantity}</td>
                            <td>{toy.sub_category}</td>
                            <th>
                                <Link to={`/toys/${toy?._id}`}><button className="btn btn-xs">View Detail</button></Link>
                            </th>
                        </tr>
                        </>  
                        ))}
                       
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;