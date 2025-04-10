let ws = null;

const connectButton = document.getElementById('connectButton');
const pingButton = document.getElementById('pingButton');
const messages = document.getElementById('messages');

function connect() {
    ws = new WebSocket('ws://localhost:4000/ws');

    ws.addEventListener('open', () => {
        connectButton.textContent = 'Connected';
        connectButton.classList.remove('disconnected');
        pingButton.style.display = 'block';
    });

    ws.addEventListener('close', () => {
        connectButton.textContent = 'Disconnected';
        connectButton.classList.add('disconnected');
        pingButton.style.display = 'none';
    });

    ws.addEventListener('message', (event) => {
        const message = event.data;
        const li = document.createElement('li');
        li.textContent = message;
        messages.appendChild(li);
    });
}

function disconnect() {
    if (!ws) return;
    ws.close();
    ws = null;
}

function ping() {
    if (!ws) return;
    ws.send('PING MESSAGE');
}

function handleClick() {
    if (ws) {
        disconnect();
    } else {
        connect();
    }
}

connectButton.addEventListener('click', handleClick);
pingButton.addEventListener('click', ping);