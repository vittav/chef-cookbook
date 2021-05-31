import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  url = 'http://localhost:8080/api/recipes';

  constructor(private httpClient: HttpClient) { }
  
  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  // Obtem todas as receitas
  getRecipes(): Observable<Recipe> {
    return this.httpClient.get<Recipe>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError))
    }
    
    // Obtem uma receita  pelo id
    getRecipe(id: number): Observable<Recipe> {
      return this.httpClient.get<Recipe>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
        )
      }
      
      
      // Manipulação de erros
      handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Erro ocorreu no lado do client
          errorMessage = error.error.message;
        } else {
          // Erro ocorreu no lado do servidor
          errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
      };
   
}
