import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL  } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageProyectoService {

  url: string = "";

  constructor(private storage: Storage) {}

  public uploadImage($event: any/*, name: string*/) {
    const file = $event.target.files[0]
    console.log(file)
    const num = Math.random()
    //const imgRef = ref(this.storage, `imagen/proyectos/` + name);
    //const imgRef = ref(this.storage, `imagen/proyectos/${file.name}`);
    const imgRef = ref(this.storage, `imagen/${file.name}/${file.name}` + num);
    uploadBytes(imgRef, file)
    .then(response => {this.getImages(file)})
    .catch(error => console.log(error))
  }

  getImages(file:any) {
    //const imagesRef = ref(this.storage, 'imagen/proyectos')
    const imagesRef = ref(this.storage, `imagen/${file.name}`)
    list(imagesRef)
    .then(async response => {
      for (let item of response.items) {
        this.url = await getDownloadURL(item);
        console.log('La URL es: ' + this.url);
      }
      //this.url = await getDownloadURL(response.items[0])
    })
    .catch((error) => console.log(error));
  }
}
