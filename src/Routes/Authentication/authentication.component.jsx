import SignUpForm from "../Sign-Up/signup.component";
import SignInForm from "../../Component/SignIn/sign-in-form.component";
import './authentication.styles.scss';

export default function Authentication() {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );

}