import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
   heroes : string[] = ['Spiderman', 'Ironman', 'Hulk', 'Loki'];
   heroeEliminado : string = '';

   borrarHeroe(index : number) {
     this.heroeEliminado = this.heroes.shift() || '';
   }
}
