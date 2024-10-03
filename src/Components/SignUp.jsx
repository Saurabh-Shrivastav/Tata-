import React from 'react'
import { useForm } from "react-hook-form"
import './SignUp.css';


import axios from 'axios';

const SignUp = () => {

    const submitHandler = async (data) => {
        // Ensure passwords match before submitting
        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Send the form data to the backend (to be stored in MongoDB)
        try {
            const response = await axios.post('http://localhost:5000/signup', {
                email: data.email,
                phone: data.phone,
                password: data.password
            });
            alert(response.data.message);
        } catch (error) {
            console.error('Error during signup:', error);
            alert('Signup failed, please try again');
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    return (
        <div>
            <div className="signin-container">
                <div className="signin-header">
                    <h2>Sign up for an account</h2>
                    <p>Enjoy the fly and passion of investing</p>
                </div>

                <form className="signin-form" onSubmit={handleSubmit(submitHandler)}>
                    <label>Email</label>
                    <input {...register('email', { required: "Email is required", pattern: /^\S+@\S+$/i })} type="email" placeholder="Enter your email" />
                    {errors.email && <p>{errors.email.message}</p>}

                    <label>Phone</label>
                    <input {...register('phone', {
                        required: "Phone number is required",
                        pattern: {
                            value: /^[1-9]\d{9}$/,
                            message: "Enter a valid 10-digit phone number without leading zero"
                        }
                    })} type="text" placeholder="Enter your phone number" />
                    {errors.phone && <p>{errors.phone.message}</p>}

                    <p>Please enter a 10-digit number without leading 0.</p>

                    <label>Password</label>
                    <input
                        className={errors.password ? 'input-error' : ""}
                        {...register('password', {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Minimum password length is 6 characters' },
                            maxLength: { value: 12, message: 'Maximum password length is 12 characters' }
                        })}
                        type="password"
                        placeholder="Enter your password"
                    />
                    {errors.password && <p>{errors.password.message}</p>}

                    <label>Confirm Password</label>
                    <input
                        {...register('confirmPassword', {
                            required: "Confirm Password is required",
                            minLength: { value: 6, message: 'Minimum password length is 6 characters' },
                            maxLength: { value: 12, message: 'Maximum password length is 12 characters' }
                        })}
                        type="password"
                        placeholder="Confirm your password"
                    />
                    {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

                    <input
                        disabled={isSubmitting}
                        value={isSubmitting ? "Please Wait" : "Sign Up"}
                        type="submit" className="signin-button" />
                </form>
            </div>
        </div>
    );
}

export default SignUp;



// const SignUp = () => {

//     const submitHandler = async (data) => {
//         await new Promise((resolve) => setTimeout(resolve, 5000))
//         console.log("Submitted The Form", data);

//     }


//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors, isSubmitting },
//     } = useForm();

//     return (
//         <div>
//             <div className="signin-container">
//                 <div className="signin-header">
//                     <h2>Sign in to account</h2>
//                     <p>Enjoy the fly and passion of investing</p>
//                 </div>

//                 <form className="signin-form" onSubmit={handleSubmit(submitHandler)}>
//                     <label>Email</label>
//                     <input {...register('email', { required: true })} type="email" placeholder="Enter your email" />

//                     <label>Phone</label>
//                     <input {...register('phone')} type="phone" placeholder="Enter your phone number" />

//                     <p>You do not need to enter 91 and enter a 10-digit number that does not start with 0</p>

//                     <label>Password</label>
//                     <input
//                         className={errors.password ? 'input-error' : ""}
//                         {...register('password', { required: true, minLength: { value: 6, message: 'minimum password length is 6 character' }, maxLength: 12 })} type="password" placeholder="Enter your password" />
//                     {errors.password && <p className='error-message'>{errors.message}</p>}

//                     <label>Confirm Password</label>
//                     <input {...register('confirmPassword', { required: true, minLength: { value: 6, message: 'minimum password length is 6 character' }, maxLength: 12 })} type="password" placeholder="Enter confirmation password" />


//                     <input
//                         disabled={isSubmitting}
//                         value={isSubmitting ? "Please Wait" : " Sign in"}
//                         type="submit" className="signin-button" />
//                     <a href="#" className="forgot-password">Forgot the password?</a>
//                 </form>
//             </div>
//         </div >
//     )
// }

// export default SignUp
