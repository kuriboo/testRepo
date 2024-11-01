import React from 'react';
import styled from '@emotion/styled';

interface ReservationFormProps {
  onSubmit: (reservationData: ReservationData) => void;
}

interface ReservationData {
  date: string;
  time: string;
  numberOfPeople: number;
  name: string;
  phoneNumber: string;
  email: string;
  additionalRequests: string;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [reservationData, setReservationData] = React.useState<ReservationData>({
    date: '',
    time: '',
    numberOfPeople: 1,
    name: '',
    phoneNumber: '',
    email: '',
    additionalRequests: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setReservationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(reservationData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>予約日</Label>
        <Input type="date" name="date" value={reservationData.date} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label>時間</Label>
        <Input type="time" name="time" value={reservationData.time} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label>人数</Label>
        <Select name="numberOfPeople" value={reservationData.numberOfPeople} onChange={handleChange} required>
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>予約者名</Label>
        <Input type="text" name="name" value={reservationData.name} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label>電話番号</Label>
        <Input type="tel" name="phoneNumber" value={reservationData.phoneNumber} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label>メールアドレス</Label>
        <Input type="email" name="email" value={reservationData.email} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label>備考</Label>
        <Textarea name="additionalRequests" value={reservationData.additionalRequests} onChange={handleChange} />
      </FormGroup>
      <SubmitButton type="submit">予約</SubmitButton>
    </Form>
  );
};

const Form = styled.form`
  display: grid;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const SampleReservationForm: React.FC = () => {
  const handleSubmit = (reservationData: ReservationData) => {
    console.log('Submitted reservation data:', reservationData);
  };

  return <ReservationForm onSubmit={handleSubmit} />;
};

export default ReservationForm;