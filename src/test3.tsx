```typescript
interface Reservation {
  date: string;
  startTime: string;
  endTime: string;
  repeatType: string;
  dayOfWeek: string[];
  facilityName: string;
  purpose: string;
  numberOfPeople: number;
  paymentMethod: string;
  contactName: string;
  contactPhone: string;
  additionalInfo: string;
}

const reservation: Reservation = {
  date: '2003', // 年は2003年
  startTime: '15:00',
  endTime: '17:00',
  repeatType: '毎週', // 毎週予約
  dayOfWeek: ['火', '金'], // 火曜日と金曜日
  facilityName: '第一会議室',
  purpose: '打ち合わせ',
  numberOfPeople: 10,
  paymentMethod: '現地払い',
  contactName: '',
  contactPhone: '',
  additionalInfo: ''
};
```