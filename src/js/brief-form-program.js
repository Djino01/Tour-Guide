document.querySelector('.brief-form__program-btn').addEventListener('click', function(e) {
	e.preventDefault();
    var original = document.querySelector('.brief-form-program');
    var lastProgramWrap = document.querySelectorAll('.brief-form-program').length ? document.querySelectorAll('.brief-form-program') : [original];
    var lastProgram = lastProgramWrap[lastProgramWrap.length - 1]; // Получаем последний добавленный блок

    var clone = original.cloneNode(true); // Клонируем первоначальный блок

    // Получаем номер последнего дня и увеличиваем его на 1
    var lastDayNumber = parseInt(lastProgram.querySelector('.brief-form-program__caption span').textContent, 10);
    clone.querySelector('.brief-form-program__caption span').textContent = lastDayNumber + 1;

    // Вставляем клонированный блок после последнего добавленного блока
    lastProgram.parentNode.insertBefore(clone, lastProgram.nextSibling);
});