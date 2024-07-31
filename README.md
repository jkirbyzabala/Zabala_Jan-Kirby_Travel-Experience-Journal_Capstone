# Zabala_Jan-Kirby_Travel-Experience-Journal_Capstone

# Travel Journal

Travel Journal is a MERN stack application that allows users to document their travel experiences. Users can create entries with details such as location, duration, photos, and notes. The app also features a map to visualize travel locations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Node.js (v14.x or later)
- MongoDB (local or cloud instance)

### Clone the Repository

```bash
- git clone https://github.com/yourusername/travel-journal.git
- cd travel-journal
```

## Install Dependencies

### Backend

```bash
- cd backend
- npm install
```

### Frontend

```bash
- cd ../frontend
- npm install
```

## Environment Variables

### Backend

```bash
- MONGODB_URI=your_mongodb_uri
- PORT=5000
```

### Frontend

```bash
- REACT_APP_MAPBOX_TOKEN=your_mapbox_token
```

## Start the Application

### Backend

```bash
- cd backend
- npm start
```

### Frontend

```bash
- cd frontend
- npm start
```

Open your browser and navigate to http://localhost:3000.

## Usage

- Home Page: View all travel entries.
- Favorites Page: View favorite travel spots.
- Do Not Recommend Page: View locations to avoid.
- Map Page: Visualize all travel entries on a map.
- Create Entry: Add a new travel entry.

## Features

- CRUD Operations: Create, read, update, and delete travel entries.
- Map Integration: Visualize travel locations using Mapbox.
- Responsive Design: Mobile-friendly design for ease of use on all devices.
- Favorites: Mark and view favorite locations.
- Categorization: Organize entries into categories such as "Do Not Recommend".

## Project Structure

```bash
travel-journal/
│
├── backend/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── .env
│ ├── index.js
│ └── package.json
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── styles/
│ │ ├── App.js
│ │ ├── index.js
│ │ └── package.json
│ └── .env
│
└── README.md
```

## Configuration

- Mapbox Integration
- To use Mapbox for visualizing locations, ensure you have a valid Mapbox token. You can obtain one by signing up at Mapbox.
- Add the token to your frontend .env file:

```bash
  - REACT_APP_MAPBOX_TOKEN=your_mapbox_token
```

- MongoDB
  - Make sure your MongoDB instance is running and accessible. Update the MONGODB_URI in your backend .env file with the appropriate connection string.

```

```
