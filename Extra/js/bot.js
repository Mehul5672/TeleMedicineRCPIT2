const chatbot = document.getElementById("chatbot");
const toggleButton = document.getElementById("toggle-button");
const sendButton = document.getElementById("send-button");
const micButton = document.getElementById("mic-button");
const userInputElement = document.getElementById("user-input");
const chatContent = document.getElementById("chat-content");

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

// app.post('/webhook', (req, res) => {
//     const body = req.body;

//     // Extract the action from the request
//     const action = body.queryResult.action;

//     // Implement your logic based on the action
//     let fulfillmentText;
//     if (action === 'input.welcome') {
//         fulfillmentText = "Welcome to my Google Assistant webhook!";
//     } else {
//         fulfillmentText = "Sorry, I don't understand.";
//     }

//     // Send response back to Google Assistant
//     res.json({ fulfillmentText });
// });

// app.listen(port, () => console.log(`Webhook listening on port ${port}`));

let recognition;

function toggleChatbotSize() {
    chatbot.classList.toggle("small");
}

function addUserMessage(message) {
    const userMessage = document.createElement("div");
    userMessage.textContent = message;
    userMessage.classList.add("message", "sent");
    chatContent.appendChild(userMessage);
    userInputElement.value = "";
}

function addChatbotMessage(message) {
    const chatbotMessage = document.createElement("div");
    chatbotMessage.textContent = message;
    chatbotMessage.classList.add("message", "received");
    chatContent.appendChild(chatbotMessage);

    const speech = new SpeechSynthesisUtterance(message);
    speechSynthesis.speak(speech);
}

function toggleChatbot() {
    chatbot.classList.toggle("active");
}

function startSpeechRecognition() {
    recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript;
        addUserMessage(spokenText);

        // Process the spoken text and generate a response
        let response = "Hi, I'm your Telemedicine Kiosk, an AI assistant.";
        
        switch (spokenText.toLowerCase()) {
            case "hello.":
                response = "Hello! How can I assist you today?";
                break;
            case "hey, what's your name?":
                response = "Hello!, I'm Healthcare chat-bot, build by Green Coders, How can i assist you today";
                break;
            case "what can you do for me?":
                response = "I can do so many things related to healthcare";
                break;
            case "like what?":
                response = "Like i can book appointment for you, i can perform basic health checkups, Disease prediction etc";
                break;
            case "How are you.":
                response = "I'm just a computer program, so I don't have feelings, but I'm here to help!";
                break;
            case "what can you do":
                response = "I can answer questions, provide information, and assist with various tasks. How can I assist you?";
                break;
            case "goodbye":
                response = "Goodbye! If you have more questions, feel free to come back anytime.";
                break;
            case "Tell me about heart disease." ||"tell me about heart disease":
                response = "To maintain a heart-healthy lifestyle, focus on a balanced diet rich in fruits, vegetables, whole grains, and lean proteins. Regular exercise is crucial; aim for at least 150 minutes of moderate-intensity aerobic activity per week.Manage stress through relaxation techniques like deep breathing and meditation.Avoid smoking and limit alcohol consumption.Regularly check your blood pressure, cholesterol levels, and maintain a healthy weight.Consult your healthcare provider for personalized advice and monitoring.Option 2: Explore Common Heart Disease Medications";
                break;
            case "mera naam":
                response = "mera naam Green Coders hai";
                break;
                // Add more test cases and responses here
            case "i love you":
                response = "I love you too.";
                break;
            case "Hi.":
                response = "Hi, I'm your Telemedicine kiosk, an AI assistant for Healthcare.";
                break;
            case "नमस्ते":
                response = "मैं अच्छा हूँ,तुम कैसे हो?";
                break;
            case "who is Green Coders":
                response = "Hi, I'm Green Coders assistant";
                break;
            case "What's the recommended daily intake of water for adults?":
                response = "The recommended daily water intake for adults varies but is typically around 8-10 glasses or 2-2.5 liters.";
                break;
            case "Can you suggest some healthy breakfast options?":
                response = "Sure! Some healthy breakfast options include oatmeal, Greek yogurt with fruit, or whole-grain toast with avocado.";
                break;
            case "How can I improve my sleep quality?":
                response = "To improve sleep quality, try maintaining a regular sleep schedule, creating a comfortable sleep environment, and avoiding caffeine and electronics before bedtime.";
                break;
            case "What are some effective ways to reduce stress?":
                response = "Effective stress-reduction techniques include deep breathing exercises, meditation, regular exercise, and spending time in nature.";
                break;
            case "I have fever":
                response = "Rest, stay hydrated, take fever-reducing medication as directed, and seek medical attention if necessary."
                // Add more cases and responses as needed
            default:
                response = "I'm sorry, I didn't understand that. How can I assist you?";
                break;
        }

        addChatbotMessage(response);
    };

    recognition.start();
}

