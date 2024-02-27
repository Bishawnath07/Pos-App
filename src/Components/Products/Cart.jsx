
const Cart = ({ product }) => {
    const { url, name, price } = product;
    return (
        <div>
            <div className="flex active:opacity-70 flex-col w-full transition-all cursor-pointer pointer-events-auto border-[1px] border-[#c9c5c5]  ">
                <div className="card-image h-[120px] md:h-[140px] 2xl:h-[164px] border border-color_DF  rounded relative transition-all overflow-hidden">
                    <div className="relative w-full h-full opacity-100">
                        <img className="w-full h-full object-cover" src={url} alt="" />

                    </div>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center">
                        <p className="text-center  text-[13px] text-color_2C font-semibold leading-5 mt-1.5"><span>${price} </span><span className="ml-1 line-through text-color_89"></span></p>
                    </div>
                    <hr />
                    <p className="text-[13px] text-color_2C font-medium leading-5 mt-1 line-clamp">{name}</p>

                </div>
            </div>
        </div>
    );
};

export default Cart;