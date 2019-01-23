import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHistoryDataService {

  constructor(private http: HttpClient) { }

  getEmployeeHistoryData(employeeHistory: string) {
    const employeeHistoryLink = '././assets/employeesHistory/' + employeeHistory;
    return this.http.get(employeeHistoryLink, {
        responseType: 'json',
        observe: 'response'
    });
  }
}
