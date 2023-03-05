import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, list, ref, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageProEditService {

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
    const imagesRef = ref(this.storage, `imagen/${file.name}`)
    list(imagesRef)
    .then(async response => {
      for (let item of response.items) {
        this.url = await getDownloadURL(item);
        console.log('La URL es: ' + this.url);
      }

    })
    .catch((error) => console.log(error));
  }
}
