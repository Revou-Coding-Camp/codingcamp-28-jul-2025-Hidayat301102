window.onload = function () {
  const nama = prompt("Selamat datang! Siapa nama Anda?");

  if (nama && nama.trim() !== "") {
    document.getElementById("userName").textContent = nama;
  } else {
    document.getElementById("userName").textContent = "Tamu";
  }

  // Mulai jam real-time
  setInterval(() => {
    const now = new Date();
    document.getElementById('currentTime').textContent = now.toLocaleTimeString();
  }, 1000);

  // Tangani form input
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const birthdate = document.getElementById('birthdate').value;
      const gender = document.querySelector('input[name="gender"]:checked')?.value || '-';
      const message = document.getElementById('messageInput').value;

      document.getElementById('displayName').textContent = name;
      document.getElementById('displayBirth').textContent = birthdate;
      document.getElementById('displayGender').textContent = gender;
      document.getElementById('displayMessage').textContent = message;
    });
  }
};
