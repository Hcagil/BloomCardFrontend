import { useKeycloak } from '@react-keycloak/web';

const LogoutButton = () => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <div>Yükleniyor...</div>;
  }

  const handleLogout = () => {
    keycloak.logout();
  };

  return <button onClick={handleLogout}>Çıkış Yap</button>;
};

export default LogoutButton;
