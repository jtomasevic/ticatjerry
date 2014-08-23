/**
 * Created by jtomasevic on 8/23/14.
 */

var _is_live_env
var _apiBaseUrl = (_is_live_env) ? "/www/chisel/data/story1.js" : "/data/story1.js"
function _getApiUrl(method){
    return _apiBaseUrl + method;
}