toggleButton.addEventListener("click", toggleChatbotSize);
micButton.addEventListener("click", startSpeechRecognition);

sendButton.addEventListener("click", () => {
    const userMessage = userInputElement.value;
    if (userMessage.trim() === "") return;

    addUserMessage(userMessage);

    let response = "Hi, I'm your TeleMedicine Kiosk, an AI assistant.";

    switch (userMessage.toLowerCase()) {
        case "hello":
            response = "Hello! How can I assist you today?";
            break;
        case "what can you do for me?":
            response = "I can do so many things related to healthcare";
            break;
        case "how are you":
            response = "I'm just a computer program, so I don't have feelings, but I'm here to help!";
            break;
        case "how to cure cancer":
            response = "There isn't a simple two-line solution to curing cancer, as it's a complex disease with various types and causes. Current approaches involve a combination of surgery, chemotherapy, radiation therapy, immunotherapy, targeted therapy, and early detection strategies tailored to each individual's case.";
            break;
        case "what can you do":
            response = "I can answer questions, provide information, and assist with various tasks. How can I assist you?";
            break;
        case "goodbye":
            response = "Goodbye! If you have more questions, feel free to come back anytime.";
            break;
        case "tell me about heart disease":
            response = "To maintain a heart-healthy lifestyle, focus on a balanced diet rich in fruits, vegetables, whole grains, and lean proteins. Regular exercise is crucial; aim for at least 150 minutes of moderate-intensity aerobic activity per week.Manage stress through relaxation techniques like deep breathing and meditation.Avoid smoking and limit alcohol consumption.Regularly check your blood pressure, cholesterol levels, and maintain a healthy weight.Consult your healthcare provider for personalized advice and monitoring.Option 2: Explore Common Heart Disease Medications";
            break;
        case "mera naam":
            response = "mera naam Green Coders hai";
            break;
        case "i love you":
            response = "I love you too.";
            break;
        case "hi":
            response = "Hi, I'm your Telemedicine kiosk, an AI assistant for Healthcare.";
            break;
        case "नमस्ते":
            response = "मैं अच्छा हूँ,तुम कैसे हो?";
            break;
        case "who is Green Coders":
            response = "Hi, I'm Green Coders assistant";
            break;
        case "What is the recommended daily intake of water for adults":
            response = "The recommended daily water intake for adults varies but is typically around 8-10 glasses or 2-2.5 liters.";
            break;
        case "Can you suggest some healthy breakfast options":
            response = "Sure! Some healthy breakfast options include oatmeal, Greek yogurt with fruit, or whole-grain toast with avocado.";
            break;
        case "How can I improve my sleep quality":
            response = "To improve sleep quality, try maintaining a regular sleep schedule, creating a comfortable sleep environment, and avoiding caffeine and electronics before bedtime.";
            break;
        case "What are some effective ways to reduce stress":
            response = "Effective stress-reduction techniques include deep breathing exercises, meditation, regular exercise, and spending time in nature.";
            break;
            // Add more cases and responses as needed
        default:
            response = "I'm sorry, I didn't understand that. How can I assist you?";
            break;
    }

    addChatbotMessage(response);
});

chatbot.style.display = "block";
toggleChatbot();