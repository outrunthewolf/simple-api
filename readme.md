## About
A simple API, built with Laravel for backend routing, and mootools for handling front end javascript.
The application lets you create characters and store them in a database for retrieval, or deletion.

The actual web app is best viewed in Chrome.

## Basic routes
A list of basic routes the API provides

Get an item from the API, specify an id for a single item, or no id for an entire collection
```shell
GET /api/super/{id}
```

Create an item with the API
```shell
POST /api/create/{data}
```

Delete an item with the API
```shell
DELETE /api/drop/{id}
```

## Configuration

#### Backend

SQL file is included in the repo for test purposes located here:
```shell
public/db_backup/superheros_sql_backup.sql
```

Database configured in:
```shell
app/config/database.php
```

Controller handling endpoints, etc... located in:
```shell  
app/controllers/SuperController.php
```

Model uses eloquent with soft delete, located in:
```shell
app/models/Super.php
```

#### Frontend

Main javascript controller located in:
```shell
public/javascript/main.jss
```

The endpoint URL can be changed within the main javascript file:
```javascript
// API variables
this.api_url = "http://localhost:49160";
```

The landing page HTML is located in:
```shell
app/views/hello.php
```

### TODO

- Return single item on create, and merge back into the local object
- Handle multiple error codes on request, rather than just filtering one
- Pass JS vars through init function on DOM ready, rather than having to edit the JS file
- Run getSupers() regularly, to get any supers made by other people at the same time
- Re-factor the toggle functions, could be turned into possibly one main function
- Add back in descriptions, and sort styles out appropriately
- Add in the "Battle" functionality