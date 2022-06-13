const studentRoute = (req, res) => {
    const students = [
        { name: "mohammed raazy", grade: 12 },
        { name: "izdihaar ariiba", grade: 12 },
        { name: "naufal hafis", grade: 12 },
        { name: "luthfi kafrawi", grade: 12 },
    ]

    res.render("student",{ students })
}

module.exports = studentRoute;