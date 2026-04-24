import "./TopHeader.css";

const TopHeader = () => {
    return (
        <div className="top-header">
            <div className="container top-header-container">

                <div className="top-header-left">
                    <span> +91 98929 39585</span>
                    <span> +91 99207 00400</span>
                </div>

                <div className="top-header-right">
                    <a href="mailto:bookings@jehsnest.com">bookings@jehsnest.com</a>
                    <a href="mailto:kitchen@jehsnest.com">kitchen@jehsnest.com</a>
                </div>

            </div>
        </div>
    );
};

export default TopHeader;