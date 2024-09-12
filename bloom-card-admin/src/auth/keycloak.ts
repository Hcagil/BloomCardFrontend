import Keycloak from 'keycloak-js';

    const keycloak = new Keycloak({
    url: 'http://localhost:8080/',  // Keycloak URL
    realm: 'myrealm',  // Realm adı
    clientId: 'my-react-client',  // Client ID
    });

export default keycloak;

