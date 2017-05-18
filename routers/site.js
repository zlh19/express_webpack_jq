
var pathConfig=require('./sitePath').pathConfig

module.exports = function(path){

	var headTitle = pathConfig.module[path].title,
		title=headTitle + '-' + pathConfig.title,
		modulePath = pathConfig.module[path].modulePath;
	return {
		title:title,
		modulePath:modulePath
	}
};
