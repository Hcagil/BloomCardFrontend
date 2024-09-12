import * as Yup from 'yup';

export const PersonalInfoSchema = Yup.object().shape({
    firstname: Yup.string().required('Ad gerekli'),
    lastname: Yup.string().required('Soyad gerekli'),
    email: Yup.string().email('Geçerli bir e-posta girin').required('E-posta gerekli'),
    phone: Yup.string().required('Telefon numarası gerekli'),
    
});

export const CompanySchema = Yup.object().shape({
    companyName: Yup.string().required('Şirket adı gerekli'),
    companyAddress: Yup.string().required('Şirket adresi gerekli'),
    email: Yup.string().email('Geçerli bir e-posta girin').required('E-posta gerekli'),
    phone: Yup.string().required('Telefon numarası gerekli'),
    iban: Yup.string(),
    taxAdministrationNumber: Yup.string(),
    taxadministration: Yup.string(),
});

export const SocialSchema = Yup.object().shape({
    links: Yup.array().of(
        Yup.object().shape({
            type: Yup.string().required('Link türü gerekli'),
            url: Yup.string().url('Geçerli bir URL girin').required('URL gerekli'),
            title: Yup.string().required('Başlık gerekli'),
        })
    ),
});
