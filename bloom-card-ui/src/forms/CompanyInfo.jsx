import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { Formik, Form } from "formik";
import { CompanySchema } from "../schema/index";
import Input from "../components/form/Input"
import Checkbox from "../components/form/Checkbox";



export default function CompanyInfo() {
  const [showBillingInfo, setShowBillingInfo] = useState(false);
 
  return (
    <div className="isolate bg-darkgrey px-6 py-2  lg:px-8">
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
        <Form className="p-6 m-4 grid rounded mx-auto gap-y-4 max-w-xl shadow-lg ">
          {/*<File label="Logo" name="clogo" />*/}
          <Input label="Şirket Adı" name="companyname" />
          <Input label="Şirket Adresi" name="companyaddress" type="url" />
          <Input label="Mail Adresi" name="cemail" type="email" />
          <Input label="Telefon Numarası" name="cphone" type="phone" />

          <div className='flex flex-col max-w-xl mx-auto'>
          <div className='grid gap-y-4 max-w-xl'>
          <h4 className='block text-sm text-white font-semibold leading-6 text-gray-light'>Fatura Bilgileri</h4>
          <hr className="mb-2 h-0.5 border-t-0 bg-neutral-100/10 dark:bg-white/10" />
          <Switch
            checked={showBillingInfo}
            onChange={() => setShowBillingInfo(!showBillingInfo)}
            className={`${
              showBillingInfo ? 'bg-green' : 'bg-gray-700'
            }  relative inline-flex h-6 w-11 items-center rounded-full`}
          >
          <span className="sr-only">Fatura Bilgilerini Gir!</span>
          <span
            className={`${
              showBillingInfo ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-darkgrey transition`}
          />
        </Switch>
          {showBillingInfo && (
            <div className='flex-col w-full'>
              <Input label="IBAN" name="ciban"/>
              <Input label="Vergi Numarası" name="taxnumber" />
              <Input label="Vergi Dairesi" name="vergidairesi" />
            </div>
          )}
          </div>
          <div className='grid mx-auto py-2.5 max-w-xl'>
          <Checkbox name="accept" /> <br/>
          <button
          className="block w-full rounded-md bg-green px-3.5 py-2.5 text-center text-sm font-semibold text-darkgrey shadow-sm hover:bg-darkgreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="submit">
            Gönder
          </button>
          </div>
          </div>
        </Form>
      
      )}
    
    </Formik>
  </div>
  )
}