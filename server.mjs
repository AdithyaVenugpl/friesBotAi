import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Basic chatbot responses
const replies = [
  "Hello! How can I assist you today?",
  "I'm just a simple chatbot here to help.",
  "Could you please clarify that?",
  "That's interesting!",
  "I'm still learning. Let's figure it out together.",
  "Sure, tell me more.",
  "Thanks for your message!",
  "I'm here if you need anything else.",
  "Can you rephrase that, please?",
  "Let me think about that for a moment..."
];

function getRandomReply() {
  const index = Math.floor(Math.random() * replies.length);
  return replies[index];
}

app.post("/chat", (req, res) => {
  const { message } = req.body;

  console.log("User:", message);

  const reply = getRandomReply();
  res.json({ reply });
});

app.listen(5000, () => {
  console.log("✅ Basic Chatbot server running at http://localhost:5000");
});
