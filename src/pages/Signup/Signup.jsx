
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import loginImage from '../../assets/others/authentication2.png';
import { AuthContext } from '../../providers/AuthProvider';
import './Signup.css';


function Signup() {
    const { user, loginWithGoogle, loginWithGithub, loginWithFacebook, createUserEamilPass, updateUser } = useContext(AuthContext);

    const navigate = useNavigate()


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleGoogleSinIn = () => {
        loginWithGoogle()
            .then(res => {
                const { email, displayName } = res.user
                const saveUser = { email: email, name: displayName }

                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                }).then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                    toast.addEventListener('mouseenter', Swal.stopTimer)
                                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                                }
                            })

                            Toast.fire({
                                icon: 'success',
                                title: 'Signed up successfully'
                            })
                        }
                    })

            })
    }

    const handleCreateUser = data => {
        const { email, password, name } = data;
        const saveUser = { name, email }
        createUserEamilPass(email, password)
            .then(res => {
                const email = res.user.email
                fetch('http://localhost:3000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                }).then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true });
                        toast('user created successfully', {
                            icon: '👏'
                        })
                    });
                updateUser(name).then(res => {

                    fetch('http://localhost:3000/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(saveUser)
                    }).then(res => res.json())
                        .then(data => {

                        })
                })

            })
    };
    return (
        <div className=' background-image'>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col-reverse lg:flex-row">
                    <div className="text-center ">
                        <img src={loginImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm ">
                        <h1 className='hidden lg:flex justify-center items-center text-4xl text-black font-bold'>Signup</h1>
                        <form onSubmit={handleSubmit(handleCreateUser)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register('name')} type="text" placeholder="name" className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register('email', { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} type="email" placeholder="email" className="input input-bordered " />
                                {errors.email?.type === 'pattern' && <span role='alert' className=' text-red-500'>wrong email address</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register('password', { required: true, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ })} type="password" placeholder="password" className="input " />
                                {
                                    errors.password?.type === 'pattern' && <span role='alert' className=' text-red-600'>plize minimum 6 number and add one number with one special carecter</span>
                                }
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#D1A054] text-white">Sign Up</button>
                            </div>
                        </form>
                        <div className='text-center'>
                            <p className=' text-gray-400'>Or sign in with</p>
                            <br />
                            <div className="flex justify-around items-center">
                                <FaFacebookF onClick={loginWithFacebook} className="text-4xl text-gray-500 border-gray-500 cursor-pointer border-2 rounded-full" />
                                <FaGithub onClick={loginWithGithub} className="text-4xl text-gray-500 border-gray-500 cursor-pointer border-2 rounded-full" />
                                <AiOutlineGoogle onClick={handleGoogleSinIn} className="text-4xl text-gray-500 border-gray-500 cursor-pointer border-2 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Signup;