// use admin database
// use admin

// built in role
// dbOwner => combine capability of readWrite, userAdmin, dbAdmin
// dbAdmin => use to manage database
// userAdmin => use tomanage user and role
// readWrite => use to work with operation on database and collections

db.createUser(
    {
        user: "mongo",
        pwd: "mongo",
        roles: [ 
            "userAdminAnyDatabase",
            "readWriteAnyDatabase" 
        ]
    }
)

// Connect to mongodb with username & password
// mongo --username mongo --password mongo --host localhost --port 27017
