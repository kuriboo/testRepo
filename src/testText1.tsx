reactでメールアドレス・パスワード入力フォームと認証機能を持つ画面を作成するサンプルコードは以下のようになります。

```jsx
import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // ここでバックエンドAPIへ認証リクエストを送信
    // レスポンスをチェックして認証成功/失敗を判定
    if (email === 'test@example.com' && password === 'password') {
      // 認証成功時の処理
      console.log('Login successful');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
```

ポイント解説:

1. `useState`フックを使って、email, password, errorの状態を管理します。
2. フォーム送信時に`handleSubmit`関数が呼ばれ、バックエンドAPIへ認証リクエストを送信します。
3. 認証結果に応じて、成功時はコンソールにメッセージを出力し、失敗時はエラーメッセージを表示します。
4. emailとpasswordの入力欄はcontrolled componentsとし、状態と同期させます。
5. バリデーションのために`required`属性を追加しています。

実際には、バックエンドAPIとの連携が必要になります。上記のサンプルではモックデータを使った簡易的な認証チェックをしています。
APIレスポンスをもとに適切な処理を行うようにしてください。

セキュリティ面では、パスワードをハッシュ化して保存したり、JWTなどを用いたセッション管理を行うのが一般的です。
認証まわりのベストプラクティスにも留意しながら実装していきましょう。