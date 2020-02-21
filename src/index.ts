import { Core } from './core/core'

const core = new Core()

async function execute() {
  const proxyList = await core.proxy.service.getProxyList.getProxyList()
  console.log(proxyList)
}

execute()
