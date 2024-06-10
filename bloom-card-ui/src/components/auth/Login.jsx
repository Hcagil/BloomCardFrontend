import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Input from "../form/Input";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Geçerli bir e-posta adresi girin').required('E-posta gereklidir'),
    password: Yup.string().required('Şifre gereklidir'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    axios.post('http://localhost:8080/api/login', values)
      .then(response => {
        setUser(response.data.user);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/');
        setSubmitting(false);
      })
      .catch(error => {
        console.error('Error logging in:', error);
        setSubmitting(false);
      });
  };

  return (
    <div className="login isolate bg-darkgrey px-6 py-8 lg:px-8 max-w-md mx-auto rounded">
      <h2 className="text-center text-2xl font-bold text-white">Giriş Yap</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="mt-8 space-y-6">
            <Input label="E-posta" name="email" type="email" />
            <Input label="Şifre" name="password" type="password" />
            <button
              type="submit"
              disabled={isSubmitting}
              className="block w-full bg-green text-darkgrey py-2 px-4 rounded mt-4 hover:bg-darkgreen"
            >
              Giriş Yap
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
