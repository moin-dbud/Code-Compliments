# 🌟 Code Compliments — VS Code Extension

> *Because every coder deserves to feel appreciated.*

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![VS Code](https://img.shields.io/badge/VS%20Code-%5E1.70.0-007ACC.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-active-brightgreen.svg)
![Made with ❤️](https://img.shields.io/badge/made%20with-%E2%9D%A4%EF%B8%8F-red.svg)

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Demo](#-demo)
- [Installation](#-installation)
- [How It Works](#-how-it-works)
- [Compliment Triggers](#-compliment-triggers)
- [Extension Settings](#-extension-settings)
- [File Structure](#-file-structure)
- [Requirements](#-requirements)
- [Known Issues](#-known-issues)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Developer](#-developer)
- [License](#-license)

---

## 🎯 About

**Code Compliments** is a fun and uplifting VS Code extension that keeps your motivation high while you code. Whether you're saving a file, switching between tabs, or typing away — this extension is always ready to remind you how awesome you are.

Coding can be stressful. Bugs are frustrating. Deadlines are scary. This extension exists to add a tiny spark of joy to your development workflow — because you deserve it. 💪

---

## ✨ Features

| Feature | Description |
|---|---|
| 💾 **Save Compliments** | Get a compliment every time you save a file |
| ⌨️ **Typing Compliments** | Fires a compliment after every 50 keystrokes |
| 🔀 **File Switch Compliments** | Cheers you on when you switch between files |
| 🚀 **Startup Welcome** | Greets you with a warm compliment when VS Code opens |
| 🖱️ **Status Bar Button** | One-click compliment from the bottom-right status bar |
| 🎮 **Command Palette** | Trigger a compliment manually anytime via `Ctrl+Shift+P` |
| 🎉 **20+ Unique Compliments** | A rich collection of fun, motivating messages |

---

## 📸 Demo

```
💡 That's some genius-level thinking!
🔥 You're crushing it today!
🧠 Big brain move right there!
🌟 Your variable names are *chef's kiss*!
🏆 You're literally the best coder ever!
```

> Compliments appear as friendly notification pop-ups in the bottom-right corner of VS Code.

---

## 📦 Installation

### Option 1: Install from `.vsix` file (Manual)

1. Download the latest `.vsix` file from the [Releases](#) page
2. Open VS Code
3. Press `Ctrl+Shift+P` → type `Extensions: Install from VSIX`
4. Select the downloaded `.vsix` file
5. Reload VS Code — and start receiving compliments! 🎉

### Option 2: Install via Terminal

```bash
code --install-extension code-compliments-1.0.0.vsix
```

### Option 3: VS Code Marketplace *(Coming Soon)*

```
Search "Code Compliments" in the Extensions panel (Ctrl+Shift+X)
```

---

## ⚙️ How It Works

The extension hooks into several VS Code API events to deliver compliments at just the right moments:

```javascript
// Fires on every file save
vscode.workspace.onDidSaveTextDocument(() => { ... });

// Fires every 50 keystrokes
vscode.workspace.onDidChangeTextDocument(() => { ... });

// Fires when switching between files/tabs
vscode.window.onDidChangeActiveTextEditor(() => { ... });

// Fires when VS Code starts
vscode.window.showInformationMessage("Welcome back, superstar! 🎉");

// Registered command for manual triggers
vscode.commands.registerCommand('code-compliments.compliment', () => { ... });

// Status bar button in the bottom-right
vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
```

---

## 🎯 Compliment Triggers

Here's a full breakdown of every way compliments can appear:

| Trigger | How to Activate |
|---|---|
| **File Save** | Press `Ctrl+S` / `Cmd+S` |
| **50 Keystrokes** | Just keep typing! |
| **Tab Switch** | Click on any other open file tab |
| **VS Code Startup** | Open VS Code |
| **Status Bar Click** | Click `🌟 Compliment Me!` in the bottom-right |
| **Command Palette** | `Ctrl+Shift+P` → `Give Me a Compliment!` |

---

## 🔧 Extension Settings

> *(Settings panel coming in v2.0)*

This extension currently works out of the box with no configuration needed. Future versions will include:

- `codeCompliments.frequency` — Control how often keystroke compliments appear
- `codeCompliments.enableOnSave` — Toggle save-based compliments
- `codeCompliments.enableOnStartup` — Toggle startup greeting
- `codeCompliments.style` — Choose between `fun`, `motivational`, or `nerdy` compliment sets

---

## 🗂️ File Structure

```
code-compliments/
│
├── extension.js          # 🧠 Core extension logic
├── package.json          # ⚙️  Extension manifest & configuration
├── README.md             # 📖 You are here!
├── CHANGELOG.md          # 📝 Version history
├── LICENSE               # ⚖️  MIT License
│
└── .vscode/
    └── launch.json       # 🚀 Debug configuration
```

---

## 📋 Requirements

| Requirement | Version |
|---|---|
| **VS Code** | `^1.70.0` or higher |
| **Node.js** | `v16.0.0` or higher |
| **npm** | `v7.0.0` or higher |

No additional dependencies are required. This extension uses only the built-in VS Code Extension API.

---

## 🐛 Known Issues

- On very high-frequency typing, the notification queue may stack — this will be debounced in v1.1.0
- The status bar button may not appear immediately after install on some systems — a VS Code restart fixes this
- Notifications may not display if VS Code's notification system is muted via "Do Not Disturb" mode

> Found a bug? [Open an issue](https://github.com/moin-dbud/Code-Compliments/issues) and I'll fix it ASAP!

---

## 🗺️ Roadmap

### v1.1.0
- [ ] Debounce keystroke compliments to avoid spam
- [ ] Add configurable frequency settings
- [ ] Add "Do Not Disturb" mode

### v1.2.0
- [ ] Language-specific compliments (Python 🐍, JavaScript ⚡, etc.)
- [ ] Compliment categories: `fun`, `motivational`, `nerdy`
- [ ] Sound effects toggle 🔊

### v2.0.0
- [ ] Full settings UI panel
- [ ] Custom compliment editor — add your own!
- [ ] Coding streak tracker 🔥
- [ ] Daily compliment history log

---

## 🤝 Contributing

Contributions are always welcome! Here's how to get started:

1. **Fork** this repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/your-username/code-compliments.git
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Make your changes** in a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
5. **Test** by pressing `F5` in VS Code to launch the Extension Development Host
6. **Commit** your changes:
   ```bash
   git commit -m "feat: add your feature description"
   ```
7. **Push** and open a **Pull Request**

### Adding New Compliments

Want to add more compliments? Just add to the array in `extension.js`:

```javascript
const compliments = [
  // existing compliments...
  "🎯 Your new compliment here!",
];
```

---

## 👨‍💻 Developer

<div>

**Moin Sheikh**

*VS Code Extension Developer | Open Source Enthusiast*

</div>

| | |
|---|---|
| 👤 **Name** | Moin Sheikh |
| 💼 **Role** | Developer & Creator |
| 🌐 **GitHub** | [@moin-dbud](https://github.com/moin-dbud) |
| 📧 **Email** | hello@moinsheikh.in |
| 💡 **Passion** | Building tools that make developers smile 😄 |

> *"I built this extension because I believe every developer deserves a little encouragement throughout their day. Coding is hard — let's make it a little more fun!"*
> — **Moin Sheikh**

---

## ⚖️ License

```
MIT License

Copyright (c) 2025 Moin Sheikh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 🌟 Show Your Support

If this extension made you smile even once, please consider:

- ⭐ **Starring** the repository on GitHub
- 📢 **Sharing** it with your developer friends
- 🐛 **Reporting** any bugs you find
- 💡 **Suggesting** new features or compliments

---

<div align="center">

Made with ❤️ by **Moin Sheikh**

*Keep coding. Keep smiling. You're amazing!* 🚀

</div>
