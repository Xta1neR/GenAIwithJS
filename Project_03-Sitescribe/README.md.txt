
# SiteScribe CLI

[![npm version](https://img.shields.io/npm/v/site-clone-cli.svg?color=blue&logo=npm)](https://www.npmjs.com/package/site-clone-cli)
[![npm downloads](https://img.shields.io/npm/dm/site-clone-cli.svg?color=orange)](https://www.npmjs.com/package/site-clone-cli)
[![Build Status](https://img.shields.io/github/actions/workflow/status/your-username/site-clone-cli/ci.yml?branch=main&logo=github)](https://github.com/your-username/site-clone-cli/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

Clone any website to your local machine for offline development and analysis. **SiteClone** creates a fully functional, local version of any live website.

---

## 📌 About The Project

**SiteClone** is a powerful command-line interface (CLI) tool designed to simplify the process of downloading and archiving websites.  
Whether you're a developer needing to analyze a site's front-end, a designer looking for inspiration, or you just want to keep an offline copy of a resource, SiteClone handles it all.

It takes a URL, recursively downloads all the assets (**HTML, CSS, JavaScript, images, fonts, etc.**), and intelligently rewrites the code to ensure all links and resource paths work correctly on your local machine.  
The result is a **pixel-perfect, fully interactive local replica** of the target website.

---

## ✨ Features

- **Full Site Cloning**: Downloads the entire front-end of a website, including all pages and assets linked from the initial URL.  
- **Offline Functionality**: Rewrites all links (`<a>`), stylesheets (`<link>`), scripts (`<script>`), and image (`<img>`) sources to relative paths, making the cloned site fully navigable offline.  
- **Asset Preservation**: Maintains the original directory structure for assets to keep the project organized and easy to understand.  
- **Cross-Platform**: Built with Node.js, it runs on **Windows, macOS, and Linux**.  
- **Easy to Use**: A simple and intuitive command-line interface gets you cloning in seconds.  

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### ✅ Prerequisites

You need to have **Node.js** and **npm** (or yarn/pnpm) installed.  
Download from 👉 [nodejs.org](https://nodejs.org)

---

### 🔧 Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/site-clone-cli.git
````

2. Navigate to the project directory:

   ```bash
   cd site-clone-cli
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. (Optional) Link the package globally:

   ```bash
   npm link
   ```

---

## 📖 Usage

The basic command structure is simple. Just provide the URL you want to clone and an optional output directory.

### 🔹 Syntax

```bash
siteclone <url> [output-directory]
```

* `<url>`: **(Required)** The full URL of the website you want to clone (e.g., `https://example.com`).
* `[output-directory]`: **(Optional)** Folder name where the cloned site will be saved.

  * Defaults to a folder named after the website’s domain (e.g., `example.com`).

---

### 🔹 Examples

**1. Clone to default directory**

```bash
siteclone https://example.com
```

👉 Saves the site into `./example.com/`

**2. Clone to a specific directory**

```bash
siteclone https://example.com my-cloned-site
```

👉 Saves the site into `./my-cloned-site/`

Once the process completes, open the `index.html` file in your browser to view the cloned site.

---

## ⚙️ How It Works

1. **Fetch Entrypoint** → Fetches the HTML content of the initial URL.
2. **Asset Scraping** → Parses HTML for resources:

   * CSS (`<link rel="stylesheet">`)
   * JS (`<script src="...">`)
   * Images (`<img>`, `srcset`)
   * Pages (`<a href="...">`)
3. **Recursive Downloading** → Downloads each discovered asset.

   * If an asset is an HTML page → repeats scraping for that page.
   * Continues until all same-domain assets are downloaded.
4. **Code Rewriting** → Replaces absolute URLs with relative paths so links work offline.
5. **Saving** → Preserves directory structure for clean, conflict-free storage.

---

## 🛠️ Technologies Used

* [Node.js](https://nodejs.org/) – Runtime environment
* [Axios](https://www.npmjs.com/package/axios) – HTTP requests
* [Cheerio](https://www.npmjs.com/package/cheerio) – HTML parsing & manipulation
* [Commander.js](https://www.npmjs.com/package/commander) – CLI framework

---

## 🤝 Contributing

Contributions are welcome! 🚀

1. Fork the project
2. Create your feature branch:

   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:

   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch:

   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**.
See the [LICENSE](./LICENSE) file for more information.

---

