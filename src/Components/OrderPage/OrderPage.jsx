import { useEffect, useState } from "react";
import { FaCross, FaEdit, FaHandHolding } from "react-icons/fa";
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
        <div className="mx-5 ">
            <div className="flex items-center justify-center md:-ml-[5rem] gap-5">
                <div className="dropdown relative">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <HiMenu className="h-8 w-8" />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#e4e1e1] rounded-box md:w-[20rem] w-[21rem] h-[30rem] md:h-[45rem] relative">
                        <div className="bg-[#e0dcdc] p-4 ">
                            <h1 className="text-center text-4xl font-bold">go<span className="text-[#62e069] ">B</span>illing</h1>
                            <p>location:</p>
                            <p className="font-bold text-xl">Los Angeles , California</p>
                        </div>
                        <div>
                            <ul>
                                <li className="px-2 py-2 mb-2 hover:bg-slate-300 border border-[#d4d1d1] rounded-md"><a className="text-[18px]  "><HiOutlineViewGrid />Dashboard</a></li>
                                <li className="px-2 py-2 mb-2 hover:bg-slate-300 border border-[#d4d1d1] rounded-md"><a className="text-[18px]  "><HiLocationMarker />Location</a></li>
                                <li className="px-2 py-2 mb-2 hover:bg-slate-300 border border-[#d4d1d1] rounded-md"><a className="text-[18px]  "><HiCurrencyYen />POS Invoices</a></li>
                                <li onClick={() => document.getElementById('my_modal_4').showModal()} className="px-2 py-2 mb-2 hover:bg-slate-300 border border-[#d4d1d1] rounded-md"><a className="text-[18px]  "><HiCog8Tooth />Settings</a></li></ul></div>
                        {/* Open the modal*/}
                        <dialog id="my_modal_4" className="modal md:modal-bottom sm:modal-top">
                            <div className="modal-box ">
                                <div className="">
                                    <div className="flex justify-center items-center gap-10 my-3">
                                        <form method="dialog">
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

                                <p className="flex text-[blue] font-bold  gap-5"> <HiOutlinePlusCircle className="h-6 w-6 text-[blue] " />Add more details</p>
                                <button className="bg-[#5454f0] text-white px-4 w-full mt-4 py-3  text-xl font-bold items-center text-center">Update</button>

                            </div>
                        </dialog>



                        <button className="absolute bottom-0 left-0 hover:bg-[#a5a2a2] right-0 mx-auto mb-2 border-[2px] border-[#c9c8c8] w-[90%] p-3 text-center font-bold">
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
                <HiOutlinePlusCircle onClick={() => document.getElementById('my_modal_2').showModal()} className="h-8 w-8 cursor-pointer" />
                {/* Open the modal*/}
                <dialog id="my_modal_2" className="modal md:modal-bottom sm:modal-top">
                    <div className="modal-box ">
                        <div className="">
                            <div className="flex justify-center items-center gap-10 my-3">
                                <form method="dialog">
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
            <div className="flex items-center justify-between px-3 py-3 bg-[#a3c8f8] ">
                <div className="flex items-center gap-3">
                    <h1 className="font-semibold text-xl ">Products Counts({totalProductCount})</h1>
                </div>
                <h1 className="text-xl font-bold">Total {totalPrice} </h1>
            </div>
            <div className="my-2 flex gap-5 justify-between">
                <button className="flex  justify-center items-center  gap-3 text-[#f86464] hover:border-[#8eaaf7] cursor-pointer bg-[#f3c5be] px-[6px] md:px-[5px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[20px] text-[15px] mb-2 md:font-bold  font-semibold"><FaCross className="hidden md:flex"></FaCross>Cancel</button>
                <button className="flex  justify-center items-center  gap-3 text-[#7b9bf3] hover:border-[#8eaaf7] cursor-pointer bg-[#d4defa] px-[6px] md:px-[5px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[20px] text-[15px] mb-2 md:font-bold  font-semibold"><FaHandHolding className="hidden md:flex"></FaHandHolding>Hole</button>
                <button className="flex  justify-center items-center  gap-3 text-[#7b9bf3] hover:border-[#8eaaf7] cursor-pointer bg-[#d4defa] px-[6px] md:px-[5px] md:py-2 border-[1px] border-[#c9c5c5] rounded-sm  md:text-[20px] text-[15px] mb-2 md:font-bold  font-semibold"><FaEdit className="hidden md:flex"></FaEdit>Discount</button>
                <button onClick={() => document.getElementById('my_modal_3').showModal()} className="flex  justify-center items-center  gap-3 text-[#6e90f0]  cursor-pointer bg-[#d3def8] px-[6px] md:px-[5px] md:py-2 border-[1px] border-[#a4c2e9] rounded-sm  md:text-[20px] text5[18px] mb-2 md:font-bold  font-semibold"><FaEdit className="hidden md:flex"></FaEdit>Pay Now</button>
                <dialog id="my_modal_3" className="modal md:modal-bottom sm:modal-top">
                    <div className="modal-box ">
                        <form method="dialog">
                        </form>
                        <div className="drawer-content flex flex-col items-center bg-[#e9ecef] ">
                            <div className="flex justify-between items-center md:gap-48 gap-20 my-3 px-2 py-2 border-[1px] border-[#d1cdcd] ">
                                <h3 className=" text-lg  ">Order Amount</h3>
                                <p className="text-xl font-bold">${totalPrice} </p>

                            </div>
                        </div>
                        <div className="md:flex gap-3 md:gap-10 md:mt-8 bg-[#eeeded] md:p-3 p-2 ">
                            <div className="md:w-1/3">
                                <ul>
                                    <li className="px-2 py-1 mb-2 hover:bg-slate-300 border border-[#d4d1d1] rounded-md"><a className="text-[14px]  ">Cash</a></li>
                                    <li className="px-2 text-[blue] py-1 mb-2 bg-slate-300 border border-[#d4d1d1] rounded-md"><a className="text-[14px]  ">Card</a></li>
                                    <li className="px-2 py-1 mb-2 hover:bg-slate-300 border border-[#d4d1d1] rounded-md"><a className="text-[14px]  ">On Account</a></li>
                                    <li className="px-2 py-1 mb-2 hover:bg-slate-300 border border-[#d4d1d1] rounded-md"><a className="text-[14px]  ">Checque</a></li></ul>


                            </div>
                            <h1 className="border border-[#585757]"></h1>
                            <div className="md:w-2/3 mt-5 md:mt-0">

                                <label className="input  input-bordered mb-2 flex items-center gap-2">

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
                                <div className="flex gap-8">
                                    <form method="dialog">
                                        <button className="flex justify-center gap-2
                                        bg-[#fca7a7] text-white px-2 w-full mt-4 py-2  text-[14px] font-bold items-center text-center">    <FaCross></FaCross>close</button>

                                    </form>
                                    <button className="bg-[#5454f0] text-white px-1 w-full mt-4 py-1  text-[14px] font-bold items-center text-center">Complete Payment</button></div>
                            </div>
                        </div>




                    </div>
                </dialog>



            </div>
        </div>



    );
};

export default OrderPage;