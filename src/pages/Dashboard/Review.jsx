import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle/SectionTitle";



function Review() {
    const { register, handleSubmit, formState: { errors } } = useForm();



    const [rating, setRating] = useState(0);

    const handleSubmitReview = (data) => {
        console.log(data, rating);
    }

    return (
        <div className="lg:w-[700px] w-full lg:p-20 p-5 bg-base-200">
            <SectionTitle heading={'GIVE A REVIEW...'} subHeading={'Sharing is Caring!!!'} />
            <div>
                <form onSubmit={handleSubmit(handleSubmitReview)} className="space-y-10">
                    <div className="flex flex-col items-center justify-center mt-5">
                        <h1 className="text-4xl">Rate US !</h1>
                        <Rating

                            style={{ maxWidth: 180 }}
                            value={rating}
                            onChange={setRating}

                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Which Recipe You Like Most*</span>
                        </label>
                        <input {...register('recipe')} className="textarea textarea-primary" placeholder="Recipe you liked most" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Do you have any suggestion for us?</span>
                        </label>
                        <input {...register('suggestion')} className="textarea textarea-primary" placeholder="Suggation" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Kindly express your care in a short way.</span>
                        </label>
                        <textarea {...register('details')} className="textarea textarea-primary" placeholder="Review in detail"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#D1A054] text-white">Send Review</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Review;