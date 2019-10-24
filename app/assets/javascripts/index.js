$(function(){  
  function buildHtml(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ user.name }</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</a>
                </div>`
    return html;
  }
  
  function appendUser(id, name) {
    var html = `<div class="chat-group-user">
                  <input name="group[user_ids][]" type="hidden" value="${ id }">
                  <p class="chat-group-user__name">${ name }</p>
                  <div class="user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn">削除</div>
                </div>`
    return html;
  }
  
  function appendNoUser(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name js-user__name">一致するユーザーはいません</p>
                </div>`
    $('#user-search-result').append(html)
  }
  
    $('#user-search-field').on('keyup', function(e) {
      var input = $('#user-search-field').val();
      
        $.ajax({
          type: 'GET',
          url: '/users',
          data: { keyword: input },
          dataType: 'json'
        })

      .done(function(users) {
          $('#user-search-result').empty();
          var insertHtml = "";
          if (users.length !== 0 ) {
            users.forEach(function(user) {
              console.log(user);
              insertHtml += buildHtml(user);
              $('#user-search-result').append(insertHtml);            
            });
           }
          else {
            appendNoUser("一致するユーザーはいません");
          }
        })
         .fail(function() {
           alert('ユーザー検索に失敗しました');
        })
      });  

     $('#user-search-result').on('click', '.chat-group-user__btn--add', function() {
         var id = $(this).data("user-id");
         var name = $(this).data("user-name");
         var insertUser = appendUser(id, name);
         $('#chat-group-users').append(insertUser);
         $(this).parent().remove();
       });

    $(document).on('click', '.chat-group-user__btn--remove', function() {
      $(this).parent().remove();
      var removeId = $(this).attr('id');
      userId = userId.filter(id => id == removeId);
    });    
});
  