
$(function(){
  function buildHTML(message){
      var image = "";
      var content = "";
      image = (message.image) ? `<image class="lower--message__image right__contents--bellow__box-message" src="${message.image}">`:"";
      content = (message.content) ? `<div class="right__contents--bellow__box-message">${message.content}</div>` : "";

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


// 自動更新機能
var buildMessageHTML = function(message) {
  if (message.content && message.image.url) {
    //data-idが反映されるようにしている
    var html = '<div class="message" data-id=' + message.id + '>' +
      '<div class="upper-message">' +
        '<div class="upper-message__user-name">' +
          message.user_name +
        '</div>' +
        '<div class="upper-message__date">' +
          message.created_at +
        '</div>' +
      '</div>' +
      '<div class="lower-message">' +
        '<p class="lower-message__content">' +
          message.content +
        '</p>' +
        '<img src="' + message.image.url + '" class="lower-message__image" >' +
      '</div>' +
    '</div>'
  } else if (message.content) {
    //同様に、data-idが反映されるようにしている
    var html = '<div class="message" data-id=' + message.id + '>' +
      '<div class="upper-message">' +
        '<div class="upper-message__user-name">' +
          message.user_name +
        '</div>' +
        '<div class="upper-message__date">' +
          message.created_at +
        '</div>' +
      '</div>' +
      '<div class="lower-message">' +
        '<p class="lower-message__content">' +
          message.content +
        '</p>' +
      '</div>' +
    '</div>'
  } else if (message.image.url) {
    //同様に、data-idが反映されるようにしている
    var html = '<div class="message" data-id=' + message.id + '>' +
      '<div class="upper-message">' +
        '<div class="upper-message__user-name">' +
          message.user_name +
        '</div>' +
        '<div class="upper-message__date">' +
          message.created_at +
        '</div>' +
      '</div>' +
      '<div class="lower-message">' +
        '<img src="' + message.image.url + '" class="lower-message__image" >' +
      '</div>' +
    '</div>'
  　};
  return html;
　};

  var reloadMessages = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    last_message_id = ※※※
    $.ajax({
      //ルーティングで設定した通りのURLを指定
      url: ※※※,
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages) {
      //追加するHTMLの入れ物を作る
      var insertHTML = '';
      //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる

      //メッセージが入ったHTMLを取得

      //メッセージを追加

    })
    .fail(function() {
      console.log('error');
    });
  };
  setInterval(reloadMessages, 5000);
}); 