import {environment} from '../../environments/environment';

export class Constants {
  public static WEB_URL = environment.WEB_SERVER_BASE_URL;
  //public static WEB_URL= 'http://13.127.100.225:8081/course_api/';
  public static AUTHENTICATED_USER_INFORMATION = 'userStorage';

  //Auth, Token, etc properties.
  public static ACCESS_TOKEN = 'accessToken';
  public static BEARER = "Bearer-";

  public static  courseType=[
    {value:'java-stream' , displayValue:"java-stream"},
    {value:'spring-stream' ,displayValue:"spring-stream"},
    {value:'angularjs-stream',displayValue:"angularjs-stream"},
    {value:'ruby-stream',displayValue:"ruby-stream"},
    {value:'php-stream',displayValue:"php-stream"},

  ]

  public static  topicType=[
    {value:'java', displayValue:"java"},
    {value:'spring' , displayValue:"spring"},
    {value:'angularjs', displayValue:"angularjs"},
    {value:'ruby', displayValue:"ruby"},
    {value:'php' , displayValue :"php"},

  ]
}
