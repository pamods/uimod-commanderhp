$('body').append(
'<div id="commander_info" data-bind="visible: showResources">' +
	'<div id="not_dead_yet" data-bind="visible: model.commanderHealth() > 0">' +
		'<table>' +
			'<tbody>' +
				'<tr>' +
					'<td class="div_status_bar_endcap_angle left_angle"></td>' +
					'<td class="div_status_bar_midpsan">' +
						'<div class="commander_info_img">' +
							'<img src="img/build_bar/units/delta.png" />' +
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
							'</div>' +
						'</div>' +
					'</td>' +
					'<td class="div_status_bar_endcap_angle right_angle"></td>' +
				'</tr>' +
			'</tbody>' +
		'</table>' +
	'</div>' +
'</div>');