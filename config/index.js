require('babel-register')()

const environment = process.env.NODE_ENV || 'defaults'
const { basename } = require('path')
const etc = require('etc')()
const fs = require('fs')

const conf = fs.readdirSync(__dirname)
  .filter(dir =>
    dir !== 'webpack' &&
    dir !== basename(__filename)
  )
  .map(dir => {
    let defaultData = {}
    let environmentData = {}
    try { defaultData = require(`./${dir}/defaults`) } catch (err) { }
    try { environmentData = require(`./${dir}/${environment}`) } catch (err) { }
    return {
      key: dir,
      value: Object.assign(defaultData, environmentData)
    }
  })
  .reduce((acc, curr) => {
    acc[curr.key] = curr.value
    return acc
  }, {})

etc.add(conf)

// console.log(conf)
console.log(etc.toJSON())

module.exports = etc
