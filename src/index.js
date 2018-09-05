/*
* @Author: Tinphic
* @Date:   2018-09-05 14:29:08
* @Last Modified by:   Tinphic
* @Last Modified time: 2018-09-05 17:56:06
*/


import Button from './packages/button';


const version = '1.0.2';
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

export default {
  install,
  version,
  Button
};
