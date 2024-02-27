import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { HiDocumentAdd, HiLocationMarker, HiMenu, HiOutlineTruck, HiOutlineViewGrid } from "react-icons/hi";
import { HiChartPie, HiChevronLeft, HiCog8Tooth, HiCurrencyYen, HiMiniTrash, HiMinus, HiOutlinePlusCircle, HiOutlineUserCircle, HiPlus } from "react-icons/hi2";

const OrderPage = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch('order.json')
            .then(res => res.json())
            .then(data => setProducts(data.map(product => ({ ...product, count: 0 }))));
    }, []);

    const handleIncrement = (id) => {
        setProducts(products.map(product => {
            if (product.id === id) {
                return { ...product, count: product.count + 1 };
            }
            return product;
        }));
    };

    const handleDecrement = (id) => {
        setProducts(products.map(product => {
            if (product.id === id && product.count > 0) {
                return { ...product, count: product.count - 1 };
            }
            return product;
        }));
    };
    // Calculate total price
    const totalPrice = products.reduce((acc, product) => acc + (product.count * product.price), 0);

    // Calculate total product count
    const totalProductCount = products.reduce((acc, product) => acc + product.count, 0);

    return (
        <div>
            <div className="flex items-center justify-center md:-ml-[5rem] gap-5">
                <div className="dropdown relative">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <HiMenu className="h-8 w-8" />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#e4e1e1] rounded-box md:w-[20rem] w-[22rem] h-[10rem] md:h-[45rem] relative">
                        <div className="bg-[#e0dcdc] p-4 ">
                            <h1 className="text-center text-4xl font-bold">go<span className="text-[#62e069] ">B</span>illing</h1>
                            <p>location:</p>
                            <p className="font-bold text-xl">Los Angeles , California</p>
                        </div>

                        <li className='flex items-center gap-3'><a className="text-[18px] mb-2"></a></li>
                        <li ><a className="text-[18px] mb-2"><HiOutlineViewGrid />Dashboard</a></li>
                        <li ><a className="text-[18px] mb-2"><HiLocationMarker />Location</a></li>
                        <li ><a className="text-[18px] mb-2"><HiCurrencyYen />POS Invoices</a></li>
                        <li ><a className="text-[18px] mb-2"><HiCog8Tooth />Settings</a></li>



                        <button className="absolute bottom-0 left-0 right-0 mx-auto mb-2 border-[2px] border-[#c9c8c8] w-[90%] p-3 text-center font-bold">
                            Logout
                        </button>
                    </ul>
                </div>

                <ul className="flex gap-1 md:gap-5 md:my-3">
                    <li className="flex  justify-center items-center  gap-3 text-[#7b9bf3] hover:border-[#8eaaf7] cursor-pointer bg-[#d4defa] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[16px] text-[10px] mb-2 md:font-bold  font-semibold"><FaEdit></FaEdit>Note</li>
                    <li className="flex  justify-center items-center  gap-3 text-[#7b9bf3] hover:border-[#8eaaf7] cursor-pointer bg-[#d4defa] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[16px] text-[10px] mb-2 md:font-bold  font-semibold"><HiOutlineTruck></HiOutlineTruck>Shipping</li>
                    <li className="flex  justify-center items-center  gap-3 text-[#7b9bf3] hover:border-[#8eaaf7] cursor-pointer bg-[#d4defa] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[16px] text-[10px] mb-2 md:font-bold  font-semibold"><HiChartPie />Hold Orders </li>
                    <li className="flex  justify-center items-center  gap-3 text-[#7b9bf3] hover:border-[#8eaaf7] cursor-pointer bg-[#d4defa] px-[6px] md:px-[4px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[16px] text-[10px] mb-2 md:font-bold  font-semibold"><HiDocumentAdd />New Item</li>

                </ul>
            </div>
            <div className="flex items-center justify-between px-5 py-3 bg-[#a3c8f8] ">
                <div className="flex items-center gap-3">
                    <HiOutlineUserCircle className="h-8 w-8" />
                    <h1 className="font-semibold text-xl ">Steve Jobs</h1>
                </div>
                <HiOutlinePlusCircle onClick={() => document.getElementById('my_modal_5').showModal()} className="h-8 w-8 cursor-pointer" />
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box ">
                        <div className="">
                            <div className="flex justify-center items-center gap-10 my-3">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button ><HiChevronLeft className="h-5 w-5" /></button>
                                </form>
                                <h3 className="font-bold text-lg  ">Add New Costomer!</h3>
                            </div>
                        </div>
                        <label className="input input-bordered mb-2 flex items-center gap-2">

                            <input type="text" className="grow " placeholder="Name" />
                        </label>
                        <label className="input input-bordered mb-2 flex items-center gap-2">

                            <input type="text" className="grow " placeholder="Email" />
                        </label>
                        <label className="input input-bordered mb-2 flex items-center gap-2">

                            <input type="text" className="grow " placeholder="Phone" />
                        </label>
                        <label className="input input-bordered mb-2 flex items-center gap-2">

                            <input type="text" className="grow " placeholder="Currencey" />
                        </label>
                        <label className="input input-bordered mb-2 flex items-center gap-2">

                            <input type="text" className="grow" placeholder=" TAX ID" />
                        </label>
                        <p className="flex text-[blue] font-bold  gap-5"> <HiOutlinePlusCircle className="h-6 w-6 text-[blue] " />Add more details</p>
                        <button className="bg-[#5454f0] text-white px-4 w-full mt-4 py-3  text-xl font-bold items-center text-center">Update</button>

                    </div>
                </dialog>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">

                        <tbody>
                            {products.map(product =>
                                <tr key={product.id}>
                                    <th><FaEdit></FaEdit></th>
                                    <th>{product.name}</th>
                                    <td>${product.price}</td>
                                    <td><HiMinus onClick={() => handleDecrement(product.id)} /></td>
                                    <td>{product.count}</td>
                                    <td><HiPlus onClick={() => handleIncrement(product.id)} /></td>
                                    <td>${product.count * product.price}</td>
                                    <td><HiMiniTrash /></td>
                                </tr>

                            )}


                        </tbody>
                    </table>
                </div>
                <div className="w-1/2 sub total ml-auto">
                    <div className="flex flex-col my-5 ">
                        <div className="flex gap-10 justify-between items-center">
                            <p>Sub Total</p>
                            <p> ${totalPrice} </p>
                        </div>
                        <hr />
                        <div className="flex gap-10 justify-between  items-center">
                            <p>Tax</p>
                            <p>$25.50 </p>
                        </div>
                        <hr />
                        <div className="flex gap-10 justify-between items-center">
                            <p>Sub Total</p>
                            <p>$ 5.50 </p>
                        </div>
                        <hr />
                        <div className=" flex gap-10 justify-between items-center">
                            <p>Discount on Cart </p>
                            <p>$ 10 </p>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between px-5 py-3 bg-[#a3c8f8] ">
                <div className="flex items-center gap-3">
                    <h1 className="font-semibold text-xl ">Products Counts({totalProductCount})</h1>
                </div>
                <h1 className="text-xl font-bold">Total {totalPrice} </h1>
            </div>
        </div>



    );
};

export default OrderPage;