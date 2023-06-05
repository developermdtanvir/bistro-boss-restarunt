import featured from '../../../assets/home/featured.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
function Featured() {
    return (
        <div className='feacherd-item bg-fixed'>
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it out'} ></SectionTitle>
            <div className='lg:flex md:flex justify-center items-center text-center lg:py-32 lg:px-20 md:py-20 md:px-10'>
                <div >
                    <img src={featured} alt="" />
                </div>
                <div className=' md:ml-5 lg:ml-5 text-white'>
                    <p className=' text-xl'>March 20, 2023</p>
                    <h1 className=' uppercase'>WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4">BY NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Featured;