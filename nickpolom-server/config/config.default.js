/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1680497497394_247';

  // add your middleware config here
  config.middleware = [];

  // post default require csrf token
  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.mongoose = {
    url: 'mongodb://chris:chris@127.0.0.1:27017/nickpolom',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
