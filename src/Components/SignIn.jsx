
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './SignIn.css';

function SignIn({onLogin}) {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('signin');
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Handle form submission using React Hook Form
  const Submit = async (data) => {
    const { email, password } = data;
    
    try {
      // Send POST request to backend SignIn API
      const response = await axios.post('http://localhost:5000/signin', { email, password });
      
      // If SignIn is successful, show success alert
      alert(response.data.message);
    } catch (error) {
      // If there's an error (e.g., invalid credentials), show error alert
      if (error.response && error.response.data.message) {
        alert(error.response.data.message); // Backend error message
      } else {
        alert('Something went wrong. Please try again.'); // Generic error message
      }
    }
  };

  

  return (
    <div className="signin-container">
      <div className="signin-header">
        <h2>Sign in to account</h2>
        <p>Enjoy the fly and passion of investing</p>
      </div>
      <div className="tabs">
        <button
          className={activeTab === 'signin' ? 'active' : ''}
          onClick={() => setActiveTab('signin')}
        >
          Sign in
        </button>
        <button
          className={activeTab === 'signup' ? 'active' : ''}
          onClick={() => setActiveTab('signup')}
        >
          Sign up
        </button>
      </div>

      {activeTab === 'signin' && (
        <form className="signin-form" onSubmit={handleSubmit(Submit)}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email format' } })}
            // value={email}
            // onChange={(e) => setEmail(e.target.value)} 
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
          
          <label>Password</label>
          <input
            type="password"
            // value={password}
            placeholder="Enter your password"
            // onChange={(e) => setPassword(e.target.value)} 
            {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters long' } })}
          />
          {errors.password && <span className="error-message">{errors.password.message}</span>}

          <button type="submit" className="signin-button">Sign in</button>
          <a href="#" className="forgot-password">Forgot the password?</a>
        </form>
      )}

      {activeTab === 'signup' && (
        <div>
          {/* You can implement signup form here */}
          <p>Sign up form will go here...</p>
        </div>
      )}
    </div>
  );
}

export default SignIn;









// function SignIn() {
//   const [activeTab, setActiveTab] = useState('signin');
  

//   return (
//     <div className="signin-container">
//       <div className="signin-header">
//         <h2>Sign in to account</h2>
//         <p>Enjoy the fly and passion of investing</p>
//       </div>
//       <div className="tabs">
//         <button
//           className={activeTab === 'signin' ? 'active' : ''}
//           onClick={() => setActiveTab('signin')}
//         >
//           Sign in
//         </button>
//         <button
//           className={activeTab === 'signup' ? 'active' : ''}
//           onClick={() => setActiveTab('signup')}
//         >
//           Sign up
//         </button>
//       </div>
//       <form className="signin-form">
//         <label>Email</label>
//         <input type="email" placeholder="Enter your email" />
//         <label>Password</label>
//         <input type="password" placeholder="Enter your password" />
//         <button type="submit" className="signin-button">Sign in</button>
//         <a href="#" className="forgot-password">Forgot the password?</a>
//       </form>
//     </div>
//   );
// }

// export default SignIn;
