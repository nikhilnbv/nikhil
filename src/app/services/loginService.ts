import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LoginService {
    constructor() { }

        login = function (username: string, password: string) : boolean {
            if (username == "admin" && password == "123456") {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', username);
                //localStorage.setItem('password', password);
                return true;
            }
            return false;

        // return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
        //     .map((response: Response) => {
        //         // login successful if there's a jwt token in the response
        //         let user = response.json();
        //         if (user && user.token) {
        //             // store user details and jwt token in local storage to keep user logged in between page refreshes
        //             localStorage.setItem('currentUser', JSON.stringify(user));
        //         }
        //     });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}