
import img1 from '../../../assets/banner/banner1.jpg';
import img2 from '../../../assets/banner/banner2.jpg';
import img3 from '../../../assets/trend1.jpeg'

const TrendingToys = () => {
    return (
        <div className='container mt-7'>
            <h3 className='text-5xl text-center mt-5 mb-5'>Trending Toys</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='h-52'><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Mini Sports Car
                            <div className="badge badge-secondary">Popular</div>
                        </h2>
                        <p>Matchbox Cars, Moving Parts 6-Pack, Set of 6 1:64 Scale Toy Sports Cars with Door, Trunk or Hood That Open & Close</p>
                        <div className="card-actions justify-end">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='h-52'><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Mini Police Car
                            <div className="badge badge-secondary">Popular</div>
                        </h2>
                        <p>RUSEE Transforming Airplane Toys, Automatic Transform Car Electric Sport Racing Hobby Toy Car with Music and LED Light</p>
                        <div className="card-actions justify-end">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='h-52'><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Mini Fuel Truck
                            <div className="badge badge-secondary">Popular</div>
                        </h2>
                        <p>Kid Galaxy Amphibious RC Car Mega Morphibians Crocodile. All Terrain Remote Control Toy</p>
                        <div className="card-actions justify-end">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingToys;