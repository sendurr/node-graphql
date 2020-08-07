# node-graphql
Node server with graphQL based API by connecting to MongoDB database for data source.

### Installation
1. Download the repo.
2. Make sure you have Docker installed.
3. Run "docker-compose up" at the root directory of the project.
4. Once a both app container and mongoDB container are up, make sure mongoDB contains default dataset.
    4.1 Run "docker ps -a"
    4.2 Identify mongoDB container id.
    4.3 Run "docker exec -it <container id> /bin/bash"
    4.4 Run "mongo"
    4.5 Run "use mydb"
    4.6 Run "show collections"
    4.7 It should list member , coverage, subscription, person collections.
    4.8 If any of the collections are missing manually insert collection data.
        4.8.1 Run "db.<collection name>.insert(<copy json data from /mongo-seed/<collection name>.json>)"

### Usage
1. Log on to http://localhost:3000/member-search to access graphQL server
2. Refer to docs section for available graphQL queries.        
        
