/** @jsx h */
import { h, Fragment } from "preact";
import LoginForm from "../islands/LoginForm.tsx";
import RegisterForm from "../islands/RegisterForm.tsx";

export default function LoginPage() {
  return (
    <Fragment>
      <LoginForm />
      <RegisterForm />
    </Fragment>
  );
} 