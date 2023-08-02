import axios from "axios";
import Button from "./Button";
import { useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function FormLogin(){
  const inputEmail = useRef()
  const inputPassword = useRef()

  const onLogin = async() => {
    try {
      const response = await axios.get(`http://localhost:5000/users?email=${inputEmail.current.value}&password=${inputPassword.current.value}`)
      
      if(!response.data.length) return toast.error('Account Not Found')

      toast.success('Login Success!')
    } catch (error) {
      
    }
  }

    return(
        <div>
          <Toaster />
          <div className='flex justify-center items-center bg-slate-100 w-full h-10'>
            <h1 className='text-xl font-bold'>
              RETURNING CUSTOMER
            </h1>
          </div>
          <div className='px-20 py-3'>
            <h1 className='text-xl font-bold'> 
             Email
            </h1>
            <input type='text' ref={inputEmail} placeholder='Email' className='border border-gray-600 w-full mt-3 px-3 py-3 outline-none' />
          </div>
          <div className='px-20 py-3'>
            <h1 className='text-xl font-bold'> 
              Password
            </h1>
            <input type='password' ref={inputPassword} placeholder='Password' className='border border-gray-600 w-full mt-3 px-3 py-3 outline-none' />
          </div>
          <div className='px-20 py-3'>
            <Button handleFunction={onLogin} handleClass={'px-10 py-5 hover:bg-cyan-600 font-bold'}>
              Login
            </Button>
          </div>
        </div>
    )
}