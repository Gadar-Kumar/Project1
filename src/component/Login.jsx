import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';

function Login({children}) {

  const navigate=useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    navigate('/');
  };
  

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showpass,setShowpass]=useState(false);

  return (
    
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <form action="/">
        <div className='mb-4'>
          <label
          htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
            <input 
            {...register('email', { required: true })}
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            type="email" id="email" className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 cursor:toggle' />
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
          <div className='mb-4'>
            <label className='inline-flex items-center'>
              <input type="checkbox" className='mr-2' />
              Remember me
            </label>
          </div>
          <div
          className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Don't have an account?
               <Link to="/register" className='text-blue-600 hover:underline'>Register</Link></label>
          </div>
          <button 
          onClick={handleSubmit}
          type="submit" className='w-full bg-blue-600 text-white py-2 rounded-md'>Login</button>
        </form>
       

    </div>
  )
}

export default Login
