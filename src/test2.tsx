```typescript
interface SystemSettings {
  業務メッセージ: string;
  業務ログなし: boolean;
  復帰: boolean;
  調定: boolean;
  収納: boolean;
  未納: boolean;

  シミュレーションパス: string;
  料金設定_調定ファイル名: string;
  料金設定_料金ファイル名: string;
  料金設定_集計分類: string;

  年次更新・不納欠損パス: string;
  受水槽対象者一覧表パス: string;
  会計連携データパス: string;
  地区種別: string;
}
```