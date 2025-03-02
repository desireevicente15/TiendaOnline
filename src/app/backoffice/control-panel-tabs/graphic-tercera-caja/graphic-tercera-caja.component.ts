import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graphic-tercera-caja',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './graphic-tercera-caja.component.html',
  styleUrl: './graphic-tercera-caja.component.scss'
})
export class GraphicTerceraCajaComponent implements OnInit{

ngOnInit(): void {
    this.setChartData()
  }

  public lineaChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        display: true,
      },
      title: {
        display: true,
        text: 'Lineas'
      } 
    } 
  }

  public lineaChartLabels: string[] = []
  public lineaChartData: {
    labels: string[],
    datasets: ChartDataset<'line'>[],
  } = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
      hoverBackgroundColor: [],
    }]
  }

  public lineaChartType: ChartType = 'line';

  private setChartData(): void {
    this.lineaChartLabels = [
      "Nº ventas",
      "Años "
    ]
    this.lineaChartData.labels = [
      "Nº ventas",
      "Años"
    ]
    this.lineaChartData.datasets[0] = {
      data: [20, 30, 10, 35, 40, 50, 40, 60, 65, 60, 45, 55],
      backgroundColor: ["red", "green"],
      label: "Nº de ventas"
    };  
    this.lineaChartData.labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    this.lineaChartData.datasets[0].data = [20, 30, 10, 35, 40, 50, 40, 60, 55, 60, 45, 55]
    this.lineaChartData.datasets[0].backgroundColor = ["red", "green"]
  }
}
