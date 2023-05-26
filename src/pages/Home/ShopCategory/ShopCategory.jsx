import { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import ShopCategoryCard from './ShopCategoryCard';

const ShopCategory = () => {
    const [categories, setCategories] = useState([]);
    const [activeTab, setActiveTab] = useState(" ");


    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-delta.vercel.app/all-toys-by-category/${activeTab}`)
            .then((res) => res.json())
            .then((result) => {
                setCategories(result);
                //console.log(result);
            });
    }, [activeTab]);


    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className='mt-6 mb-9'>
            <h3 className='text-5xl text-center mt-4 p-4'>Shop By Category</h3>
            <div className="tab-container text-center">
                <div className="text-center w-full m-auto">
                    <div className="tabs flex justify-center items-center">
                        <div
                            onClick={() => handleTabClick("regular car")}
                            className={`tab rounded-2xl tab2 regular ${activeTab == "regular car" ? " bg-primary text-white" : ""
                                }`}
                        >
                            Regular Car
                        </div>
                        <div
                            onClick={() => handleTabClick("police car")}
                            className={`tab  tab2 rounded-2xl police ${activeTab == "police car" ? " bg-primary text-white" : ""
                                }`}
                        >
                            Police Car
                        </div>
                        <div
                            onClick={() => handleTabClick("mini truck")}
                            className={`tab  tab2 rounded-2xl truck ${activeTab == "mini truck" ? " bg-primary text-white" : ""
                                }`}
                        >
                            Mini Truck
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
                {categories?.map((category) => (
                    <ShopCategoryCard 
                    key={category._id}
                    category={category}></ShopCategoryCard>
                ))}
            </div>

        </div>
    );
};

export default ShopCategory;