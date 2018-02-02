import {Injectable} from "@angular/core";
import {Constants} from '../../comman/constant';

/**
 * @author Kusma
 * @since 1/2/18
 */
@Injectable()
export class CommonService {

  /**
   * This method is use for clear the local storage data.
   */
  public clearLocalStorage() {

    localStorage.removeItem(Constants.AUTHENTICATED_USER_INFORMATION);

  }

  /**
   * This metho is ude for remove Authentication data from local storage.
   */
  public clearAuthenticationStorage() {
    localStorage.removeItem(Constants.AUTHENTICATED_USER_INFORMATION);
  }

 /* /!**
   * This method is use for get Access Token from local storage data.
   *!/
  public getAccessToken(): any {
    return localStorage.getItem(Constants.ACCESS_TOKEN);
  }

  /!**
   * This method is use for set Access Token to local storage data.
   *!/
  public setAccessToken(data: any) {
    return localStorage.setItem(Constants.ACCESS_TOKEN, Constants.BEARER+data);
  }*/


  /**
   * This method is use for get the User Information from local storage data.
   */
  public getAuthenticareUserInformation() {
    return localStorage.getItem(Constants.AUTHENTICATED_USER_INFORMATION);

  }

  /**
   * This method is use for get the User Information to local storage data.
   */
  public setAuthenticareUserInformation(data: any) {
    return localStorage.setItem(Constants.AUTHENTICATED_USER_INFORMATION, data);
  }

}
