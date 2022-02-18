import Keycloak from "keycloak-js";

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = new Keycloak({
  url: "https://env-9746357.it1.eur.aruba.jenv-aruba.cloud/auth/",
  realm: "rifiutoo",
  clientId: "rifiutoo-webapp"
});

export default keycloak;
