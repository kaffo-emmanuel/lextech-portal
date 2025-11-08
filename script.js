// ===== Preloader =====
window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");
  loader.style.opacity = "0";
  setTimeout(() => (loader.style.display = "none"), 500);
});

// ===== Smooth Scroll =====
document.getElementById("getStartedBtn").addEventListener("click", () => {
  document.getElementById("login").scrollIntoView({ behavior: "smooth" });
});

// ===== Login =====
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "student" && password === "lextech") {
    alert("Welcome back, " + username + "!");
    document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
  } else {
    alert("Invalid login details. Try username: student, password: lextech");
  }
});

// ===== Community Posting =====
document.getElementById("postBtn").addEventListener("click", () => {
  const input = document.getElementById("postInput");
  const text = input.value.trim();
  if (text) {
    const feed = document.getElementById("community-feed");
    const p = document.createElement("p");
    p.innerHTML = `<strong>@You</strong>: ${text}`;
    feed.appendChild(p);
    input.value = "";
    feed.scrollTop = feed.scrollHeight;
  }
});

// ===== Chatbot Toggle =====
const chatIcon = document.getElementById("chatbot-icon");
const chatBox = document.getElementById("chatbox");
chatIcon.addEventListener("click", () => chatBox.classList.toggle("hidden"));

// ===== Simple Chatbot Logic =====
const chatInput = document.getElementById("chatInput");
const chatBody = document.getElementById("chatBody");
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const msg = chatInput.value.trim();
    if (msg) {
      const userMsg = document.createElement("p");
      userMsg.textContent = "You: " + msg;
      chatBody.appendChild(userMsg);

      const botReply = document.createElement("p");
      if (msg.toLowerCase().includes("ai")) {
        botReply.textContent = "LexiBot: AI is transforming legal practice through predictive analytics and automation.";
      } else if (msg.toLowerCase().includes("blockchain")) {
        botReply.textContent = "LexiBot: Blockchain ensures transparent, tamper-proof smart contracts.";
      } else {
        botReply.textContent = "LexiBot: That’s an insightful point! I can help you explore it further in TechLaw.";
      }

      chatBody.appendChild(botReply);
      chatInput.value = "";
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }
});

// ===== Dark Mode Toggle =====
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent =
    document.body.classList.contains("dark-mode") ? "☀️" : "🌗";
});
