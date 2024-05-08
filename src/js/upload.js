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
        var labelVal = label.html();
        var fileName = '';

        if (this.files && this.files.length > 1)
            fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
        else
            fileName = e.target.value.split('\\').pop();

        if (fileName)
            label.find('.upload__caption').html(fileName);
        else
            label.html(labelVal);
    });

    // Обработчик клика для кнопки добавления нового блока 'upload-file'
    $('.upload__btn').on('click', function () {
        var uploadContainer = $(this).closest('.upload');
        var uploadBody = uploadContainer.find('.upload__body');
        var uploadFileBlock = uploadBody.find('.upload-file').first();
        var clone = uploadFileBlock.clone(true);

        clone.find('input[type="file"]').val('');
        clone.find('.upload__caption').html('Загрузите изображение <span>(JPG, JPEG, PNG. Размер до 2 Мб)</span>');
        uploadBody.append(clone);

        var newId = 'file-' + ($('.upload-file').length);
        clone.find('input[type="file"]').attr('id', newId);
        clone.find('label').attr('for', newId);
    });
});
