import * as Yup from 'yup';

export const PersonalInfoSchema = Yup.object().shape({
    firstname: Yup.string()
        .min(2, 'Ad en az 2 karakter olmalıdır')
        .max(50, 'Ad en fazla 50 karakter olabilir')
        .required('Ad gerekli'),
    lastname: Yup.string()
        .min(2, 'Soyad en az 2 karakter olmalıdır')
        .max(50, 'Soyad en fazla 50 karakter olabilir')
        .required('Soyad gerekli'),
    email: Yup.string()
        .email('Geçerli bir e-posta girin')
        .required('E-posta gerekli'),
    phone: Yup.string()
        .matches(/^[0-9]{10,15}$/, 'Telefon numarası 10-15 rakamdan oluşmalıdır')
        .required('Telefon numarası gerekli'),
});

export const CompanySchema = Yup.object().shape({
    companyName: Yup.string()
        .min(2, 'Şirket adı en az 2 karakter olmalıdır')
        .required('Şirket adı gerekli'),
    companyAddress: Yup.string()
        .min(10, 'Şirket adresi en az 10 karakter olmalıdır')   
        .required('Şirket adresi gerekli'),
    email: Yup.string()
        .email('Geçerli bir e-posta girin')
        .required('E-posta gerekli'),
    phone: Yup.string()
        .matches(/^[0-9]{10,15}$/, 'Telefon numarası 10-15 rakamdan oluşmalıdır')
        .required('Telefon numarası gerekli'),
    iban: Yup.string()
        .matches(/^[A-Z]{2}[0-9A-Z]{13,32}$/, 'Geçerli bir IBAN girin')
        .notRequired(),
    taxAdministrationNumber: Yup.string()
        .matches(/^[0-9]{10}$/, 'Vergi numarası 10 rakamdan oluşmalıdır')
        .notRequired(),
    taxadministration: Yup.string()
        .min(2, 'Vergi dairesi adı en az 2 karakter olmalıdır')
        .max(100, 'Vergi dairesi adı en fazla 100 karakter olabilir')
        .notRequired(),
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
