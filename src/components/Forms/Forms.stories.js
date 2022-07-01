import { LoginForm } from ".";

export default {
  title: "Components / Forms",
  components: LoginForm,
};

export const Login = (args) => {
  return <LoginForm {...args} />;
};

Login.args = {};
