import{HttpErrorResponse} from "@angular/common/http"
import { Observable } from "rxjs/Observable"
export class ErrorHandler{
    static handleError(error: Response |any){
        let errorMessage: string
        if(error instanceof Response){
            errorMessage =`Erro ${error.status} ao acessar a URL ${error.url} status ${error.statusText} a`;
            
        }else{
            errorMessage = error.toString()
        }
        console.log(errorMessage)
        return Observable.throw(errorMessage)

    }
}