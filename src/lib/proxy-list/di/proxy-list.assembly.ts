import { ProxyListServiceAssembly } from '.'
import { ProxyListMapperAssembly } from './proxy-list.mapper.assembly'

export class ProxyListAssembly {
  private _service: ProxyListServiceAssembly | undefined
  private _mapper: ProxyListMapperAssembly | undefined

  get service() {
    if (this._service === undefined) {
      this._service = new ProxyListServiceAssembly(this.mapper)
    }
    return this._service
  }

  get mapper() {
    if (this._mapper === undefined) {
      this._mapper = new ProxyListMapperAssembly()
    }
    return this._mapper
  }
}
