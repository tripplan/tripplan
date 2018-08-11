const fs = require("fs-extra")
const path = require("path")
const { execSync } = require("child_process")

let dgram = () => {
    let __queue = []
    let flush = (module, name) => {
        const dir = "./charts"
        fs.ensureDir(dir).then(() => {
            const input = `${dir}/${name}.mmd`
            const output = `${dir}/${name}.svg`
            const style = "./dgram/style.css"
            fs.writeFileSync(input, __queue.join("\n"))
            execSync(`npx mmdc -i ${input} -o ${output} -b transparent`)
            let svg = fs.readFileSync(output).toString()
            let stl = fs.readFileSync(style).toString()
            fs.writeFileSync(output, svg.replace("</svg>", `<style>${stl}</style></svg>`))
            __queue = []
        })
    }
    let push = (...args) => __queue.push(...args)

    return {
        flush,
        push,
        graph: {
            start: (type = "LR") => push(`graph ${type}`),
            arrow: (from, to, text = "") => push(`${from}-${text}->${to}`),
            flush
        }
    }
}
module.exports = dgram
