# Trending TV Shows & Movies - React App

This project is a React application built with [Vite](https://vitejs.dev/) and [React Query](https://react-query.tanstack.com/). The app fetches trending TV shows and movies for the current week using the [TMDb API](https://www.themoviedb.org/documentation/api). The app displays a dynamic list of trending content, allowing users to browse movies and TV shows that are popular this week.

## Features

- Displays trending movies and TV shows for the current week
- Fetches data using the TMDb API and React Query
- Includes a search bar to filter content by name
- Uses infinite scrolling to load more content as the user scrolls down

## Technologies Used

- **React**: Frontend framework for building the user interface
- **Vite**: Build tool and development server for faster React development
- **React Query**: Data-fetching and state management library to handle API calls
- **TMDb API**: API to fetch information about movies and TV shows
- **TailwindCSS**: Utility-first CSS framework for styling the application
- **React Router**: For handling routing and navigation

## Setup & Installation

Follow these steps to get the project up and running locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/trending-tv-movies.git
   ```
2. cd trending-tv-movies
3. npm install
4. Set up the TMDb API key:
   Go to TMDb API to get your API key.
   Create a .env file in the root directory of the project and add the following:
   VITE_TMDB_API_KEY=your_api_key_here
5. npm run dev
6. Open your browser and visit http://localhost:3000 to see the app in action.
