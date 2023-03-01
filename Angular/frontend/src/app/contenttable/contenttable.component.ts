import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';

//table imports

import {MatSort} from '@angular/material/sort'
import {MatPaginator,PageEvent} from '@angular/material/paginator'
import {MatTableDataSource} from '@angular/material/table'
import {ActivatedRoute, Router} from '@angular/router';


export class about{

  constructor(
public title:string,
public aboutme:string,
public email:string,
public phone:Number,
public facebook:String,
public twitter : String

  ){}
}
export class mytables {

  constructor(
    public title:string,
    public description:string,
    public _id:string
  ){}
}



@Component({
  selector: 'app-contenttable',
  templateUrl: './contenttable.component.html',
  styleUrls: ['./contenttable.component.css']
})
export class ContenttableComponent implements OnInit {
deleteditem:any
images:any
myimages:any
conimage:any
lastcheck:any
tables:mytables[]
//about
abot:about[]
myabot:any
abotus:any

//second table
stables:any
stables1:any


@ViewChild(MatSort)sort!:MatSort
@ViewChild(MatPaginator)paginator!:MatPaginator
pageEvent!:PageEvent

columnsToDisplay = ['_id','title','description','action']
columnsToDisplay1 = ['_id','title','action']
columnsToDisplay2 = ['_id','title','facebook','twitter','action']
  constructor(private service:ServiceService,private router:Router) {
    this.tables=[]
    this.abot = []
   }

   datasourceimg!: MatTableDataSource<any>;
   contsource!:MatTableDataSource<any>;
   aboutdata!:MatTableDataSource<any>
  ngOnInit(): void {
    this.service.imgespost().subscribe(res=>{
 this.tables= res as {[key:string]:any}['doc']
 this.myimages = this.tables
 this.lastcheck = this.myimages.doc
 console.log(this.lastcheck)
    
 this.datasourceimg = new MatTableDataSource(this.lastcheck)
    this.datasourceimg.sort = this.sort
    this.datasourceimg.paginator = this.paginator


    })
        
    this.service.content().subscribe(
      res=>{
        this.tables= res as {[key:string]:any}['doc']
        this.stables = this.tables
        this.stables1 = this.stables.doc
        this.contsource = new MatTableDataSource(this.stables1)
        this.contsource.sort = this.sort
        this.contsource.paginator = this.paginator
      })
    
this.service.getabout().subscribe(
  res=>{
   this.abot = res as {[key:string]:any}['about']
   this.abotus = this.abot
   this.myabot = this.abotus.about
   this.aboutdata = new MatTableDataSource(this.myabot)
   this.aboutdata.sort =this.sort
   this.contsource.paginator = this.paginator
  }
)

  }

deletefun(id: any){
this.service.delete(id).subscribe(res=>{
this.deleteditem =res
})
}

contdelete:any
deleteCon(conid:any){
this.service.deletecon(conid).subscribe(res=>{
this.contdelete = res
})
}
AbiD:any
deleteAb(abid:any){
  this.service.deleteAb(abid).subscribe(res=>{
  this.AbiD =res
  })
}
logout(){
  this.service.deleteToken()
  this.router.navigateByUrl('/login')
}

}
