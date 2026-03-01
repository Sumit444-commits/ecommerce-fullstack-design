import DealsAndOffers from "./DealsAndOffers"
import ExtraServices from "./ExtraServices"
import Hero from "./Hero"
import HomeAndOutdoor from "./HomeAndOutdoor"
import Newsletter from "./Newsletter"
import RecommendedItems from "./RecommendedItems"
import SupplierRequest from "./SupplierRequest"
import SuppliersByRegion from "./SuppliersByRegion"

const Home = () => {
     const interiorProducts = [
    { name: 'Soft chairs', price: 'USD 19', img: '/images/interior/1.svg' },
    { name: 'Sofa & chair', price: 'USD 19', img: '/images/interior/2.svg' },
    { name: 'Kitchen dishes', price: 'USD 19', img: '/images/interior/3.svg' },
    { name: 'Smart watches', price: 'USD 19', img: '/images/interior/4.svg' },
    { name: 'Kitchen mixer', price: 'USD 100', img: '/images/interior/5.svg' },
    { name: 'Blenders', price: 'USD 39', img: '/images/interior/6.svg' },
    { name: 'Home appliance', price: 'USD 19', img: '/images/interior/7.svg' },
    { name: 'Coffee maker', price: 'USD 10', img: '/images/interior/8.svg' },
  ];
     const techProducts = [
    { name: 'Smart Watches', price: 'USD 19', img: '/images/tech/1.svg' },
    { name: 'Smart Phones', price: 'USD 19', img: '/images/tech/2.svg' },
    { name: 'Smart Watches', price: 'USD 19', img: '/images/tech/3.svg' },
    { name: 'Smart Watches', price: 'USD 19', img: '/images/tech/4.svg' },
    { name: 'Smart Watches', price: 'USD 100', img: '/images/tech/5.svg' },
    { name: 'Smart Watches', price: 'USD 39', img: '/images/tech/6.svg' },
    { name: 'Smart Watches', price: 'USD 19', img: '/images/tech/7.svg' },
    { name: 'Smart Watches', price: 'USD 10', img: '/images/tech/8.svg' },
  ];
  return (
    <>
    <main className="bg-blue-100/10">

    <Hero />
    <DealsAndOffers />
    <HomeAndOutdoor products={interiorProducts} bg_img={"/images/bgs/home_outdoor.png"}/>
    <HomeAndOutdoor products={techProducts}  bg_img={"/images/bgs/consumer.png"}/>

    <SupplierRequest />
    <RecommendedItems />

    <ExtraServices />
    <SuppliersByRegion />
    <Newsletter />
    </main>

    </>
  )
}

export default Home