import React from 'react';
import styled from 'styled-components';

interface ReservationFormProps {
  onSubmit?: (data: ReservationData) => void;
}

interface ReservationData {
  date: string;
  time: string;
  course: string;
  numberOfPeople: number;
  name: string;
  phoneNumber: string;
  email: string;
  remarks: string;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: ReservationData = {
      date: formData.get('date') as string,
      time: formData.get('time') as string,
      course: formData.get('course') as string,
      numberOfPeople: parseInt(formData.get('numberOfPeople') as string),
      name: formData.get('name') as string,
      phoneNumber: formData.get('phoneNumber') as string,
      email: formData.get('email') as string,
      remarks: formData.get('remarks') as string,
    };
    onSubmit?.(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        予約日
        <Input type="date" name="date" required />
      </Label>
      <Label>
        時間
        <Select name="time" required>
          <option value="">選択してください</option>
          <option value="11:00">11:00</option>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
        </Select>
      </Label>
      <Label>
        コース
        <Select name="course" required>
          <option value="">選択してください</option>
          <option value="A">Aコース</option>
          <option value="B">Bコース</option>
          <option value="C">Cコース</option>
        </Select>
      </Label>
      <Label>
        人数
        <Input type="number" name="numberOfPeople" min={1} max={10} required />
      </Label>
      <Label>
        代表者名
        <Input type="text" name="name" required />
      </Label>
      <Label>
        電話番号
        <Input type="tel" name="phoneNumber" required />
      </Label>
      <Label>
        メールアドレス
        <Input type="email" name="email" />
      </Label>
      <Label>
        備考
        <Textarea name="remarks" />
      </Label>
      <ButtonGroup>
        <Button type="submit">確認</Button>
        <Button type="reset">クリア</Button>
      </ButtonGroup>
    </Form>
  );
};

const Form = styled.form`
  display: grid;
  gap: 16px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
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

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  min-height: 100px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const sampleData: ReservationData = {
  date: '2023-06-01',
  time: '12:00',
  course: 'A',
  numberOfPeople: 2,
  name: '山田太郎',
  phoneNumber: '03-1234-5678',
  email: 'test@example.com',
  remarks: 'アレルギーがあります。',
};

const App: React.FC = () => {
  const handleSubmit = (data: ReservationData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>予約フォーム</h1>
      <ReservationForm onSubmit={handleSubmit} />
      <h2>サンプルデータ</h2>
      <pre>{JSON.stringify(sampleData, null, 2)}</pre>
    </div>
  );
};

export default App;