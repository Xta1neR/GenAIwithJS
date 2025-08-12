
# 🌐 Emotocode – The Language of Emojis

Emotocode is a **fun, visual token language** where each letter A–Z is represented by a unique emoji.  
Type any text, and watch it transform into a vibrant emoji sequence that’s **memorable, shareable, and cross-platform friendly**.

Built with **Next.js** for speed and deployed instantly on **Vercel**.

---

## ✨ Features
- 🔤 **A–Z Emoji Mapping** – Every letter has its own emoji.
- ⚡ **Real-time Conversion** – Type text → instantly get emoji output.
- 📋 **Copy to Clipboard** – Share your Emotocode anywhere.
- 📱 **Mobile Friendly** – Works on all devices.
- 🎨 **Minimal UI** – Focus on the fun, not the clutter.

---

## 🛠 Tech Stack
- **Next.js** – React framework for fast, SEO-friendly web apps.
- **Tailwind CSS** – Quick, responsive styling.
- **JavaScript** – Core logic for mapping and replacing text.
- **Unicode Emojis** – No image hosting needed.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repo
```bash
git clone https://github.com/yourusername/emotocode.git
cd emotocode
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Dev Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```
emotocode/
│
├── data/
│   └── emojiMap.js        # A–Z emoji mapping
│
├── pages/
│   └── index.js           # Main UI and logic
│
├── styles/
│   └── globals.css        # Tailwind + global styles
│
├── public/                # Static assets (if needed)
│
└── package.json
```

---

## 📜 Emoji Mapping

```js
export const emojiMap = {
  A: "🍏",
  B: "🐝",
  C: "🌊",
  D: "🦆",
  E: "🥚",
  F: "🐟",
  G: "🦒",
  H: "🏠",
  I: "🍦",
  J: "🤹",
  K: "🥝",
  L: "🌿",
  M: "🌙",
  N: "🪺",
  O: "🍊",
  P: "🥔",
  Q: "👑",
  R: "🌈",
  S: "🐍",
  T: "🌴",
  U: "☂️",
  V: "🎻",
  W: "🐋",
  X: "❌",
  Y: "🪀",
  Z: "🦓"
};
```

---

## 🔧 How It Works

1. User types text into an input box.
2. Text is split into uppercase letters.
3. Each letter is replaced with its corresponding emoji from `emojiMap`.
4. Output is displayed in real-time.

---

## 📦 Deployment

Deploy instantly to **Vercel**:

```bash
vercel
```

Or link your GitHub repo to [Vercel](https://vercel.com/) for automatic deployments.

---

## 💡 Future Ideas

* 📷 Export emoji text as an image.
* 🌍 Multi-language emoji mapping.
* 🎮 Gamify learning Emotocode.
* 🔄 Decode emoji back to text.

---

## 📜 License

MIT License – free to use, modify, and share.

---

## 💬 Feedback

If you build something cool with Emotocode, tag me or share it online. Let’s see your emoji-powered creations!

