import { Component } from '@angular/core';
import { LoginService } from './services/loginService';
import { Router } from '@angular/router';
import { routes } from './services/app.router';
import {ElementRef,Renderer2} from '@angular/core';

import { OnInit } from '@angular/core';

@Component({
    selector:'app-admin',
    templateUrl:'./html/template.html',
    providers:[LoginService],
    styleUrls:['./styles/template.css']
})

export class AdminComponent implements OnInit{

    constructor(private loginService : LoginService,private router: Router,private _elementRef : ElementRef) {
        
    }

    manageUserScreen(){
        this._elementRef.nativeElement.querySelector('.nav-content').innerHTML = 
        '<div class="container" style="width:100%;padding-top:15px;">'+
            '<div class="panel-group">'+
                '<div class="panel panel-default">'+
                '<div class="panel-heading">'+
                    '<h4 class="panel-title">'+
                    '<a data-toggle="collapse" data-target="#collapse1">User Registration</a>'+
                    '</h4>'+
                '</div>'+
                '<div id="collapse1" class="panel-collapse collapse">'+
                    '<div class="panel-body">'+

                        `<form action="" method="post" id="fileForm" role="form">
                            <fieldset><legend class="text-center">Valid information is required to register. <span class="req"><small> required *</small></span></legend>

                            <div class="form-group">
                            <label for="phonenumber"><span class="req">* </span> Phone Number: </label>
                                    <input required type="text" name="phonenumber" id="phone" class="form-control phone" maxlength="28" onkeyup="validatephone(this);" placeholder="not used for marketing"/> 
                            </div>

                            <div class="form-group"> 	 
                                <label for="firstname"><span class="req">* </span> First name: </label>
                                    <input class="form-control" type="text" name="firstname" id = "txt" onkeyup = "Validate(this)" required /> 
                                        <div id="errFirst"></div>    
                            </div>

                            <div class="form-group">
                                <label for="lastname"><span class="req">* </span> Last name: </label> 
                                    <input class="form-control" type="text" name="lastname" id = "txt" onkeyup = "Validate(this)" placeholder="hyphen or single quote OK" required />  
                                        <div id="errLast"></div>
                            </div>

                            <div class="form-group">
                                <label for="email"><span class="req">* </span> Email Address: </label> 
                                    <input class="form-control" required type="text" name="email" id = "email"  onchange="email_validate(this.value);" />   
                                        <div class="status" id="status"></div>
                            </div>

                            <div class="form-group">
                                <label for="username"><span class="req">* </span> User name:  <small>This will be your login user name</small> </label> 
                                    <input class="form-control" type="text" name="username" id = "txt" onkeyup = "Validate(this)" placeholder="minimum 6 letters" required />  
                                        <div id="errLast"></div>
                            </div>

                            <div class="form-group">
                                <label for="password"><span class="req">* </span> Password: </label>
                                    <input required name="password" type="password" class="form-control inputpass" minlength="4" maxlength="16"  id="pass1" /> </p>

                                <label for="password"><span class="req">* </span> Password Confirm: </label>
                                    <input required name="password" type="password" class="form-control inputpass" minlength="4" maxlength="16" placeholder="Enter again to validate"  id="pass2" onkeyup="checkPass(); return false;" />
                                        <span id="confirmMessage" class="confirmMessage"></span>
                            </div>

                            <div class="form-group">
                                <input class="btn btn-success" type="submit" name="submit_reg" value="Create User">
                            </div>

                            </fieldset>
                            </form>`+

                    '</div>'+
                '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+

        '<div class="container" style="width:100%;">'+
            '<div class="panel-group">'+
                '<div class="panel panel-default">'+
                '<div class="panel-heading">'+
                    '<h4 class="panel-title">'+
                    '<a data-toggle="collapse" href="#collapse2">User Details</a>'+
                    '</h4>'+
                '</div>'+
                '<div id="collapse2" class="panel-collapse collapse">'+
                    '<div class="panel-body">'+

                        `<table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,800</td>
                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>Tokyo</td>
                                    <td>63</td>
                                    <td>2011/07/25</td>
                                    <td>$170,750</td>
                                </tr>
                                <tr>
                                    <td>Ashton Cox</td>
                                    <td>Junior Technical Author</td>
                                    <td>San Francisco</td>
                                    <td>66</td>
                                    <td>2009/01/12</td>
                                    <td>$86,000</td>
                                </tr>
                                <tr>
                                    <td>Cedric Kelly</td>
                                    <td>Senior Javascript Developer</td>
                                    <td>Edinburgh</td>
                                    <td>22</td>
                                    <td>2012/03/29</td>
                                    <td>$433,060</td>
                                </tr>
                                <tr>
                                    <td>Airi Satou</td>
                                    <td>Accountant</td>
                                    <td>Tokyo</td>
                                    <td>33</td>
                                    <td>2008/11/28</td>
                                    <td>$162,700</td>
                                </tr>
                                <tr>
                                    <td>Brielle Williamson</td>
                                    <td>Integration Specialist</td>
                                    <td>New York</td>
                                    <td>61</td>
                                    <td>2012/12/02</td>
                                    <td>$372,000</td>
                                </tr>
                                <tr>
                                    <td>Herrod Chandler</td>
                                    <td>Sales Assistant</td>
                                    <td>San Francisco</td>
                                    <td>59</td>
                                    <td>2012/08/06</td>
                                    <td>$137,500</td>
                                </tr>
                                <tr>
                                    <td>Rhona Davidson</td>
                                    <td>Integration Specialist</td>
                                    <td>Tokyo</td>
                                    <td>55</td>
                                    <td>2010/10/14</td>
                                    <td>$327,900</td>
                                </tr>
                                <tr>
                                    <td>Colleen Hurst</td>
                                    <td>Javascript Developer</td>
                                    <td>San Francisco</td>
                                    <td>39</td>
                                    <td>2009/09/15</td>
                                    <td>$205,500</td>
                                </tr>
                                <tr>
                                    <td>Sonya Frost</td>
                                    <td>Software Engineer</td>
                                    <td>Edinburgh</td>
                                    <td>23</td>
                                    <td>2008/12/13</td>
                                    <td>$103,600</td>
                                </tr>
                                <tr>
                                    <td>Jena Gaines</td>
                                    <td>Office Manager</td>
                                    <td>London</td>
                                    <td>30</td>
                                    <td>2008/12/19</td>
                                    <td>$90,560</td>
                                </tr>
                                <tr>
                                    <td>Quinn Flynn</td>
                                    <td>Support Lead</td>
                                    <td>Edinburgh</td>
                                    <td>22</td>
                                    <td>2013/03/03</td>
                                    <td>$342,000</td>
                                </tr>
                                <tr>
                                    <td>Charde Marshall</td>
                                    <td>Regional Director</td>
                                    <td>San Francisco</td>
                                    <td>36</td>
                                    <td>2008/10/16</td>
                                    <td>$470,600</td>
                                </tr>
                                <tr>
                                    <td>Haley Kennedy</td>
                                    <td>Senior Marketing Designer</td>
                                    <td>London</td>
                                    <td>43</td>
                                    <td>2012/12/18</td>
                                    <td>$313,500</td>
                                </tr>
                                <tr>
                                    <td>Tatyana Fitzpatrick</td>
                                    <td>Regional Director</td>
                                    <td>London</td>
                                    <td>19</td>
                                    <td>2010/03/17</td>
                                    <td>$385,750</td>
                                </tr>
                                <tr>
                                    <td>Michael Silva</td>
                                    <td>Marketing Designer</td>
                                    <td>London</td>
                                    <td>66</td>
                                    <td>2012/11/27</td>
                                    <td>$198,500</td>
                                </tr>
                                <tr>
                                    <td>Paul Byrd</td>
                                    <td>Chief Financial Officer (CFO)</td>
                                    <td>New York</td>
                                    <td>64</td>
                                    <td>2010/06/09</td>
                                    <td>$725,000</td>
                                </tr>
                                <tr>
                                    <td>Gloria Little</td>
                                    <td>Systems Administrator</td>
                                    <td>New York</td>
                                    <td>59</td>
                                    <td>2009/04/10</td>
                                    <td>$237,500</td>
                                </tr>
                                <tr>
                                    <td>Bradley Greer</td>
                                    <td>Software Engineer</td>
                                    <td>London</td>
                                    <td>41</td>
                                    <td>2012/10/13</td>
                                    <td>$132,000</td>
                                </tr>
                                <tr>
                                    <td>Dai Rios</td>
                                    <td>Personnel Lead</td>
                                    <td>Edinburgh</td>
                                    <td>35</td>
                                    <td>2012/09/26</td>
                                    <td>$217,500</td>
                                </tr>
                                <tr>
                                    <td>Jenette Caldwell</td>
                                    <td>Development Lead</td>
                                    <td>New York</td>
                                    <td>30</td>
                                    <td>2011/09/03</td>
                                    <td>$345,000</td>
                                </tr>
                                <tr>
                                    <td>Yuri Berry</td>
                                    <td>Chief Marketing Officer (CMO)</td>
                                    <td>New York</td>
                                    <td>40</td>
                                    <td>2009/06/25</td>
                                    <td>$675,000</td>
                                </tr>
                                <tr>
                                    <td>Caesar Vance</td>
                                    <td>Pre-Sales Support</td>
                                    <td>New York</td>
                                    <td>21</td>
                                    <td>2011/12/12</td>
                                    <td>$106,450</td>
                                </tr>
                                <tr>
                                    <td>Doris Wilder</td>
                                    <td>Sales Assistant</td>
                                    <td>Sidney</td>
                                    <td>23</td>
                                    <td>2010/09/20</td>
                                    <td>$85,600</td>
                                </tr>
                            </tbody>
                        </table>`+
                    
                    '</div>'+
                '</div>'+
                '</div>'+
            '</div>'+
        '</div>';
    }

