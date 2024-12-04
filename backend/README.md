# Backend code

### Configuring the backend

- Change the `port` in the developement.json file in the config folder to the port you want to run the backend on.
- Change the `mongoURI` in the developement.json file in the config folder to the URI of your MongoDB database.

## Running the backend

```
npm run dev
```

## Note:

The backend automatically imports the samples from the csv file to the mongoDB.

# Routes

### `General`

This file has controller functions to handle requests and responses.

### `postData`

This controller inserts the data coming from the user to the database.

### `getData`

This controller gets data from the database and returns as a response.

### `updateData`

This controller takes an ID from parameters and checks if the game with that id exists. If not, It throws an error. If Yes, it updates the database and returns 'success' message.

### `deleteData`

This controller takes an ID from parameters and checks if the game with that id exists. If not, It throws an error. If Yes, it deletes that game and returns 'success' message

### `getYearlyStats`

This controller takes the year from parameters and groups the data based on that year.

### `getWins`

This controller takes an input from parameters and returns first ten games with more wins than the input.

### `getAvgGoals`

This controller tales a year as a parameter from the user and returns the avaerage goals of each club for that year
