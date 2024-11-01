import React from 'react';
import styled from '@emotion/styled';

type SystemSettingProps = {
  businessCategory?: string;
  receiptFileLocation?: string;
  quotationFileLocation?: string;
  purchaseFileLocation?: string;
  orderSlipFileLocation?: string;
  yearEndClosingBatchFileLocation?: string;
  accountingDataFileLocation?: string;
};

const SystemSetting: React.FC<SystemSettingProps> = ({
  businessCategory = '共通設定',
  receiptFileLocation = 'C:\\Gyosei\\Ryokin',
  quotationFileLocation = 'C:\\Gyosei\\Mitsumori',
  purchaseFileLocation = 'C:\\Gyosei\\Siire',
  orderSlipFileLocation = 'C:\\temp',
  yearEndClosingBatchFileLocation = 'C:\\Gyosei\\Ryokin\\System',
  accountingDataFileLocation = 'C:\\Gyosei\\Ryokin',
}) => {
  return (
    <Container>
      <Title>システム設定</Title>
      
      <Section>
        <SectionTitle>その他</SectionTitle>
        <Table>
          <tbody>
            <TableRow>
              <TableHeader>業務カテゴリ</TableHeader>
              <TableData>{businessCategory}</TableData>
            </TableRow>
            <TableRow>
              <TableHeader>領収書</TableHeader>
              <TableData>{receiptFileLocation}</TableData>
            </TableRow>
            <TableRow>
              <TableHeader>見積書</TableHeader>
              <TableData>{quotationFileLocation}</TableData>
            </TableRow>
            <TableRow>
              <TableHeader>仕入</TableHeader>
              <TableData>{purchaseFileLocation}</TableData>
            </TableRow>
            <TableRow>
              <TableHeader>年次更新・不納欠損バス</TableHeader>
              <TableData>{orderSlipFileLocation}</TableData>
            </TableRow>
            <TableRow>
              <TableHeader>受水槽対象者一覧表バス</TableHeader>
              <TableData>{yearEndClosingBatchFileLocation}</TableData>
            </TableRow>
            <TableRow>
              <TableHeader>会計連携データバス</TableHeader>
              <TableData>{accountingDataFileLocation}</TableData>
            </TableRow>
          </tbody>
        </Table>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 24px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Section = styled.div`
  margin-bottom: 32px;
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  font-weight: bold;
`;

const TableData = styled.td`
  padding: 8px;
`;

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <SystemSetting />
    </div>
  );
};

export default App;