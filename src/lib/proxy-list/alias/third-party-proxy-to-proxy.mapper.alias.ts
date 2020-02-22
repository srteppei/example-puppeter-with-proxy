import { Proxy as ThirdProxy } from 'proxy-lists'

import { MapInterface } from '../../common'
import { Proxy } from '..'

export type ThirdProxyToProxy = MapInterface<ThirdProxy, Proxy>
