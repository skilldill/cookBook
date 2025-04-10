# 🌐 WebSocket Demo Application

This is a simple WebSocket demo application with a server and client implementation.

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js installed
- Bun runtime installed (for the server)

### 🏃‍♂️ Running the Server

1. Install dependencies:
   ```bash
   bun install
   ```

2. Start the server:
   ```bash
   bun run index.ts
   ```

   The server will start on port 4000 by default.

### 🖥️ Running the Client

1. Open the `client/index.html` file in your web browser.
2. Click the "Connect" button to establish a WebSocket connection.
3. Use the "Ping" button to send ping messages to the server.

## ✨ Features

- WebSocket server built with Elysia
- Simple web client with connection status
- Ping/Pong functionality
- Automatic connection check every 5 seconds
- Clean UI with connection status indicators

## ⚙️ Environment Variables

- `PORT` - Server port (default: 4000)
- `INTERVAL` - Connection check interval in ms (default: 5000)

## 📞 WebSocket Endpoints

- **WebSocket**: `ws://localhost:4000/ws`
- **Health Check**: `http://localhost:4000/health`

## 📚 Additional Information

Feel free to explore and modify the code to better understand WebSocket communication using the Elysia framework. Enjoy coding! 🎉

## 📢 Stay Updated

Subscribe to my Telegram channel for more coding tips and tricks: [@CodeTipsTricks](https://t.me/CodeTipsTricks) 📲



