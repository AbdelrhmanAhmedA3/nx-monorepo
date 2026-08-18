import { Component, input } from '@angular/core';
import { Button } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-records',
  standalone: true,
  imports: [TableModule, Button],
  template: `
    <div class="p-6 font-sans text-[#333]">
      <div class="flex justify-between items-center mb-5">
        <h2 class="m-0 text-2xl font-semibold">App One - Records</h2>
        <p-button icon="pi pi-plus" label="add" />
      </div>

      <div class="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
        <p-table 
          [value]="records()" 
          [paginator]="true" 
          [rows]="5" 
          [showCurrentPageReport]="true" 
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} records"
        >
          <ng-template pTemplate="header">
            <tr>
              <th class="bg-[#f8f9fa] text-[#5f6368] font-semibold text-sm p-4 border-b border-[#e0e0e0] text-left">ID</th>
              <th class="bg-[#f8f9fa] text-[#5f6368] font-semibold text-sm p-4 border-b border-[#e0e0e0] text-left">Name</th>
              <th class="bg-[#f8f9fa] text-[#5f6368] font-semibold text-sm p-4 border-b border-[#e0e0e0] text-left">Email</th>
              <th class="bg-[#f8f9fa] text-[#5f6368] font-semibold text-sm p-4 border-b border-[#e0e0e0] text-left">Department</th>
              <th class="bg-[#f8f9fa] text-[#5f6368] font-semibold text-sm p-4 border-b border-[#e0e0e0] text-left">Status</th>
              <th class="bg-[#f8f9fa] text-[#5f6368] font-semibold text-sm p-4 border-b border-[#e0e0e0] text-center w-20">Actions</th>
            </tr>
          </ng-template>
          <ng-template pTemplate="body" let-record>
            <tr>
              <td class="p-4 text-sm text-[#202124] border-b border-[#e0e0e0]">{{ record.id }}</td>
              <td class="p-4 text-sm text-[#202124] border-b border-[#e0e0e0]">{{ record.name }}</td>
              <td class="p-4 text-sm text-[#202124] border-b border-[#e0e0e0]">{{ record.email }}</td>
              <td class="p-4 text-sm text-[#202124] border-b border-[#e0e0e0]">{{ record.department }}</td>
              <td class="p-4 text-sm text-[#202124] border-b border-[#e0e0e0]">
                <span class="px-2.5 py-1 rounded-full text-xs font-medium {{ record.status === 'Active' ? 'bg-[#e6f4ea] text-[#137333]' : 'bg-[#fce8e6] text-[#c5221f]' }}">
                  {{ record.status }}
                </span>
              </td>
              <td class="p-4 text-sm border-b border-[#e0e0e0] text-center">
                <button class="bg-transparent border-none cursor-pointer text-[#5f6368] flex items-center justify-center w-8 h-8 rounded-full mx-auto hover:bg-[#f1f3f4]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  </svg>
                </button>
              </td>
            </tr>
          </ng-template>
        </p-table>
      </div>
    </div>
  `
})
export class RecordsComponent {
  records = input<any[]>([]);
  totalRecords = input<number>(0);
}
