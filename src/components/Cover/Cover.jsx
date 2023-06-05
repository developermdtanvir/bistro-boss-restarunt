import { Parallax } from 'react-parallax';

function Cover({ img, title, subtitle }) {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero min-h-screen" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" lg:w-[500px] bg-black bg-opacity-50 py-10 rounded-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 uppercase">{subtitle}</p>
                    </div>
                </div>
            </div>
            <div style={{ height: '200px' }} />
        </Parallax>

    )
}

export default Cover;