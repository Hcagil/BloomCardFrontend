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
  companyname: yup.string().required('Şirket adı zorunludur.'),
  companyaddress: yup.string(),
  cemail: yup.string().email('Geçerli bir e-posta adresi girin.').required('E-posta adresi zorunludur.'),
  clogo: yup.string().url('Geçerli bir URL girin.'),
  cphone: yup.string().matches(/^(05\d{9})$/, 'Geçerli bir telefon numarası girin.').required('Telefon numarası zorunludur.'),
  ciban: yup.string(),
  taxnumber: yup.string().matches(/^\d{10}$/, 'Geçerli bir vergi numarası girin.'),
  vergidairesi: yup.string(),
  accept: yup.boolean().oneOf([true], 'Şartları kabul etmelisiniz.').required('Şartları kabul etmelisiniz.'),

   


});
