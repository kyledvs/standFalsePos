import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Define the Customer interface or import it from the correct location
export interface Customer {
  id: number;
  name: string;
  contact: number;
  email: string;
  // Add other relevant fields here
}

@Injectable({
  providedIn: 'root'
})
export class PqsqlCustService {
  private api = 'http://192.168.137.1:3000/customers';

  constructor(private http: HttpClient) { }

  getCustomers() {
    console.log('Fetching customers...')
    return this.http.get<Customer[]>(this.api);
    
  }

  addCustomer(data: Partial<Customer>) {
    console.log('Sending:', data);

    return this.http.post<Customer>(this.api, data);
  }
  

  deleteCustomer(id: number) {
    return this.http.delete<void>(`${this.api}/${id}`);
  }

 

  insertData(payload: { name: string; contact: number; email: string }): Observable<any> {
    console.log("in angu")
    return this.http.post('http://localhost:3000/data', payload);
  }

  insertDataStock_Items(payload: { sku: string; descroption: string; price_incl_vat: number }): Observable<any> {
    console.log("in angu")
    return this.http.post('http://localhost:3000/stockItems', payload);
  }


 
}
