import { Component, OnInit } from '@angular/core';
import { PrimeNumber } from '../prime-number';
import { PrimeNumberService } from '../prime-number.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(private primeNumberService:PrimeNumberService) {}

  ngOnInit(): void {}

  strValue: string = '';

  valor:number = 0;

  valorColores:string[] = [];

  valoresPrimos:PrimeNumber[] = [];

  
 

  public inputValue(event: Event): void {
    this.strValue = (<HTMLInputElement>event.target).value;
    this.valor = Number(this.strValue);
  }

  public calcularMultiplos(): void{


    for (let i = 0; i <= this.valor; i++) {

        


        if(i % 3 === 0 && i !== 0){

            

            this.valoresPrimos.push(new PrimeNumber("green", i));

        }
        else if(i % 5 === 0 && i !== 0){

          this.valoresPrimos.push(new PrimeNumber("red", i));
        }
        else if(i % 7 === 0 && i !== 0){

          this.valoresPrimos.push(new PrimeNumber("blue", i));
        }else{

          this.valoresPrimos.push(new PrimeNumber("black", i));
        }
    }


    this.primeNumberService.savePrimeNumbers(this.valoresPrimos);

  }

}
