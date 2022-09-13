import LoginForm from "../islands/LoginForm.tsx";
import RegisterForm from "../islands/RegisterForm.tsx";
import { Fragment } from "preact";


export default function LoginPage() {
  return (
    <Fragment>
      <LoginForm />
      <RegisterForm />
    </Fragment>
  );
} 