// Project files
import { useUser } from "../global-state/UserProvider";

export default function Home() {
  // Global state
  const { user } = useUser();

  // Properties
  const isLogged = user !== null;

  // Components
  const logged = <p>Hello {user?.name} are currently logged in! ✅</p>;
  const notLoged = <p>You are NOT logged! ❌</p>;

  return (
    <div>
      <h1>Home page</h1>
      {isLogged ? logged : notLoged}
      <p>
        This project is a quick test to know how to built a simple
        authentification system on Spring Boot.
      </p>
      <h2>Mandatory requirements</h2>
      <ul>
        <li>Create accounts using the sign up page</li>
        <li>Manage to login using the login page</li>
      </ul>
      <h2>Extra requirements</h2>
      <ul>
        <li>
          Recover password (because is a common UX feature) (but I know is way
          harder as you need to sent an email to the registered mail account
          make trully secure)
        </li>
      </ul>
    </div>
  );
}
