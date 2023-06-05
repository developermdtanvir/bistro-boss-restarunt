import boss from '../../../assets/home/chef-service.jpg';
function Boss() {
    return (
        <div className=" lg:h-80 md:h-80 h-40 my-10">
            <img src={boss} className=' rounded-md  absolute container' alt="" />
            <div className=' w-3/4 mx-auto bg-slate-100 h-2/4 top-4 relative lg:h-3/4 lg:top-1/4 md:bottom-2/4 md:h-2/4 text-center flex flex-col justify-center'>
                <h1 className=' xl:text-4xl lg:text-3xl text-black font-bold ' style={{ fontFamily: 'sans' }}>Bistro Boss</h1>
                <p className=' overflow-hidden'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eveniet, incidunt neque velit totam tempora consequuntur vel at ab beatae. Architecto soluta sunt quia adipisci dolore eveniet, magnam distinctio ipsa?</p>
            </div>
        </div>
    )
}

export default Boss;