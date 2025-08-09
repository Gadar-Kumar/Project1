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
      <div className='flex w-100 h-150 bg-gray-500 justify-center items-center text-center'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className='text-white font-bold mb-5 text-3xl'>Register Yourself</p>
      <div className='mb-2'>
        <label htmlFor="username" className='block text-sm font-medium text-gray-700'>Username</label>
        <input
        placeholder='username'
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
            id="password" className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'  />
            <button
            className='relative  top-[-30px] right-[-50] text-gray-500 hover:text-gray-700 focus:outline-none'
             type='button' onClick={()=>setShowPassword((prev)=>!prev)}>
              
              {showPassword ? "🙈" : "👁️"}
             </button>
            <label htmlFor="age" className='block text-sm font-medium text-gray-700'>Select your age</label>
            <select name="age" id="age" className=' block w-full border border-gray-300 rounded-md shadow-sm p-2'>
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
            <label className='block text-sm font-thin mt-2 text-white'>Already have an account?
               <Link to="/login" className='text-blue-600 hover:underline'>Login</Link></label>
          </div>
          <button type="submit" className='w-full bg-blue-600 text-white py-2 rounded-md'>Register</button>
        </form>
    </div>
    </div>
  )
}

export default Register
