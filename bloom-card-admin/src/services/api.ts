import axios from 'axios';
import { KeycloakInstance } from 'keycloak-js'; // Eğer keycloak-js kullanıyorsan

let token: string | null = null;

export const setToken = (keycloak: KeycloakInstance) => {
    token = keycloak.token ? keycloak.token : null; // Token varsa ata, yoksa null yap
};

// Axios instance oluştur
const api = axios.create({
    baseURL: 'http://localhost:5000/', // Backend URL'ini uygun şekilde güncelle
    headers: {
        'Content-Type': 'application/json',
    },
});

// Token'ı otomatik eklemek için interceptor kullan
api.interceptors.request.use(
    (config) => {
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`; // Token ekleniyor
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Kişisel bilgileri gönderme isteği (POST)
export const submitPersonalInfo = (data: any) => {
    return api.post('/personalInfo', data);
};

// Kişisel bilgileri alma isteği (GET)
export const getPersonalInfo = () => {
    return api.get('/personalInfo');
};

// Şirket bilgilerini gönderme isteği (POST)
export const submitCompanyInfo = (data: any) => {
    return api.post('/companyInfo', data);
};

// Şirket bilgilerini alma isteği (GET)
export const getCompanyInfo = () => {
    return api.get('/companyInfo');
};

// Sosyal medya bilgilerini gönderme isteği (POST)
export const submitSocialInfo = (data: any) => {
    return api.post('/socialInfo', data);
};

// Sosyal medya bilgilerini alma isteği (GET)
export const getSocialInfo = () => {
    return api.get('/socialInfo');
};



export default api;
