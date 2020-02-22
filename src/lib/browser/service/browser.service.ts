import { Proxy } from '../../proxy-list'
import { Browser } from 'puppeteer'

export interface BrowserService {
  launch(proxy?: Proxy): Promise<Browser>
}
