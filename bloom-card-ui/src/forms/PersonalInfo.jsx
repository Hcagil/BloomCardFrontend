import {  Formik, Form } from "formik";
import { PersonalSchema } from "../schema/index";
import File from "../components/form/File";
import Input from "../components/form/Input"
import Checkbox from "../components/form/Checkbox";
import axios from "axios";



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
    <div className="personal isolate px-6 py-2 first-line:lg:px-8">
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          phone: ''
        }}
        onSubmit={(values) => {
          axios.post('https://jsonplaceholder.typicode.com/posts', values, {
           // axios.post('http://localhost:8080/api/personalInfo/', values, {
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
          <div className="bg-darkgrey">
  
          <Form
            action="https://jsonplaceholder.typicode.com/posts"
             // action="http://localhost:8080/api/personalInfo/"
            method="POST"
            className="p-6 m-4 grid  mx-auto gap-y-4 max-w-xl shadow-secondary overflow-hidden flex-col justify-center items-center  relative shadow-lg backdrop-blur-[40px] rounded-2xl z-2"
          >
            <File label="" name="pphoto" />
            <Input label="Ad" name="firstname" />
            <Input label="Soyad" name="lastname" />
            <Input label="Mail Adresi" name="email" type="email" />
            <Input label="Telefon Numarası" name="phone" type="phone" />
            <Checkbox name="accept" /> <br />
            <button
              className="block w-full rounded-md bg-green px-3.5 py-2.5 text-center text-sm font-semibold text-darkgrey shadow-sm hover:bg-darkgreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit">
              Gönder
            </button>
          </Form>
          </div>

        )}

      </Formik>
    </div>
  );
};

export default PersonalInfo;
