/**
* @author: SANA SHAIKh
* @since: 9/April/2018
*/

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  model:any={};
  constructor(private userServiceObj:UserService) { }

  ngOnInit() {
    console.log(window.location.search);
  }

  reset(){
    console.log(this.model);
    var u = 'resetnewpassword'+window.location.search;
    this.userServiceObj.postService(u,this.model)
                        .subscribe(data=>{
                          console.log(data)});
  }
}
