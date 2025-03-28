import express from 'express';
import Chat from '../models/Chat';
import { getAIResponse } from '../services/openaiService';

const router = express.Router();

// Fetch Chat History
router.get('/history', async (req, res) => {
    try {
        const history = await Chat.find().sort({ timestamp: 1 });
        res.status(200).json(history);
    } catch (error) {
        console.error("Error fetching chat history:", error);
        res.status(500).json({ error: "Failed to fetch chat history" });
    }
});

// Send Message & Get AI Response
router.post('/send', async (req, res) => {
    const userMessage = req.body.message;
    const aiResponse = await getAIResponse(userMessage);
    console.log('userMessage',userMessage)
    console.log('aiResponse',aiResponse)
    const userChat = new Chat({ message: userMessage, sender: 'user' });
    await userChat.save();

    const aiChat = new Chat({ message: aiResponse, sender: 'ai' });
    await aiChat.save();

    res.send({ success: true, response: aiResponse });
});

export default router;
