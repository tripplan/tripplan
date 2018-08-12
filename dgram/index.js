const graph = require("./graph.js")
const sankey = require("./sankey.js")

let dgram = name => {
    return {
        graph: graph(name),
        sankey: sankey(name)
    }
}
module.exports = dgram
