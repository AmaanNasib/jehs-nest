import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";

const TermsConditions = () => {
    return (
        <>
            <Breadcrumb
                title="Terms & Conditions"
                bgImage="/images/compressed/5DGT2461.webp"
                items={[
                    { label: "Home", href: "/" },
                    { label: "Terms & Conditions" }
                ]}
            />

            <section className="container ">
                <div className="mx-auto " style={{ padding: "40px", }}>

                    <h1 className="mb-4 text-center">
                        Terms & Conditions
                    </h1>

                    <p className="text-muted text-center mb-5">
                        Welcome to <strong>Jeh's Kitchen</strong> and <strong>Jeh's Nest Dormitory</strong>.
                        By accessing our website or using our services, you agree to the following
                        Terms & Conditions.
                    </p>

                    <hr />

                    <h3>1. General</h3>
                    <p>
                        These Terms & Conditions govern the use of our website and the services
                        provided by Jeh's Kitchen and Jeh's Nest Dormitory. We reserve the right
                        to update these terms at any time without prior notice.
                    </p>

                    <hr />

                    <h3>2. Dormitory Accommodation</h3>

                    <ul>
                        <li>Valid government-issued ID is mandatory during check-in.</li>
                        <li>Room allocation is subject to availability.</li>
                        <li>Rent must be paid on or before the due date.</li>
                        <li>Security deposits, if applicable, are refundable as per management policy.</li>
                        <li>Residents are responsible for keeping their rooms clean and hygienic.</li>
                        <li>Smoking, alcohol, drugs, gambling, and illegal activities are strictly prohibited.</li>
                        <li>Visitors are permitted only with prior approval from management.</li>
                        <li>Management reserves the right to terminate accommodation for misconduct or violation of hostel rules.</li>
                    </ul>

                    <hr />

                    <h3>3. Kitchen & Meal Services</h3>

                    <ul>
                        <li>Meals are prepared using fresh and hygienic ingredients.</li>
                        <li>Daily menus may vary depending on ingredient availability.</li>
                        <li>Meal timings must be strictly followed.</li>
                        <li>Special dietary requests are subject to availability.</li>
                        <li>Food once served or delivered cannot be exchanged or refunded.</li>
                        <li>Please inform us in advance about any food allergies.</li>
                    </ul>

                    <hr />

                    <h3>4. Payments</h3>

                    <ul>
                        <li>Payments must be made through approved payment methods.</li>
                        <li>Late payments may attract additional charges.</li>
                        <li>Advance payments are non-transferable.</li>
                        <li>Refunds, if applicable, will be processed according to our cancellation policy.</li>
                    </ul>

                    <hr />

                    <h3>5. Safety & Security</h3>

                    <ul>
                        <li>CCTV surveillance may be installed in common areas for security.</li>
                        <li>Residents are responsible for safeguarding their personal belongings.</li>
                        <li>Management is not liable for loss, theft, or damage to personal property.</li>
                        <li>Emergency exits and safety procedures must always be followed.</li>
                    </ul>

                    <hr />

                    <h3>6. Website Usage</h3>

                    <ul>
                        <li>All website content is provided for informational purposes only.</li>
                        <li>Unauthorized copying or misuse of website content is prohibited.</li>
                        <li>Users must not attempt to gain unauthorized access to our systems.</li>
                    </ul>

                    <hr />

                    <h3>7. Privacy</h3>

                    <p>
                        We respect your privacy. Any personal information collected through
                        this website is used solely for providing our services and customer
                        support. We do not sell or share your information with third parties,
                        except where required by law.
                    </p>

                    <hr />

                    <h3>8. Changes to Terms</h3>

                    <p>
                        Jeh's Kitchen and Jeh's Nest Dormitory reserve the right to modify
                        these Terms & Conditions at any time. Continued use of our website
                        and services constitutes acceptance of the revised terms.
                    </p>

                    <hr />

                    <h3>9. Contact Us</h3>

                    <p>
                        For any questions regarding these Terms & Conditions, please visit
                        our Contact page or get in touch with our support team during
                        business hours.
                    </p>

                </div>
            </section>
        </>
    );
};

export default TermsConditions;