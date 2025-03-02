import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graphic-segunda-caja',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './graphic-segunda-caja.component.html',
  styleUrl: './graphic-segunda-caja.component.scss'
})
export class GraphicSegundaCajaComponent implements OnInit{

  ngOnInit(): void {
    this.setChartData()
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        display: true,
      },
      title: {
        display: true,
        text: 'Barras'
      } 
    }
  }

  public barChartLabels: string[] = []
  public barChartData: {
    labels: string[],
    datasets: ChartDataset<'bar'>[],
  } = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
      hoverBackgroundColor: [],
    }]
  }

  public barChartType: ChartType = 'bar';

  private setChartData(): void {
    this.barChartLabels = [
      "PC sobremesa",
      "Portátiles",
      "Smartphone"
    ]
    this.barChartData.labels = [
      "PC sobremesa",
      "Portátiles",
      "Smartphone"
    ]
    this.barChartData.datasets[0] = {
      data: [25, 30, 40],
      backgroundColor: ["black", "purple", "blue"],
      label: "Dispositivos más vendidos"
    };  
    this.barChartData.datasets[0].data = [25, 30, 40]
    this.barChartData.datasets[0].backgroundColor = ["black", "purple", "blue"]
  }
}
