import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const res = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    console.log(data); // handle login result here

    if (res.ok) {
        alert("Registration successful");
        navigate('/'); // Redirect to home page
      } else {
        alert(data.error || 'Registration failed');
      }
  }catch(err){
     console.error('Error:', err);
      alert('Something went wrong.');
  }
  };

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='flex w-100 h-150 bg-gray-500 justify-center items-center text-center'>
      <form onSubmit={handleSubmit}>
        <p className='text-white font-bold mb-5 text-3xl'>Register Yourself</p>
      <div className='mb-2'>
        <label htmlFor="username" className='block text-sm font-medium text-gray-700'>Username</label>
        <input
        placeholder='username'
        value={form.name}
        onChange={handleChange}
        required={true}
        name='name'
        type="text" id="name" className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2' />
      </div>
        <div className='mb-4'>
          <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
            <input 
            required={true}
            name='email'
            value={form.email}
            onChange={handleChange}
            type="email" id="email" className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2' />
          </div>
          <div className='mb-4'>
            <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
            <input 
            type={showPassword ? 'text' : 'password'}
            name='password'
            value={form.password}
            onChange={handleChange}
            required={true}
            id="password" className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'  />
            <button
            className='relative  top-[-30px] right-[-50] text-gray-500 hover:text-gray-700 focus:outline-none'
             type='button' onClick={()=>setShowPassword((prev)=>!prev)}>
              
              {showPassword ? "🙈" : "👁️"}
             </button>
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-thin mt-2 text-white'> Already have an account?
               <Link to="/login" className='text-green-400 hover:underline font-medium'> Login</Link></label>
          </div>
          <button type="submit" className='w-full bg-blue-600 text-white py-2 rounded-md cursor-pointer'>Register</button>
        </form>
    </div>
    </div>
  )
}

export default Register
