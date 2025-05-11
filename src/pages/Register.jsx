import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  // Function to post form data to the backend
  const postFormData = async (values) => {
    try {
      const response = await axios.post('https://blog-hqx2.onrender.com/user/register', values);
      toast.success('User registered successfully');
    } catch (error) {
      toast.error('User registration failed');
      console.error('Registration error: ', error);
    }
  };

  // Form fields for dynamic rendering
  const formFields = [
    { label: 'Username', name: 'name', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Password', name: 'password', type: 'password' },
  ];

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum 3 characters required')
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Minimum 8 characters required')
      .required('Password is required'),
  });

  return (
    <div className='flex min-h-screen w-full justify-center items-center bg-gray-100'>
      <div className='flex w-[300px] flex-col items-center bg-white shadow-2xl rounded-xl p-6'>
        <h2 className='text-xl font-semibold mb-4'>Register</h2>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            await postFormData(values);
            setSubmitting(false); // Reset the submitting state
            resetForm(); // Reset form after successful submission
          }}
        >
          {({ isSubmitting }) => (
            <Form className='w-full flex flex-col'>
              {formFields.map((field, index) => (
                <div key={index} className='flex flex-col mb-3'>
                  <label htmlFor={field.name} className='mb-1 font-medium'>
                    {field.label}
                  </label>
                  <Field
                    name={field.name}
                    type={field.type}
                    className='border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400'
                  />
                  <ErrorMessage
                    name={field.name}
                    component='div'
                    className='text-red-500 text-sm mt-1'
                  />
                </div>
              ))}
              <button
                type='submit'
                disabled={isSubmitting}
                className='bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50'
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer position='top-right' autoClose={3000} />
    </div>
  );
};

export default Register;
