import { Link } from "react-router-dom";


const MyToysTable = ({toy, index, handleDelete}) => {
    const { _id } = toy;
    
    return (
            <tr>
                <td>{index + 1}</td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={toy?.toy_picture?.toy_picture} alt="" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    {toy.toy_name}
                </td>
                <td>
                    {toy.price}
                </td>
                <td>{toy.available_quantity}</td>
                <td>{toy.sub_category}</td>
                <td>{toy.detail_description}</td>
                <th>
                    <Link to={`/updatetoys/${_id}`}><button className="btn btn-xs">Edit</button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-secondary btn-xs">Delete</button>
                </th>
            </tr>
    );
};

export default MyToysTable;