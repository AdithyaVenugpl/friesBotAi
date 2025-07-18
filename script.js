async function sendMessage() {
  const userInput = document.getElementById("userInput").value;

  const response = await fetch("http://localhost:5000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: userInput }),
  });

  const data = await response.json();
  console.log("Server says:", data); // debug

  // Safely display the reply
  if (data.reply) {
    document.getElementById("botReply").innerText = data.reply;
  } else {
    document.getElementById("botReply").innerText = "Oops, no response.";
  }

  // Clear the input field
  document.getElementById("userInput").value = "";
}
