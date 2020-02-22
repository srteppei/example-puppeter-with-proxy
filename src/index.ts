import { Core } from './core/core'
import { UtilsAssembly } from './utils'

const core = new Core()
const util = new UtilsAssembly()

async function execute() {
  const proxyList = await core.proxy.service.getProxyList.getProxyList()
  const proxy = util.getRandomElementFromArray(proxyList)
  console.log(proxy)
  /* const browser = await core.browser.service.puppeteer.launch(proxy)
  const page = (await browser.pages())[0]
  page.goto('https://milonic.com/myipaddress.php') */
}

execute()
