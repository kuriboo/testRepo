import React from 'react';
import styled from 'styled-components';

interface LoginFormProps {
  onSubmit: (googleDriveId: string, githubRepoName: string, githubRepoUrl: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [googleDriveId, setGoogleDriveId] = React.useState('');
  const [githubRepoName, setGithubRepoName] = React.useState('');
  const [githubRepoUrl, setGithubRepoUrl] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(googleDriveId, githubRepoName, githubRepoUrl);
  };

  return (
    <Container>
      <Title>変換</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          変換対象のgoogle DriveフォルダID
          <Input
            type="text"
            value={googleDriveId}
            onChange={(e) => setGoogleDriveId(e.target.value)}
            required
          />
        </Label>
        <Label>
          保存先のgithubリポジトリ名
          <Input
            type="text"
            value={githubRepoName}
            onChange={(e) => setGithubRepoName(e.target.value)}
            required
          />
        </Label>
        <Label>
          保存先githubリポジトリのディレクトリ
          <Input
            type="text"
            value={githubRepoUrl}
            onChange={(e) => setGithubRepoUrl(e.target.value)}
            required
          />
        </Label>
        <SubmitButton type="submit">変換を実行</SubmitButton>
      </Form>
      <Message>AIへ送信するメッセージ</Message>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Message = styled.div`
  width: 100%;
  height: 200px;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// サンプルデータを使った使用例
const SampleUsage: React.FC = () => {
  const handleSubmit = (googleDriveId: string, githubRepoName: string, githubRepoUrl: string) => {
    console.log('Google Drive ID:', googleDriveId);
    console.log('GitHub Repository Name:', githubRepoName);
    console.log('GitHub Repository URL:', githubRepoUrl);
  };

  return (
    <LoginForm onSubmit={handleSubmit} />
  );
};

export default SampleUsage;