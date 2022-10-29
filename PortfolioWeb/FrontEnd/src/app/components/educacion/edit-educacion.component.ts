import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion: Educacion = null;

  constructor(private educacionS: EducacionService, private activatedRotue: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRotue.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(data=>{
      this.educacion= data;
    }, err=>{
      alert("Error al modificar");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRotue.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe(data=>{
      this.router.navigate(['']);
    }, err=>{
      alert("Error al modificar la educacion");
      this.router.navigate(['']);
    })
  }

}
