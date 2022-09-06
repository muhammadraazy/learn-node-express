// add new member
rs.add({ host: "hostnames", priority: 2, votes: 1})

// reconfig members
rs.reconfig(configuration)

// read preferrence
db.users.find({ name: "mohammed"}).readPref("primaryPreferred", { "data-center": "west", usage: "production" }) 

// members in replica set
// hidden => copied the data from primary but cannot be read
// arbiter => do not replicate the data from the primary
