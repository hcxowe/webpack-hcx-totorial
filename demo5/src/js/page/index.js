require("../../css/lib/reset.css");
require("../../css/common/global.css");
require("../../css/page/index.css");

$('#btn').click(function(){
    require.ensure(['../components/dialog/index.js'],function(require){
		var Dialog=require('../components/dialog/index.js');
		new Dialog(new Date());
	});
});
