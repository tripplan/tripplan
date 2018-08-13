const dygram = require("dygram")

// describe("Graphs", () => {
//     it("should work", () => {
//         var g = dygram.graph
//         g.begin("Graph")
//         g.arrow(g.circle("h", "hello"), "hello_world")
//         g.arrow(g.roundBox("w", "world"), "hello_world")
//         g.dottedArrow("hello_world", "hello_world")
//         g.arrow("hello_world", "!!!", "almost finished")
//         g.arrow("!!!", g.rhombus("END"))
//         g.end()
//     })
// })

describe("Sankey", () => {
    it("should work", () => {
        var g = dygram.sankey
        g.begin("Sankey")
        g.connect("A", "B")
        g.connect("D", "B", 20)
        g.connect("B", "C", 30)
        g.connect("D", "C")
        // g.connect("A", "C", 20)
        g.end()
    })
})
