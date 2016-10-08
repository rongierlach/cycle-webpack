import path from 'path'

global.paths = {}
global.paths.base = path.normalize(__dirname + '/../..')
global.paths.server = path.join(global.paths.base, 'server')
global.paths.public = path.join(global.paths.base, 'public')
global.paths.assets = path.join(global.paths.public, 'assets')
global.paths.src = path.join(global.paths.public, 'src')
global.paths.bin = path.join(global.paths.public, 'bin')

module.exports = global.paths
