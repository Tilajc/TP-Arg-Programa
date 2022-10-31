import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP: string;
  descripcionP: string;
  constructor(private sProyecto: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyectos(this.nombreP, this.descripcionP);
    this.sProyecto.save(proyecto).subscribe(data=>{
      alert("Proyecto añadido");
      this.router.navigate(['']);
    }, err=>{
      alert("Fallo");
      this.router.navigate(['']);
    }
    );
  }
}