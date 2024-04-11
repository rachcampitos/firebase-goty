import { Component, Input, OnDestroy } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Game } from '../../interfaces/interfaces';

interface ResultItem {
  name: string;
  value: number; // Assuming value is a number
}

@Component({
  selector: 'app-grafico-barra-horizontal',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrl: './grafico-barra-horizontal.component.css',
})
export class GraficoBarraHorizontalComponent implements OnDestroy {
  @Input() results: ResultItem[] = [];

  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Votes';
  showYAxisLabel = true;
  yAxisLabel = 'Games';

  colorScheme = 'nightLights';

  constructor() {}
  ngOnDestroy(): void {}

  onSelect(event: any) {
    console.log(event);
  }
}
