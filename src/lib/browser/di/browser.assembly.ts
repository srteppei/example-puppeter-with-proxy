import { BrowserServiceAssembly } from '.'

export class BrowserAssembly {
  private _service: BrowserServiceAssembly | undefined

  get service() {
    if (this._service === undefined) {
      this._service = new BrowserServiceAssembly()
    }
    return this._service
  }
}
