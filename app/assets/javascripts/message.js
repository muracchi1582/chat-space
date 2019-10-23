
$(function(){
  function buildHTML(message){
      var image = "";
    
      image = (message.image) ? `<image class="lower--message__image right__contents--bellow__box-message" src="${message.image}">`:"";
    //  content = (message.content) ? `<div class="right__contents--bellow__box-message">${message.content}</div>` : "";

    var html = `<div class= "right__contents--bellow__box" data--message--id="${message.id}">
                  <div class= "right__contents--bellow__box--name">${message.name}</div>
                  <div class= "right__contents--bellow__box--time">${message.created_at}</div>
                  <div class= "right__contents--bellow__box--message">${message.content}</div>
                </div>`
                  // {content}
                  // {image}
    return html;
  }

    function scroll(){
      $('.right__contents--bellow').animate({
        scrollTop: $('.right__contents--bellow')[0].scrollHeight
      }, 'slow','swing');
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
      $('.form__message--post').val('');
      // $('.form__submit').prop('disabled', false);
      $('.form__submit')[0].reset();
    })
    .fail(function(){
      alert('error');
    })
  }) 
});