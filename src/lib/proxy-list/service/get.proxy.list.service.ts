import { Proxy } from 'proxy-lists'

export interface GetProxyListService {
  getProxyList(): Promise<Proxy[]>
}
