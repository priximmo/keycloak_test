import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import "./styles.css";

export default function App() {
  const [keycloak, initialized] = useKeycloak();
  console.log(keycloak, keycloak.token, initialized);
  return (
    <div className="App">
      <h1>Keycloak authentication</h1>
      <p>This is just an example of the Keycloak authentication flow</p>

      <hr />

      <div>{`User is ${
        !initialized || !keycloak.authenticated ? "NOT " : ""
      }authenticated`}</div>

      {!keycloak.authenticated ? (
        <button
          type="button"
          onClick={() =>
            keycloak.login({
              redirectUri: "https://ci1xd.csb.app"
            })
          }
        >
          Login
        </button>
      ) : (
        <button type="button" onClick={() => keycloak.logout()}>
          Logout
        </button>
      )}
    </div>
  );
}
