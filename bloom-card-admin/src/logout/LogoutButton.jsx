import { useKeycloak } from '@react-keycloak/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

const LogoutButton = () => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <div>Yükleniyor...</div>;
  }

  const handleLogout = () => {
    keycloak.logout();
  };

  return(
    <button 
      onClick={handleLogout}
      className='font-semibold text-white items-center mt-2'
    >
      
      <FontAwesomeIcon 
        icon={faSignOut}
        className='text-lg hover:text-gray-500'
      />
    </button>    
    );
  
};

export default LogoutButton;
