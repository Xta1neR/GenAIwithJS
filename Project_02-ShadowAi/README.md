

# 🤖 Shadow AI: Chat with Digital Personas

[](https://opensource.org/licenses/MIT)
[](https://nextjs.org/)
[](https://www.typescriptlang.org/)
[](https://tailwindcss.com/)

Shadow AI is a web application that lets you have real-time, interactive conversations with the digital "shadows" of your favorite personalities. Powered by the Google Gemini API, each persona is crafted with a unique system prompt to mimic their distinct tone, knowledge, and style.

### ➡️ [**Live Demo Link**](https://www.google.com/search?q=https://your-deployment-link-here.com)

-----

## ✨ Features

  * **Dynamic Personas**: Engage with distinct AI personalities, each with a unique voice and knowledge base.
  * **Multi-language Support**: Seamlessly switch between **English** and **Hindi** for a more natural conversation.
  * **Real-time Interaction**: Get instant, streaming responses powered by the cutting-edge **Google Gemini 1.5 Pro** model.
  * **Markdown Rendering**: The chat interface correctly displays formatted text like **bold**, *italics*, and lists for a richer experience.
  * **Fully Responsive**: A sleek, modern UI that works beautifully on both desktop and mobile devices.

-----

## 🛠️ Tech Stack

This project leverages a modern, full-stack tech stack to deliver a fast and robust user experience.

| Technology | Description |
| :--- | :--- |
| **Next.js 14** | Full-stack React framework with App Router for server and client components. |
| **React** | Core UI library for building the interactive chat interface. |
| **TypeScript** | For type safety, better developer experience, and fewer bugs. |
| **Tailwind CSS** | A utility-first CSS framework for rapid and custom UI development. |
| **Google Gemini API** | The powerful AI engine that brings the personas to life. |
| **Vercel** | Platform for seamless deployment and hosting. |

-----

## 🚀 Getting Started

You can run this project on your local machine by following these steps.

### Prerequisites

Make sure you have Node.js (version 18 or higher) installed on your machine.

### Installation & Setup

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/Xta1neR/GenAIwithJS/tree/main/Project_02-ShadowAi
    cd shadow-ai
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Set Up Environment Variables**

      * Create a file named `.env.local` in the root of your project.
      * Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
      * Add your API key to the `.env.local` file:
        ```
        GEMINI_API_KEY="YOUR_API_KEY_HERE"
        ```

4.  **Run the Development Server**

    ```bash
    npm run dev
    ```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser to see the application running.

-----

## 📁 Project Structure

The project uses the standard Next.js App Router structure:

```
shadow-ai/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts      # Backend API endpoint for the chat
│   ├── chat/
│   │   └── [personaId]/
│   │       └── page.tsx      # Dynamic chat page component
│   └── page.tsx              # Homepage
├── lib/
│   └── personas.ts           # Data and system prompts for all personas, THE PERSONA PROMPTS
├── public/
│   └── ...                   # Static assets
└── tailwind.config.ts        # Tailwind CSS configuration
```

-----
