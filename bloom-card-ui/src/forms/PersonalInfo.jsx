import { useFormik, Formik, Form } from "formik";
import { PersonalSchema } from "../schema/index";
import File from "../components/form/File";
import Input from "../components/form/Input"
import Checkbox from "../components/form/Checkbox";
import axios from "axios";
import classNames from "classnames";
import { useState } from "react";

function PersonalInfo() {
  /*fetch('https://localhost:8080', {
  method: 'POST',
  body: JSON.stringify({
    firstname: '',
    lastname: '',
    pemail: '',
    pphone: '',
    pphoto: '',
    accept: false
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  */

  /*const [post, setPost] = useState({
    firstname: '',
    lastname: '',
    pemail: '',
    pphone: '',
    pphoto: '',
    accept: false
  })
*/


  /*function handleSubmit(event) {
    axios.post('https://jsonplaceholder.typicode.com/posts', {post})
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }
*/
  return (
    <div className="personal isolate bg-white px-6 py-2  lg:px-8">
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          phone: ''
        }}
        onSubmit={(values) => {
          // axios.post('https://jsonplaceholder.typicode.com/posts', values, {
          axios.post('http://localhost:8080/api/personalInfo/', values, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => response.json())
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error.response);
            });

        }}
        validationSchema={PersonalSchema}
      >
        {({ values }) => (
          <Form
            // action="https://jsonplaceholder.typicode.com/posts"
            action="http://localhost:8080/api/personalInfo/"
            method="POST"
            className="p-6 m-4 grid border rounded mx-auto gap-y-4 max-w-xl shadow-lg "
          >
            <File label="" name="pphoto" />
            <Input label="Ad" name="firstname" />
            <Input label="Soyad" name="lastname" />
            <Input label="Mail Adresi" name="email" type="email" />
            <Input label="Telefon Numarası" name="phone" type="phone" />
            <Checkbox name="accept" /> <br />
            <button
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit">
              Gönder
            </button>
            <br />
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>

        )}

      </Formik>
    </div>
  );
};

export default PersonalInfo;
