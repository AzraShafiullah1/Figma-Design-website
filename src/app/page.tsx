
import CountdownStatic from './components/CountdownStatic';
import ProductList from './components/ProductList';
import Hero from '@/app/components/Hero';
import Category from "@/app/components/Category"
import Selling from './components/Selling';
import Music from './components/Music';
import ExploreProduct from './components/ExploreProduct';
import Feature from './components/Feature';




export default function Home() {
  
return (
 <div>


     <Hero />
    
      <div className='ml-44 pt-14'>
      <div className='flex'>
      <button className='h-[40px] w-[20px] bg-red-500 ml-4'></button>
      <span className="  left-2 ml-3 font-bold text-red-500 size-13 px-2 py-1 rounded">Today&apos;s</span>
      </div>
      <div className='flex'>
      <h2 className="text-4xl pt-8 ml-4 font-bold mb-3">Flash Sales</h2>
      <CountdownStatic />
    </div>
    
      </div>
      <ProductList />
      
      
      <div className='ml-44 pt-14'>
      <div className='flex'>
      <button className='h-[40px] w-[20px] bg-red-500 ml-4'></button>
      <span className="left-2 ml-3 font-bold text-red-500 size-13 px-2 py-1 rounded">Categories</span>
      </div>
      <div className='flex'>
      <h2 className="text-4xl pt-8 ml-4 font-bold mb-3">Browse By Category</h2>
      
  </div>
</div>

  <Category />

  <Selling />
  <Music />

  <div className='ml-44 pt-14'>
      <div className='flex'>
      <button className='h-[40px] w-[20px] bg-red-500 ml-4'></button>
      <span className="  left-2 ml-3 font-bold text-red-500 size-13 px-2 py-1 rounded">Our Products</span>
      </div>
      <div className='flex'>
      <h2 className="text-4xl pt-8 ml-4 font-bold mb-3">Explore Our Products</h2>
      </div>
  
  <ExploreProduct />

  <div className='ml-44 pt-14'>
      <div className='flex'>
      <button className='h-[40px] w-[20px] bg-red-500 ml-4'></button>
      <span className="  left-2 ml-3 font-bold text-red-500 size-13 px-2 py-1 rounded">Featured</span>
      </div>
      <div className='flex'>
      <h2 className="text-4xl pt-8 ml-4 font-bold mb-3">New Arrival</h2>
      </div>
      </div>
<Feature />

  </div>
  </div>



 );
}
