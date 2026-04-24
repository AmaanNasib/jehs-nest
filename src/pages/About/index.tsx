import AboutShowcase from "../../components/About/AboutShowcase/AboutShowcase"
import CtaBanner from "../../components/About/CtaBanner/CtaBanner"
import TeamSection from "../../components/About/TeamSection/TeamSection"
import WhyChoose from "../../components/About/WhyChoose/WhyChoose"
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb"

const About = () => {
    return (
        <>
            <Breadcrumb
                title="About Us"
                bgImage="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                items={[
                    { label: "Home", href: "/" },
                    { label: "About Us" }
                ]}
            />
            <AboutShowcase />
            <WhyChoose />
            <CtaBanner />
            <TeamSection />
        </>
    )
}

export default About
