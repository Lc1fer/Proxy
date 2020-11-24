if ($response.statusCode != 200) {
  $done(null);
}

var city0 = "Unknown";
var isp0 = "Cross-GFW.org";
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function City_ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return city0
  }
}

function ISP_ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return isp0
  }
}

var body = $response.body;
var obj = JSON.parse(body);
var title =' '+ City_ValidCheck(obj['city']);
var subtitle = ISP_ValidCheck(obj['org']);
var ip = obj['query'];
var description = '服务商:'+obj['isp'] + '\n'+'地区:' +City_ValidCheck(obj['regionName'])+ '\n' + 'IP:'+ obj['query'] + '\n' +'时区:'+ obj['timezone'];
$done({title, subtitle, ip, description});
