// ==UserScript==
// @name        提取码自动填写
// @author      billypon
// @description 访问分享链接时自动填写提取码并提交
// @version     1.0.0
// @namespace   http://www.canaansky.com/
// @match       http://pan.baidu.com/share/init?*
// @match       https://pan.baidu.com/share/init?*
// @run-at      document-idle
// @grant       none
// ==/UserScript==

var code = location.hash.slice(1,5);
if (!code)
	return;
console.info("code:", code);

function fill(input, button) {
	var input = document.querySelector(input), button = document.querySelector(button);
	if (input && button) {
		console.info("elements:", input, button);
		input.value = code;
		button.click();
	}
}

var domain = location.hostname.match(/\w+\.\w+$/)[0];
console.info("domain:", domain);
switch (domain) {
	case "baidu.com":
		fill("#accessCode", "#submitBtn");
		break;
}