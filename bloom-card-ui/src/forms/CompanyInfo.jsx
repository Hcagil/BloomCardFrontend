import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { Formik, Form } from "formik";
import { CompanySchema } from "../schema/index";
import Input from "../components/form/Input"
import Checkbox from "../components/form/Checkbox";
import axios from "axios";



export default function CompanyInfo() {
  const [showBillingInfo, setShowBillingInfo] = useState(false);
 
  return (
    <div className="isolate bg-darkgrey px-6 py-2  lg:px-8">
    <Formik
      initialValues={{
        companyName: '',
        companyLocationLink: '',
        email: '',
       // clogo: '',
        phone: '',
        iban: '',
        taxAdministrationNumber: '',
        taxadministration: '',
        accept: false
      }}
      onSubmit={(values) => {
        console.log('Form Verileri:', values);
        axios.post('http://localhost:8080/api/companyInfo/', values, {
         
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
      validationSchema={CompanySchema}
    >
      {({ values }) => (
          <div className="bg-darkgrey">
        <Form 
        action="http://localhost:8080/api/companyInfo/"
        method="POST"
        className="p-6 m-4 grid rounded mx-auto gap-y-4 max-w-xl shadow-lg ">
          {/*<File label="Logo" name="clogo" />*/}
          <Input label="Şirket Adı" name="companyName" />
          <Input label="Şirket Adresi" name="companyAddress" type="url" />
          <Input label="Mail Adresi" name="email" type="email" />
          <Input label="Telefon Numarası" name="phone" type="phone" />

          <div className='flex flex-col max-w-xl mx-auto'>
          <div className='grid gap-y-4 max-w-xl'>
          <div className="flex items-center">
            
            <Switch
              checked={showBillingInfo}
              onChange={() => setShowBillingInfo(!showBillingInfo)}
              className={`${
                showBillingInfo ? "bg-green" : "bg-gray-700"
              }  relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only">Fatura Bilgilerini Gir!</span>
              <span
                className={`${
                  showBillingInfo ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-darkgrey transition`}
              />
            </Switch>
            <span className="ml-2 text-sm text-white font-semibold leading-6 text-gray-light">Fatura Bilgileri</span>
          </div>
          {showBillingInfo && (
            <div className="flex-col w-full">
              <Input label="IBAN" name="iban" />
              <Input label="Vergi Numarası" name="taxAdministrationNumber" />
              <Input label="Vergi Dairesi" name="taxadministration" />
            </div>
          )}
          </div>
          <div className='grid mx-auto py-2.5 max-w-xl'>
          <Checkbox name="accept" /> <br/>
          <button
          className="block w-full rounded-md bg-green px-3.5 py-2.5 text-center text-sm font-semibold text-darkgrey shadow-sm hover:bg-darkgreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="submit"
          >
            Kaydet
          </button>
          </div>
          </div>
        </Form>
        </div>
      )}
        
    </Formik>
  </div>
  )
}