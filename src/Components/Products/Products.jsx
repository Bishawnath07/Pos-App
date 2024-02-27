import { useState } from "react";
import { useEffect } from "react";
import Cart from "./Cart";
import { HiEllipsisVertical } from "react-icons/hi2";


const Products = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <div className="sc-jsMahE gleeVG w-full flex items-center gap-1 ">
                <input type="text" placeholder="Search Prodeuct  ..." className="sc-qRumB kdwfXO" /><span className="bg-transparent pr-2">
                    <img className="w-full" src='https://demo.martvill.techvill.net/Modules/Pos/Resources/js/components/assets/images/search-icon.svg' alt="icon-name" /></span>
            </div>
            <div className="bg-[#f7f7f7] px-2 md:px-5 py-2 md:py-4">
                <div className="flex gap-2 md:gap-5 items-center md:justify-center">
                    <ul className="flex gap-1 md:gap-5 md:my-3">
                        <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px] mb-2 md:font-bold  font-semibold">All Categorys</li>
                        <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px] mb-2 md:font-bold  font-semibold">Electronics</li>
                        <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px] mb-2 md:font-bold  font-semibold">Home & Lifestyle </li>
                        <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px] mb-2 md:font-bold  font-semibold">Men Fashion</li>
                        <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px] mb-2 md:font-bold  font-semibold hidden md:flex">Women Fashion</li>


                    </ul>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="">
                            <button>
                                <HiEllipsisVertical className="text-[24px] -mt-[8px] cursor-pointer"></HiEllipsisVertical>
                            </button>
                        </div>
                        <ul tabIndex={0} className=" -mt-10 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box md:w-[40rem] w-[22rem] h-[10rem] md:h-[45rem] ">
                            <p className="hidden md:flex md:items-center justify-center text-center text-xl font-bold my-4">Categories</p>
                            <div className="grid grid-cols-4 md:grid-cols-5 gap-2 md:px-5">
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[2px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold">All Categorys</li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold">Electronics</li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold"> Lifestyle </li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold">Men Fashion</li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold hidden md:flex">Women Fashion</li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[2px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold">All Categorys</li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold">Electronics</li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold"> Lifestyle </li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold">Men Fashion</li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold hidden md:flex">Women Fashion</li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[2px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold">All Categorys</li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold">Electronics</li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold"> Lifestyle </li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold">Men Fashion</li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold hidden md:flex">Women Fashion</li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[2px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold">All Categorys</li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold">Electronics</li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold"> Lifestyle </li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold">Men Fashion</li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold hidden md:flex">Women Fashion</li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[2px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold">All Categorys</li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold">Electronics</li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold"> Lifestyle </li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold">Men Fashion</li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold hidden md:flex">Women Fashion</li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold"> Lifestyle </li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold">Men Fashion</li>
                                <li className="hover:text-[#97aff3] hover:border-[#8eaaf7] cursor-pointer bg-[#fff] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[14px] text-[10px]  md:font-bold  font-semibold hidden md:flex">Women Fashion</li>
                            </div>

                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-5">
                    {
                        product.map(singleProduct => <Cart key={singleProduct.id} product={singleProduct}></Cart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;