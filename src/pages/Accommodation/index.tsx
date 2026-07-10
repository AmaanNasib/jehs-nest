import AboutLuxury from "../../components/Accommodation/AboutLuxury/AboutLuxury"
import AmenitiesSection from "../../components/Accommodation/AmenitiesSection/AmenitiesSection"
import EnquirySection from "../../components/Accommodation/BookingSection/EnquirySection"
import ExperienceSection from "../../components/Accommodation/ExperienceSection/ExperienceSection"
import RoomsSection from "../../components/Accommodation/RoomsSection/RoomsSection"
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb"

const Accommodation = () => {
    return (
        <>
            <Breadcrumb
                title="Accommodation"
                bgImage="/images/DSC08603-copy-768x512.jpg"
                items={[
                    { label: "Home", href: "/" },
                    { label: "Accommodation" }
                ]}
            />
            <AboutLuxury />
            <RoomsSection />
            <AmenitiesSection />
            <ExperienceSection />
            <EnquirySection />
        </>
    )
}

export default Accommodation
