import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/models/skills';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-hardandsoftskills',
  templateUrl: './hardandsoftskills.component.html',
  styleUrls: ['./hardandsoftskills.component.css']
})
export class HardandsoftskillsComponent implements OnInit {

  skill: Skills[] = [];
  constructor(private skillS: SkillService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void{
    this.skillS.lista().subscribe(data=>{
      this.skill= data;
    })
  }

  delete(id: number): void{
    if(id != undefined){
      this.skillS.delete(id).subscribe(data=>{
        this.cargarSkills();
      }, err=> {
        alert("No se pudo borrar el skill")
      })
    }
  }
}
