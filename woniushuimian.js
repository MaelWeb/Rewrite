/*************************************

项目名称：蜗牛睡眠
下载地址：https://t.cn/A6NBzdYh
更新日期：2024-12-07
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/snailsleep\.net\/snail\/v\d\/profile\/get.+ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/woniushuimian.js

[mitm]
hostname = snailsleep.net

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.result = {
  ...chxm1023.result,
  "points" : 9999,
  "updated" : 1684116994159,
  "expired" : false,
  "expiresRAD" : 4092599349000,
  "expires" : 4092599349000,
  "type" : "SNAIL",
  "dreamsTotal" : 999,
  "level" : 1,
  "lifelong" : true,
  "radexpired" : false,
  "dreamsUsed" : 999
};

$done({body : JSON.stringify(chxm1023)});
