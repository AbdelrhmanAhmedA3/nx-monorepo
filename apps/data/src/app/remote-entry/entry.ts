import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-data-entry',
  template: `
    <div class="p-8 font-sans text-gray-800">
      <h2 class="text-2xl font-bold mb-6">App Two - Information</h2>
      
      <div class="flex flex-col md:flex-row gap-6">
        <div class="flex-1 border border-gray-200 rounded-lg overflow-hidden h-fit">
          <div class="bg-[#eef2ff] text-blue-700 font-semibold p-4 text-lg">
            Company Information
          </div>
          <div class="bg-white px-4">
            <div class="flex justify-between py-4 border-b border-gray-100">
              <span class="font-semibold text-gray-700">Company Name</span>
              <span class="text-gray-600">Acme Corporation</span>
            </div>
            <div class="flex justify-between py-4 border-b border-gray-100">
              <span class="font-semibold text-gray-700">Industry</span>
              <span class="text-gray-600">Technology</span>
            </div>
            <div class="flex justify-between py-4 border-b border-gray-100">
              <span class="font-semibold text-gray-700">Headquarters</span>
              <span class="text-gray-600">New York, USA</span>
            </div>
            <div class="flex justify-between py-4 border-b border-gray-100">
              <span class="font-semibold text-gray-700">Founded</span>
              <span class="text-gray-600">2010</span>
            </div>
            <div class="flex justify-between py-4 border-b border-gray-100">
              <span class="font-semibold text-gray-700">Employees</span>
              <span class="text-gray-600">250+</span>
            </div>
            <div class="flex justify-between py-4">
              <span class="font-semibold text-gray-700">Website</span>
              <a href="#" class="text-blue-600 underline">www.acmecorp.com</a>
            </div>
          </div>
        </div>

       
        <div class="flex-1 flex flex-col gap-6">
 
          <div class="bg-[#f8f9fc] p-6 rounded-lg border border-gray-100">
            <h3 class="font-bold text-lg mb-4 text-gray-800">About Us</h3>
            <p class="text-gray-600 leading-relaxed">
              Acme Corporation is a leading provider of innovative solutions to help businesses grow and succeed in the digital world. We are committed to delivering high quality products and excellent customer service.
            </p>
          </div>
          

          <div class="bg-[#f2fdf4] p-6 rounded-lg border border-green-50">
            <h3 class="font-bold text-lg text-green-700 mb-4">Our Mission</h3>
            <p class="text-gray-700 leading-relaxed">
              To empower businesses with technology and drive positive change.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class RemoteEntry {}
