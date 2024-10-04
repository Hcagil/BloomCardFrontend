import React, { useState } from 'react';
import { Formik, Form } from "formik";
import FormInput from './elements/FormInput';
import Checkbox from './elements/Checkbox';
import FormButton from './elements/FormButton';
import { CompanySchema } from '../../schemas/validationSchemas';

interface CompanyFormProps {
  companyInfo: {
    companyName: string;
    companyAddress: string;
    email: string;
    phone: string;
    iban: string;
    taxAdministrationNumber: string;
    taxadministration: string;
    accept: boolean;
  };
  setCompanyInfo: React.Dispatch<React.SetStateAction<{
    companyName: string;
    companyAddress: string;
    email: string;
    phone: string;
    iban: string;
    taxAdministrationNumber: string;
    taxadministration: string;
    accept: boolean;
  }>>;

}

const CompanyForm: React.FC<CompanyFormProps> = ({ companyInfo, setCompanyInfo }) => {
  // Toggle durumu için state
  const [isAdvancedVisible, setIsAdvancedVisible] = useState(false);

  return (
    <Formik
      initialValues={companyInfo}
      validationSchema={CompanySchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log('Form submitted:', values);
        setCompanyInfo(values);
        setSubmitting(false);
      }}
    >
      {({ values, handleChange, isSubmitting }) => (
        <Form className="space-y-4">
          <FormInput
            label="Şirket Adı"
            name="companyName"
            placeholder=""
            value={values.companyName}
            onChange={(e) => {
              handleChange(e);
              setCompanyInfo(prev => ({ ...prev, companyName: e.target.value }));
            }}
          />
          <FormInput
            label="Şirket Adresi"
            name="companyAddress"
            placeholder=""
            value={values.companyAddress}
            onChange={(e) => {
              handleChange(e);
              setCompanyInfo(prev => ({ ...prev, companyAddress: e.target.value }));
            }}
          />
          <FormInput
            label="Mail Adresi"
            name="email"
            type="email"
            placeholder="ornek@mail.com"
            value={values.email}
            onChange={(e) => {
              handleChange(e);
              setCompanyInfo(prev => ({ ...prev, email: e.target.value }));
            }}
          />
          <FormInput
            label="Telefon Numarası"
            name="phone"
            type="phone"
            placeholder=""
            value={values.phone}
            onChange={(e) => {
              handleChange(e);
              setCompanyInfo(prev => ({ ...prev, phone: e.target.value }));
            }}
          />
          {/* Toggle butonu */}
          <div className="flex items-center justify-between">
            <Checkbox
              name="toggle"
              checked={isAdvancedVisible}
              onChange={() => setIsAdvancedVisible(!isAdvancedVisible)}
              label="Fatura Bilgileri"
            />
          </div>

          {/* IBAN, Vergi Numarası ve Vergi Dairesi inputları toggle'a bağlı */}
          {isAdvancedVisible && (
            <>
              <FormInput
                label="IBAN"
                name="iban"
                placeholder=""
                value={values.iban}
                onChange={(e) => {
                  handleChange(e);
                  setCompanyInfo(prev => ({ ...prev, iban: e.target.value }));
                }}
              />
              <FormInput
                label="Vergi Numarası"
                name="taxAdministrationNumber"
                placeholder=""
                value={values.taxAdministrationNumber}
                onChange={(e) => {
                  handleChange(e);
                  setCompanyInfo(prev => ({ ...prev, taxAdministrationNumber: e.target.value }));
                }}
              />
              <FormInput
                label="Vergi Dairesi"
                name="taxadministration"
                placeholder=""
                value={values.taxadministration}
                onChange={(e) => {
                  handleChange(e);
                  setCompanyInfo(prev => ({ ...prev, taxadministration: e.target.value }));
                }}
              />
            </>
          )}

          
          <Checkbox
            name="accept"
            checked={values.accept}
            onChange={(e) => {
              handleChange(e);
              setCompanyInfo(prev => ({ ...prev, accept: e.target.checked }));
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

export default CompanyForm;
