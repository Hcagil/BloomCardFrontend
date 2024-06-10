import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Input from "../form/Input";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [activationCodeSent, setActivationCodeSent] = useState(false);

  const initialValues = {
    email: '',
    password: '',
    activationCode: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Geçerli bir e-posta adresi girin').required('E-posta gereklidir'),
    password: Yup.string().min(6, 'Şifre en az 6 karakter olmalıdır').required('Şifre gereklidir'),
    activationCode: Yup.string().when('activationCodeSent', {
      is: true,
      then: Yup.string().required('Aktivasyon kodu gereklidir'),
    }),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    if (!activationCodeSent) {
      axios.post('http://localhost:8080/api/sendActivationCode', { email: values.email })
        .then(response => {
          setActivationCodeSent(true);
          setSubmitting(false);
        })
        .catch(error => {
          console.error('Error sending activation code:', error);
          setSubmitting(false);
        });
    } else {
      axios.post('http://localhost:8080/api/register', values)
        .then(response => {
          navigate('/login');
          setSubmitting(false);
        })
        .catch(error => {
          console.error('Error registering:', error);
          setSubmitting(false);
        });
    }
  };

  return (
    <div className="register isolate bg-darkgrey px-6 py-8 lg:px-8 max-w-md mx-auto rounded">
      <h2 className="text-center text-2xl font-bold text-white">Kayıt Ol</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="mt-8 space-y-6">
            <Input label="E-posta" name="email" type="email" />
            <Input label="Şifre" name="password" type="password" />
            {activationCodeSent && (
              <Input label="Aktivasyon Kodu" name="activationCode" type="text" />
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="block w-full bg-green text-darkgrey py-2 px-4 rounded mt-4 hover:bg-darkgreen"
            >
              {activationCodeSent ? 'Kaydı Tamamla' : 'Aktivasyon Kodu Gönder'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
