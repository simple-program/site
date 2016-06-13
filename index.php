<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8" >> <!-- ЕБАННАЯ БЛЯТЬ СКОБОЧКА, ЕСЛИ ЕЕ УБРАТЬ, ТО НИЧЕГО НЕ РАБОТАЕТ. ШО ЦЕ ЗА ХУЕТА?! -->
	<title>Test Page</title>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="system/js/notie/dist/notie.css">
	<script src="system/js/notie/notie.js"></script>
	<script src="system/core/function.js"></script>
	<link rel="stylesheet" href="system/js/datedrop/datedropper.css">
	<script src="system/js/datedrop/datedropper.js"></script>

</head>
<body>
<br>
<button onClick="success('Уведомление') ">Уведомление</button><br><br>
<button onClick="warning('Предупреждение');">Предупреждение</button><br><br>
<button onClick="error('Ошибка');">Ошибка</button><br><br>
<button onClick="info('Информация')">Информация</button><br><br>
<button onClick="input('placeholder', 'Какой-то текст', 'Принять', 'Отмена');">Input</button><br><br>
<button onClick="select('Поделиться', 'Комментировать', 'Редактировать', 'Удалить');">Select</button><br><br>
<input type="text" id="departure" value="Выбор даты">
<script>$( "#departure" ).dateDropper();</script>
</body>
</html>