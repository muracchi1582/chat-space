# README

## Description
グループ内でチャットができるアプリ。
お互いのコミュニケーションを円滑にするために
作成しました。

## DEMO

ER図（DB設計）
https://gyazo.com/e7bc35dbee718dbd010e5f57060da94d

メッセージ流れ
https://gyazo.com/4d6a027c8f4dca45df63381345bc0249

メンバー追加
https://gyazo.com/882fc20a6fa126f482afcc767cddf8b5

ログイン画面
https://gyazo.com/b8d74936e599beae3c4fb5ed901da109

## Features

- HAML/SASS記法マークアップ
- AWS EC2へのデプロイ
- AWS S3への画像アップロード
- devise gemを使用した新規登録、ログイン機能
- Jqueryによるインクリメンタルサーチ
- Jqueryによる自動更新機能

## Requirement

- Ruby 2.5.1
- Rails 5.2.3

## Installation

- $ git clone http://github.com/muracchi1582/chat-space.git
- $ cd chat-space
- $ bundle install

## Author 
1名による単独開発
- masatoshi muraoka

# DB設計
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :messages
- has_many :group_users
- has_many :groups, through: :group_users



## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|group|references|null: false, foreign_key: true|
|user|references|null: false, foreign_key: true|

## Association
- belongs_to :user
- belongs_to :group



### groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|


#### Association
- has_many :messages
- has_many :group_users
- has_many :users, through: :group_users



## group_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|reference|null: false, foreign_key: true|
|group|reference|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user