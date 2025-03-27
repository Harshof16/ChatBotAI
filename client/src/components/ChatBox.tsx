import { useState, useEffect } from 'react';
import Message from './Message';
import Loader from './Loader';
import socket from '@/utils/socket';


export default function ChatBox() {
    const [messages, setMessages] = useState<{ message: string, sender: 'user' | 'ai' }[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        socket.on('chatMessage', (msg: { message: string, sender: 'user' | 'ai' }) => {
            setMessages((prev) => [...prev, msg]);
            setLoading(false);
        });

        fetch(`http://localhost:5000/api/chat/history`)
            .then((res) => res.json())
            .then((data) => setMessages(data));

        return () => {
            socket.off('chatMessage');
        };
    }, []);

    const sendMessage = async () => {
        if (input.trim()) {
            setLoading(true);
            socket.emit('chatMessage', input);
            setMessages((prev) => [...prev, { message: input, sender: 'user' }]);
            setInput('');
        }
    };

    return (
    <div className="p-4 flex flex-col h-full">
        <div className="flex-1 overflow-y-auto">
            {messages.map((msg, i) => (
                <Message key={i} text={msg.message} sender={msg.sender} />
            ))}
            {loading && <Loader />}
        </div>
        <div className="flex gap-2 mt-2">
            <input
                className="p-2 flex-1 border border-gray-500 bg-gray-800 text-white rounded"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button className="bg-blue-600 p-2 rounded cursor-pointer" onClick={sendMessage}>Send</button>
        </div>
    </div>
);
}
