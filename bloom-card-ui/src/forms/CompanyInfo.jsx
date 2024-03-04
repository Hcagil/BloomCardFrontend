import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import { useFormik, Formik, Form } from "formik";
import { CompanySchema } from "../schema/index";
import File from "../components/form/File";
import Input from "../components/form/Input"
import Checkbox from "../components/form/Checkbox";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CompanyInfo() {
 
  return (
    <div className="isolate bg-white px-6 py-2  lg:px-8">
    <Formik
      initialValues={{
        companyname: '',
        companyaddress: '',
        cemail: '',
        clogo: '',
        cphone: '',
        ciban: '',
        taxnumber: '',
        vergidairesi: '',
        accept: false
      }}
      onSubmit={values =>{
        console.log(values)
      }}
      validationSchema={CompanySchema}
    >
      {({values}) =>(
        <Form className="p-6 m-4 grid border rounded mx-auto gap-y-4 max-w-xl shadow-lg ">
          <File label="Logo" name="clogo" />
          <Input label="Şirket Adı" name="companyname" />
          <Input label="Şirket Adresi" name="companyaddress" type="url" />
          <Input label="Mail Adresi" name="cemail" type="email" />
          <Input label="Telefon Numarası" name="cphone" type="phone" />
          <h4>Fatura Bilgileri</h4> <br />
          <hr className="mb-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-black/10" />
          <Input label="IBAN" name="ciban" />
          <Input label="Vergi Numarası" name="taxnumber" />
          <Input label="Vergi Dairesi" name="vergidairesi" />
          <Checkbox name="accept" /> <br/>
          <button
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="submit">
            Gönder
          </button>
          <br/>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      
      )}
    
    </Formik>
  </div>
  )
}