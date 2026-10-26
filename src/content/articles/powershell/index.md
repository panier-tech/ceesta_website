---
title: "PowerShellを使う"
description: "PowerShellをLinuxで使う。"
pubDate: 2026-10-21
order: 10
tags:
  - Shell
draft: false
---

## PowerShellとは

- マイクロソフトが開発したタスク自動化・構成管理のためのコマンドラインシェルおよびスクリプト言語

- 「動詞-名詞」で統一された直感的なコマンド

## インストール

PowerShellをLinuxで使えることを少し前から知っていたのですが、使っていなかったので使ってみました。
installは以下のコマンドで

```sh
sudo apt install powershell
```

## 使ってみた感想

第一印象として、使えるけど bash とかでいい。

コマンドが動詞と名詞で構成されているのはわかりやすいけど、 bash などに慣れていると冗長なコマンドを打ちたくないという感じでした。
例として、PowerShellでファイルを作成しようとすると次のようになります。

```sh
New-Item -ItemType File -Name sample.txt
```

見れば分かると思うのですが、長いです。他のコマンドについては次のようになります。
```sh
ls # bash
Get-ChildItem # PowerShell

cat # bash
Get-Content # PowerShell

cat sample.txt | grep "キーワード" # bash
Select-String -Path sample.txt -Pattern "キーワード" # PowerShell
Get-Content sample.txt | Select-String "キーワード" # PowerShell
```

PowerShellのgrepコマンドはオブジェクトとして扱うということを反映している例です。
bashなどの一般的なシェルとPowerShellの最大の違いは、「何をやり取りしているか」にあります。

- bash: テキスト（文字列）をパイプラインで流す
- PowerShell: オブジェクト（データ構造を持ったかたまり）をパイプラインで流す

## オブジェクトの強み

bashなどのテキストベースのシェルと、PowerShellのオブジェクトベースのシェルの決定的な違いは、「データのパース（文字列の切り出し）が必要かどうか」にあります。

例えば、「ファイルサイズが大きい順にファイルを並び替えたい」という処理を考えてみます。

### bashの場合（テキストの処理）<br>
bashの ls -l は単なる「文字列の出力」です。そのため、サイズ順に並べ替えるには、出力された文字列の何番目の列がサイズかを指定して、テキストとして加工・解釈する必要があります。
```sh
ls -l | sort -k 5 -n
```

### PowerShellの場合（オブジェクトの処理）<br>
一方、 PowerShell の Get-ChildItem が返すのは「ファイルオブジェクト」です。各オブジェクトは Length（ファイルサイズ）や LastWriteTime（更新日時）といった構造化されたデータ（プロパティ）を内部に保持しています。
そのため、文字列の切り出しを気にすることなく、プロパティ名を指定してそのまま並び替えることができます。
```sh
Get-ChildItem | Sort-Object Length -Descending
```
さらに、いま流れているデータが「どんな構造を持っているか」を Get-Member（エイリアス: gm）で簡単に調べられるのも、PowerShellならではの面白い点です。
```sh
Get-ChildItem | Get-Member
```

単なる「画面への文字の出力」ではなく、「意味を持ったデータの塊をパイプで次々に渡していく」という点が、PowerShellの強力な仕組みだと感じました。

## まとめ

WindowsとLinuxの両方で完全に共通のスクリプトを動かしたい場合などには強力な選択肢になりそうですが、普段の Linux 環境でのちょっとした作業やスクリプト作成であれば、やはり使い慣れた bash や zsh の方が手軽でスピーディーだと感じました。
とはいえ、単なるテキストの流し込みではなく「オブジェクト」としてデータを扱えるPowerShellならではの面白さや強力な面もあるため、機会があればもう少し踏み込んで使ってみたいと思います。
