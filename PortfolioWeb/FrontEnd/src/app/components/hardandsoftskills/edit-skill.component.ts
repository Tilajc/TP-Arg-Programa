import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skills = null;

  constructor(private skillS: SkillService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillS.detail(id).subscribe(data => {
      this.skill = data;
    }, err => {
      alert("Error al modificar skill");
      this.router.navigate(['']);
    })
  }

  onUpdate(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("error al modificar skill");
      this.router.navigate(['']);
    })
  }
}
