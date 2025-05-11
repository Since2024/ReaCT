// Login.jsx
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Correct import path
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { login } = useContext(AuthContext);

  // Function to post form data to the backend
  const postFormData = async (values) => {
    try {
      const response = await axios.post(
        'https://blog-hqx2.onrender.com/user/login',
        values
      );

      toast.success('User logged in successfully');

      const token = response.data.token;
      const user = response.data.user;

      // Call the login function from the context
      login(token, user);
    } catch (error) {
      toast.error('User login failed');
    }
  };

  const formdata = [
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Password', name: 'password', type: 'password' },
  ];

  return (
    <>
      <div className="flex min-h-screen w-full justify-center items-center">
        <div className="flex w-[350px] items-center bg-white shadow-2xl rounded-xl p-6 justify-center">
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
              email: Yup.string().email('Invalid email address').required('This field is required'),
              password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .required('Password is required'),
            })}
            onSubmit={(values) => postFormData(values)}
          >
            <Form className="w-full flex flex-col">
              {formdata.map((value, index) => (
                <div key={index} className="flex flex-col mb-4">
                  <label htmlFor={value.name} className="font-semibold">{value.label}</label>
                  <Field
                    name={value.name}
                    type={value.type}
                    className="border border-gray-300 rounded-2xl pl-4 py-2 mt-1"
                  />
                  <ErrorMessage
                    name={value.name}
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="bg-blue-500 p-2 text-sm text-white rounded-lg mt-4 hover:bg-blue-600"
              >
                Login
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      {/* ToastContainer for global notifications */}
      <ToastContainer />
    </>
  );
};

export default Login;
