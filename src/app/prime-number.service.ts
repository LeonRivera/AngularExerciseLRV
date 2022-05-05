import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrimeNumber } from './prime-number';
@Injectable({
  providedIn: 'root'
})
export class PrimeNumberService {

  constructor(private httpClient: HttpClient) { 
  }

  savePrimeNumbers(primeNumbers:PrimeNumber[]):void{
    this.httpClient.post("https://angularexercise-b7aab-default-rtdb.firebaseio.com/datos.json", primeNumbers)
    .subscribe(
      response => (
        console.log("resultado de guardar prime numbers"+ response)
      ),
      error => console.log("error"+error)
    );
  }
}
