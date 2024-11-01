import React from 'react';
import styled from '@emotion/styled';

interface WaterSystemSettingsProps {
  businessSupplyCompanies?: string[];
  businessSupplyDefault?: string;
  hotelFile?: string;
  ryokanFile?: string;
  shareFolder?: string;
  shareFileName?: string;
  temporaryFolder?: string;
  ryokanSystemFolder?: string;
  keyoeseMryokinFolder?: string;
}

const WaterSystemSettings: React.FC<WaterSystemSettingsProps> = ({
  businessSupplyCompanies = [],
  businessSupplyDefault = '',
  hotelFile = '',
  ryokanFile = '',
  shareFolder = '',
  shareFileName = '',
  temporaryFolder = '',
  ryokanSystemFolder = '',
  keyoeseMryokinFolder = '',
}) => {
  return (
    <Container>
      <Title>その他</Title>
      <Section>
        <SectionTitle>業務メッセージ</SectionTitle>
        <Label>
          共通設定
          <Select value={businessSupplyDefault}>
            {businessSupplyCompanies.map((company, index) => (
              <option key={index} value={company}>
                {company}
              </option>
            ))}
          </Select>
        </Label>
        <Table>
          <thead>
            <tr>
              <th>業務①なし</th>
              <th>宛先</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>①</td>
              <td>検針</td>
            </tr>
            <tr>
              <td>②</td>
              <td>調定</td>
            </tr>
            <tr>
              <td>③</td>
              <td>収納</td>
            </tr>
            <tr>
              <td>④</td>
              <td>未納</td>
            </tr>
          </tbody>
        </Table>
      </Section>
      
      <Section>
        <SectionTitle>シミュレーションパス</SectionTitle>
        <PathInput
          label="料金改定 調定ファイル名"
          value={hotelFile}
          folder="C:YoyoseMRyokin"
        />
        <PathInput
          label="料金改定 料金ファイル名"
          value={ryokanFile}
          folder="RyokinFile.xls"
        />
      </Section>
      
      <Section>
        <SectionTitle>共通連携</SectionTitle>
        <PathInput
          label="共通フォルダ名"
          value={shareFolder}
          folderSelectable
        />
        <PathInput
          label="共通ファイル名"
          value={shareFileName}
          folder="集計地区別"
        />
      </Section>

      <Section>      
        <PathInput
          label="年次更新 不納欠損パス"
          value={temporaryFolder}
          folder="C:temp"
          folderSelectable
        />
        <PathInput
          label="受水槽対象者一覧表パス"
          value={ryokanSystemFolder}
          folder="C:YoyoseMRyokinSystem"
          folderSelectable
        />
        <PathInput
          label="会計連携データパス"
          value={keyoeseMryokinFolder} 
          folder="C:KeyoeseMryokin"
          folderSelectable
        />
        <Label>
          地区種別
          <Select>
            <option>コース地区</option>
          </Select>
        </Label>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
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

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Select = styled.select`
  margin-left: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 4px;
    text-align: left;
  }
`;

const PathInput: React.FC<{
  label: string;
  value?: string;
  folder?: string;
  folderSelectable?: boolean;
}> = ({ label, value = '', folder = '', folderSelectable = false }) => {
  return (
    <div>
      <Label>{label}</Label>
      <PathInputContainer>
        <Input value={value} readOnly={!folderSelectable} />
        <FolderButton>{folder}</FolderButton>
        {folderSelectable && <SelectButton>参照</SelectButton>}
      </PathInputContainer>
    </div>
  );
};

const PathInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Input = styled.input`
  flex: 1;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FolderButton = styled.span`
  margin-left: 8px;
  padding: 4px 8px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SelectButton = styled.button`
  margin-left: 8px;
  padding: 4px 8px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;

export default WaterSystemSettings;

// サンプルデータを使用した表示例
const App: React.FC = () => {
  return (
    <WaterSystemSettings
      businessSupplyCompanies={['共通設定', '検針']}
      businessSupplyDefault="共通設定"
      hotelFile="HotelFile.xls"
      ryokanFile="RyokinFile.xls"
      shareFolder="C:Yoyose"
      shareFileName="集計地区.csv"
      temporaryFolder="C:temp"
      ryokanSystemFolder="C:YoyoseMRyokinSystem" 
      keyoeseMryokinFolder="C:KeyoeseMryokin"
    />
  );
};

export { App };