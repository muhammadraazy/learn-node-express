const url = require("url")


app.get("/url", () => {
    const Url = new URL("https://www.google.com/mozilla?nama=mohammed")
    const params = new URLSearchParams()
     console.log( Url.origin )
     console.log( Url.hostname )
     console.log( Url.pathname )
     console.log( Url.href )
     console.log( Url.username )
     console.log( Url.toJSON() )

     params.append("asal", "jakarta") 
    //  params.delete("nama", "mohammed")
    params.set("name", "mohammed")
     console.log( Url.searchParams, params.get("asal") )
    //  params.getAll()
    console.log( params.values())
    console.log( params.keys())
    console.log( params.has("name"))
    console.log( params.sort())
    console.log( Url.host )
    console.log( Url.port )
    console.log( Url.slashes )

     params.forEach(p => console.log(p) )

})