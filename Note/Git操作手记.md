# [Git日常操作手记](https://git-scm.com/)

使用前
---

首先你需要先下载: [Git](https://git-scm.com/)

如果你下载很卡，或者你下载总是断了，请使用下面的下载链接

CSDN土豪，请使用：[Git CSDN 下载](https://download.csdn.net/download/zc_xy/10200075)

百度云盘下载 [Git 百度云盘下载](https://pan.baidu.com/s/1U9WWNPmtHXeluCuZbwQ13Q) 密码: 3wtg

推荐书本：[Pro Git](https://progit.bootcss.com/)

---

## 第一章 配置

#### 1、git ssh配置和使用

首次配置使用：
```
git config --global user.name 'Rain120'
git config --global user.email 'chao1202016@outlook.com'
```

#### 2、生成密钥

```
ssh-keygen -t rsa -C 'chao1202016@outlook.com'
```

连续3个回车。最后得到了两个文件：`id_rsa`和`id_rsa.pub`。

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

#### 1、Git目录结构

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

#### 2、获取Git仓库

##### 2.1 本地初始化仓

	进入你相应的目录并输入：

```
git init
```

![image-20180823145110242](/var/folders/fb/76vg0tjx79q2227v69gnngz00000gn/T/abnerworks.Typora/image-20180823145110242.png)

##### 2.2 Clone远程仓库

```
git clone git@github.com:Rain120/cloud-music.git
```

![image-20180823145855899](/var/folders/fb/76vg0tjx79q2227v69gnngz00000gn/T/abnerworks.Typora/image-20180823145855899.png)

#### 3、记录状态

> 工作目录下的每一个文件都不外乎这两种状态：已跟踪或未跟踪。 已跟踪的文件是指那些被纳入了版本控制的文件，在上一次快照中有它们的记录，在工作一段时间后，它们的状态可能处于未修改，已修改或已放入暂存区。 工作目录中除已跟踪文件以外的所有其它文件都属于未跟踪文件，它们既不存在于上次快照的记录中，也没有放入暂存区。 初次克隆某个仓库的时候，工作目录中的所有文件都属于已跟踪文件，并处于未修改状态。编辑过某些文件之后，由于自上次提交后你对它们做了修改，Git 将它们标记为已修改文件。 我们逐步将这些修改过的文件放入暂存区，然后提交所有暂存了的修改，如此反复。所以使用 Git 时文件的生命周期如下：

![image-20180823184516763](/var/folders/fb/76vg0tjx79q2227v69gnngz00000gn/T/abnerworks.Typora/image-20180823184516763.png)

来源：Pro Git

##### 3.1 查看当前项目中的文件状态

```
git status
```

![image-20180823184203928](/var/folders/fb/76vg0tjx79q2227v69gnngz00000gn/T/abnerworks.Typora/image-20180823184203928.png)

当我们修改某些文件后，我们再次输入上述命令

![image-20180823184831883](/var/folders/fb/76vg0tjx79q2227v69gnngz00000gn/T/abnerworks.Typora/image-20180823184831883.png)

##### 3.2 跟踪文件新文件

```
git add README.md
```

或者

```
git add .
```

![image-20180823195442855](/var/folders/fb/76vg0tjx79q2227v69gnngz00000gn/T/abnerworks.Typora/image-20180823195442855.png)

##### 3.3 取消暂存(stage)文件

当我们发现某个文件修改出现错误，或者暂时不需要提交很多文件中的某些或者某个文件到暂存区时，我们可以使用👇命令来将该文件撤出暂存区:

```
git reset HEAD <file>
```

![image-20180823195823241](/var/folders/fb/76vg0tjx79q2227v69gnngz00000gn/T/abnerworks.Typora/image-20180823195823241.png)

##### 3.4 提交代码

```
git commit -m 'description'
```

![image-20180824090918670](/var/folders/fb/76vg0tjx79q2227v69gnngz00000gn/T/abnerworks.Typora/image-20180824090918670.png)



##### 3.5 查看提交历史

```
git log
```

![image-20180824091027415](/var/folders/fb/76vg0tjx79q2227v69gnngz00000gn/T/abnerworks.Typora/image-20180824091027415.png)

```
git log -p -times
```

 `-p`: 用来显示每次提交的内容差异。

Times: 次数，最近提交次数。

结果是倒序结果。

例如：我查询最近一次的commit记录

```
git log -p -1
```



![image-20180824091200580](/var/folders/fb/76vg0tjx79q2227v69gnngz00000gn/T/abnerworks.Typora/image-20180824091200580.png)

###### 3.5.1 Git log常用选项

| 选项              | 说明                                                         |
| :---------------- | :----------------------------------------------------------- |
| —p                | 按补丁格式显示每个更新之间的差异。                           |
| --stat            | 显示每次更新的文件修改统计信息。                             |
| --shortstat       | 只显示 --stat 中最后的行数修改添加移除统计。                 |
| `--name-only`     | 仅在提交信息后显示已修改的文件清单。                         |
| `--name-status`   | 显示新增、修改、删除的文件清单。                             |
| `--abbrev-commit` | 仅显示 SHA-1 的前几个字符，而非所有的 40 个字符。            |
| `--relative-date` | 使用较短的相对时间显示（比如，“2 weeks ago”）。              |
| --graph           | 显示 ASCII 图形表示的分支合并历史。                          |
| --pretty          | 使用其他格式显示历史提交信息。可用的选项包括 oneline，short，full，fuller 和 format（后跟指定格式）。 |

来源：[Git-基础-查看提交历史](https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%9F%A5%E7%9C%8B%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2)



![image-20180824104014219](/var/folders/fb/76vg0tjx79q2227v69gnngz00000gn/T/abnerworks.Typora/image-20180824104014219.png)

