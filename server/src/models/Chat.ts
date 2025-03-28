import mongoose, { Schema, Document } from 'mongoose';

interface IChat extends Document {
    message: string;
    sender: 'user' | 'ai';
    timestamp: Date;
}

const ChatSchema = new Schema<IChat>({
    message: { type: String, required: true },
    sender: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
},
{ collection: "chats" }
);

export default mongoose.model<IChat>('Chat', ChatSchema);
