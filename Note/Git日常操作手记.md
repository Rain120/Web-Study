### [Git日常操作手记](https://git-scm.com/)

## 使用前提

首先你需要先下载: [Git](https://git-scm.com/)

如果你下载很卡，或者你下载总是断了，请使用下面的下载链接

CSDN土豪，请使用：[Git CSDN 下载](https://download.csdn.net/download/zc_xy/10200075)

百度云盘下载 [Git 百度云盘下载](https://pan.baidu.com/s/1U9WWNPmtHXeluCuZbwQ13Q) 密码: 3wtg

推荐书本：[Pro Git](https://progit.bootcss.com/)

------

## 第一章 配置

#### 1、git ssh配置和使用

首次配置使用：

```
git config --global user.name 'Rain120'
git config --global user.email 'chao1202016@outlook.com'
```

![image-20180823141549531](/var/folders/fb/76vg0tjx79q2227v69gnngz00000gn/T/abnerworks.Typora/image-20180823141549531.png)

#### 2、生成密钥

```
ssh-keygen -t rsa -C 'chao1202016@outlook.com'
```

连续3个回车。最后得到了两个文件：`id_rsa`和`id_rsa.pub`。

![image-20180823141451345](/var/folders/fb/76vg0tjx79q2227v69gnngz00000gn/T/abnerworks.Typora/image-20180823141451345.png)

如果不是第一次，就选择`overwrite`。

![image-20180823141753077](/var/folders/fb/76vg0tjx79q2227v69gnngz00000gn/T/abnerworks.Typora/image-20180823141753077.png)

![image-20180823141805403](/var/folders/fb/76vg0tjx79q2227v69gnngz00000gn/T/abnerworks.Typora/image-20180823141805403.png)

查看`id_rsa.pub`内容，并复制；

![image-20180823141928885](/var/folders/fb/76vg0tjx79q2227v69gnngz00000gn/T/abnerworks.Typora/image-20180823141928885.png)

到你的GitHub账户上，进入`Setting`

![image-20180823142525005](/var/folders/fb/76vg0tjx79q2227v69gnngz00000gn/T/abnerworks.Typora/image-20180823142525005.png)

然后填入你的密钥和名字，确认即可。

#### 3、测试密钥

```
sst -T git@github.com
```

输出：

```
The authenticity of host 'github.com (207.97.227.239)' can't be established.
RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
Are you sure you want to continue connecting (yes/no)?
```

输入`yes`即可

![image-20180823142709386](/var/folders/fb/76vg0tjx79q2227v69gnngz00000gn/T/abnerworks.Typora/image-20180823142709386.png)

#### 4、检查配置信息

```
git config --list
```

![image-20180823150753537](/var/folders/fb/76vg0tjx79q2227v69gnngz00000gn/T/abnerworks.Typora/image-20180823150753537.png)

## 第二章 基础操作

#### 1、获取Git仓库

##### 1.1 本地初始化仓库

	进入你相应的目录并输入：

```
git init
```

![image-20180823145110242](/var/folders/fb/76vg0tjx79q2227v69gnngz00000gn/T/abnerworks.Typora/image-20180823145110242.png)

##### 1.2 Clone远程仓库

```
git clone git@github.com:Rain120/cloud-music.git
```

![image-20180823145855899](/var/folders/fb/76vg0tjx79q2227v69gnngz00000gn/T/abnerworks.Typora/image-20180823145855899.png)

#### 2、Git目录结构

进入`Git`你能看到里面的文件

![image-20180823145206248](/var/folders/fb/76vg0tjx79q2227v69gnngz00000gn/T/abnerworks.Typora/image-20180823145206248.png)

`escription` 文件仅供 GitWeb 程序使用，我们无需关心。

 `config` 文件包含项目特有的配置选项。

 `info` 目录包含一个全局性排除（global exclude）文件，用以放置那些不希望被记录在 .gitignore 文件中的忽略模式（ignored patterns）。

 `hooks` 目录包含客户端或服务端的钩子脚本（hook scripts）。

剩下的四个条目很重要：

(1) `refs` 目录。 这些条目是 Git 的核心组成部分;

(2) `objects` 目录存储所有数据内容；

(3) `refs` 目录存储指向数据（分支）的提交对象的指针；

(4) `HEAD` 文件指示目前被检出的分支；`index` 文件保存暂存区信息。



