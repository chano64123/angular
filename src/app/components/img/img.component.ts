import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() img:string ="https://www.w3schools.com/howto/img_avatar.png";
  @Output() loaded = new EventEmitter<string>();
  imageDefault:string = "./assets/images/default/default.png";
  imageError= "./assets/images/default/error.png";

  imgError(){
    this.img = this.imageError;
  }

  imgLoaded(){
    console.log("Cargado en el Hijo");
    this.loaded.emit(this.img);
  }
}
