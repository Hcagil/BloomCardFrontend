import { useContext } from 'react';
import { Formik, Form } from "formik";
import { PersonalSchema } from "../schema/index";
import Input from "../components/form/Input";
import Checkbox from "../components/form/Checkbox";
import axios from "axios";
import { UserContext } from '../components/UserContext';

function PersonalInfo() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="personal isolate px-6 py-2 lg:px-8">
      <Formik
        initialValues={{
          firstname: user.firstname,
          lastname: user.lastname,
          email: '',
          phone: '',
          accept: false
        }}
        onSubmit={(values) => {
          console.log('Form Verileri:', values);
          setUser({ firstname: values.firstname, lastname: values.lastname });
          axios.post('http://localhost:8080/api/personalInfo/', values, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => response.data)
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error.response);
            });
        }}
        validationSchema={PersonalSchema}
      >
        {({ values, handleChange, handleBlur, setFieldValue }) => (
          <div className="bg-darkgrey">
            <Form
              action="http://localhost:8080/api/personalInfo/"
              method="POST"
              className="p-10 m-4 grid mx-auto gap-y-4 max-w-xl shadow-secondary overflow-hidden flex-col justify-center items-center relative shadow-lg backdrop-blur-[40px] rounded-2xl z-2"
            >
              <Input 
                label="Ad" 
                name="firstname" 
                value={values.firstname} 
                onChange={(e) => {
                  handleChange(e);
                  setUser(prev => ({ ...prev, firstname: e.target.value }));
                  setFieldValue('firstname', e.target.value);
                }} 
                onBlur={handleBlur} 
              />
              <Input 
                label="Soyad" 
                name="lastname" 
                value={values.lastname} 
                onChange={(e) => {
                  handleChange(e);
                  setUser(prev => ({ ...prev, lastname: e.target.value }));
                  setFieldValue('lastname', e.target.value);
                }} 
                onBlur={handleBlur} 
              />
              <Input label="Mail Adresi" name="email" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
              <Input label="Telefon Numarası" name="phone" type="phone" placeholder="05XXXXXXXXX" value={values.phone} onChange={handleChange} onBlur={handleBlur} />
              <Checkbox name="accept" value={values.accept} onChange={handleChange} onBlur={handleBlur} /> <br />
              <button
                className="block w-full rounded-md bg-green px-3.5 py-2.5 text-center text-sm font-semibold text-darkgrey shadow-sm hover:bg-darkgreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
              >
                Kaydet
              </button>
            </Form>
            
          </div>
        )}
      </Formik>
    </div>
  );
}

export default PersonalInfo;
