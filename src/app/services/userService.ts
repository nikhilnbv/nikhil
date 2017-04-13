import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
//import {users} from  'D://Project-Angular/nikhil/myServer/models/loginModel.js';

@Injectable()
export class UserService {
    
    constructor(private http: Http) { }

        
    createUser(userData:any){
        //Call userCreate webservice method
         return this.http.post('http://localhost:3000/users/createUser',userData)
                .map((resp: Response) => resp.json());
    }
    
    viewUsers(){
        return this.http.get('http://localhost:3000/users/viewUsers')
                .map((resp: Response) => resp.json());
    }
    
}
