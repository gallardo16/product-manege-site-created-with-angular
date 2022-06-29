# この WAR ファイルについて

この WAR ファイルは Spring Boot（Java）で作成しました。  
起動には JDK11 以上のインストールが必要です。  
https://jdk.java.net/java-se-ri/11

# 起動までの準備

こちらのリポジトリをクローンします。  
中身はこのような構成です。

- WAR ファイル：ProductManageService-1.0.0.war
- static フォルダ：商品の写真などを格納するフォルダ
- 起動用バッチファイル（Windows のみ）：StartService.bat

# WAR ファイルの起動方法

コマンドプロンプトにて下記コマンドを実行します。

```
java -Xmx1024m -jar ProductManageService-1.0.0.war
```

※Windows 環境ではバッチファイルも使用できます。

# WAR ファイルの終了方法

起動時のコマンドプロンプトにて「Ctrl」+ 「C」キーを押してください。

# その他

WAR ファイルを一度起動すると「h2db」というフォルダができます  
これは Flyway が作ったファイル型の DB です  
DB を初期の状態に戻したいときは「h2db」をフォルダごと削除してください。

※WAR ファイルの起動にはコマンドオプションの「-Xmx1024m」で 1GB を割り当てています。  
メモリが不足するかたは少し減らしてみてください。
