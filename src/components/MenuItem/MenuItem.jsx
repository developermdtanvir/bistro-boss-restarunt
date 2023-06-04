function MenuItem({ item }) {
    console.log(item);
    return (
        <div className=" flex items-center space-x-5">
            <img className=" w-32" style={{ borderRadius: '0 200px 200px 200px' }} src={item.image} alt="" />
            <div>
                <h1 className=" uppercase">{item.name}------------</h1>
                <p>{item.recipe}</p>
            </div>
            <span className=" text-[#BB8506] ">${item?.price}</span>
        </div>
    )
}

export default MenuItem;