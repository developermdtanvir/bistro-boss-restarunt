import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from 'react-icons/fa';
import { Navigation } from "swiper";

function Testimonials() {

    const [review, setReview] = useState([]);

    console.log(review);

    useEffect(() => {
        axios.get('http://localhost:3000/reviews')
            .then(data => setReview(data.data))
    }, [])

    return (
        <section>
            <SectionTitle heading={'TESTIMONIALS'} subHeading={'What Our Client Say'} />

            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-md">

                    {
                        review.map(review => <SwiperSlide key={review._id}>
                            <div className="m-10 h-40 flex flex-col justify-center items-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft className="text-4xl" />
                                <p>{review.details}</p>
                                <h5 className=" text-amber-400 text-2xl uppercase">{review.name}</h5>
                            </div>

                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials;