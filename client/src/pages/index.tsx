import "../styles/globals.css";
import ChatBox from '../components/ChatBox';
import { Bot } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col h-screen bg-gray-900 text-white">
        {/* Fixed Header */}
        <div className="flex items-center justify-center space-x-2 p-4">
            <Bot className="w-10 h-10 text-blue-500" />
            <h1 className="text-2xl font-bold">AI Chatbot</h1>
        </div>

        {/* ChatBox takes up the remaining height */}
        <div className="flex-1 overflow-hidden">
            <ChatBox />
        </div>
    </div>
    );
}
