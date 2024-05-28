# 英単語フラッシュカードアプリ

英単語をカンマ区切りで入力し、自動で和訳を生成し、フラッシュカード形式で表示するアプリケーションです。ユーザーがカードをクリックすることで和訳が表示・非表示になります。

## 特徴

- **英単語の入力と自動翻訳**: 英単語をカンマ区切りで入力し、DeepL APIを使用して自動で和訳を取得します。
- **フラッシュカード形式**: フラッシュカード形式で英単語と和訳を表示し、クリックで和訳を表示・非表示にできます。
- **目に優しいデザイン**: 目に優しい色を使用したデザインで、ユーザーエクスペリエンスを向上させます。

## 使用技術

- **言語**: JavaScript
- **フレームワーク**: React
- **API**: DeepL API
- **スタイル**: CSS

## プロジェクト構造

flashcard-app/  
├── public/  
│ ├── index.html  
│ └── ...  
├── src/  
│ ├── components/  
│ │ ├── Flashcard.js  
│ │ └── FlashcardList.js  
│ ├── App.js  
│ ├── index.js  
│ └── index.css  
├── .env  
├── package.json  
└── README.md  

## インストールと設定

### 必要条件

- Node.js
- npm (Node Package Manager)

### セットアップ手順

1. プロジェクトをクローン

```bash
git clone https://github.com/your-username/flashcard-app.git
cd flashcard-app
```

2. 依存関係をインストール

```bash
npm install
```

3. DeepL APIキーを取得し、.env ファイルを作成

```env
REACT_APP_DEEPL_API_KEY=your_deepl_api_key_here
```

4. 開発サーバーを起動

```bash
npm start
```
ブラウザで http://localhost:3000 にアクセスしてアプリケーションを確認します。

## コンポーネント説明

### `App.js`

- テキストエリアと翻訳ボタンを提供して入力された英単語をDeepL APIで翻訳してフラッシュカードリストに渡します。

### `FlashcardList.js`

- フラッシュカードのリストを表示します。

### `Flashcard.js`

- 各フラッシュカードを表示し、クリックすると和訳を表示・非表示にします。

### `index.css`

- 目に優しい配色とレスポンシブデザインを含むスタイルシートです。

## ライセンス

copyright (c) 2024 sw0321  
このプロジェクトはMITライセンスの下で公開されています

