import { Proxy as ThirdProxy } from 'proxy-lists'

import { Proxy } from '../..'
import { ThirdProxyToProxy } from '../_index'

export class ThirdPartyProxyToProxyMapper implements ThirdProxyToProxy {
  map(t: ThirdProxy): Proxy {
    return new Proxy(t.ipAddress, t.port, t.country, t.protocols)
  }
}
