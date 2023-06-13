import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle/SectionTitle";



function UpdateItem() {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_API}`
    const handleAddItem = (data) => {
        const { name, price, category, details } = data;

        const formData = new FormData()
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    const image = data.data.display_url
                    const menuItem = { name, recipe: details, image, price, category }
                    fetch('http://localhost:3000/menu', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(menuItem)
                    }).then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                Swal.fire(
                                    'Item Added',
                                    'You clicked the button!',
                                    'success'
                                )
                            }
                        })
                }
            });

    }
    return (
        <div className="lg:w-[700px] w-full lg:p-20 p-5 bg-base-200">
            <SectionTitle heading={'ADD AN ITEM'} subHeading={'What`s new ?'} />
            <div>
                <form {...register('form')} onSubmit={handleSubmit(handleAddItem)} className="space-y-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input {...register('name', {
                            required: true
                        })} type="text" placeholder="Recipe Name" className="input input-bordered " />
                    </div>
                    <div className="flex flex-col justify-between lg:flex-row lg:space-x-10">
                        <div>
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select {...register("category", {
                                required: true
                            })} className="select select-secondary lg:w-full">
                                <option disabled selected>Select category</option>
                                <option value="salad">salad</option>
                                <option value="soup">soup</option>
                                <option value="pizza">pizza</option>
                                <option value="dessert">dessert</option>
                                <option value="offered">offered</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input {...register('price', {
                                required: true
                            })} type="number" placeholder="Price" className="input input-bordered lg:w-full" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea {...register('details')} className="textarea textarea-primary" placeholder="Details......"></textarea>
                    </div>
                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                    <div className="form-control mt-6">
                        <button className="btn bg-[#D1A054] text-white">Add Item</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateItem;