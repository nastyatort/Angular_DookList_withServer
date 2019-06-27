import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ } 

    getData(data: any){
      return this.http.post('http://localhost:8008/api/phones/get', data); 
    }

    addData(data: any){
      return this.http.post('http://localhost:8008/api/phones/create', data); 
    }

    editData(data: any){
      return this.http.post('http://localhost:8008/api/phones/update', data); 
    }

    deleteData(id: any){
      return this.http.get('http://localhost:8008/api/phones/delete/' + id); 
    }
}