$('body').append(
'<div id="commander_info" data-bind="visible: showResources">' +
	'<div class="commander_info_container">' +
		'<div class="commander_info_img">' +
			'<img src="img/build_bar/units/delta.png" />' +
		'</div>' +
		'<div class="commander_info_warn" data-bind="visible: model.alertModel.commanderUnderAttack()">WARNING</div>' +
		'<div class="commander_info_hp">' +
			'<span data-bind="text: parseInt(model.commanderHealth() * 12500)"></span>/12500' +
		'</div>' +
		'<div class="commander_info_hp_back">' +
			'<div class="commander_info_hp_bar" data-bind="style: {width: \'\' + (model.commanderHealth() * 200) + \'px\'}"></div>' +
		'</div>' +
	'</div>' +
'</div>');