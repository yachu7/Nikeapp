import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"

const PopularProduct = () => {
  return (
    <section id="product" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold"> Our <span className="text-coral-red">Popolar Products</span></h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-grey">
          Experience top-notch quality and style iwth our sought-after selections. Discover a world of comfort, design, and value. 
        </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14"> 
        {products.map((product) => (
           <PopularProductCard key={product.name} {...product} />
        ))}
          
        </div>
    </section>
  )
}

export default PopularProduct