export const environment = {
  production: false,
  serviceUrl: 'http://192.168.1.170:30021',
  selfUrl: 'http://localhost:4200',
  keycloakConfig: {
    url: 'https://keycloak.evelyn.dev:30029/auth/',
    realm: 'evelyn-services-realm',
    clientId: 'evelyn-ui'
  }
};
