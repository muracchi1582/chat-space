json.(@message, :content, :image)
json.created_at @message.created_at
json.name @message.user.name
#idもデータとして渡す
json.id @message.id