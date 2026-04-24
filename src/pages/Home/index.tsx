import Marquee from '../../components/common/Marquee/Marquee'
import AboutSection from '../../components/Home/AboutSection/AboutSection'
import DormSection from '../../components/Home/DormSection/DormSection'
import ExperienceSection from '../../components/Home/ExperienceSection/ExperienceSection'
import HeroSlider from '../../components/Home/HeroSlider/HeroSlider'
import MenuSection from '../../components/Home/MenuSection/MenuSection'
import ServiceSection from '../../components/Home/ServiceSection/ServiceSection'
import StatsSection from '../../components/Home/StatsSection/StatsSection'
import TestimonialSection from '../../components/Home/TestimonialSection/TestimonialSection'

const Home = () => {
    return (
        <div>
            <HeroSlider />
            <Marquee />
            <AboutSection />
            <ServiceSection />
            <ExperienceSection />
            <DormSection />
            <MenuSection />
            <StatsSection />
            <TestimonialSection />
        </div>
    )
}

export default Home
