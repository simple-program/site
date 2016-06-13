// Уведомления Notie.js
notie.setOptions({
	colorSuccess: '#57BF57',
	colorWarning: '#D6A14D',
	colorError: '#E1715B',
	colorInfo: '#4D82D6',
	colorNeutral: '#A0A0A0',
	colorText: '#FFFFFF',
	animationDelay: 300,
	backgroundClickDismiss: true
});

function success(string, second) {
	if(second == undefined) second = 4;
	notie.alert(1, string, second);
}

function warning(string, second) {
	if(second == undefined) second = 4;
	notie.alert(2, string, second);
}

function error(string, second) {
	if(second == undefined) second = 4;
	notie.alert(3, string, second);
}

function info(string, second) {
	if(second == undefined) second = 4;
	notie.alert(4, string, second);
}

function ask(string, one, two, func1, func2) {
	if(one == undefined) one = "Принять";
	if(two == undefined) two = "Отмена";
	return notie.confirm(string, one, two, func1, func2);


}

function input(placeholder, text, one, two, value, func1, func2) {
	if(one == undefined) one = "Принять";
	if(two == undefined) two = "Отмена";
	notie.input({
		type: 'text',
		placeholder: placeholder,
		prefilledValue: value
	}, text, one, two, func1, func2);
}

function select(t1, t2, t3, t4, s1, s2, s3, s4) {
	notie.select("<i>Выберите действие</i>",
		[
		{ title: t1 },
		{ title: t2, color: '#57BF57' },
		{ title: t3, type: 2 },
		{ title: t4, type: 3 }
		],
		s1, s2, s3, s4);
}