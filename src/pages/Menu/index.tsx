import MenuHighlight from '../../components/Menu/MenuHighlight/MenuHighlight'
import FoodMenuSection from '../../components/Menu/MenuSection/FoodMenuSection'
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb'

const Menu = () => {
    return (
        <>
            <Breadcrumb
                title="Meal"
                bgImage="/images/5DGT2461.JPG"
                items={[
                    { label: "Home", href: "/" },
                    { label: "Meal" }
                ]}
            />
            <MenuHighlight />
            <FoodMenuSection />
        </>
    )
}

export default Menu
