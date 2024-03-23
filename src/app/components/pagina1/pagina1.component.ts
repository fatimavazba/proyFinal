import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrl: './pagina1.component.css'
})
export class Pagina1Component {

  constructor(private router: Router){}

  navegar(){
    this.router.navigate(['/pagina2']);
  }

}
