import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageProyectoService } from 'src/app/service/image-proyecto.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent {
  nombre: string;
  descripcion: string;
  img: string;

  constructor(private proyectoS: ProyectoService,
  private router: Router, private imageProyectoService: ImageProyectoService,
  private activatedRouter: ActivatedRoute){}

  ngOnInit():void {}

  onCreate():void {
    const proyecto = new Proyecto(this.nombre, this.descripcion, this.imageProyectoService.url);
    this.proyectoS.save(proyecto).subscribe(
      data =>{
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

  uploadImagen($event:any){
    
    this.img = this.imageProyectoService.url
    this.imageProyectoService.uploadImage($event/*, name*/)
  }

  // uploadImagen($event:any){
    

  //   let id = 0;
  //   if(this.activatedRouter.snapshot.params['id'] == null){
  //     alert("Llego hasta aqui")
  //     alert(this.img)
  //     id = 1
  //   }else {
  //     id = this.activatedRouter.snapshot.params['id'] + 1;
  //   }



  //   this.img = this.imageProyectoService.url
  //   //const name = "proyecto_";
  //   const name = "proyecto_" + id;
  //   this.imageProyectoService.uploadImage($event, name)
  // }



  

}
