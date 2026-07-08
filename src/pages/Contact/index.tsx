import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb"
import ContactSection from "../../components/Contact/ContactSection/ContactSection"

const Contact = () => {
    return (
        <div>
            <Breadcrumb
                title="Contact Us"
                bgImage="src/assets/images/5DGT2400.JPG"
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
