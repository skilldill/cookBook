let ws = null;
let es = null;

const connectButton = document.getElementById('connectButton');
const pingButton = document.getElementById('pingButton');
const messages = document.getElementById('messages');

function addMessage(text) {
    const li = document.createElement('li');
    li.textContent = text;
    messages.appendChild(li);
}

function connectWS() {
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
        addMessage(`WS: ${event.data}`);
    });
}

function connectSSE() {
    es = new EventSource('http://localhost:4000/events');

    es.onopen = () => {
        addMessage('SSE: CONNECTED');
    };

    es.onmessage = (event) => {
        addMessage(`SSE: ${event.data}`);
    };

    es.onerror = () => {
        addMessage('SSE: ERROR');
    };
}

function disconnect() {
    if (ws) {
        ws.close();
        ws = null;
    }

    if (es) {
        es.close();
        es = null;
    }
}

function connect() {
    connectWS();
    connectSSE();
}

function ping() {
    if (!ws) return;
    ws.send('PING MESSAGE');
}

function handleClick() {
    if (ws || es) {
        disconnect();
    } else {
        connect();
    }
}

connectButton.addEventListener('click', handleClick);
pingButton.addEventListener('click', ping);