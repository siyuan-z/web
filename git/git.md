## 命令行
* cd 到那个文件目录
* mkdir 文件夹名 创建文件夹
* notepad 文件名 创建文件
* git config --global alias.别名 想改的命令名  改命令名
* git clone url  克隆
* git commit -a -m "注释"  提交（省了add这步操作）
* git commit -m "注释“ --amend 撤销上一次提交 连这次添加的一次性提交
* git log 历史记录
* git diff 差距对比(工作区与缓存区的对比)
* git reset HEAD 文件名/git checkout -- 文件名  撤销
* git rm 文件名  删除缓存区(工作区不在)
* git rm -f 文件名  删除(缓存区和工作区)
* git rm --cached 文件名  删除缓存区(工作区还在)
* git checkout commit_id 文件名  恢复某个文件
* git reset --hard commit_id/HEAD/HEAD~2(~后跟的是数字) 恢复版本
* git reflog --head commit_id 回到现在
* git remote 查看仓库名字
* git remote -v 查看仓库地址
* git push orgin master 同步远程分支
* 多人协作
    gti config -- urse.name "名字"
    gti config -- urse.email "邮箱"
    git clone github地址 
* 多人协作解决冲突
    git fetch   拉取代码（需手动合并）最好用这个方法
        Git diff master origin/master   显示多人提交的代码
        Git merge  orgin/master 合并
    git pull    拉取代码（自动合并）
* git branch 查看分支
* git branch 名字 创建分支（但没切换到分支）
* git checkout 名字  切换到分支
* git checkout -b 名字  快速切换分支
* git merge 分支名 合并分支
* git branch --merge 名字  查看合并分支
* git branch --no-merge 名字  查看未合并分支
* git branch -d 分支名  删除分支（合并的分支）
* git branch -D 分支名  强制删除未合并分支
* git push orgin 分支名  提交分支
* git tag 查看标签
* git tag 标签名  创建标签
* git push orgin 标签名 同步到github上