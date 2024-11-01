reactを用いてメールアドレスとパスワードのある認証画面を作成する際の基本的な手順は以下の通りです。

1. 必要なReactプロジェクトを作成する（create-react-appなどを使用）

2. 認証用のコンポーネントを作成する（例: AuthForm.js）
   - メールアドレスとパスワードの入力フィールドを設置
   - 送信ボタンを設置
   - 入力値を管理するためのstateを定義（useState hookを使用）
   - 送信ボタンをクリックした際の処理を実装（入力値のバリデーションやサーバーへのリクエストなど）

3. 認証用のコンポーネントをアプリケーションに組み込む（App.jsなどで呼び出す）

4. 認証結果に応じた画面遷移や表示の切り替えを実装する
   - 認証成功時はメイン画面へ遷移
   - 認証失敗時はエラーメッセージを表示

5. （オプション）認証状態の管理にはReact Contextなどを活用できる

以下は簡単なサンプルコードです。

```jsx
// AuthForm.js
import React, { useState } from 'react';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 入力値のバリデーションやサーバーへのリクエストなどの処理を実装
    console.log('Submitted:', email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default AuthForm;
```

```jsx
// App.js
import React from 'react';
import AuthForm from './AuthForm';

const App = () => {
  return (
    <div>
      <h1>Login</h1>
      <AuthForm />
    </div>
  );
};

export default App;
```

reactを使った認証画面の実装にはさまざまなアプローチがありますが、上記の手順を参考にしながら、必要な機能を段階的に実装していくことをおすすめします。また、セキュリティ面にも十分注意を払い、安全な認証システムを構築するようにしましょう。