import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { datamodel } from '../list/model';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent  implements OnInit{
  public dataid!: number;
  public employeedata: any | datamodel;
  // api: any;
  employee:any | datamodel;
  constructor(private activatedRoute: ActivatedRoute, private router: Router , private api: ApiService){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: Params)=>{
      this.dataid = param['get']("id");
      console.log("data id is ", this.dataid);
    })
    this.api.fetchdata(this.dataid).subscribe((data: datamodel) =>{
      this.employee = data;
    })
  }
  update(){
    this.api.updateemployee(this.employee, this.dataid).subscribe((res: datamodel)=>{
      this.router.navigate(["/"])
    })
  }
}
