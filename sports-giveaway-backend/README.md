# Sports Giveaway App Backend

## Overview
This is the backend for the Sports Giveaway Tracker app. It includes endpoints for managing games, teams, and promotional giveaways.

## Tech Stack
- Node.js + Express
- MongoDB (Mongoose)
- RESTful API

## Setup

1. Clone the repository or unzip the provided zip file.
2. Run `npm install`
3. Create a `.env` file in the root directory with the following content:

```
MONGO_URI=your_mongodb_connection_string
```

4. Start the server:

```
node server.js
```

## Routes

- `GET /games`: Get games, filterable by `date`, `team`, `league`
- `POST /giveaways`: Add a new giveaway
- `GET /giveaways`: Get all giveaways