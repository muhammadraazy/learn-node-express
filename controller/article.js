const article = (req, res) => {
    const articles = [
        { id: 1, text: "lorem ipsum dolor" },
        { id: 2, text: "lorem ipsum dolor" },
        { id: 3, text: "lorem ipsum dolor" },
        { id: 4, text: "lorem ipsum dolor" }
    ]

    res.status(200).json(articles)

}

module.exports = article;