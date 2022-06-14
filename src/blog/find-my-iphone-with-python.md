---
title: PythonでiPhoneを探す
author: Yuuki Sakakibara
date: 2022-06-14
---

## はじめに

みなさんは私のように家の中で自分のiPhoneの場所がわからなくなることはないですか？ スマートスピーカーに「iPhoneを探して」と話しかけることで、見つからなくなってしまったiPhoneの音を鳴らすことができるようになったら便利ですよね。 今回は、Pythonのライブラリを使用して、まずはコマンドラインでiPhoneの音を鳴らすところまでを実現してみたいと思います。

## 環境

- macOS Monterey 12.4(Intel CPU)
- python 3.10.4
  - pip 22.0.4
    - findmypy 0.1.11

## findmypyのインストール

```shell
pip install findmypy
```

## Appleデバイスの情報を列挙

```python
from findmypy.base import FindMyPyManager
from findmypy.base import FindMyPyConnection
import os

APPLE_ID = "your_id_here"
APPLE_PW = "your_pw_here"

connection = FindMyPyConnection(APPLE_ID, APPLE_PW)
icloud = FindMyPyManager(connection, True)
icloud.init_devices_list()
for id in icloud.devices:
  print("====")
  print(id)
  print(icloud.devices[id].status())
```

上記のコードを実行すると以下のようにデバイスのIDと基本情報がディクショナリで取得できます。（IDは適当な文字列に置き換えています）

```
====
aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1
{'batteryLevel': 0.8399999737739563, 'deviceDisplayName': 'iPad Pro', 'deviceStatus': '200', 'name': 'iPad Pro 12.9'}
====
aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ2
{'batteryLevel': 0.0, 'deviceDisplayName': 'iMac 27"', 'deviceStatus': '200', 'name': 'iMac'}
```

## デバイスのサウンドを鳴らしてみる（音量注意）

先程取得したデバイスIDを使用して以下のようなコードを実行することで対象デバイスのサウンドが鳴ります。

```python
from findmypy.base import FindMyPyManager
from findmypy.base import FindMyPyConnection
import os

APPLE_ID = "your_id_here"
APPLE_PW = "your_pw_here"

connection = FindMyPyConnection(APPLE_ID, APPLE_PW)
icloud = FindMyPyManager(connection, True)
icloud.play_sound_on_device("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1")
```

## まとめ

以上でPythonからiPhoneのサウンドを鳴らすことが可能になりました。 iPhoneが見つからなくなった時に自分のiPhoneに電話をかけても音が鳴らない設定になっていて探すことができなかった経験は多くの方にあるのではないでしょうか。 この方法であればどのような設定をしていても音が鳴るのでPythonのコードを実行できる環境を持っている方はぜひ試してみてください。
