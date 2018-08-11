describe("something", () => {
    it("should work", () => {
        var g = dgram().graph
        g.start("LR")
        g.arrow("hello", "world")
        g.arrow("welcome", "world")
        g.arrow("to", "world")
        g.arrow("hell", "world")
        g.flush(module, "SHOULDWORK")
    })
})
