import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { setUser, setLoginPageOpen } from '../redux/authSlice'
import { useDispatch } from 'react-redux'
import { Button } from '../components'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);
    const [showSignUp, setShowSignUp] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:3000/api/login', { username, password })
            dispatch(setUser(res.data.user))
            dispatch(setLoginPageOpen(false))
            navigate('/')
            console.log(res.data.user)
        } catch (error) {
            setErrorMessage('Invalid username or password')
            console.log(error)
        }
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData();
            formData.append('firstName', firstName);
            formData.append('lastName', lastName);
            formData.append('title', title);
            formData.append('username', username);
            formData.append('password', password);
            formData.append('file', file);

            const res = await axios.post('http://localhost:3000/api/signup', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            dispatch(setUser(res.data.user))
            dispatch(setLoginPageOpen(false))
            navigate('/')
            console.log(res.data.user)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSignUpClick = () => {
        setShowSignUp(!showSignUp)
    }

    return (
        <div className='h-screen max-w-6xl w-full flex px-6 justify-center'>
            {showSignUp ? (
                <form className='flex flex-col gap-4 w-full' onSubmit={handleSignUp}>
                    <h4 className='mt-8 text-[#3563E9] text-xl font-extrabold mb-6'>Sign Up</h4>
                    <p className='text-sm'>Already have an account? <span className='text-[#3D5278] cursor-pointer' onClick={handleSignUpClick}>Sign in</span></p>
                    <div className='flex flex-col'>
                        <h3 className='font-medium text-lg mb-4'>Username</h3>
                        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='font-medium text-lg mb-4'>Password</h3>
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='font-medium text-lg mb-4'>First Name</h3>
                        <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='font-medium text-lg mb-4'>Last Name</h3>
                        <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} required className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='font-medium text-lg mb-4'>Title</h3>
                        <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} required className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='font-medium text-lg mb-4'>Profile Picture</h3>
                        <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <Button text='Sign Up' size='large' rounded full type='submit' />
                </form>
            ) : (
                <form type='submit' className='flex flex-col gap-4 w-full' onSubmit={handleLogin}>
                    <h4 className='mt-8 text-[#3563E9] text-xl font-extrabold mb-6'>Login</h4>
                    <p className='text-sm'>Don't have an account? <span className='text-[#3D5278] cursor-pointer' onClick={handleSignUpClick}>Sign up</span></p>
                    {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
                    <div className='flex flex-col'>
                        <h3 className='font-medium text-lg mb-4'>Username</h3>
                        <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} required className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='font-medium text-lg mb-4'>Password</h3>
                        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' />
                    </div>
                    <Button text='Login' size='large' rounded full type='submit' />
                </form>
            )}
        </div>
    )
}

export default Login