import { ProxyListServiceAssembly } from '.'

export class ProxyListAssembly {
  private _service: ProxyListServiceAssembly | undefined

  get service() {
    if (this._service === undefined) {
      this._service = new ProxyListServiceAssembly()
    }
    return this._service
  }
}
