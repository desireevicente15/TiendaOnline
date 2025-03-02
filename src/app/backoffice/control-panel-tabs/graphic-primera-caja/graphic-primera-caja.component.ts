import {Component, OnInit} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import {ChartConfiguration, ChartDataset, ChartType} from 'chart.js';

@Component({
  selector: 'app-graphic-primera-caja',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './graphic-primera-caja.component.html',
  styleUrl: './graphic-primera-caja.component.scss'
})
export class GraphicPrimeraCajaComponent implements OnInit {

  ngOnInit():void {
    this.setChartData()
  }

  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true, // Línea obligatoria
    maintainAspectRatio: false, // Proporción del gráfico
    plugins: {
      legend: { // campo opcional
        display: true,
        position: 'left'
      },
      tooltip: {},
      title: { // Campo opcional
        text: "Las marcas de procesadores más vendidos",
        display: true,
      }
    }
  }

  public doughnutChartLabels: string[] = []
  public doughnutChartData: {
    labels: string[],
    datasets: ChartDataset<'doughnut'>[],
  } = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
      hoverBackgroundColor: [],
    }]
  }

  public doughnutChartType: ChartType = 'doughnut';

  private setChartData(): void {
    this.doughnutChartLabels = [
      "Intel",
      "AMD"
    ]
    this.doughnutChartData.labels = [
      "Intel",
      "AMD"
    ]
    this.doughnutChartData.datasets[0].data = [50, 40]
    this.doughnutChartData.datasets[0].backgroundColor = ["blue", "orange"]
  }


}
