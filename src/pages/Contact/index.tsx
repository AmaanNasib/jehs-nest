import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb"
import ContactSection from "../../components/Contact/ContactSection/ContactSection"

const Contact = () => {
    return (
        <div>
            <Breadcrumb
                title="Contact Us"
                bgImage="/images/compressed/5DGT2400.webp"
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
