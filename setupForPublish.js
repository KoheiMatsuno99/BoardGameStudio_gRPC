const fs = require("fs-extra");

// コピーするファイルやディレクトリのパスを設定
const filesToCopy = [
  { src: "pkg/geister/client/proto", dest: "pkg/geister/client/dist/proto" },
  // 必要に応じて他のファイルやディレクトリもここに追加
];

// ファイルまたはディレクトリをコピーする関数
async function copyFiles() {
  try {
    for (const file of filesToCopy) {
      await fs.copy(file.src, file.dest);
      console.log(`Copied ${file.src} to ${file.dest}`);
    }
    console.log("All files have been copied successfully.");
  } catch (error) {
    console.error("Error occurred while copying files:", error);
  }
}

// スクリプトのメイン実行部
async function main() {
  await copyFiles();
  // ここに他の前処理が必要な場合は追加
}

main();
