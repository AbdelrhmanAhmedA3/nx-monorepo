import { Component, signal } from '@angular/core';
import { Button } from 'primeng/button';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { Record } from '../models/record.model';


@Component({
  selector: 'app-records',
  standalone: true,
  imports: [TableModule, Button,IconField, InputIcon, InputText],
  template: `
    <div class="p-6 font-sans text-[#333]">
      <div class="flex justify-between items-center mb-5">
        <h2 class="m-0 text-2xl font-semibold">Data Application - Records</h2>

        <p-button
          icon="pi pi-plus"
          label="Add"
        />
      </div>

      <div class="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
        <p-table
        #dt2
        [globalFilterFields]="['id','firstName','age']"
          [value]="records()"
          [paginator]="true"
          [rows]="limit()"
          [totalRecords]="records().length"
          [showCurrentPageReport]="true"

        >
           <ng-template #caption>
                    <div class="flex">
                        <p-iconfield iconPosition="left" >
                            <p-inputicon>
                                <i class="pi pi-search"></i>
                            </p-inputicon>
                            <input pInputText type="text" (input)="dt2.filterGlobal($event.target.value, 'contains')" placeholder="Search keyword" />
                        </p-iconfield>
                    </div>
                </ng-template>
          <ng-template pTemplate="header">
            <tr>
              <th pSortableColumn="id">ID <p-sortIcon field="id" /></th>
              <th pSortableColumn="firstName">First Name <p-sortIcon field="firstName" /></th>
              <th pSortableColumn="age">Age <p-sortIcon field="age" /></th>
              <th>Actions</th>
            </tr>
          </ng-template>

          <ng-template pTemplate="body" let-record>
            <tr>
              <td>{{ record.id }}</td>
              <td>{{ record.firstName }}</td>
              <td>{{ record.age }}</td>
              <td>
                <button>
                  <i class="pi pi-ellipsis-v"></i>
                </button>
              </td>
            </tr>
          </ng-template>
        </p-table>
      </div>
    </div>
  `,
})
export class RecordsComponent {
  readonly limit = signal(5);
  readonly records = signal<Record[]>([
    {
      id: 1,
      firstName: 'John',
      age: 30,
    },
    {
      id: 2,
      firstName: 'Sarah',
      age: 28,
    },
    {
      id: 3,
      firstName: 'Omar',
      age: 35,
    },
    {
      id: 4,
      firstName: 'Mona',
      age: 26,
    },
    {
      id: 5,
      firstName: 'Ahmed',
      age: 32,
    },
    {
      id: 6,
      firstName: 'Adam',
      age: 29,
    },
  ]);


}