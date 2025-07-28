# 🤖 ChatBotAI

A real-time AI-powered chatbot using **Llama 3.3-70B**, built with **Node.js**, **Express**, **MongoDB**, **Socket.io**, and **React (TypeScript)** for real-time bi-directional communication and scalable performance.

🚀 Live Demo: [chat-bot-ai-xi.vercel.app](https://chat-bot-ai-xi.vercel.app/)  
📂 Repo: [ChatBotAI](https://github.com/Harshof16/ChatBotAI)

---

## 🚀 Features

- 🧠 **Llama 3.3-70B Integration** – Backend integrated with the latest LLM
- 💬 **Real-Time Chat** – Powered by **Socket.io** for low-latency streaming
- 🗂 **MongoDB Integration** – Persists chat messages and user interactions
- ⚡ **Responsive Frontend** – Built with **React** and **TypeScript**
- 📡 **Streaming LLM Output** – Streamed token-by-token responses via sockets

---

## 🛠️ Tech Stack

| Layer             | Technologies                            |
|------------------|-----------------------------------------|
| Frontend         | React, TypeScript, Socket.io-client     |
| Backend          | Node.js, Express.js, Socket.io          |
| Database         | MongoDB (Mongoose)                      |
| LLM Integration  | Llama 3.3-70B (via backend API bridge)  |
| Deployment       | Vercel (Frontend) |

---

## 📸 Preview

| Chat UI 🖥️ | LLM Response 🧠 |
|------------|----------------|
| ![Chat UI](https://github.com/user-attachments/assets/c36dab7e-d65a-4cef-9cc4-ddfe00c49c33) |

---

## 📦 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Harshof16/ChatBotAI.git
   cd ChatBotAI
   
2. Install dependencies:
   ```bash
   npm install

3. Add .env file:
   ```bash
   MONGODB_URI=your_mongo_db_uri
   LLM_API_URL=your_llama_endpoint
   
4. Run development server:
   ```bash
   npm run dev
   
5. Visit http://localhost:3000 to start chatting with AI.

