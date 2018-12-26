import { browser } from 'protractor';
import 'rxjs/add/observable/throw'
import { Observable } from "rxjs/Observable";
import { Response } from '@angular/http';


export class ErrorHandle{


    static error(error: Response | any){
        let errorMessage: string
        
        if(error instanceof Response ){
            errorMessage = `Erro ${error.status} ao acessar a url ${error.url} - ${error.statusText}`
        }else{
            errorMessage = error.toString()
        }
        console.log(errorMessage)
        return Observable.throw(errorMessage);
        

    }
}