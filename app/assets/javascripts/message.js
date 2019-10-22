

$(function(){
  function buildHTML(message){
    var html = `<div class= "right__contents--bellow__box" data-message-id="${message.id}">
                 <div class="raight__contents--bellow__box--name">${message.name}</div>
                 <div class="right__contents--bellow__box--time">${message.created_at}</div>
                </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.right__contens--bellow').append(html);
      $('.form__message--post').val('');
      $('.form__submit').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
    })
  })
});