import React, { useState } from 'react';
import SignIn from './SignIn'  // Import the SignIn component
import SignUp from './SignUp';  // Import the SignUp component
import { useNavigate } from 'react-router-dom';

const AuthContainer = () => {
    const [activeTab, setActiveTab] = useState('SignIn');  // State to manage the active tab
    // const navigate = useNavigate();


    const handleLogin = async (credentials) => {
        const response = await loginUser(credentials); // Your API call to log in user
        if (response.success) {
            navigate('/'); // Redirect to Home on success
        } else {
            alert(response.message); // Show error message
        }
    };



    const handleSignup = async (userData) => {
        const response = await signupUser(userData); // Your API call to sign up user
        if (response.success) {
            navigate('/'); // Redirect to Home on success
        } else {
            alert(response.message); // Show error message
        }
    };



    return (
        <div className="auth-container">
            <div className="tabs">
                {/* Tab buttons for Sign In and Sign Up */}
                <button
                    className={activeTab === 'SignIn' ? 'active' : ''}
                    onClick={() => setActiveTab('SignIn')}
                >
                    Sign In
                </button>
                <button
                    className={activeTab === 'SignUp' ? 'active' : ''}
                    onClick={() => setActiveTab('SignUp')}
                >
                    Sign Up
                </button>
            </div>

            <div className="auth-content">
                {/* Conditionally render the SignIn or SignUp component */}
                {activeTab === 'SignIn' ? <SignIn /> : <SignUp />}
            </div>
        </div>



        // <div className="auth-container">
        //     <div className="signin-header">
        //         <h2>Sign up for an account</h2>
        //         <p>Enjoy the fly and passion of investing</p>
        //     </div>

        //     <div className="tabs">
        //         <button
        //             className={activeTab === 'SignIn' ? 'active' : ''}
        //             onClick={() => setActiveTab('SignIn')}
        //         >
        //             Sign In
        //         </button>
        //         <button
        //             className={activeTab === 'SignUp' ? 'active' : ''}
        //             onClick={() => setActiveTab('SignUp')}
        //         >
        //             Sign Up
        //         </button>
        //     </div>

        //     <div className="auth-content">
        //         {/* Pass the login and signup functions as props */}
        //         {activeTab === 'SignIn' ?
        //             <SignIn onLogin={handleLogin} /> :
        //             <SignUp onSignup={handleSignup} />}
        //     </div>
        // </div>
    );
}

export default AuthContainer;
