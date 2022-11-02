import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hysskills',
  templateUrl: './hysskills.component.html',
  styleUrls: ['./hysskills.component.css']
})
export class HysskillsComponent implements OnInit {
  skill: Skill[] = []; 

  constructor(private skillS: SkillService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  cargarSkills(): void{
    this.skillS.lista().subscribe(data => {this.skill = data;})
  }

  delete(id: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe({next: (data) => {
        this.cargarSkills();
      }, error: (e) => {
        alert("No se pudo borrar la skill")
      }
    }
    )
    }
  }
}
