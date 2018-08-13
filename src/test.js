const dgram = require("../dgram/index.js")

describe("Graphs", () => {
    it("should work", () => {
        var g = dgram.graph
        g.begin("Graph")
        g.arrow(g.circle("h", "hello"), "hello_world")
        g.arrow(g.roundBox("w", "world"), "hello_world")
        g.dottedArrow("hello_world", "hello_world")
        g.arrow("hello_world", "!!!", "almost finished")
        g.arrow("!!!", g.rhombus("END"))
        g.end()
    })
})

describe("Sankey", () => {
    it("should work", () => {
        var g = dgram.sankey
        g.begin("Sankey")
        g.connect(
            "A",
            "B",
            10
        )
        g.connect(
            "B",
            "C",
            30
        )
        g.connect(
            "D",
            "B",
            20
        )
        g.connect(
            "D",
            "C",
            10
        )
        g.connect(
            "A",
            "C",
            200
        )
        g.connect(
            "JUAN DAVID",
            "D",
            20
        )
        g.end()
    })
})
