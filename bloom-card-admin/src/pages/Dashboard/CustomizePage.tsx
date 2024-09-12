import React, { useState, useEffect } from 'react';
import {
    submitPersonalInfo,
    getPersonalInfo,
    submitCompanyInfo,
    getCompanyInfo,
    submitSocialInfo,
    getSocialInfo
} from '../../services/api'; // API fonksiyonlarını import et
import ProfileCard from '../../components/dashboard/profileCard/ProfileCard';
import ContactForm from '../../components/forms/ContactForm';
import CompanyForm from '../../components/forms/CompanyForm';
import SocialForm from '../../components/forms/social/SocialForm';
import Tabs from '../../components/dashboard/Tabs';
import FormButton from '../../components/forms/elements/FormButton';

const CustomizePage: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false); // ProfileCard modal görünürlüğünü kontrol eden state
    const [contactInfo, setContactInfo] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        accept: false,
        profileImage: '',
        coverImage: '',
    });

    const [companyInfo, setCompanyInfo] = useState({
        companyName: '',
        companyAddress: '',
        email: '',
        phone: '',
        iban: '',
        taxAdministrationNumber: '',
        taxadministration: '',
        accept: false,
    });

    const [socialAccounts, setSocialAccounts] = useState({
        links: [],
    });

    // Backend'den verileri almak için useEffect kullan
    useEffect(() => {
        loadProfile(); // Sayfa yüklendiğinde profil verilerini backend'den çek
    }, []);

    const loadProfile = async () => {
        try {
            // Backend'den kişisel bilgileri al
            const personalResponse = await getPersonalInfo();
            console.log('Kişisel bilgiler başarıyla alındı:', personalResponse.data); // Konsola yazdır
    
            setContactInfo(personalResponse.data);
    
            // Backend'den şirket bilgilerini al
            const companyResponse = await getCompanyInfo();
            console.log('Şirket bilgileri başarıyla alındı:', companyResponse.data); // Konsola yazdır
    
            setCompanyInfo(companyResponse.data);
    
            // Backend'den sosyal medya bilgilerini al
            const socialResponse = await getSocialInfo();
            console.log('Sosyal medya bilgileri başarıyla alındı:', socialResponse.data); // Konsola yazdır
    
            setSocialAccounts(socialResponse.data);
        } catch (error) {
            console.error('Profil bilgileri alınırken hata oluştu:', error); // Hata mesajını konsola yazdır
        }
    };
    

    // Form verilerini backend'e kaydetme fonksiyonu
    const saveProfile = async () => {
        setIsSubmitting(true);
        try {
          // Kişisel bilgiler API isteği
          await submitPersonalInfo(contactInfo);
          console.log('Kişisel bilgiler başarıyla gönderildi:', contactInfo);
    
          // Şirket bilgileri API isteği
          await submitCompanyInfo(companyInfo);
          console.log('Şirket bilgileri başarıyla gönderildi:', companyInfo);
    
          // Sosyal medya bilgileri API isteği
          await submitSocialInfo(socialAccounts);
          console.log('Sosyal medya bilgileri başarıyla gönderildi:', socialAccounts);
    
          console.log('Tüm bilgiler başarıyla kaydedildi.');
        } catch (error) {
          console.error('Bilgiler kaydedilirken hata oluştu:', error);
        } finally {
          setIsSubmitting(false);
        }
      };

    return (
        <div className="flex flex-col lg:flex-row gap-6 p-6">
            {/* ProfileCard - Desktop'ta görünür, mobilde gizli */}
            <div className="flex-none w-full lg:w-1/3 lg:block hidden">
                <ProfileCard
                    contactInfo={contactInfo}
                    companyInfo={companyInfo}
                    socialAccounts={socialAccounts}
                    profileImage={contactInfo.profileImage}
                    coverImage={contactInfo.coverImage}
                />
            </div>

            {/* Sağ Taraf */}
            <div className="flex-1">

                 {/* Kaydet butonu */}
                <div className='flex flex-1 justify-end'>
                <FormButton 
                    isSubmitting={isSubmitting}
                    text="Kaydet"
                    onClick={saveProfile}  // Tek bir merkezi kaydetme işlemi
                />
                </div>

                {/* Mobilde 'Önizle' butonu */}
                <div className="lg:hidden mb-4">
                    <button 
                        className="bg-blue-500 text-white py-2 px-4 rounded"
                        onClick={() => setShowProfileModal(true)} // Modalı aç
                    >
                        Önizle
                    </button>
                </div>

                {/* Modal yapısı */}
                {showProfileModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white rounded-lg p-4 w-full max-w-md">
                            <button
                                className="text-right text-red-500 font-bold"
                                onClick={() => setShowProfileModal(false)} // Modalı kapat
                            >
                                Kapat
                            </button>
                            <ProfileCard
                                contactInfo={contactInfo}
                                companyInfo={companyInfo}
                                socialAccounts={socialAccounts}
                                profileImage={contactInfo.profileImage}
                                coverImage={contactInfo.coverImage}
                            />
                        </div>
                    </div>
                )}

                <Tabs
                    tabs={[
                        { label: 'Kişisel Bilgiler', content: <ContactForm contactInfo={contactInfo} setContactInfo={setContactInfo} /> },
                        { label: 'Şirket Bilgileri', content: <CompanyForm companyInfo={companyInfo} setCompanyInfo={setCompanyInfo} /> },
                        { label: 'Sosyal Medya Hesapları', content: <SocialForm socialAccounts={socialAccounts} setSocialAccounts={setSocialAccounts} /> },
                    ]}
                />
            </div>
        </div>
    );
};

export default CustomizePage;
