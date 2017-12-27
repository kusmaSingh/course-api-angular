import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import { Response} from "@angular/http";

@Injectable()
export class BaseService {
  /**
   * @param {Response} res
   */
  public extractData(res: Response): Observable<any> {
    let body = res.json();
    return body || {};
  }


  /** To handle Error **/
  private handleErrorPromise(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  /**
   * This method is use for thorws the errorMessage and @Component method's subscribe/errorMessage block will handle that.
   * @param {Response | any} error
   * @returns {ErrorObservable}
   */
  public throwErrorObservable(error: Response | any): ErrorObservable {
    return Observable.throw(error.message || error);
  }

  /**
   * This method is use for handle errorMessage in json response body and will not goes to @Component method's errorMessage block.
   * @param {Response | any} error
   * @returns {ErrorObservable}
   */
  public handleErrorObservable(error: Response | any): ErrorObservable {
    let body = error.json();
    return body || {};
  }
}
