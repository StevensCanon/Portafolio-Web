import React, { useState } from 'react';
import Image from 'next/image';
import { Slide } from 'react-awesome-reveal';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    setErrors({
      ...errors,
      [name]: false,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic validation - check if fields are empty
    const newErrors = {
      name: formData.name === '',
      email: formData.email === '',
      subject: formData.subject === '',
      message: formData.message === '',
    };
    setErrors(newErrors);

    // If no errors, submit the form
    if (!Object.values(newErrors).includes(true)) {
      console.log('Form submitted:', formData);
      // Aquí puedes enviar el formulario a través de una solicitud HTTP o realizar otras operaciones necesarias
    } else {
      console.log('Form validation failed.');
    }
  };

  return (
    <div className='max-w mx-8 grid grid-cols-2 gap-8 '>
       <Slide>
      <div>     
        <h2 className='text-6xl font-bold text-center text-black'>Contact Me</h2>
        <p className='mt-4 pb-20 text-center text-black'>Get in touch with me via social media or email.</p>      
        <div className='px-10 max-w  grid grid-cols-2 gap-4 '>
          <div className='Image-container flex justify-center items-center pl-28'>
            <a href="https://www.instagram.com">
              <Image className='img-grid' src='/images/ig.png' alt='Instagram' width={100} height={100} />
            </a>
            <p className='text-red-500 mx-4'>Instagram</p>
          </div>
          <div className='Image-container flex justify-center items-center'>
            <a href="https://twitter.com/home">
              <Image className='img-x' src='/images/x.png' alt='X' width={50} height={50} />
            </a>
            <p className='text-zinc-500'>X</p>
          </div>
          <div className='img-container flex justify-center items-center'>
            <a href="https://www.linkedin.com/">
              <Image className='img-grid' src='/images/linkedin.png' alt='LinkedIn' width={90} height={50} />
            </a>
            <p className='text-blue-500'>LinkedIn</p>
          </div>
          <div className='img-container flex justify-center items-center'>
            <a href='https://github.com/StevensCanon'>
              <Image className='img-git' src='/images/git.png' alt='GitHub' width={50} height={50} />
            </a>
            <p className='text-zinc-900'>GitHub</p>
          </div>
        </div>    
      </div>
      </Slide>

    <Slide direction='right'>
      <div className='pl-12 '>
        <h1 className='pt-10 pb-8 text-black font-bold text-2xl text-center'>SEND ME A MESSAGE</h1>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <input
              type='text'
              name='name'
              placeholder='Nombre'
              className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded px-4 py-2 focus:outline-none focus:border-purple-800`}
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='email'
              name='email'
              placeholder='Email'
              className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded px-4 py-2 focus:outline-none focus:border-purple-800`}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='subject'
              placeholder='Asunto'
              className={`w-full border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded px-4 py-2 focus:outline-none focus:border-purple-800`}
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              name='message'
              placeholder='Mensaje'
              className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded px-4 py-2 focus:outline-none focus:border-purple-800`}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-purple-800 text-white py-2 rounded hover:bg-purple-700 focus:outline-none focus:bg-purple-700'
          >
            Enviar
          </button>
        </form>
      </div>
      </Slide>
    </div>
  );
};

export default ContactForm;
