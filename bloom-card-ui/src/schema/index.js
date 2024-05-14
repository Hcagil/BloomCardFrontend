import * as yup from "yup";



export const PersonalSchema = yup.object().shape({
  email: yup.string().email("Lütfen geçerli bir mail adresi girin.").required("Zorunlu"),
  firstname: yup.string().min(3, 'Çok kısa...'),
  lastname: yup.string().required("Zorunlu"),
  phone: yup
    .string()
    .matches(/^(05\d{9})$/, 'Geçerli bir telefon numarası girin.')
    .required("Zorunlu"),

});

export const CompanySchema = yup.object().shape({
  companyName: yup.string().required('Şirket adı zorunludur.'),
  companyAddress: yup.string(),
  email: yup.string().email('Geçerli bir e-posta adresi girin.').required('E-posta adresi zorunludur.'),
  //clogo: yup.string().url('Geçerli bir URL girin.'),
  phone: yup.string().matches(/^(05\d{9})$/, 'Geçerli bir telefon numarası girin.').required('Telefon numarası zorunludur.'),
  iban: yup.string(),
  taxAdministrationNumber: yup.string().matches(/^\d{10}$/, 'Geçerli bir vergi numarası girin.'),
  taxadministration: yup.string(),
  accept: yup.boolean().oneOf([true], 'Şartları kabul etmelisiniz.').required('Şartları kabul etmelisiniz.'),

   


});
