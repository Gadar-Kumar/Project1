import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function Register() {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    navigate('/');
  };

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-4'>
        <label htmlFor="username" className='block text-sm font-medium text-gray-700'>Username</label>
        <input
        
        {...register('username', { required: true })}
        type="text" id="username" className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2' />
      </div>
        <div className='mb-4'>
          <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
            <input 
            required={true}
            type="email" id="email" className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2' />
          </div>
          <div className='mb-4'>
            <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
            <input 
            type={showPassword ? 'text' : 'password'}
            id="password" className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2' />
            <button
            className='relative right-0 top-[-30px] text-gray-500 hover:text-gray-700 focus:outline-none'
             type='button' onClick={()=>setShowPassword((prev)=>!prev)}>
              
              {showPassword ? "🙈" : "👁️"}
             </button>
          </div>
          <div className='mb-4'>
            <label className='inline-flex items-center'>
              <input type="checkbox" className='mr-2' />
              Remember me
            </label>
          </div>
          <div>
            <label htmlFor="age" className='block text-sm font-medium text-gray-700'>Select your age</label>
            <select name="age" id="age" className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'>
              <option value="">Select your age</option>
              <option value="18-24">18-24</option>
              <option value="25-34">25-34</option>
              <option value="35-44">35-44</option>
              <option value="45-54">45-54</option>
              <option value="55-64">55-64</option>
              <option value="65+">65+</option>
            </select>
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Already have an account?
               <Link to="/login" className='text-blue-600 hover:underline'>Login</Link></label>
          </div>
          <button type="submit" className='w-full bg-blue-600 text-white py-2 rounded-md'>Register</button>
        </form>
    </div>
  )
}

export default Register
