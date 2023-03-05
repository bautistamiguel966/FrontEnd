import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageProEditService } from 'src/app/service/image-pro-edit.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit{
  proyecto: Proyecto = null;

  constructor(private activatedRouter: ActivatedRoute,
    private proyectoService: ProyectoService,
    private router: Router, 
    public imageProEditService: ImageProEditService){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(
      data =>{
        this.proyecto = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyecto.img = this.imageProEditService.url
    this.proyectoService.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )
  }
  

  // uploadImagen($event:any){
  //   const id = this.activatedRouter.snapshot.params['id'];
  //   this.proyecto.img = this.imageProEditService.url
  //   const name = "proyecto_" + id;
  //   this.imageProEditService.uploadImage($event, name)
  // }

  uploadImagen($event:any){
    
    this.proyecto.img = this.imageProEditService.url
    this.imageProEditService.uploadImage($event/*, name*/)
  }
}
