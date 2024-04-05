import React, { useState } from 'react';
import { Alert, Button,Checkbox, Label, Spinner, TextInput } from 'flowbite-react';
import { Link ,useNavigate} from 'react-router-dom';

export default function LogIn(){
  const [formData, setFormData] = useState({});
  const [errorMessages, setErrorMessages] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error messages
    setErrorMessages(null);

    // Check for empty fields
    if ( !formData.email || !formData.password) {
      return setErrorMessages('Please fill out all fields');
    }

    setLoading(true);

    try {
      setLoading(true);
      setErrorMessages(null);
      const res = await fetch('/api/auth/log-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        setErrorMessages(data.message);
      } 
        setLoading(false);
        if(res.ok){
          navigate('/');
        }
    } catch (error) {
      setErrorMessages( error,message);
      setLoading(false);
    }

    setLoading(false);
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left side */}
        <div className='flex-1 pb-60'>
          <Link to='/' className='hidden sm:inline'>
            <span className='px-2 py-1 bg-[#FF7000] rounded-lg text-white'>
              CSLab
            </span>
          </Link>
          <p className='text-sm mt-5'>
            you can login with your email and password or with Google
          </p>
        </div>
        {/* right side */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
         
            <div>
              <Label value='your email'></Label>
              <TextInput
                type='text'
                placeholder='example@mail.com'
                id='email'
                onChange={handleChange}
                name='email'
              />
            </div>
            <div>
              <Label value='your password'></Label>
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleChange}
                name='password'
              />
            </div>
            <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
         </div>
            <Button gradientMonochrome="cyan" type='submit' disabled={loading}>
              {loading ? (
                <> <Spinner size='sm'/>
                <span className='pl-3'>Loading...</span></>
               
              ): 'Sign up'}
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span> Dont Have an account ? </span>
            <Link to='/signup' className='text-blue-500'>
              Sign up
            </Link>
          </div>
        </div>
        {errorMessages && (
          <Alert className='mt-5' color='failure'>
            {errorMessages}
          </Alert>
        )}
      </div>
    </div>
  );
};


