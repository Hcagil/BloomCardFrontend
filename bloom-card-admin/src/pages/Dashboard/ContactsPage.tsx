import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const ContactsPage: React.FC = () => {
    return (
        <div className="contacts-page relative flex items-center justify-center h-screen overflow-hidden">
            {/* Havalı Arka Plan */}
            <div className="absolute inset-0 rounded-lg bg-[linear-gradient(to_right,rgba(222,242,65,0.7),rgba(0,107,96,0.7),rgba(165,220,210,0.7),rgba(100,155,146,0.7))] animate-gradient-x opacity-80"></div>
            
            {/* Hareketli Çizgiler veya Parçacıklar */}
            <div className="absolute w-full h-full overflow-hidden">
                <div className="absolute top-1/4 left-[15%] w-72 h-72 bg-blue-300 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 right-[12%] w-56 h-56 bg-yellow-300  opacity-20 rounded-full filter blur-2xl animate-pulse delay-2000"></div>
            </div>

            {/* İçerik */}
            <div className="relative z-10 text-center space-y-4 p-6 rounded-lg shadow-lg bg-darkgrey bg-opacity-10">
                <h2 className="text-4xl font-bold text-white">Çok Yakında Sizlerle!</h2>
                <p className="text-lg text-gray-300">
                    Yeni özellik yükleniyor. Sizi heyecanlandıracak birçok yenilik üzerinde çalışıyoruz!
                </p>
                <div className="mt-4">
                    <span className="text-white text-sm text-green-400 font-semibold">Takipte kalın, yakında burada olacağız!</span>

                </div>
                
                <div>
                 <ul className="flex justify-center gap-4">
                
                    <li>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="text-2xl text-white hover:text-pink-500" />
                        </a>
                    </li>
                    
                    <li>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faXTwitter} className="text-2xl text-white hover:text-blue-400" />
                        </a>
                    </li>
                    
                    <li>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-white hover:text-blue-600" />
                        </a>
                    </li>
              </ul>
                </div>
                <div className="flex items-center justify-center sm:items-stretch">
                    <h1 className=" text-white text-4xl  font-bold flex-shrink-0">
                        <b className='text-green'>Bloom</b>Card
                    </h1>
                </div>
            </div>
        </div>
    
    );
};

export default ContactsPage;
