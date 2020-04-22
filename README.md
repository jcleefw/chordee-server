### To start server 
  ```
  yarn server
  ```


### Mongo db connection
1. Type `mongod` to connect to db. If **mongodb** is not started, run `mongo` 
2. type `use songbrary` to connected to the database.


#### Inserting data to mongodb
```
db.songbraries.insertOne(
   { "name" : "Good Good Father",
     "artist" : ['Housefire'],
   }
)
```

#### Select data to mongodb
db.songbraries.find({})

### Postman
To use postman to seed data, in `post` make sure you use `x-www-form-urlencoded` in the body to submit data
