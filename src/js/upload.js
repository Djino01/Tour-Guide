$(document).ready(function () {
    // Делегируем события 'focus' и 'blur' на документ для элементов с классом 'inputfile'
    $(document).on('focus', '.inputfile', function () {
        $(this).addClass('has-focus');
    });
    $(document).on('blur', '.inputfile', function () {
        $(this).removeClass('has-focus');
    });

    // Делегируем событие 'change' на документ для элементов с классом 'inputfile'
	$(document).on('change', '.inputfile', function (e) {
		var input = $(this);
		var label = input.next('label');

		var name_file = [];
		let sum = 0;
		let ending = '';
		for (var i = 0; i < input.get(0).files.length; ++i) {
			name_file.push(input.get(0).files[i].name);
			sum++;
		} 
		if (sum === 1) {
			ending = '';
		} else if (sum >= 2 && sum <= 4) {
			ending = 'а';
		} else if (sum >= 5) {
			ending = 'ов';
		}
		label.find('.upload__caption').html(`Выбрано ${sum} файл${ending}`);
	});

	// Обработчик клика для кнопки добавления нового блока 'upload-file'
	$(document).on('click', '.upload__btn', function () {
		var briefFormLocation = $(this).closest('.brief-form__location');
		if (briefFormLocation.length === 0) {;
			return;
		}
		var briefFormBody = briefFormLocation.find('.brief-form-location__body');
		if (briefFormBody.length === 0) {
			return;
		}
		var briefFormWrap = briefFormBody.find('.brief-form-location__wrap').first();
		if (briefFormWrap.length === 0) {
			return;
		}
		var clone = briefFormWrap.clone(true);
		clone.find('input[type="text"]').val('');
		clone.find('input[type="file"]').val('');
		clone.find('.upload__caption').html('Загрузите изображение <span>(JPG, JPEG, PNG. Размер до 2 Мб)</span>');
		var fileCount = briefFormLocation.find('.upload-file').length + 1;
		var newId = 'file-' + fileCount;
		var newName = 'location-file-' + fileCount + '[]';
		clone.find('input[type="file"]').attr('id', newId).attr('name', newName);
		clone.find('.upload__box').attr('for', newId);
		
		if (clone.find('.upload__deleate').length === 0) {
			clone.append('<button class="upload__deleate">-</button>');
		}
		briefFormBody.append(clone);
	});

	// Обработчик клика для кнопки удаления блока 'upload__deleate'
	$(document).on('click', '.upload__deleate', function () {
		$(this).closest('.brief-form-location__wrap').remove();
	});

});
