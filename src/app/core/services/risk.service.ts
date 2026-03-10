import { Injectable } from '@angular/core'
import { Position } from '../../shared/models/position.model'

@Injectable({
  providedIn: 'root'
})
export class RiskService {

  getPositions(): Position[] {

    return [

      {
        asset: 'BTC',
        amount: 0.25,
        price: 43000
      },

      {
        asset: 'ETH',
        amount: 1.4,
        price: 2200
      },

      {
        asset: 'SOL',
        amount: 15,
        price: 95
      }

    ]

  }

  getExposure(): number {

    const positions = this.getPositions()

    return positions.reduce(
      (sum, p) => sum + (p.amount * p.price),
      0
    )

  }

  getLeverage(): number {

    const exposure = this.getExposure()

    const equity = 10000

    return exposure / equity

  }

  getDrawdown(): number {

    const equityHistory = [

      10000,
      10400,
      10750,
      10300,
      9800

    ]

    const peak = Math.max(...equityHistory)

    const current = equityHistory[equityHistory.length - 1]

    const drawdown = ((peak - current) / peak) * 100

    return drawdown

  }

  getVaR(): number {

    const exposure = this.getExposure()

    const volatility = 0.02 // 2% daily volatility

    const varValue = exposure * volatility * 1.65

    return varValue

  }

}
