/**
 * Created by jtomasevic on 8/23/14.
 */

var _is_live_env = false
var _apiBaseUrl = (_is_live_env) ? "http://ticatjerryapi.azurewebsites.net/api/" : "http://localhost:47076/api/"
function _getApiUrl(method){
    return _apiBaseUrl + method;
}