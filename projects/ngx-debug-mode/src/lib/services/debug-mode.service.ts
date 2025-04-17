import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebugModeService {
  body: any

  private readonly _debug = new BehaviorSubject<boolean>(false)
  debug$: Observable<any> = this._debug.asObservable()

  constructor() {
    this.body = document.body
    this._debug.next(this.body.dataset['debug'] as boolean || localStorage['debug'] as boolean || false)
    this.body.dataset['debug'] = this._debug.value

    this.debug$.subscribe({
      next: () => {
        if (this._debug.value) {
          localStorage.setItem('debug', this._debug.value.toString())
        } else {
          localStorage.setItem('debug', this._debug.value.toString())
        }
        this.body.dataset['debug'] = this._debug.value.toString()
      },
      error: () => {
        console.error('Error setting theme in localStorage')
      },
      complete: () => {
        localStorage.removeItem('debug')
      }
    })
  }

  toggleDebug() {
    // console.log('Toggling debug mode', this.body.dataset['debug'] == 'false' ? false : true)
    this._debug.next(!this._debug.value)
  }
}
