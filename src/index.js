/*
* @Author: Tinphic
* @Date:   2018-09-05 14:29:08
* @Last Modified by:   Tinphic
* @Last Modified time: 2018-09-05 16:04:08
*/


import Button from './packages/button';


const version = '1.0.0';
const components = [
	Button
]
const install = function(Vue, config = {}) {
  if (install.installed) return;

  components.map(function(item){
  	Vue.component(item.name, item);
  })
  
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  install,
  version,
  Button
};
