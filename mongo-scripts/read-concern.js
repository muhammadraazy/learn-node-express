// local => return data with no guarantee data has been acknowledged by the majority of the members replica set
// available => return data with no guarantee data has been acknowledged by the majority of the members replica set
// majority => return data with guarantee that data bas been acknowledged to majority of members

// on multi-document transaction
// read concern majority provides its guarantee data has been acknowldged to majority of members if write concern is majority aswell
