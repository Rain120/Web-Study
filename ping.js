const { URL } = require('url')
const https = require('https')
const pingCount = 5
const paths = {

  npm: `https://registry.npmjs.org/vue/latest`,

  yarn: `https://registry.yarnpkg.com/vue/latest`,

  tb: `https://registry.npm.taobao.org/vue/latest`

}
const ping = url => {
  return new Promise((resolve, reject) => {
    const start = Date.now()
    const { hostname, pathname } = new URL(url)
    const req = https.request({
      hostname,
      path: pathname
    }, () => {
      process
        .stdout
        .write('.')
      resolve(Date.now() - start)
    })
    req.on('error', reject)
    req.end()
  })
}
const pingX = (registry, times) => {
  return ping(paths[registry]).then(latency => {
    return times > 1
      ? pingX(registry, times - 1).then(results => [
        latency, ...results
      ])
      : [latency]
  })
}
const pings = Object
  .keys(paths)
  .map(registry => {
    return pingX(registry, pingCount).then(results => ( { registry, results } ))
  })
Promise
  .all(pings)
  .then(results => {
    console.log()
    console.log(results)
  })
  .catch(err => {
    console.log(err)
  })