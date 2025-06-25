# REAL-TIME-CHAT-APPLICATION

Task-2: REAL-TIME CHAT APPLICATION

COMPANY: CODTECH IT SOLUTIONS 

NAME : M Hajiya Jasmine

INTERN ID:CT04DF753

DOMAIN: Frontend Web Development

BATCH DURATION: 4 WEEKS

MENTOR NAME: NEELA SANTOSH

DESCRIPTION: 

This project is a real-time chat application built with Vue.js for the frontend and WebSockets for real-time communication. The app enables users to send and receive messages instantly, creating an interactive chat experience. It uses the socket.io-client library to establish a WebSocket connection, allowing for bidirectional communication between clients.

The application has a minimalist design with a responsive layout that adapts seamlessly to different devices, such as desktops, tablets, and smartphones. It includes a message input field, a send button, and a dynamic list of messages that updates in real-time as users send or receive new messages.

The chat window automatically scrolls to show the most recent messages, ensuring a smooth experience for users.Messages are handled using Vue's reactivity system. When a message is sent, it is immediately added to the message history on the client side and broadcast to all other connected clients via WebSockets. This means that all users in the chat room see the same message at the same time, creating a synchronized conversation flow.

The app stores messages in an array within the Vue component's state. Each new message triggers an update to the messages array, ensuring that the chat history is continuously updated. The simple and clean interface makes it easy for users to interact with, without any unnecessary complexity.

The project is built to connect to a public WebSocket server for testing purposes, but it can be easily customized to connect to a personal or private WebSocket server. By updating the WebSocket URL in the script.js file, developers can integrate the chat into their own systems.

This project serves as a solid foundation for building interactive, real-time communication applications with Vue.js and WebSockets.


OUTPUT:

![CHAT](https://github.com/user-attachments/assets/7bf96821-eff9-42a3-a62f-1191c776dc1a)
