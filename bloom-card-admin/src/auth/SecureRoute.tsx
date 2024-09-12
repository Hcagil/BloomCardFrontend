import { ReactNode } from 'react';
import { useKeycloak } from '@react-keycloak/web';

interface SecureRouteProps {
  children: ReactNode; // Children'ın tipi ReactNode olarak tanımlandı
}

const SecureRoute = ({ children }: SecureRouteProps) => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <div>Loading...</div>; // Keycloak henüz başlatılmadıysa bir yükleniyor mesajı göster
  }

  if (!keycloak.authenticated) {
    keycloak.login(); // Eğer kullanıcı giriş yapmamışsa login sayfasına yönlendir
    return null;
  }

  return <>{children}</>; // Eğer giriş yapılmışsa, çocuk bileşenleri render et
};

export default SecureRoute;
