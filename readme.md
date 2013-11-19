## About
A simple API, built with Laravel for backend routing, and mootools for handling front end javascript.
The application lets you create characters and store them in a database for retrieval, or deletion.

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

SQL file is included in the repo for test purposes. Database configured in:
```shell
app/config/database.php
```

Controller handling endpoints, etc... located in:
```shell  
app/controllers/SuperController.php
```

Model uses eloquent, located in:
```shell
app/models/Super.php
```
