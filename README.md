# Micrositio-encriptado
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Micrositio encriptado</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
    <link rel="stylesheet" href="style.css">

</head>
<body>
    <div class="intro-text">
        <p> <b>Este chat es una conversación de prueba con encriptación.</b></p>
    </div>
    <div class="container">
        <h1>Bienvenido a tu chat</h1>
        <div id="chat-box">
            <div id="chat"></div>
        </div>
        <input type="text" id="mensaje-input" placeholder="Escriba su mensaje...">
        <button id="enviar-btn">Enviar</button>
    </div>

</body>
</html>

# Codigo para que el mensaje se pueda encriptar y enviar
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

   # Codigo para darle estilo al mricrositio
    body {
    background-color: #fcfeff; /* Fondo gris claro */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    padding: 0;
}

.intro-text {
    text-align: center;
    margin-bottom: 20px;
    font-size: 28px;
    color: #f4ad33;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #333;
}

.container {
    width: 650px;
    padding: 30px;
    background-color: #0155ae; /* Contenedor blanco */
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    color: #fff9f9;
    margin-bottom: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

#chat-box {
    border: 5px solid #fff9f9; /* Borde del chat más claro */
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 20px;
    height: 300px;
    overflow-y: auto;
}

#chat {
    background-color: #ffffff; 
    font-size: 18px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

#mensaje-input {
    width: calc(90% - 85px);
    padding: 15px;
    border: 1px solid #ddd; /* Borde del campo de entrada más claro */
    border-radius: 5px;
    font-size: 16px;
    outline: none;
}

#enviar-btn {
    padding: 6px 15px;
    background-color: #f4ad33; /* Botón de enviar verde claro */
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
    transition: background-color 0.3s ease;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

#enviar-btn:hover {
    background-color: #13b541; /* Color de fondo más oscuro al pasar el mouse */
}

.encrypted-message {
    font-family: italic cursive; /* Estilo de fuente en cursiva */
    color: #6b6a6a; /* Color de texto gris */
}

