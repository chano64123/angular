import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent:string = 'https://www.w3schools.com/howto/img_avatar.png';

  products:Product[] = [
    {
      id: 1,
      name: 'Album del Mundial',
      image: 'assets/images/products/album-mundial.png',
      price: 320
    },
    {
      id: 2,
      name: 'Bicicleta Montañera',
      image: 'assets/images/products/bicicleta.png',
      price: 999.99
    },
    {
      id: 3,
      name: 'Carro Facherito',
      image: 'assets/images/products/carro.png',
      price: 1599
    },
    {
      id: 4,
      name: 'Cubo Rubick',
      image: 'assets/images/products/cubo-rubik.png',
      price: 30.99
    },
    {
      id: 5,
      name: 'Libros Sorpresas',
      image: 'assets/images/products/libros.png',
      price: 50
    }
  ]

  onLoaded(img: string){
    console.log('Cargado en el Padre => ' + img);
  }
}
