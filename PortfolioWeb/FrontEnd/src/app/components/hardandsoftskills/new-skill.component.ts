import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string;
  porcentaje: number;
  constructor(private skillS: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  public onCreate(): void{
    const skill = new Skills(this.nombre, this.porcentaje);
    this.skillS.save(skill).subscribe(data=>{
      alert("Skill creada correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo al añadir skill");
      this.router.navigate(['']);
    })
  }
}
