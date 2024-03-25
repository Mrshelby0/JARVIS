if (isAdvancedUpload) {
    e.preventDefault();
  
    var ajaxData = new FormData($form.get(0));
  
    if (droppedFiles) {
      $.each( droppedFiles, function(i, file) {
        ajaxData.append( $input.attr('name'), file );
      });
    }
  
    $.ajax({
      url: $form.attr('action'),
      type: $form.attr('method'),
      data: ajaxData,
      dataType: 'json',
      cache: false,
      contentType: false,
      processData: false,
      complete: function() {
        $form.removeClass('is-uploading');
      },
      success: function(data) {
        $form.addClass( data.success == true ? 'is-success' : 'is-error' );
        if (!data.success) $errorMsg.text(data.error);
      },
      error: function() {
        // Log the error, show an alert, whatever works for you
      }
    });
  }