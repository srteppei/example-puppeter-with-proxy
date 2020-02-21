import { Proxy, getProxiesFromSource } from 'proxy-lists'

import { PROXY_REQUEST_CONFIGURATION } from '../../_index'
import { GetProxyListService } from '..'

export class GetProxyListServiceImplementation implements GetProxyListService {
  getProxyList(): Promise<Proxy[]> {
    return new Promise((resolve, reject) => {
      let proxyList: Proxy[] = []
      getProxiesFromSource('freeproxylist', PROXY_REQUEST_CONFIGURATION)
        .on('data', function(proxies) {
          proxyList = proxyList.concat(proxies)
        })
        .on('error', function(error) {
          console.error(error)
        })
        .once('end', function() {
          resolve(proxyList)
        })
    })
  }
}
