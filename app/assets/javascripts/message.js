
$(function(){
  function buildHTML(message){
      var image = "";
    
      image = (message.image) ? `<image class="lower--message__image right__contents--bellow__box-message" src="${message.image}">`:"";

    var html = `<div class= "right__contents--bellow__box" data--message--id="${message.id}">
                  <div class= "right__contents--bellow__box--name">${message.name}</div>
                  <div class= "right__contents--bellow__box--time">${message.created_at}</div>
                  <div class= "right__contents--bellow__box--message">${message.content}</div>
                </div>`
    return html;
  }


  $('.new_message').on('submit', function(e){
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
      $('.right__contents--bellow').append(html);
      $('.new_message')[0].reset();
      $('.right__contents--bellow').animate({scrollTop: $('.right__contents--bellow')[0].scrollHeight}, 'fast');
      $('.form__submit').prop('disabled', false);
      
    })
    .fail(function(){
      alert('error');
    })
  }) 
});