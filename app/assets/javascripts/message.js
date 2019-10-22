$(document).on('turbolinks:load', function(){

  function buildHTML(message){
    var image = "";
    var content = "";
    image = (message.image) ? `<image class="lower-message_image right__contents--bellow__box-message" src="${message.image}">`:"";
    content = (message.content) ? `<div class="right__contents--bellow__box-message">${message.content}</div>` : "";

    var html = `<div class= "right__contents--bellow__box" data-message-id="${message.id}">
                  <div class="raight__contents--bellow__box--name">${message.name}</div>
                  <div class="right__contents--bellow__box--time">${message.created_at}</div>
                </div>`
                {content}
                {image}
    return html;
  }

  function scroll(){
    $('.right__contents--bellow').animate({
      scrollTop: $('.right__contents--bellow')[0].scrollHeight
    }, 'slow','swing');
  }

  $('#new_message').on('submit', function(e){
    console.log("ee");
    e.preventDefault();
    var formData = new FormData($(this).get(0));
    var url = $(this).attr('action');
    if ((formData.get("message[content]").length != 0 || formData.get("message[image]").size != 0 )) {
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      console.log("ok");
      var html = buildHTML(data);
      $('.right__contens--bellow').append(html);
      $('.form__message--post').val('');
      $('.form__submit').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
    })
    } else {
    alert("値を入力してください");
    }
    return false;
  }) 
});