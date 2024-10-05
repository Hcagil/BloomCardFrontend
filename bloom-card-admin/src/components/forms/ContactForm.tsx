import React from 'react';
import { Formik, Form } from "formik";
import FormInput from './elements/FormInput';
import Checkbox from './elements/Checkbox';
import { PersonalInfoSchema } from '../../schemas/validationSchemas';
import ImageDropzone from './elements/ImageDropzone';

interface ContactFormProps {
  contactInfo: {
    name: string;
    surname: string;
    email: string;
    phone: string;
    accept: boolean;
    profileImage: string;
    coverImage: string;
  };
  setContactInfo: React.Dispatch<React.SetStateAction<{
    name: string;
    surname: string
    email: string;
    phone: string;
    accept: boolean;
    profileImage: string;
    coverImage: string;
  }>>;
}

const ContactForm: React.FC<ContactFormProps> = ({ contactInfo, setContactInfo }) => {
  return (
    <Formik
      initialValues={contactInfo}
      validationSchema={PersonalInfoSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log('Form submitted:', values);
        setContactInfo(values);
        setSubmitting(false);
      }}
    >
      {({ values, handleChange, handleBlur, errors, touched }) => (
        <Form className="space-y-4">
          <FormInput
            label="İsim"
            name="name"
            placeholder="Adınızı girin..."
            value={values.name}
            onChange={(e) => {
              handleChange(e);
              setContactInfo(prev => ({ ...prev, name: e.target.value }));
            }}
            onBlur={handleBlur}
            error={touched.name && errors.name ? errors.name : undefined}
          />
          
          <FormInput
            label="Soyisim"
            name="surname"
            placeholder="Soyadınızı girin..."
            value={values.surname}
            onChange={(e) => {
              handleChange(e);
              setContactInfo(prev => ({ ...prev, surname: e.target.value }));
            }}
            onBlur={handleBlur}
            error={touched.surname && errors.surname ? errors.surname : undefined}
          />

          <FormInput
            label="Mail Adresi"
            name="email"
            type="email"
            placeholder="ornek@mail.com"
            value={values.email}
            onChange={(e) => {
              handleChange(e);
              setContactInfo(prev => ({ ...prev, email: e.target.value }));
            }}
            onBlur={handleBlur}
            error={touched.email && errors.email ? errors.email : undefined}
            
          />
          <FormInput
            label="Telefon Numarası"
            name="phone"
            type="tel"
            placeholder="05XXXXXXXXX"
            value={values.phone}
            onChange={(e) => {
              handleChange(e);
              setContactInfo(prev => ({ ...prev, phone: e.target.value }));
            }}
            onBlur={handleBlur}
            error={touched.phone && errors.phone ? errors.phone : undefined}
          />
        <div className='lg:hidden flex max-w-sm mx-auto justify-between'>
          <ImageDropzone
            onImageUpload={(base64) => setContactInfo(prev => ({ ...prev, profileImage: base64 }))}
            label="Profil Resmi"
          />
          <ImageDropzone
            onImageUpload={(base64) => setContactInfo(prev => ({ ...prev, coverImage: base64 }))}
            label="Kapak Resmi"
            isCover
          />
        </div>
          <Checkbox
            name="accept"
            checked={values.accept}
            onChange={(e) => {
              handleChange(e);
              setContactInfo(prev => ({ ...prev, accept: e.target.checked }));
            }}
            label={
              <>
                  Şartları ve koşulları{' '}
                  <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="text-green-500 underline">
                      kabul ediyorum.
                  </a>
              </>
          }
          />
         
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
