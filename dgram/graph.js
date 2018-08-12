const fs = require("fs-extra")
const { execSync } = require("child_process")

let graph = name => {
    let __queue = []
    let end = () => {
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

    const shape = (opening, closing) => (id, text) => `${id}${opening}${text || id}${closing}`

    return {
        begin: (type = "LR") => push(`graph ${type}`),
        arrow: (from, to, text = "") => {
            const middletext = text ? `|${text}|` : text
            return push(`${from}-->${middletext}${to}`)
        },
        line: (from, to, text = "") => {
            const middletext = text ? `|${text}|` : text
            return push(`${from}---${middletext}${to}`)
        },
        dottedLine: (from, to, text = "") => {
            const middletext = text ? ` ${text} .` : text
            return push(`${from}-.${middletext}-${to}`)
        },
        dottedArrow: (from, to, text = "") => {
            const middletext = text ? ` ${text} .` : text
            return push(`${from}-.${middletext}->${to}`)
        },
        circle: shape("((", "))"),
        box: shape("[", "]"),
        roundBox: shape("(", ")"),
        rhombus: shape("{", "}"),
        end
    }
}
module.exports = graph
