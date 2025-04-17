import { Component } from '@angular/core';
import { DebugModeComponent } from "../../../ngx-debug-mode/src/lib/components/debug-mode/debug-mode.component";

@Component({
  selector: 'app-root',
  imports: [DebugModeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'demo';
}
