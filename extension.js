const vscode = require('vscode');

// 🎉 Big list of compliments
const compliments = [
  "🔥 You're crushing it today!",
  "💡 That's some genius-level thinking!",
  "⭐ Your code is absolutely beautiful!",
  "🚀 You're coding at the speed of light!",
  "🧠 Big brain move right there!",
  "✨ You make coding look so easy!",
  "🎯 Spot on! You're a natural!",
  "💪 Look at you go, rockstar!",
  "🌟 Your variable names are *chef's kiss*!",
  "🏆 You're literally the best coder ever!",
  "😎 Too cool for bugs!",
  "🎉 Another line of code, another masterpiece!",
  "🌈 Your logic is pure poetry!",
  "⚡ Faster than the compiler itself!",
  "🦄 Rare talent spotted — it's YOU!",
  "🍀 Lucky are those who read your code!",
  "🎸 You're the rockstar of this codebase!",
  "🤩 I wish I could code like you!",
  "💎 Every function you write is a gem!",
  "🧩 You solve problems like a wizard!"
];

function getRandomCompliment() {
  return compliments[Math.floor(Math.random() * compliments.length)];
}

function activate(context) {

  // ✅ 1. Compliment on Save
  const onSave = vscode.workspace.onDidSaveTextDocument(() => {
    vscode.window.showInformationMessage(getRandomCompliment());
  });

  // ✅ 2. Compliment on typing (every 50 keystrokes)
  let keystrokeCount = 0;
  const onType = vscode.workspace.onDidChangeTextDocument(() => {
    keystrokeCount++;
    if (keystrokeCount >= 50) {
      keystrokeCount = 0;
      vscode.window.showInformationMessage(getRandomCompliment());
    }
  });

  // ✅ 3. Compliment when switching files
  const onFileSwitch = vscode.window.onDidChangeActiveTextEditor(() => {
    vscode.window.showInformationMessage(getRandomCompliment());
  });

  // ✅ 4. Compliment when opening VS Code (startup)
  vscode.window.showInformationMessage("👋 Welcome back, superstar coder! " + getRandomCompliment());

  // ✅ 5. Manual command: "Give Me a Compliment!"
  const command = vscode.commands.registerCommand('code-compliments.compliment', () => {
    vscode.window.showInformationMessage(getRandomCompliment());
  });

  // ✅ 6. Status bar button — click for compliment
  const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  statusBar.text = "🌟 Compliment Me!";
  statusBar.command = 'code-compliments.compliment';
  statusBar.tooltip = "Click for a compliment!";
  statusBar.show();

  // Register everything
  context.subscriptions.push(onSave, onType, onFileSwitch, command, statusBar);
}

function deactivate() {}

module.exports = { activate, deactivate };