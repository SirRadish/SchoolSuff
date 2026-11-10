document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  
  const name = document.getElementById("visitor-name").value.trim();
  const email = document.getElementById("visitor-email").value.trim();
  const message = document.getElementById("visitor-message").value.trim();
  const recipient = "hello@example.com"; 
  const subject = encodeURIComponent("Inquiry from " + name);
  const body = encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message);
  
  document.getElementById("form-status").textContent = "Opening mail client...";
  window.location.href = "mailto:" + recipient + "?subject=" + subject + "&body=" + body;
  
  setTimeout(() => {
    document.getElementById("form-status").textContent = "";
    document.getElementById("contact-form").reset();
  }, 3000);
});