# Arivla - Chat System

This project is a simple chat system built with NestJS and WebSockets, styled using Tailwind CSS and Alpine.js via CDN. It was developed as part of a coding challenge for Arivla Software Developer Role.

## Table of Contents

- [Arivla - Chat System](#arivla---chat-system)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Project Structure](#project-structure)
  - [Usage](#usage)

## Features

- Real-time messaging with WebSockets
- Real-time notifications for new users joining
- Simple and clean UI with Tailwind CSS
- Lightweight client-side code with Alpine.js

## Prerequisites

- Node.js (Current LTS)

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:iamolayemi/arivla-chat.git
   cd rivla-chat
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running the Application

1. Start the NestJS server:

   ```bash
   npm run start:dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

- `src/`: Contains the source code
  - `app.module.ts`: Main application module
  - `chats/`: Contains the chats module and related files
    - `chats.gateway.ts`: WebSocket gateway for handling real-time communication
    - `chats.module.ts`: Chat module
    - `chats.service.ts`: Chat service for business logic
    - `chats.interface.ts`: Interfaces for chat messages and other types
- `public/`: Contains the static files
  - `index.html`: Main HTML file

## Usage
1. Open `http://localhost:3000` in multiple browser tabs or windows.
2. Enter a username to join the chat.
3. Send messages in real-time and see notifications when new users join.

