import { Core } from './core/core'
import { UtilsAssembly } from './utils'

const core = new Core()
const util = new UtilsAssembly()

async function execute() {
  const proxyList = await core.proxy.service.getProxyList.getProxyList()
  const proxy = util.getRandomElementFromArray(proxyList)
  console.log(proxy)
}

execute()
