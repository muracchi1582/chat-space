
$(function(){
  function buildHTML(message){
    
      var image = (message.image) ? `<image class="lower--message__image right__contents--bellow__box-message" src="${message.image.url}">`:"";
      var content = (message.content) ? `<div class="right__contents--bellow__box-message">${message.content}</div>` : "";

    var html = `<div class= "right__contents--bellow__box" data-message-id="${message.id}">
                  <div class= "right__contents--bellow__box--name">${message.name}</div>
                  <div class= "right__contents--bellow__box--time">${message.created_at}</div>
                  ${content}
                  ${image}
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
      $('.right__contents--bellow').append(html);
      $('.new_message')[0].reset();
      $('.right__contents--bellow').animate({scrollTop: $('.right__contents--bellow')[0].scrollHeight}, 'fast');
      // $('.form__submit').prop('disabled', false);
      
    })
    .fail(function(){
      alert('error');
    })
  }) 


  var reloadMessages = function() {
    var url = location.href
    if (url.match(/\/groups\/\d+\/messages/)){
    var last_message = $(".right__contents--bellow__box:last").data("message-id");
    var last_message_id = $(".right__contents--bellow__box:last").data("message-id"); 
  
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      var insertHTML = '';
      messages.forEach(function (message){
        if(message.id > last_message){
          insertHTML = buildHTML(message);
          $('.right__contents--bellow').append(insertHTML);
          $('.right__contents--bellow').animate({scrollTop: $('.right__contents--bellow')[0].scrollHeight}, 'fast');
        }
    })
  })
    .fail(function() {
      alert('error');
     });
    }
  };
  setInterval(reloadMessages, 5000);
}); 