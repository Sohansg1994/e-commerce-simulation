import { useEffect, useState } from "react";
import { Option } from "../../types/common";
import SelectSearch from "../elements/SelectSearch";
import Logo from "../../assets/Logo.png"; 
import { ShoppingCartIcon} from "@heroicons/react/24/outline";
import useCartStore from "../../stores/useCartStote";
import { useNavigate } from "react-router-dom";
import UserMenu from "./UserMenu";

const categories: Option[] = [
  { id: "any", name: "Any" },
  { id: "mobile-phones", name: "Mobile Phones" },
  { id: "laptops", name: "Laptops" },
  { id: "accessories", name: "Accessories" },
 
];

/* -------------------------------------------------------------------------- */
/*                                 component                                  */
/* -------------------------------------------------------------------------- */
export default function TopBar() {
  const {productCount} = useCartStore((state) => state);
  const [selectedCategory, setSelectedCategory] = useState<Option>(categories[0]);
 
  const [animatePing, setAnimatePing] = useState(false);
  const navigate=useNavigate()
  useEffect(() => {
    if (
      productCount !== 0 && 
      !animatePing
    ) {
      setAnimatePing(true);
      setTimeout(() => {
        setAnimatePing(false);
      }, 500);
    }
  }, [productCount]);
  const handleQuary=(query:string)=>{
    navigate(selectedCategory.id==='any'?`/?search=${query}`:`product-category/${selectedCategory.id}?search=${query}`)
  }

  return (
    <div className="bg-zinc-50">
      <div className="max-w-screen-xl mx-auto w-full flex items-center px-4 py-5">
        <div className="flex gap-10 items-center">
          <img className="h-16 sm:h-20 " src={Logo} alt="Logo"  onClick={()=>navigate('/')}/>
          <div className="hidden md:block">
            <SelectSearch options={categories} selected={selectedCategory} setSelected={setSelectedCategory}  handleQuary={handleQuary}/>
          </div>
        </div>
        <div className="flex-grow"></div>
        <div className="flex gap-5 items-center">
          <div>
              <UserMenu/>
            </div>
            <button className="relative" onClick={()=>navigate('cart')}>
                    <div className="absolute -top-3 -left-4">
                      {productCount > 0 && (
                        <div
                          className={`relative p-2 rounded-full bg-secondary-light backdrop-blur-md ${
                            animatePing ? "animate-ping" : ""
                          }`}
                        >
                          <div className="absolute inset-0 flex items-center justify-center  text-typography-light text-center text-[9px] font-medium">
                            {productCount}
                          </div>
                        </div>
                      )} 
                    </div>
                    <ShoppingCartIcon className="w-8 text-black hover:text-secondary-light" />
              </button>
        </div>
      </div>
      <div className="md:hidden mb-5 px-5">
            <SelectSearch options={categories} selected={selectedCategory} setSelected={setSelectedCategory} handleQuary={handleQuary} short/>
      </div>
    </div>
  );
}
