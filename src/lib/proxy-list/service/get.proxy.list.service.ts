import { Proxy } from '..'

export interface GetProxyListService {
  getProxyList(): Promise<Proxy[]>
}
