import { Product } from "../../types/product";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useParams, useSearchParams } from "react-router-dom";
import { DataEmpty } from "../../utils/layout";

const products: Product[] = [
    {
        id: "1",
        categoryId: "mobile-phones",
        code: "MP001",
        description: "A powerful smartphone with a sleek design.",
        summary: "Latest 5G smartphone with high performance.",
        unit: "pcs",
        price: 750000,
        discount: { type: "percent", value: 10 },
        type: "Electronics",
        name: "Apple iPhone 16 Pro Max 1TB",
        thumbnail:
          "https://www.designinfo.in/wp-content/uploads/2024/09/Apple-iPhone-16-Pro-128GB-Black-Titanium-8-485x485-optimized.webp",
        stock: 25,
        brand: "APPLE",
      },
      {
        id: "2",
        categoryId: "mobile-phones",
        code: "MP002",
        description: "A powerful smartphone with a sleek design.",
        summary: "Latest 5G smartphone with high performance.",
        unit: "pcs",
        price: 680000,
        discount: { type: "percent", value: 15 },
        type: "Electronics",
        name: "Apple iPhone 16 Pro Max 512GB",
        thumbnail:
          "https://celltronics.lk/wp-content/uploads/2024/09/iPhone-16-Pro-Max-1.png",
        stock: 25,
        brand: "APPLE",
      },
      {
        id: "3",
        categoryId: "mobile-phones",
        code: "MP003",
        description: "A powerful smartphone with a sleek design.",
        summary: "Latest 5G smartphone with high performance.",
        unit: "pcs",
        price: 598000,
        discount: { type: "percent", value: 10 },
        type: "Electronics",
        name: "Apple iPhone 16 Pro Max 250GB",
        thumbnail:
          "https://celltronics.lk/wp-content/uploads/2024/09/iPhone-16-Pro-Max-1.png",
        stock: 25,
        brand: "APPLE",
      },
      {
        id: "4",
        categoryId: "mobile-phones",
        code: "MP004",
        description: "A compact yet powerful smartphone with sleek titanium edges.",
        summary: "Apple's flagship 2023 smartphone with exceptional features.",
        unit: "pcs",
        price: 530000,
        discount: { type: "percent", value: 5 },
        type: "Electronics",
        name: "Apple iPhone 15 Pro 256GB",
        thumbnail:
          "https://celltronics.lk/wp-content/uploads/2024/09/iPhone-16-Pro-Max-1.png",
        stock: 30,
        brand: "APPLE",
      },
      {
        id: "5",
        categoryId: "mobile-phones",
        code: "MP005",
        description: "The essential iPhone experience with cutting-edge performance.",
        summary: "Affordable yet powerful 2023 smartphone with dynamic features.",
        unit: "pcs",
        price: 480000,
        discount: { type: "percent", value: 5 },
        type: "Electronics",
        name: "Apple iPhone 15 128GB",
        thumbnail:
          "https://celltronics.lk/wp-content/uploads/2023/09/Apple-iPhone-15-4-600x600.jpg",
        stock: 40,
        brand: "APPLE",
      },
      {
        id: "6",
        categoryId: "mobile-phones",
        code: "GP001",
        description: "Google's latest smartphone with AI-powered features.",
        summary: "Experience the best of Android with Pixel 8.",
        unit: "pcs",
        price: 450000,
        discount: { type: "percent", value: 5 },
        type: "Electronics",
        name: "Google Pixel 8",
        thumbnail:
          "https://celltronics.lk/wp-content/uploads/2024/08/Google-Pixel-9-600x600.png",
        stock: 20,
        brand: "GOOGLE",
      },
      {
        id: "7",
        categoryId: "mobile-phones",
        code: "GP002",
        description: "Google's flagship smartphone with advanced camera technology.",
        summary: "AI-driven photography and performance with Pixel 8 Pro.",
        unit: "pcs",
        price: 600000,
        discount: { type: "percent", value: 8 },
        type: "Electronics",
        name: "Google Pixel 8 Pro",
        thumbnail:
          "https://celltronics.lk/wp-content/uploads/2023/10/Google-Pixel-8-Pro.jpg",
        stock: 15,
        brand: "GOOGLE",
      },
      {
        id: "8",
        categoryId: "mobile-phones",
        code: "GP003",
        description: "The next-generation Pixel smartphone with cutting-edge features.",
        summary: "Google's flagship for 2024, combining power and design.",
        unit: "pcs",
        price: 650000,
        discount: { type: "percent", value: 7 },
        type: "Electronics",
        name: "Google Pixel 9",
        thumbnail:
          "https://celltronics.lk/wp-content/uploads/2024/08/Google-Pixel-9-600x600.png",
        stock: 10,
        brand: "GOOGLE",
      },
      {
        id: "9",
        categoryId: "laptops",
        code: "LP001",
        description: "A high-performance laptop with the M2 Max chip.",
        summary: "Powerful Apple MacBook for professionals.",
        unit: "pcs",
        price: 1200000,
        discount: { type: "percentage", value: 10 },
        type: "Electronics",
        name: "Apple MacBook Pro 16-inch M2 Max",
        thumbnail:
          "https://idealz.lk/wp-content/uploads/2022/06/MacBook-Pro-M2-1.jpg",
        stock: 10,
        brand: "APPLE",
      },
      {
        id: "10",
        categoryId: "laptops",
        code: "LP002",
        description: "Lightweight and portable with powerful performance.",
        summary: "Apple MacBook Air with Retina Display.",
        unit: "pcs",
        price: 950000,
        discount: { type: "percentage", value: 8 },
        type: "Electronics",
        name: "Apple MacBook Air M2 13-inch",
        thumbnail:
          "https://idealz.lk/wp-content/uploads/2022/07/MacBook-Air-M2-1.jpg",
        stock: 15,
        brand: "APPLE",
      },
    {
      id: "11",
      categoryId: "laptops",
      code: "LP003",
      description: "A gaming laptop with next-gen NVIDIA GPU.",
      summary: "High-end laptop designed for gamers and creators.",
      unit: "pcs",
      price: 1400000,
      discount: { type: "percent", value: 12 },
      type: "Electronics",
      name: "ASUS ROG Zephyrus G16",
      thumbnail:
        "https://i0.wp.com/www.redlinetech.lk/wp-content/uploads/2024/01/ASUS-ROG-Zephyrus-GU603VV-G16-Core-i7-13th-Gen-RTX-4060-8GB-Gaming-Laptop.webp?resize=430%2C430&ssl=1",
      stock: 20,
      brand: "ASUS",
    },
    {
      id: "12",
      categoryId: "laptops",
      code: "LP004",
      description: "Compact and powerful with premium build quality.",
      summary: "A versatile laptop for work and entertainment.",
      unit: "pcs",
      price: 1150000,
      discount: { type: "percent", value: 7 },
      type: "Electronics",
      name: "ASUS ZenBook 14 OLED",
      thumbnail:
        "https://i0.wp.com/www.redlinetech.lk/wp-content/uploads/2024/05/ASUS-Zenbook-Q425MA-14-OLED-Ultra-7-Laptop-copy.webp?resize=430%2C430&ssl=1",
      stock: 12,
      brand: "ASUS",
    },
    {
      id: "13",
      categoryId: "laptops",
      code: "LP005",
      description: "Premium design with high-resolution display.",
      summary: "A robust business laptop for professionals.",
      unit: "pcs",
      price: 1100000,
      discount: { type: "percent", value: 5 },
      type: "Electronics",
      name: "HP Spectre x360 14",
      thumbnail:
        "https://i0.wp.com/www.redlinetech.lk/wp-content/uploads/2024/07/Hp-15s-Ryzen-7.webp?resize=430%2C323&ssl=1",
      stock: 8,
      brand: "HP",
    },
    {
      id: "14",
      categoryId: "laptops",
      code: "LP006",
      description: "Reliable laptop for everyday tasks.",
      summary: "Affordable laptop with solid performance.",
      unit: "pcs",
      price: 600000,
      discount: { type: "percent", value: 5 },
      type: "Electronics",
      name: "HP Pavilion 15",
      thumbnail:
        "https://i0.wp.com/www.redlinetech.lk/wp-content/uploads/2024/02/HP-250-G10-laptops-sri-lanka.webp?resize=430%2C430&ssl=1",
      stock: 25,
      brand: "HP",
    },
      {
        id: "15",
        categoryId: "accessories",
        code: "AE001",
        description: "Smart speaker with Alexa built-in, provides hands-free control.",
        summary: "Amazon Echo Dot – 4th Generation with improved sound and voice control.",
        unit: "pcs",
        price: 28500,
        discount: { type: "percent", value: 10 },
        type: "Electronics",
        name: "Amazon Echo Dot 5th Generation",
        thumbnail: "https://www.simplytek.lk/cdn/shop/files/Amazon_Echo_dot-5th-gen-simplytek_srilanka-7.jpg?v=1694426395&width=1220", 
        stock: 50,
        brand: "AMAZON",
      },
      {
        id: "16",
        categoryId: "accessories",
        code: "MK001",
        description: "Wireless keyboard designed for Mac devices with US English layout.",
        summary: "Magic Keyboard – US English with sleek design and responsive keys.",
        unit: "pcs",
        price: 55000,
        type: "Electronics",
        name: "Magic Keyboard – US English",
        thumbnail: "https://appleasia.lk/wp-content/uploads/2024/09/Magic-Keyboard-1-600x600.jpg", 
        stock: 30,
        brand: "APPLE",
      },
      {
        id: "17",
        categoryId: "accessories",
        code: "AP001",
        description: "Apple’s stylus for iPad, providing precision and natural writing experience.",
        summary: "Apple Pencil (2nd generation) for seamless drawing and note-taking on iPad.",
        unit: "pcs",
        price: 39990,
        type: "Electronics",
        name: "Apple Pencil (2nd generation)",
        thumbnail: "https://appleasia.lk/wp-content/uploads/2024/09/MX2D3-600x600.jpeg", 
        stock: 0,
        brand: "APPLE",
      },
  ];
  
  

  export default function ProductsPage() {
    const { categoryId } = useParams();
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search')?.toLowerCase() || "";
    const brand = searchParams.get('brand') || "";
  
    const filterProductsByCategory = (categoryId: string | undefined) => {
      if (!categoryId) return products;
      return products.filter((product) => product.categoryId === categoryId);
    };
  
    const filterProductsBySearch = (products: Product[], search: string) => {
      if (!search) return products;
      return products.filter((product) =>
        product.name.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        product.brand.toLowerCase().includes(search)
      );
    };
  
    const filterProductsByBrand = (products: Product[], brand: string) => {
      if (!brand) return products;
      return products.filter((product) => product.brand.toLowerCase() === brand.toLowerCase());
    };
  
    const filteredByCategory = filterProductsByCategory(categoryId);
    const filteredBySearch = filterProductsBySearch(filteredByCategory, search);
    const finalFilteredProducts = filterProductsByBrand(filteredBySearch, brand);
  
    return (
      <div className="p-6 bg-white h-full">
        {finalFilteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {finalFilteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="w-full flex justify-center">
            <DataEmpty />
          </div>
        )}
      </div>
    );
  }