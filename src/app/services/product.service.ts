import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Product } from './../models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productsUrl = "http://localhost:3000/products";

    constructor(
        private http: HttpClient
    ) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productsUrl)
            .pipe(
                tap(_ => console.log('ProductService: fetched products')),
                catchError(this.handleError([]))
            );
    }

    getProduct(id: number): Observable<any> {
        const url = `${this.productsUrl}/${id}`;
        return this.http.get<Product>(url).pipe(
          tap(_ => console.log(`fetched hero id=${id}`)),
          catchError(this.handleError([]))
        );
      }

    private handleError<T>(result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
