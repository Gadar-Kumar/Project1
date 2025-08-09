import React from 'react'
import { Link, useNavigate } from 'react-router'

function Content() {

  const navigate=useNavigate()

  const navigateOn=()=>{
    navigate('/register')
  }

  return (
    <div className='h-240 w-full bg-gray-300'>
      <div className='mb-6 bg-white h-15'>
      <h2 className='text-3xl font-bold text-black '>Some Basic Knowledgement About Mental State</h2>
      </div>
      <div className='h-18 w-300 bg-gray-600 rounded-2xl text-gray-100  text-center m-2'>
      <h3>1. Mental Health Is Just as Important as Physical Health</h3>
      <p className='mt-2'>Good mental health enables people to cope with daily stress, work productively, and contribute to their communities.</p>
      </div>
      <div className='h-18 w-300 bg-gray-600 rounded-2xl text-gray-100  text-center m-2'>
      <h3>2. Everyone Has Mental Health</h3>
      <p>Just like physical health, we all have mental health that can fluctuate depending on life circumstances, stress, and biological factors.</p>
      </div>
      <div className='h-18 w-300 bg-gray-600 rounded-2xl text-gray-100  text-center m-2'>
      <h3>3. Mental Illness Is Common and Treatable</h3>
      <p>Conditions like depression, anxiety, bipolar disorder, and others affect millions globally, and most are manageable with the right support.</p>
      </div>
      <div className='h-18 w-300 bg-gray-600 rounded-2xl text-gray-100  text-center m-2'>
      <h3>4. Early Intervention Is Key</h3>
      <p>Addressing mental health concerns early improves outcomes. The sooner someone gets help, the better the recovery potential.</p>
      </div>
      <div className='h-18 w-300 bg-gray-600 rounded-2xl text-gray-100  text-center m-2'>
      <h3>5. Stigma Hurts</h3>
      <p>Stigma around mental health can prevent people from seeking help. Education, empathy, and open conversation reduce stigma.</p>
      </div>
      <div className='h-18 w-300 bg-gray-600 rounded-2xl text-gray-100  text-center m-2'>
      <h3>6. Self-Care Matters</h3>
      <p>Sleep, nutrition, exercise, social connection, and relaxation are crucial to maintaining good mental health.</p>
      </div>
      <div className='h-18 w-300 bg-gray-600 rounded-2xl text-gray-100  text-center m-2'>
      <h3>7. Seeking Help Is a Strength, Not a Weakness</h3>
      <p>Talking to a therapist, counselor, or doctor shows courage and self-awareness.</p>
      </div>
      <div className='h-18 w-300 bg-gray-600 rounded-2xl text-gray-100  text-center m-2'>
      <h3>8. Mental Health Affects Physical Health</h3>
      <p>Chronic stress and untreated mental conditions can impact the body, increasing risk of heart disease, immune issues, and more.</p>
      </div>
      <div className='h-18 w-300 bg-gray-600 rounded-2xl text-gray-100  text-center m-2'>
      <h3>9. Support Systems Make a Big Difference</h3>
      <p>Family, friends, peers, and communities provide emotional support and reduce isolation.</p>
      </div>
      <div className='h-18 w-300 bg-gray-600 rounded-2xl text-gray-100  text-center m-2'>
      <h3>10. Prevention and Education Are Powerful</h3>
      <p>Promoting mental wellness, teaching coping skills in schools and workplaces, and creating supportive environments can prevent many issues.</p>
      </div>
      <div className='mt-6 text-xl'>Register To Get Help 
        <button 
        type='button'
        onClick={navigateOn}
        className='w-20 h-10 bg-red-600 mr-4 rounded-xl cursor-pointer'> Register</button>
        <Link 
        to='/register'></Link>
      </div>
    </div>
  )
}

export default Content
