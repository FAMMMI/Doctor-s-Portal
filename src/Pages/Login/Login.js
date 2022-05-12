import auth from '../../firebase.init'
import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading'
import { Link } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInErrorMessage;

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        signInErrorMessage = <p className='text-red-500 text-sm'>{error?.message || gError?.message}</p>
    }

    if (user || gUser) {
        console.log(user || gUser);

    }

    const onSubmit = data => {

        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className='flex items-center h-screen justify-center'>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>

                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'

                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email.'
                                }
                            })} type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}


                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>

                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'

                                },
                                minLength: {
                                    value: 6,
                                    message: 'Provide a strong password.'
                                }
                            })} type="password" placeholder="Your password" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}


                            </label>
                        </div>
                        {signInErrorMessage}
                        <input className='btn w-full max-w-xs text-white' type="submit" value='Login' />
                    </form>
                    <p><small>New to Doctor's Portal? <Link className='text-secondary' to="/signup">Create New Account</Link></small></p>
                    <div class="divider">OR</div>
                    <button
                        class="btn btn-outline"
                        onClick={() => signInWithGoogle()}>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login; <h2>Login</h2>