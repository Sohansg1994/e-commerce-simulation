import { PhoneIcon } from "@heroicons/react/20/solid"; // For Mobile Phones
import { ComputerDesktopIcon } from "@heroicons/react/20/solid"; // For Laptops
import { DeviceTabletIcon } from "@heroicons/react/20/solid"; // For Tablets
import { Cog6ToothIcon } from "@heroicons/react/20/solid"; // For Accessories
import Dropdown from "../elements/DropDown";
import { useNavigate } from "react-router-dom";
import { Option } from "../../types/common";

/* -------------------------------------------------------------------------- */
const brands:Option[]=[
  {id:'APPLE',name:"Apple"},
  {id:'GOOGLE',name:"Google"},
  {id:'ASUS',name:"Asus"},
  {id:'HP',name:"Hp"},
]
export default function CategoryBar() {
  const navigate=useNavigate()
  const options = [
    {
      label: 'Mobile Phones',
      icon: PhoneIcon,
      onClick: () => navigate('/product-category/mobile-phones'),
    },
    {
      label: 'Laptops',
      icon: ComputerDesktopIcon,
      onClick: () => navigate('/product-category/laptops'),
    },
    {
      label: 'Tablets',
      icon: DeviceTabletIcon,
      onClick: () => navigate('/product-category/tablets'),
    },
    {
      label: 'Accessories',
      icon: Cog6ToothIcon,
      onClick: () => navigate('/product-category/accessories'),
    },
   
  ];
  const handleBrandSelect=(brand:string)=>{
    navigate(`/?brand=${brand}`)
  }
  return (
    <div className="bg-primary-light">
    <div className="max-w-screen-xl mx-auto w-full flex items-center px-4 gap-10">
      <div className="flex gap-5 items-center ">
        <Dropdown options={options} />
      </div>
      <div className="sm:grid  overflow-hidden divide-secondary-dark/80 hidden  sm:grid-cols-4 sm:divide-x sm:divide-y-0 ">
      {brands.map((brand,index)=>(
        <div className="text-typography-light hover:text-secondary-light cursor-pointer px-5" key={index} onClick={()=>handleBrandSelect(brand.id)}>{brand.name}</div>
      ))
      }
      </div>
    </div>
  </div>
  )
}
