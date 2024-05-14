if ($(".brief-form").length > 0){
	$('.brief-form__program-btn').on('click', function(e) {
		e.preventDefault();
		var original = document.querySelector('.brief-form-program');
		var lastProgramWrap = document.querySelectorAll('.brief-form-program').length ? document.querySelectorAll('.brief-form-program') : [original];
		var lastProgram = lastProgramWrap[lastProgramWrap.length - 1]; // Получаем последний добавленный блок

		var clone = original.cloneNode(true); // Клонируем первоначальный блок

		// Получаем номер последнего дня и увеличиваем его на 1
		var lastDayNumber = parseInt(lastProgram.querySelector('.brief-form-program__caption span').textContent, 10);
		clone.querySelector('.brief-form-program__caption span').textContent = lastDayNumber + 1;
		// Создаем новую кнопку и добавляем ее в клонированный блок
		var deleteButton = document.createElement('button');
		deleteButton.className = 'program__deleate';
		deleteButton.textContent = '-';
		clone.appendChild(deleteButton);

		// Вставляем клонированный блок после последнего добавленного блока
		lastProgram.parentNode.insertBefore(clone, lastProgram.nextSibling);
	});

	// Обработчик клика для кнопки удаления блока 'upload__deleate'
	$(document).on('click', '.program__deleate', function () {
		// Удаляем элемент
		$(this).closest('.brief-form-program').remove();
		
		// Обновляем нумерацию
		$('.brief-form__program-wrap .brief-form-program').each(function(index) {
			$(this).find('.brief-form-program__caption span').text(index + 1);
		});
	});
	
}