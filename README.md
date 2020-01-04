# IoS_Auth

IoS の AuthServer

## 起動

```
docker-compose up
```

## アクセスポイント

- localhost:5050 jwt サーバ
- localhost:6379 redis サーバ

## ルーティング

### GET

#### `/key`

公開鍵を取得する

##### request

##### response

- key: string

#### `/verify`

jwt の検証を行う

##### request

- jwt: string

##### response

### POST

#### `/signUp`

新しくアカウントを登録する

##### request

- id: string
- password: string

##### response

- jwt: string

#### `/signIn`

id と password があっていたら､
jwt トークンを再発行する

##### request

- id: string
- password: string

##### response

- jwt: string
