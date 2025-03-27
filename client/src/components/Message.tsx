interface MessageProps {
    text: string;
    sender: 'user' | 'ai';
}

export default function Message({ text, sender }: MessageProps) {
    return (
        <div className={`p-2 my-1 ${sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-3 py-2 rounded-lg ${sender === 'user' ? 'bg-blue-500' : 'bg-gray-700'}`}>
                {text}
            </span>
        </div>
    );
}
