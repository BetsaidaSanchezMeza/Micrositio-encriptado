  <script>
      document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chat');
    const messageInput = document.getElementById('mensaje-input');
    const sendButton = document.getElementById('enviar-btn');

    sendButton.addEventListener('click', function() {
        const message = messageInput.value.trim();
        if (message !== '') {
            const encryptedMessage = encryptMessage(message);
            appendMessage('Betsaida', encryptedMessage);
            messageInput.value = '';
            // Aquí puedes agregar la lógica para enviar el mensaje al servidor o procesarlo de otra manera
        }
    });

    function encryptMessage(message) {
        // Clave de cifrado (debes mantener esto seguro y enviarla al destinatario de manera segura)
        const key = 'claveSuperSecreta123';
        // Cifrar el mensaje con AES utilizando la clave
        const encrypted = CryptoJS.AES.encrypt(message, key).toString();
        return encrypted;
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.innerHTML = `<strong>${sender}:</strong> <span class="encrypted-message">${message} (Mensaje encriptado)</span>`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});  
    </script>
