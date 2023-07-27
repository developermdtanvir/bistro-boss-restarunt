import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/others/authentication2.png';
import useToken from '../../hooks/useToken';
import { AuthContext } from '../../providers/AuthProvider';
import './Login.css';
function Login() {
    const { user, loginWithGoogle, loginWithGithub, loginWithFacebook, signinUserEmailPass } = useContext(AuthContext);
    console.log(user);

    const [error, setError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail);

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";



    const { register, handleSubmit, watch, formState: { errors }, } = useForm();

    const handleGithubSignIn = () => {
        loginWithGithub()
            .then(res => {
                const { email, displayName } = res.user
                const saveUser = { email: email, name: displayName }

                fetch('https://bistro-boss-restaurant-server-ecru.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                }).then(res => res.json())
                    .then(data => {

                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true })
                        fetch('https://bistro-boss-restaurant-server-ecru.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        }).then(res => res.json())
                            .then(data => {
                                if (data.acknowledged) {
                                    toast.success('successfully login')
                                }
                            })
                    });



            })
    }

    const handleGoogleSinIn = () => {
        loginWithGoogle()
            .then(res => {
                const { email, displayName } = res.user
                const saveUser = { email: email, name: displayName }

                fetch('https://bistro-boss-restaurant-server-ecru.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true })
                        fetch('https://bistro-boss-restaurant-server-ecru.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        }).then(res => res.json())
                            .then(data => {
                                if (data.acknowledged) {
                                    toast.success('successfully login')
                                }
                            })
                    });



            })
    }


    const handleLogin = data => {
        const { email, password } = data;
        signinUserEmailPass(email, password)
            .then(res => {
                const email = res.user.email;

                toast.success('Successfully Login')
                fetch('https://bistro-boss-restaurant-server-ecru.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                }).then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token);
                        console.log(data);
                    });

                navigate(from, { replace: true });
            }).catch(error => {
                setError('Wrong Email address or password');
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
                        <h1 className='hidden lg:flex justify-center items-center text-4xl text-black font-bold'>Login</h1>
                        <form {...register('form')} onSubmit={handleSubmit(handleLogin)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register('email')} type="email" placeholder="email" className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register('password')} type="password" placeholder="password" className="input " />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#D1A054] text-white">Login</button>
                            </div>
                            {
                                error && <p className=' text-red-600'>{error}</p>
                            }
                        </form>
                        <div className='text-center'>
                            <p className=' text-gray-400'>Or sign in with</p>
                            <br />

                            <div className="flex justify-around items-center">
                                <FaFacebookF onClick={loginWithFacebook} className="text-4xl text-gray-500 border-gray-500 cursor-pointer border-2 rounded-full" />
                                <FaGithub onClick={handleGithubSignIn} className="text-4xl text-gray-500 border-gray-500 cursor-pointer border-2 rounded-full" />
                                <AiOutlineGoogle onClick={handleGoogleSinIn} className="text-4xl text-gray-500 border-gray-500 cursor-pointer border-2 rounded-full" />
                            </div>
                            <br />
                            <Link to='/signup'><span className='text-orange-400'>New here? Create a New Account</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;