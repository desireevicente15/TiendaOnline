import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  sellerName: string = 'Sofía Hernandez Molino';

  constructor(private router: Router, private modalService: NgbModal) { }

  editProfile(modalContent: any) {
    this.modalService.open(modalContent, { centered: true });
  }

  saveProfile(modal: any) {
    modal.close();
  }

  addProduct() {
    this.router.navigate(['/app/add-producto']);
  }

  viewSales(modalContent: any) {
    this.modalService.open(modalContent, { size: 'lg', centered: true });
  }
}
