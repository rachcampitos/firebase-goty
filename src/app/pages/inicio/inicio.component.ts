import { Component, OnInit, inject } from '@angular/core';
import { GraficoBarraHorizontalComponent } from '../../components/grafico-barra-horizontal/grafico-barra-horizontal.component';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, Subscription, map } from 'rxjs';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [GraficoBarraHorizontalComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  items: { name: any; value: any }[] = [];

  constructor(private db: Firestore) {}
  ngOnInit(): void {
    const aCollection = collection(this.firestore, 'goty');
    collectionData(aCollection)
      .pipe(
        map((resp) => resp.map(({ name, votes }) => ({ name, value: votes })))
      )
      .subscribe((items) => {
        this.items = items;
      });
  }
}
