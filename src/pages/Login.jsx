import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";

function Login({ setUser, setModalMessage }) {
  return (
    <main className="login">
      <SignUp setUser={setUser} setModalMessage={setModalMessage} />
      <SignIn setUser={setUser} setModalMessage={setModalMessage} />
    </main>
  );
}

export default Login;
