import React from 'react';


interface Product {
  id: number;
  title: string;
  price: number;
  cores: number;
  ram: string;
  storage: string;
  snapshots: number;
  traffic: string;
}

interface ProductProps {
  product: Product;
}

const ProductCardCloudServer: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 m-2 w-full max-w-xs">
      <h3 className="text-xl font-semibold">{product.title}</h3>
      <p className="text-3xl font-bold"> {product.price.toFixed(2)} / mensal KZ</p>
      <ul className="mt-4 space-y-2">
        <li>✔️ {product.cores} vCPU Cores</li>
        <li>✔️ {product.ram}</li>
        <li>✔️ {product.storage}</li>
        <li>✔️ {product.snapshots} Snapshots</li>
        <li>✔️ {product.traffic}</li>
      </ul>
     <div className='w-full flex justify-center items-center' >
     <button className="bg-blue-500 text-white mt-4 px-6 py-2 rounded-md">Selecionar</button>
     </div>
    </div>
  );
};

export default ProductCardCloudServer;
