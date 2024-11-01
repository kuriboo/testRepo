import React from 'react';
import styled from '@emotion/styled';

type SystemSettingsProps = {
  businessLocations: string[];
  userLocations: string[];
  commonMessages: string;
  hotelFile: string;
  ryokanFile: string;
  tempDirectory: string;
  keiseiMyoshinDirectory: string;
  keiseiRyokanDirectory: string;
  dataDirectory: string;
};

const SystemSettings: React.FC<SystemSettingsProps> = ({
  businessLocations,
  userLocations,
  commonMessages,
  hotelFile,
  ryokanFile,
  tempDirectory,
  keiseiMyoshinDirectory,
  keiseiRyokanDirectory,
  dataDirectory,
}) => {
  return (
    <Container>
      <Title>その他</Title>
      <Section>
        <SectionTitle>業務メッセージ</SectionTitle>
        <TextField value={commonMessages} readOnly />
      </Section>
      <Section>
        <SectionTitle>シミュレーションパス</SectionTitle>
        <PathList>
          {businessLocations.map((location, index) => (
            <PathItem key={index}>
              <span>{index + 1}</span>
              <TextField value={location} readOnly />
            </PathItem>
          ))}
        </PathList>
      </Section>
      <Section>
        <SectionTitle>料金改定</SectionTitle>
        <PathItem>
          <span>旅館</span>
          <TextField value={hotelFile} readOnly />
        </PathItem>
        <PathItem>
          <span>シティホテル</span>
          <TextField value={ryokanFile} readOnly />
        </PathItem>
      </Section>
      <Section>
        <SectionTitle>年次更新 不納欠損パス</SectionTitle>
        <TextField value={tempDirectory} readOnly />
      </Section>
      <Section>
        <SectionTitle>受水槽対象者一覧表パス</SectionTitle>
        <PathItem>
          <TextField value={keiseiMyoshinDirectory} readOnly />
        </PathItem>
      </Section>
      <Section>
        <SectionTitle>会計連携データパス</SectionTitle>
        <TextField value={keiseiRyokanDirectory} readOnly />
      </Section>
      <Section>
        <SectionTitle>地区種別</SectionTitle>
        <PathList>
          {userLocations.map((location, index) => (
            <PathItem key={index}>
              <span>{index + 1}</span>
              <TextField value={location} readOnly />
            </PathItem>
          ))}
        </PathList>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 600px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

const PathList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PathItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  > span {
    margin-right: 8px;
  }
`;

const TextField = styled.input`
  width: 100%;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const SampleData: SystemSettingsProps = {
  businessLocations: ['C:￥Gyosei￥Ryokan', 'D:￥Gyosei￥Ryokan'],
  userLocations: ['横浜', '箱根', '調布', '千葉', '木更津', '富士', '戸田', '両会津'],
  commonMessages: 'C:￥Gyosei￥Ryokin',
  hotelFile: 'C:￥hotelFile.xls',
  ryokanFile: 'C:￥RyokanFile.xls',
  tempDirectory: 'C:￥temp',
  keiseiMyoshinDirectory: 'C:￥Gyosei￥Ryokin￥System',
  keiseiRyokanDirectory: 'C:￥Gyosei￥Ryokan',
  dataDirectory: 'コース地区',
};

const App: React.FC = () => {
  return (
    <div>
      <h1>System Settings Example</h1>
      <SystemSettings {...SampleData} />
    </div>
  );
};

export default App;