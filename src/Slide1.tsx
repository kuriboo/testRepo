```typescript
interface ChangeRequest {
  googleDriveFolderId: string;
  githubRepositoryName: string;
  githubRepositoryDirectoryPath: string;
  log: string;
}

interface SendRequestMessage {
  execute(): void;
}

class SendRequestToAI implements SendRequestMessage {
  private changeRequest: ChangeRequest;

  constructor(changeRequest: ChangeRequest) {
    this.changeRequest = changeRequest;
  }

  public execute(): void {
    // AIへ送信するメッセージ
  }
}
```