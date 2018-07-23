import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DatabindService {

constructor(private http: HttpClient) { }
    fetchData(){
        let url= "http://www.mocky.io/v2/5b51f0012e00002d325c1b69";
        return this.http.get(url);
    }
}
