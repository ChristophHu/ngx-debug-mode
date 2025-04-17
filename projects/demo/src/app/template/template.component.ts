import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { DebugModeService, DebugModeComponent } from '@christophhu/ngx-debug-mode';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { DebugModeComponent } from '../../../../ngx-debug-mode/src/public-api';

@Component({
  selector: 'app-template',
  imports: [
    CommonModule,
    DebugModeComponent
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.sass',
  providers: [
    DebugModeService
  ]
})
export class TemplateComponent {
  private _debugModeService: DebugModeService

  // needed for custom toggle button
  // form: FormGroup

  constructor(@Inject(DebugModeService) _debugModeService: DebugModeService, private _fb: FormBuilder) {
    this._debugModeService = _debugModeService

    // this.form = this._fb.group({
    //   darkMode: [true]
    // })
  }

  toggleTheme() {
    this._debugModeService.toggleTheme()
  }
  getTheme(): Observable<boolean> {
    return this._debugModeService.debug$
  }

  // isChecked : boolean = true
}
