describe("something", () => {
    it("should work", () => {
        var g = dgram("SHOULDWORK").graph
        g.begin()
        g.arrow(g.circle("h", "hello"), "hello_world")
        g.arrow(g.roundBox("w", "world"), "hello_world")
        g.dottedArrow("hello_world", "hello_world")
        g.arrow("hello_world", "!!!", "almost finished")
        g.arrow("!!!", g.rhombus("END"))
        g.end()
    })
})
