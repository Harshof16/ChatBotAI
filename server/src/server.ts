import express from 'express';
import { Server } from 'socket.io';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import chatRoutes from './routes/chatRoutes';
import { getAIResponse } from './services/openaiService';
import connectDB from './config/db';
import Chat from './models/Chat';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/chat', chatRoutes);

io.on('connection', (socket) => {
    console.log('New user connected');
    socket.on('chatMessage', async (msg) => {
        const aiReply = await getAIResponse(msg);
        io.emit('chatMessage', { message: aiReply, sender: 'ai' });

        const userChat = new Chat({ message: msg, sender: 'user' });
        await userChat.save();
        const aiChat = new Chat({ message: aiReply, sender: 'ai' });
        await aiChat.save();
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log('Server running on port 5000'));
