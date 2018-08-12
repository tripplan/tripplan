const fs = require("fs")

var d3 = Object.assign(
    {},
    require("d3-format"),
    require("d3-selection"),
    require("d3-sankey"),
    require("d3-scale"),
    require("d3-scale-chromatic")
)

const uuidv1 = require("uuid/v1")

const jsdom = require("jsdom")
const { JSDOM } = jsdom
const { document } = new JSDOM(`...`).window

const chart = () => {
    const node = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    const svg = d3
        .select(node)
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .attr("width", `${width}px`)
        .attr("height", `${height}px`)
        .style("width", `100%`)
        .style("height", `auto`)

    const { nodes, links } = sankey(data)

    svg.append("g")
        // .attr("stroke", "#000")
        // .attr("stroke", "rgba(0,0,0,0.3)")
        .selectAll("rect")
        .data(nodes)
        .enter()
        .append("rect")
        .attr("x", d => d.x0)
        .attr("y", d => d.y0)
        .attr("height", d => d.y1 - d.y0)
        .attr("width", d => d.x1 - d.x0)
        .attr("fill", d => color(d.name))
        .append("title")
        .text(d => `${d.name}\n${format(d.value)}`)

    const link = svg
        .append("g")
        .attr("fill", "none")

        .attr("stroke-opacity", 0.7)
        .selectAll("g")
        .data(links)
        .enter()
        .append("g")
        .style("mix-blend-mode", "multiply")

    const gradient = link
        .append("linearGradient")
        .attr("id", d => (d.uid = uuidv1()))
        .attr("gradientUnits", "userSpaceOnUse")
        .attr("x1", d => d.source.x1)
        .attr("x2", d => d.target.x0)

    gradient
        .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", d => color(d.source.name))

    gradient
        .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", d => color(d.target.name))

    link.append("path")
        .attr("d", d3.sankeyLinkHorizontal())
        .attr("stroke", d => `url(#${d.uid})`)
        .attr("stroke-width", d => Math.max(1, d.width))

    link.append("title").text(d => `${d.source.name} → ${d.target.name}\n${format(d.value)}`)

    svg.append("g")
        .style("font-size", "12px")
        .style("font-family", "monospace")
        .style("fill", "#fff")
        .selectAll("text")
        .data(nodes)
        .enter()
        .append("text")
        .attr("y", d => (d.y1 + d.y0) / 2)
        .attr("text-anchor", "middle")
        .each(function(d) {
            var n = d.name
                .replace("-", "- ")
                .replace("_", "_ ")
                .split(" ")
            // get the current element
            var text = d3.select(this)

            text.style("transform", `translateY(-${n.length / 2}em)`)
            // now loop
            for (var i = 0; i < n.length; i++) {
                text.append("tspan")
                    .attr("x", d => (d.x0 + d.x1) / 2)
                    .attr("dy", `1em`)
                    .text(n[i])
            }
        })

    return svg.node()
}

const sankey = ({ nodes, links }) => {
    const sankey = d3
        .sankey()
        .nodeWidth(80)
        .nodePadding(20)
        .extent([[1, 1], [width - 1, height - 5]])
    return sankey({
        nodes: nodes.map(d => Object.assign({}, d)),
        links: links.map(d => Object.assign({}, d))
    })
}

const format = d => {
    const f = d3.format(",.0f")
    return `${f(d)} TWh`
}

const greatColors = [
    "#F95651",
    "#F9BC70",
    "#3E86F3",
    "#36598F",
    "#5DBB86",
    "#27A6CC",
    "#37D497",
    "#272838",
    "#4D243D"
]
const colorfn = d3.scaleOrdinal(greatColors)
const color = name => {
    return colorfn(name.replace(/ .*/, ""))
}

const width = 800
const height = 300

const data = {
    nodes: [
        {
            name: "Losses"
        },
        {
            name: "District heating"
        },
        {
            name: "Carlos Baute"
        },
        {
            name: "Jessica ling"
        },
        {
            name: "Mauro Vim"
        },
        {
            name: "YYYUUU Vim"
        },
        {
            name: "VVZXVA Vim"
        },
        {
            name: "casdqwe Vim"
        }
    ],
    links: [
        {
            source: 0,
            target: 1,
            value: 200
        },
        {
            source: 0,
            target: 2,
            value: 100
        },
        {
            source: 0,
            target: 3,
            value: 100
        },
        {
            source: 1,
            target: 4,
            value: 100
        },
        {
            source: 2,
            target: 4,
            value: 100
        },
        {
            source: 3,
            target: 4,
            value: 100
        },
        {
            source: 4,
            target: 5,
            value: 100
        },
        {
            source: 5,
            target: 6,
            value: 200
        },
        {
            source: 0,
            target: 7,
            value: 50
        }
    ]
}

let n = chart()

let div = document.createElement("div")
div.append(n)

fs.writeFileSync("./asd.svg", div.innerHTML)

module.exports = () => {}
