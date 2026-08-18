import { Component } from '@angular/core';
import { RecordsComponent } from '../features/records/components/records.component';

@Component({
  imports: [RecordsComponent],
  selector: 'app-table-entry',
  template: `<app-records></app-records>`,
})
export class RemoteEntry {}
