import React from 'react';
import styled from 'styled-components';

interface FormProps {
  googleDriveId: string;
  githubId: string;
  githubDirectoryName: string;
  onSubmit: () => void;
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Form: React.FC<FormProps> = ({
  googleDriveId,
  githubId,
  githubDirectoryName,
  onSubmit,
}) => {
  return (
    <FormWrapper>
      <InputWrapper>
        <Label>変換対象のgoogle DriveフォルダID</Label>
        <Input type="text" value={googleDriveId} readOnly />
      </InputWrapper>
      <InputWrapper>
        <Label>保存先のgithubリポジトリ名</Label>
        <Input type="text" value={githubId} readOnly />
      </InputWrapper>
      <InputWrapper>
        <Label>保存先githubリポジトリのディレクトリ</Label>
        <Input type="text" value={githubDirectoryName} readOnly />
      </InputWrapper>
      <SubmitButton onClick={onSubmit}>変換を実行</SubmitButton>
    </FormWrapper>
  );
};

interface AIMessageProps {
  message: string;
}

const AIMessageWrapper = styled.div`
  width: 300px;
  height: 200px;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-align: center;
`;

const AIMessage: React.FC<AIMessageProps> = ({ message }) => {
  return <AIMessageWrapper>{message}</AIMessageWrapper>;
};

export const SampleForm: React.FC = () => {
  const handleSubmit = () => {
    console.log('Form submitted');
  };

  return (
    <div>
      <Form
        googleDriveId="sample-google-drive-id"
        githubId="sample-github-id"
        githubDirectoryName="sample-directory"
        onSubmit={handleSubmit}
      />
      <AIMessage message="AIへ送信するメッセージ" />
    </div>
  );
};