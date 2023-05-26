import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysTable from "./MyToysTable";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');


    useTitle('My Toy');

    
    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-delta.vercel.app/my-toys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [user])

    const handleSort = async (order) => {
        setSortOrder(order);
        try {
          const response = await fetch(`https://b7a11-toy-marketplace-server-side-delta.vercel.app/sort-toys?sort=${order}&email=${user?.email}`);
          const data = await response.json();
          setToys(data);
        } catch (error) {
          console.log('Error sorting data:', error);
        }
      };

    const handleDelete = id => {
        console.log(id);
        const proceed = alert('Are you sure!! Do you want to delete')
        console.log(proceed);
        if (true) {
            fetch(`https://b7a11-toy-marketplace-server-side-delta.vercel.app/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    "content-type": "application/json"
                },

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Deleted Successfully!',
                            text: 'Do you want to continue',
                            confirmButtonText: 'Yes'
                        });
                        const remaining = toys.filter(toy => toy._id !== id);
                        setToys(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <h3 className="text-5xl text-center mb-6">My Posted Toys</h3>
            <button className="btn btn-primary" onClick={() => handleSort("asc")}>Sort Ascending</button>
            <button className="btn" onClick={() => handleSort("dec")}>Sort Descending</button>
            <div className="overflow-x-auto w-full mb-6">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Sl.
                            </th>
                            <th>Toy Picture</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Sub Category</th>
                            <th>Detail Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <>
                            {/* row 1 */}
                            {toys?.map((toy, index) => (
                                <MyToysTable key={toy._id} toy={toy} index={index}
                                    handleDelete={handleDelete}
                                >

                                </MyToysTable>
                            ))}
                        </>

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;