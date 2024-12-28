document.getElementById("open-chatbot-button").addEventListener("click", function() {
    var chatbot = document.getElementById("chatbot");
    if (chatbot.style.display === "none") {
      chatbot.style.display = "block";
    } else {
      chatbot.style.display = "none";
    }
  });