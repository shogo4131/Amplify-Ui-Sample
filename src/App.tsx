import "./App.css";
import {
  Authenticator,
  Heading,
  Text,
  ThemeProvider,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const theme = {
  name: "custom-theme",
  tokens: {
    components: {
      text: {
        color: { value: "{colors.primary[80]}" },
      },
    },
  },
};

const createComponents = {
  SignIn: {
    Header() {
      return (
        <Heading>
          <Text>ログイン</Text>
        </Heading>
      );
    },
  },
  ForgotPassword: {
    Header() {
      return (
        <Heading>
          <Text>パスワード再発行</Text>
        </Heading>
      );
    },
  },
};

const formFields = {
  signIn: {
    username: {
      label: "ユーザー名",
      placeholder: "テスト太郎",
    },
    password: {
      label: "パスワード",
      placeholder: "test@123",
    },
  },
  forgotPassword: {
    username: {
      label: "メールアドレス",
      placeholder: "test@gmail.com",
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Authenticator
        hideSignUp
        components={createComponents}
        formFields={formFields}
      >
        {({ signOut, user }) => (
          <div>
            <p>Welcome {user?.username}</p>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
      </Authenticator>
    </ThemeProvider>
  );
}

export default App;
