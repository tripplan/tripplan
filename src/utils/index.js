import _ from "lodash"

const getMinAndMaxStartDate = destinations => {
    if (destinations.length) {
        const min = _.minBy(destinations, "startDate")
        const max = _.maxBy(destinations, "startDate")
        const from = new Date(min.startDate).toLocaleDateString()
        const to = new Date(max.startDate).toLocaleDateString()
        return [from, to]
    }
    return []
}

export default {
    getMinAndMaxStartDate
}
