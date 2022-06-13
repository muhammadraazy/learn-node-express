const assert = require('assert')

app.get("/assert", (req, res) => {
    const a = 10;
    const b = 10;
    
    try{
           assert(typeof 1234 === 'number')
           assert.equal(a, b)
           assert(1)
           assert.match("you will not fail", /fail/gi)
           assert.doesNotMatch("you will not", /fail/gi)
           assert.deepStrictEqual({ a: 5 }, { a: 5 })
           console.log("no error occured")
    } catch(err) {
        console.log(err)
    }
})