import { Proxy } from 'proxy-lists'
import { Browser } from 'puppeteer'

export interface BrowserService {
  launch(proxy?: Proxy): Promise<Browser>
}
