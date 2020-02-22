import { getProxiesFromSource } from 'proxy-lists'

import { PROXY_REQUEST_CONFIGURATION, ThirdProxyToProxy, ProxyConfigurationToProxyConfigurationThirdParty } from '../../_index'
import { GetProxyListService, Proxy } from '../..'

export class GetProxyListServiceImplementation implements GetProxyListService {
  constructor(private proxyMapper: ThirdProxyToProxy, private proxyConfigurationMapper: ProxyConfigurationToProxyConfigurationThirdParty) {}

  getProxyList(): Promise<Proxy[]> {
    return new Promise((resolve, reject) => {
      let proxyList: Proxy[] = []
      getProxiesFromSource('hidemyname', this.proxyConfigurationMapper.map(PROXY_REQUEST_CONFIGURATION))
        .on('data', proxies => {
          proxyList = proxyList.concat(proxies.map(this.proxyMapper.map))
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
