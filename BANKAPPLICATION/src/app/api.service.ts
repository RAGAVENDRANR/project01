import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http:HttpClient) { }

  //getting the data from the Json:
  getdata(){
    return this.http.get('http://localhost:4000/customerdata')
  }
  postdata(data:any){ 
    console.log("posted data",data) 
    return this.http.post('http://localhost:4000/customerdata',data)
  }
  deleteuser(id:any){
    return this.http.delete('http://localhost:4000/customerdata/'+id)

  }
  getDataId(id:any){
    return this.http.get('http://localhost:4000/customerdata/'+id)
  }
  updatedata(id:any,obj:any){
    return this.http.put('http://localhost:4000/customerdata/'+id,obj)
  }

}
