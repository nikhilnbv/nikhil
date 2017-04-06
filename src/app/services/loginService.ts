import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LoginService {
    
    constructor() { }

        login = function (username: string, password: string) : boolean {
            if (username == "admin" && password == "123456") {
                localStorage.setItem('currentUser', username);               
                localStorage.setItem('userRole', 'admin');               
                return true;
            }
            else if (username == "trainer" && password == "123456") {
                localStorage.setItem('currentUser', username);
                localStorage.setItem('userRole', 'trainer');               
                return true;
            }
            else if (username == "trainee" && password == "123456") {
                localStorage.setItem('currentUser', username);
                localStorage.setItem('userRole', 'trainee');               
                return true;
            }
            return false;
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
