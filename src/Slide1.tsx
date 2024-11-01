import React from 'react';
import styled from 'styled-components';

type FormProps = {
  googleDriveId: string;
  githubRepoName: string;
  githubDirectoryPath: string;
  onSubmit: () => void;
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Form: React.FC<FormProps> = ({
  googleDriveId,
  githubRepoName,
  githubDirectoryPath,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="googleDriveId">変換対象のgoogle DriveフォルダID</Label>
          <Input
            type="text"
            id="googleDriveId"
            value={googleDriveId}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="githubRepoName">保存先のgithubリポジトリ名</Label>
          <Input
            type="text"
            id="githubRepoName"
            value={githubRepoName}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="githubDirectoryPath">保存先githubリポジトリのディレクトリ</Label>
          <Input
            type="text"
            id="githubDirectoryPath"
            value={githubDirectoryPath}
          />
        </FormField>
        <SubmitButton type="submit">変換を実行</SubmitButton>
      </form>
    </FormContainer>
  );
};

const SampleForm: React.FC = () => {
  const handleSubmit = () => {
    console.log('Form submitted');
  };

  return (
    <Form
      googleDriveId="sample-google-drive-id"
      githubRepoName="sample-github-repo"
      githubDirectoryPath="sample/directory"
      onSubmit={handleSubmit}
    />
  );
};

export default SampleForm;