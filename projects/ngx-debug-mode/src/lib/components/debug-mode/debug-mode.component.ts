import { Component, ViewEncapsulation } from '@angular/core';
import { DebugModeService } from '../../services/debug-mode.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'debug-mode',
  imports: [
    AsyncPipe,
    CommonModule
  ],
  templateUrl: './debug-mode.component.html',
  styleUrl: './debug-mode.component.sass',
  encapsulation: ViewEncapsulation.None
})
export class DebugModeComponent {
  constructor(private _debugModeService: DebugModeService) {}

  toggleDebug() {
    this._debugModeService.toggleDebug()
  }
  getDebug(): Observable<boolean> {
    return this._debugModeService.debug$
  }
}