    manageTraining(){
        this._elementRef.nativeElement.querySelector('.nav-content').innerHTML = 
        '<div class="container" style="width:100%;padding-top:15px;">'+
            '<div class="panel-group">'+
                '<div class="panel panel-default">'+
                '<div class="panel-heading">'+
                    '<h4 class="panel-title">'+
                    '<a data-toggle="collapse" data-target="#collapse1">Schedule Training</a>'+
                    '</h4>'+
                '</div>'+
                '<div id="collapse1" class="panel-collapse collapse">'+
                    '<div class="panel-body">Panel Body</div>'+
                    '<div class="panel-footer">Panel Footer</div>'+
                '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+

        '<div class="container" style="width:100%;">'+
            '<div class="panel-group">'+
                '<div class="panel panel-default">'+
                '<div class="panel-heading">'+
                    '<h4 class="panel-title">'+
                    '<a data-toggle="collapse" href="#collapse2">Training Details</a>'+
                    '</h4>'+
                '</div>'+
                '<div id="collapse2" class="panel-collapse collapse">'+
                    '<div class="panel-body">Panel Body</div>'+
                    '<div class="panel-footer">Panel Footer</div>'+
                '</div>'+
                '</div>'+
            '</div>'+
        '</div>';
    }

    ngOnInit(){
        console.log('onInit event called..');
        //this._elementRef.nativeElement.querySelector('.dropdown-toggle').dropdown();
    }

    callMe(){
        console.log('btn clicked');
    }

    logout() { 
        console.log('calling logout');
        this.loginService.logout();
        this.router.navigate(['/login']);
    }
}
