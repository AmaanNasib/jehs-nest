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
                bgImage="src/assets/images/IMG_1891.JPG"
                items={[
                    { label: "Home", href: "/" },
                    { label: "About Us" }
                ]}
            />
            <AboutShowcase />
            <WhyChoose />
            <CtaBanner />
            {/* <TeamSection /> */}
        </>
    )
}

export default About
