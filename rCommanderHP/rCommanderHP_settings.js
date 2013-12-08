var s = decode(localStorage.settings);

model.commander_hp_display_location_options = ko.observableArray(['CENTER', 'RIGHT']);
model.commander_hp_display_location = ko.observable(s ? s.commander_hp_display_location : model.commander_hp_display_location_options()[0]);

model.commander_hp_display_show_options = ko.observableArray(['ALWAYS', 'UNDER ATTACK']);
model.commander_hp_display_show = ko.observable(s ? s.commander_hp_display_show : model.commander_hp_display_show_options()[0]);

model.oldSettings = model.settings;

model.settings = ko.computed(function () {
	var newSettings = model.oldSettings();
	newSettings['commander_hp_display_location'] = model.commander_hp_display_location();
	newSettings['commander_hp_display_show'] = model.commander_hp_display_show();
	
	return newSettings;
});

model.oldDefaults = model.defaults;

model.defaults = function () {
	model.commander_hp_display_location(model.commander_hp_display_location_options()[0]);
	model.commander_hp_display_show(model.commander_hp_display_show_options()[0]);
	model.oldDefaults();
};

$(".div_settings_control_lbl:contains('SHOW TERRESTRIAL')").parent().parent().parent().append(
                '<tr>' + 
                           '<td>' + 
                                '<div class="div_settings_control_lbl">' + 
                                    'HP DISPLAY LOCATION' + 
                                '</div>' + 
                            '</td>' + 
                            '<td>' + 
                                '<div class="div_settings_control_input">' + 
                                    '<select class="div_settings_control_select" data-bind="options: commander_hp_display_location_options, value: commander_hp_display_location" />' + 
                                '</div>' + 
                            '</td>' +                         
                        '</tr>' + 
                        '<tr>' + 
                           '<td>' + 
                                '<div class="div_settings_control_lbl">' + 
                                    'SHOW HP DISPLAY' + 
                                '</div>' + 
                            '</td>' + 
                            '<td>' + 
                                '<div class="div_settings_control_input">' + 
                                    '<select class="div_settings_control_select" data-bind="options: commander_hp_display_show_options, value: commander_hp_display_show" />' + 
                                '</div>' + 
                            '</td>' +                         
                        '</tr>');