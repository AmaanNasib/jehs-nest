import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    title: string;
    bgImage: string;
    items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, bgImage, items }) => {
    return (
        <section
            className="breadcrumb-hero"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="breadcrumb-overlay" />

            <div className="container breadcrumb-content">

                {/* Breadcrumb */}
                <div className="breadcrumb-path">
                    {items.map((item, index) => (
                        <span key={index}>
                            {item.href ? (
                                <Link to={item.href}>{item.label}</Link>
                            ) : (
                                <span className="current">{item.label}</span>
                            )}

                            {index < items.length - 1 && <span className="sep"> | </span>}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h1>{title}</h1>

            </div>
        </section>
    );
};

export default Breadcrumb;