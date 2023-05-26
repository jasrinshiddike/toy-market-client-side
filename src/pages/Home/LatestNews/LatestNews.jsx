
const LatestNews = () => {
    return (
        <div className="container bg-slate-200 rounded-2xl p-7 mt-7">
            <h3 className="text-5xl text-center mt-5 mb-5">Latest News</h3>
            <div className="stats stats-vertical lg:stats-horizontal shadow mx-48">

                <div className="stat">
                    <div className="stat-title">Total Stock</div>
                    <div className="stat-value">5000</div>
                    <div className="stat-desc">2022-2023</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Stock Out</div>
                    <div className="stat-value">3000</div>
                    <div className="stat-desc">2022-2023</div>
                </div>

                <div className="stat">
                    <div className="stat-title">New Arrival</div>
                    <div className="stat-value">6000</div>
                    <div className="stat-desc">2023-2024</div>
                </div>

                <div className="stat">
                    <div className="stat-title">New Customer</div>
                    <div className="stat-value">3,200</div>
                    <div className="stat-desc"> 80 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc"> 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;