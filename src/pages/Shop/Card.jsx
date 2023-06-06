function Card({ item }) {
    console.log(item);
    return (
        <div className=" mt-5">
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={item.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn text-orange-500 border-0 border-b-4 bg-slate-300 border-orange-500">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;