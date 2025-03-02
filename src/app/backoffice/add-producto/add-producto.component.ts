import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../interface/producto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-producto',
  imports: [FormsModule],
  templateUrl: './add-producto.component.html',
  styleUrl: './add-producto.component.scss'
})
export class AddProductoComponent {
    newProduct: Producto = {
    name: '',
    description: '',
    price: 0,
    category: 'electronica',  
    imageUrl: ''
  };

  constructor(private router: Router) {}

  onAddProduct() {
    console.log('Nuevo producto:', this.newProduct);
    this.router.navigate(['/app/profile']);
  }

  cancel() {
    this.router.navigate(['/app/profile']);
  }
}
