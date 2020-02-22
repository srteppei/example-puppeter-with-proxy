import { Options } from 'proxy-lists'

import { ProxyConfigurationToProxyConfigurationThirdParty } from '../_index'
import { ProxyConfiguration } from '..'

export class ProxyConfigurationToThirdPartyOptionMapper implements ProxyConfigurationToProxyConfigurationThirdParty {
  map(t: ProxyConfiguration): Options {
    return {
      countries: t.countryList,
      protocols: t.protocolList,
    } as Options
  }
}
