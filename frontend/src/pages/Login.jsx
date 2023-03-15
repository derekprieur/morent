import React, { useState } from 'react'
import axios from 'axios'
import { setUser } from '../redux/authSlice'
import { useDispatch } from 'react-redux'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        console.log('submit')
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:3000/api/login', { username, password })
            dispatch(setUser(res.data))
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <form type='submit' className='flex flex-col gap-4'>
                <h1 className='text-2xl font-bold'>Login</h1>
                <p className='text-sm'>Don't have an account? <span className='text-[#3D5278]'>Sign up</span></p>
                <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}

export default Login