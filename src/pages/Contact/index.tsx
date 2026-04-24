import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb"
import ContactSection from "../../components/Contact/ContactSection/ContactSection"

const Contact = () => {
    return (
        <div>
            <Breadcrumb
                title="Contact Us"
                bgImage="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                items={[
                    { label: "Home", href: "/" },
                    { label: "Contact Us" }
                ]}
            />
            <ContactSection />
        </div>
    )
}

export default Contact
