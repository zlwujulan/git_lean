## 设置
```bash
git config —local user.name 'majinhui'
git config —local user.email 'jinhui04.m046@shulidata.com'
git config —list
git remote add origin https://github.com/e10101/pm2app.git
git push -u origin master
```

## 回滚
```bash
ops_stage回滚到tag v1.2
git show v1.2 （获取commit_id）

// 获得想要回滚的版本
git checkout v1.2
git checkout -b rollback
// 删除远程分支
git push origin --delete ops_stage [git push origin :ops_stage]
// 删除本地分支或者重命名
git branch -D ops_stage
git push origin rollback:ops_stage
// 重新从远程检出分支ops_stage
```

## 常用操作

```bash
// clone
git clone <版本库的网址> <本地目录名>
// 查看分支
git branch -a
// 下载远程分支并创建对应本地分支
// 远程分支信息获取到本地
git fetch
git checkout -b branchname origin/branchname
// 创建并切换到新分支
//删除本地分支  
git branch -D xxxxx
git checkout -b new-branchname

// 合并回分支
git checkout branchname
git pull
git merge —no-ff new-branchname
git push origin branchname
```

## 提交日志

想看到最近一次提交所有更改过的文件
```bash
git log -n 1 --stat
```


想看到最近一次提交所有更改的细节
```bash
git log -n 1 -p
```

## 强制提交
```bash
git push -f origin master
```

## 打tag
```bash
git tag -a v1.0 -m 'this is a message'
git push origin v1.0
```

