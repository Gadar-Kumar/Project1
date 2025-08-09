import React,{useState} from 'react'
import {data, Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';

function Login({children}) {

  const navigate=useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmits = (data) => {
    console.log('Form Data:', data);
    navigate('/');
  };
  

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showpass,setShowpass]=useState(false);

  return (
    
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='flex h-100 w-100 bg-gray-500 justify-center items-center text-center'>
      <form  
       action='/'
      >
      <p className='text-3xl text-white font-bold mb-3'>Log in</p>
        <div className='mb-4'>
          <label
          htmlFor="text" className='block text-sm font-medium text-gray-700'>Username</label>
            <input 
            {...register('text', { required: true })}
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            type="text" id="username" className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 cursor:toggle' />
          </div>
          <div className='mb-4'>
            <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
            <input 
            {...register('password', { required: true })}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type={showpass ? 'text' : 'password'}
             id="password" className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 display'
            style={{display: showpass ? 'fontVarient' : 'block'}}
            />
            <button
          type="button"
          onClick={() => setShowpass((prev) => !prev)}
          className="relative right-0 top-[-30px] text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          {showpass ? "🙈" : "👁️"}
        </button>
          </div>
          <div
          className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Don't have an account?
               <Link to="/register" className='text-blue-600 hover:underline'>Register</Link></label>
          </div>
          <button 
          onClick={handleSubmit}
          type="submit" className='w-full bg-blue-600 text-white py-2 rounded-md cursor-pointer'>Login</button>
        </form>
       
      </div>
    </div>
  )
}

export default Login
