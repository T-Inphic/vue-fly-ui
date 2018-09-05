/*
* @Author: Tinphic
* @Date:   2018-09-05 14:25:21
* @Last Modified by:   Tinphic
* @Last Modified time: 2018-09-05 16:11:56
*/

import FyButton from './src/button';

/* istanbul ignore next */
FyButton.install = function(Vue) {
  Vue.component(FyButton.name, FyButton);
};

export default FyButton;
