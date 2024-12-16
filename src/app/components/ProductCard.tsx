import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Image from "next/image";

const ProductCard = ({
  image,
  name,
  price,
  oldPrice,
  reviews,
}: {
  image: string;
  name: string;
  price: number;
  oldPrice: number;
  reviews: number;
}) => {
  return (
    <div className="border p-4 w-[300px] rounded shadow">
      <div className="relative bg-gray-100 text-xl">
        {/* Use width and height properties for next/image */}
        <Image
          src={image}
          alt={name}
          width={180}  // Specify width
          height={180} // Specify height
          className="object-cover rounded"
        />
<span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          -{Math.round(((oldPrice - price) / oldPrice) * 100)}%
        </span>
        <span className="absolute top-2 right-0 text-black text-xs px-2 py-1 rounded">
          <FaRegHeart className="text-xl bg-white bg-cover p-1 rounded-full shadow-md items-center justify-center" />
          <MdOutlineRemoveRedEye className="text-xl bg-white bg-cover p-1 rounded-full shadow-md items-center justify-center" />
        </span>
      </div>
      <h3 className="text-md font-semibold mt-3">{name}</h3>
      <p className="text-gray-600 text-sm">
      <span className="text-red-500 ">${price}</span>
        <span className="line-through">${oldPrice}</span>{" "}
        
      </p>
      <div className="flex items-center mt-2">
        <div className="flex">
          <span className="text-yellow-400">⭐</span>
          <span className="text-yellow-400">⭐</span>
          <span className="text-yellow-400">⭐</span>
          <span className="text-yellow-400">⭐</span>
          <span className="text-gray-300">⭐</span>
        </div>
        <span className="text-sm ml-2">({reviews})</span>
      </div>
    
    
    </div>
  );
};

export default ProductCard;
