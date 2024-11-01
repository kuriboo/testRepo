import React from 'react';
import styled from 'styled-components';

interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
}

interface ReservationData {
  date: string;
  time: string;
  numberOfPeople: number;
  courseType: string;
  name: string;
  phoneNumber: string;
  email: string;
  additionalRequests: string;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: ReservationData = {
      date: formData.get('date') as string,
      time: formData.get('time') as string,
      numberOfPeople: parseInt(formData.get('numberOfPeople') as string),
      courseType: formData.get('courseType') as string,
      name: formData.get('name') as string,
      phoneNumber: formData.get('phoneNumber') as string,
      email: formData.get('email') as string,
      additionalRequests: formData.get('additionalRequests') as string,
    };
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Label>
          日付
          <Input type="date" name="date" required />
        </Label>
        <Label>
          時間
          <Input type="time" name="time" required />
        </Label>
      </Row>
      <Row>
        <Label>
          人数
          <Input type="number" name="numberOfPeople" min={1} required />
        </Label>
        <Label>
          コース
          <Select name="courseType" required>
            <option value="">選択してください</option>
            <option value="courseA">コースA</option>
            <option value="courseB">コースB</option>
          </Select>
        </Label>
      </Row>
      <Row>
        <Label>
          氏名
          <Input type="text" name="name" required />
        </Label>
        <Label>
          電話番号
          <Input type="tel" name="phoneNumber" required />
        </Label>
      </Row>
      <Row>
        <Label>
          メールアドレス
          <Input type="email" name="email" />
        </Label>
      </Row>
      <Row>
        <Label>
          要望・備考
          <Textarea name="additionalRequests" />
        </Label>
      </Row>
      <SubmitButton type="submit">予約する</SubmitButton>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

export default ReservationForm;

// Usage example
export const ReservationFormExample = () => {
  const handleSubmit = (data: ReservationData) => {
    console.log(data);
    // Handle form submission
  };

  return <ReservationForm onSubmit={handleSubmit} />;
};