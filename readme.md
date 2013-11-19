## About
A simple API, built with Laravel for backend routing, and mootools for handling front end javascript.


## Basic routes
A list of basic routes the API provides

Get an item from the API
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
