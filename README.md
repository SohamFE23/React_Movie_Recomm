# 🎬 Movie Discovery App

A modern, responsive movie discovery application built using **React 19 and Vite**. The application allows users to discover movies, search for their favourite titles, explore movie details, and view trending movies based on user search activity.

The project integrates the **OMDb API** for movie data and **Appwrite** for storing and tracking search analytics.

## ✨ Features

- **🔍 Movie Search:** Search for movies in real time using the OMDb API.
- **⚡ Debounced Search:** Implements search debouncing to reduce unnecessary API requests and improve application performance.
- **🔥 Trending Movies:** Tracks movie search activity and displays trending movies based on search frequency.
- **☁️ Appwrite Integration:** Uses Appwrite as the backend database to store and retrieve movie search statistics.
- **📱 Responsive Design:** Provides a user-friendly interface across desktop, tablet, and mobile devices.
- **⚛️ Modern React Architecture:** Uses React Hooks, including `useState` and `useEffect`, for state management and API interactions.
- **🚀 Fast Development:** Powered by Vite for fast development server startup and optimized production builds.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Frontend library |
| Vite | Development server and build tool |
| Tailwind CSS | Styling and responsive UI |
| JavaScript (ES6+) | Application logic |
| OMDb API | Movie information and search |
| Appwrite | Backend services and database |
| React Hooks | State management and lifecycle handling |

## 📂 Project Structure

```text
React_Movie_Recomm/
│
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and other assets
│   ├── components/         # Reusable React components
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
│
├── .env.local              # Environment variables
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

*Note: The directory structure above is illustrative. Actual folders and filenames may differ depending on your implementation.*

## ⚙️ Getting Started

Follow these instructions to run the project locally.

### 1. Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- npm (Node Package Manager)
- Git

### 2. Clone the Repository

```bash
git clone <your-repository-url>
```

Navigate to the project directory:

```bash
cd React_Movie_Recomm
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory and add the following configuration:

```env
VITE_OMDB_API_KEY=your_omdb_api_key

VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

**Getting API Credentials:**

- OMDb API: Get your API key from [OMDb API](https://www.omdbapi.com/apikey.aspx).
- Appwrite: Create a project at [Appwrite](https://appwrite.io/) and obtain your project ID, database ID, and collection ID.

**Important:** Never commit your actual API credentials or `.env.local` file to GitHub. Add `.env.local` to your `.gitignore` file.

### 5. Run the Development Server

```bash
npm run dev
```

Open the URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## 🏗️ Build for Production

To generate an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `VITE_OMDB_API_KEY` | API key for accessing movie information |
| `VITE_APPWRITE_PROJECT_ID` | Appwrite project identifier |
| `VITE_APPWRITE_DATABASE_ID` | Appwrite database identifier |
| `VITE_APPWRITE_COLLECTION_ID` | Appwrite collection identifier |

## 📈 Application Workflow

1. The user opens the Movie Discovery application.
2. The user searches for a movie using the search interface.
3. The application sends a request to the OMDb API.
4. Movie search results are retrieved and displayed.
5. Search activity is recorded in the Appwrite database.
6. Trending movies are displayed based on recorded search activity.

## 🎯 Project Objectives

- Develop a responsive web application using modern React.
- Understand API integration and asynchronous JavaScript.
- Implement debouncing to optimize search performance.
- Learn backend database integration using Appwrite.
- Understand how to track and display trending content using search analytics.

## 🙏 Acknowledgements

- [JavaScript Mastery](https://www.jsmastery.pro/) for learning resources and project inspiration.
- [OMDb API](https://www.omdbapi.com/) for movie information.
- [Appwrite](https://appwrite.io/) for backend and database services.
- [React](https://react.dev/) and [Vite](https://vite.dev/) for development tools.

## 📄 License

This project is intended for educational and learning purposes. You are welcome to explore, modify, and extend the application.

---

**Developed with ❤️ using React, Vite, and Appwrite.**
