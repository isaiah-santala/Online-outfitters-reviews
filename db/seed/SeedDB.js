const { Reviews } = require('../index')
const { GenerateJSON } = require('./GenerateJSON')

exports.SeedDB = () => {
    Reviews.create(GenerateJSON(100, 6), (err, data) => {
        if (err) return console.log(err)
        console.log(data)
    })
}

exports.GetAll = () => {
    Reviews.find({}, (err, data) => {
        if (err) return console.log(err)
        console.log(data[0])
    })
}

exports.WhipeDB = () => {
    Reviews.remove({}, (err, data) => {
        if (err) return console.log(err)
        console.log(data)
    })
}
// console.log(this.WhipeDB())
console.log(this.SeedDB())
// console.log(this.GetAll())