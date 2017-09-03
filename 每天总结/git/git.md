###    git入门与实践
-图形化操作工具（Source Tree  ，小乌龟） ， 有命令行 （git  bash）

windows  中 主要用 cmd  来敲命令

linux  中主要是用  bash  来敲命令

mac  


# 版本管理工具(每一次备份，就相当于一个版本)
- 自己电脑备份

- 公用电脑备份


## 配置git (一个电脑只要配置一次)
配置用户名和邮箱:
输入命令: 
配置用户名: `git config --global user.name "自己的名字"`
配置邮箱: `git config --global user.email "自己的邮箱"`
>补充，其实是保存了用户名和邮箱到 C:\Users\[用户名]\.gitconfig文件中


### 基础操作


git  4中状态 3个区 

文件有4个状态，三个区
工作区, (暂存区, 仓库).git

### 4种状态


- Untracked （未跟踪）
> 文件没有被添加到暂存区，也没有被提交过! 

- Unmodify (未修改)
> 自从上次提交后没有改过代码(提交之后，没有修改过代码，那么这个代码就是Unmodify状态)

- Modified (已修改)
>  自从上一次提交后，修改了文件的内容,那么文件的状态就会变为Modified

- Staged （暂存状态）
> 一旦，我把文件添加到暂区，那么这个文件的状态就变为了Staged



####  写代码步奏


- 0  写代码
- 1 先放到暂存区 `git add   文件名`
- 2 放到仓库   `git  commit -m  '注释'`


- 0  写代码
- 1 先放到暂存区 `git add   文件名`
- 2 放到仓库   `git  commit -m  '注释'`

###补充命令

- `git add -A`把所有上一次git commit 之后，修改过的文件全部添加到暂存区
- `git status` // 查看有哪些修改后的文件在暂存区，哪些不在


### 时光倒流

git reset  --hard head 


### 创建分支
- `git branch tmp` // 创建了一个平行宇宙(分支)(房间)
- `git branch -d tmp` // 删除一个叫tmp的平行
- `git checkout tmp` // 切换到tmp分支!
- `git branch` // 查看有多少个分支()
- `git merge tmp` // 合并分支，// 把tmp分支合并到当前分支d

> 项目文件中
  + git init 初始
  + git add 文件路径 (git add -A)
  + git commit -m "注释"
  + git status 
  + git log
  + git reflog
  + git reset --hard 【commit_id】  // head

  + git branch dd
  + git branch
  + git branch -d dd
  + git checkout dd
  + git merge dd
