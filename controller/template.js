const templateController = (req, res) => {
    const profile = { name: "mohammed" }

    res.render("template", profile)

    // setTimeout(() => {
    //      res.status(301).redirect("/")
    // }, 3000) 
}

module.exports = templateController