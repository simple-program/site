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

function success(string) {
	notie.alert(1, string);
}

function warning(string) {
	notie.alert(2, string, 2);
}

function error(string) {
	notie.alert(3, string, 2);
}

function info(string) {
	notie.alert(4, string, 2);
}

function ask(string, one, two, func1, func2) {
	return notie.confirm(string, one, two, func1, func2);


}

function input(placeholder, value, text, one, two, func1, func2) {
	notie.input({
		type: 'text',
		placeholder: placeholder,
		prefilledValue: value
	}, text, one, two, func1, func2);
}

function select(t1, t2, t3, t4, s1, s2, s3, s4) {
	notie.select("<<i>Выберите действие</i>",
		[
		{ title: t1 },
		{ title: t2, color: '#57BF57' },
		{ title: t3, type: 2 },
		{ title: t4, type: 3 }
		],
		s1, s2, s3, s4);
}