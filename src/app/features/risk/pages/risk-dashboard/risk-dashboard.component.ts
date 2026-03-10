import { Component } from '@angular/core';
import { RiskService } from '../../../../core/services/risk.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-risk-dashboard',
  imports: [DecimalPipe],
  templateUrl: './risk-dashboard.component.html',
  styleUrl: './risk-dashboard.component.scss'
})
export class RiskDashboardComponent {
  exposure: number = 0
  leverage: number = 0
  drawdown: number = 0
  valueAtRisk: number = 0

  constructor(private riskService: RiskService) {}

  ngOnInit(): void {

    this.exposure = this.riskService.getExposure()

    this.leverage = this.riskService.getLeverage()

    this.drawdown = this.riskService.getDrawdown()

    this.valueAtRisk = this.riskService.getVaR()

  }
}
