var commanderImages = new Array('img/build_bar/units/imperial_delta.png', 'img/build_bar/units/imperial_alpha.png', 'img/build_bar/units/raptor_base.png', 'img/build_bar/units/quad_base.png');
var settings = decode(localStorage.settings);

model.commander_hp_location_style = ko.computed(function() {return settings.commander_hp_display_location == 'RIGHT' ? 'commander_hp_location_right' : 'commander_hp_location_center'});
model.commander_hp_display_show = ko.computed(function() { return settings.commander_hp_display_show == 'ALWAYS'});

if (settings.commander_hp_display_location == 'CENTER') {
	$('.div_version_info_cont').css({'marginTop' : '10px', 'marginRight' : '-480px'});
}

$('body').append(
		'<table id="commander_info" data-bind="visible: model.armySize() > 0 && ( model.alertModel.commanderUnderAttack() || model.commander_hp_display_show()), css: model.commander_hp_location_style">' + //Only display commander info bar if player isn't dead (has more than 1 unit).
			'<tbody>' +
				'<tr data-bind="click: function() { api.select.commander(); api.camera.track(true); }">' +
					'<td class="div_status_bar_endcap_angle left_angle"></td>' +
					'<td class="div_status_bar_midpsan">' +
						'<div class="commander_info_img" >' +
							'<img src="' + commanderImages[localStorage['preferredCommander']] +'"/>' +
						'</div>' +
					'</td>' +
					'<td class="div_status_bar_midpsan">' +
						'<div class="div_status_bar_display">' +
							'<div class="status_bar_frame">' +
								'<div class="status_bar_commanderHP" data-bind="visible: !model.alertModel.commanderUnderAttack(), style: {width: \'\' + (model.commanderHealth() * 160) + \'px\'}"></div>' +
								'<div class="status_bar_commanderLowHP" data-bind="visible: model.alertModel.commanderUnderAttack(), style: {width: \'\' + (model.commanderHealth() * 160) + \'px\'}"></div>' +							
							'</div>' +
							'<div class="status_stats">' +
								'<span data-bind="text: parseInt(model.commanderHealth() * 12500)"></span>/12500</span>' +
								'<span class="warning" data-bind="visible: model.alertModel.lowCommanderHealth()">WARNING!</span>' +
							'</div>' +
						'</div>' +
					'</td>' +
					'<td class="div_status_bar_endcap_switcharoo right_switcharoo"></td>' +
				'</tr>' +
			'</tbody>' +
		'</table>');