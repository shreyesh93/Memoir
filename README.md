# Memoir 📝

Memoir is a personal productivity application built with React and Vite. It brings together everyday tasks, journaling, expense splitting, and packing lists in one place.

The project uses a feature-based folder structure to keep components organized and make future development easier.

## ✨ Features

### 🏠 Homepage
A central page for navigating the application's features.

### ✅ To-Do List
Organize daily tasks and track their completion.

### 📔 Daily Journal
A dedicated space for recording daily thoughts and experiences.

### 💸 Eat n Split
Manage shared expenses and organize expense-related information.

### 🧳 Packing List
Create packing lists, manage items, and track packing progress.

### 🔐 Login and Registration
Login and registration interfaces for the application.

## 🛠️ Tech Stack

- React
- JavaScript
- Vite
- React Router DOM
- CSS
- Git and GitHub

## 📁 Project Structure

```text
Memoir/
├── public/
├── src/
│   ├── assets/
│   │   └── components/
│   ├── features/
│   │   ├── dailyJournal/
│   │   ├── eat-n-split/
│   │   ├── packingList/
│   │   └── todo/
│   ├── pages/
│   │   ├── Homepage.jsx
│   │   ├── homepage.css
│   │   ├── Login.jsx
│   │   ├── login.css
│   │   ├── RegisterForm.jsx
│   │   └── RegisteryForm.css
│   ├── AllRoutes.jsx
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

*Note: The structure above is based on the visible project files. Additional files may exist inside individual feature folders.*

## 🚀 Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm.

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project folder

```bash
cd Memoir
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to use the application.

## 🔮 Future Improvements

- Improve the user interface and responsive design.
- Add persistent storage for tasks, journal entries, and packing lists.
- Integrate backend authentication.
- Add database support for user data.
- Enhance shared expense tracking.
- Deploy the application for public access.

## 👨‍💻 Author

Developed as a personal project to explore React development and build a centralized productivity application.