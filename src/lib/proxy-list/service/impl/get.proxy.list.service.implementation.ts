import { getProxiesFromSource } from 'proxy-lists'

import { PROXY_REQUEST_CONFIGURATION, ThirdProxyToProxy } from '../../_index'
import { GetProxyListService, Proxy } from '../..'

export class GetProxyListServiceImplementation implements GetProxyListService {
  constructor(private mapper: ThirdProxyToProxy) {}

  getProxyList(): Promise<Proxy[]> {
    return new Promise((resolve, reject) => {
      let proxyList: Proxy[] = []
      getProxiesFromSource('hidemyname', PROXY_REQUEST_CONFIGURATION)
        .on('data', proxies => {
          proxyList = proxyList.concat(proxies.map(this.mapper.map))
        })
        .on('error', function(error) {
          reject(error)
        })
        .once('end', function() {
          resolve(proxyList)
        })
    })
  }
}
