// step to create replica set with Authentication
- start two instance with below command
- mongod --replSet replicaName --keyFile <keyfile> --dbpath <dbpath> --port <port>
 - connect to the instance with <mongosh --port port>
   - then rs.initiate()

// step to create replica set without authentication
// step 1: mongod --replSet replica-name --dbpath dbpathname --port portNumber
// setp 2: rs.initiate({ host: "localhost:27017", priority: 2, votes: 1} 

// add new member
rs.add({ host: "hostnames", priority: 2, votes: 1})
// remove a member
// stop the member instance/server
rs.remove("hostname")

// check status
rs.status()

// check members configuration
rs.conf()

// set tags to members
const cfg = rs.conf().members[0].tags = { "data": "west", usage: "development" }

// reconfig members
rs.reconfig(configuration)

// read preferrence
db.users.find({ name: "mohammed"}).readPref("primaryPreferred", { "data-center": "west", usage: "production" }) 

// members in replica set
// hidden => copied the data from primary but cannot be read
// arbiter => do not replicate the data from the primary
