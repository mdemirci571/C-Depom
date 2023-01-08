# Git Class Note

## Check if you have git in your computer
```git
git --version
```
## See the commands
```git
git help
```

## Configuration
```git
git config --global user.name “<name>”
git config --global user.email “<email>”
git config --global core.editor “<text editor>” 
git config --list
git config --global --edit
```

## Associating text editors with Git

[Using Sublime Text as your editor](https://docs.github.com/en/get-started/getting-started-with-git/associating-text-editors-with-git#using-sublime-text-as-your-editor-1)

- Modify path to subl.exe according to your computer!
```git
git config --global core.editor "'C:\Program Files\Sublime Text\subl.exe' -w"
git config --global core.editor "notepad"
```

## Delete individual git config 
```git
git config --system --unset <key>
git config --global --unset user.name
git config --system --unset user.email
git config --system --list
```

## Create a local repo
```git
git init
```

# Get the content of a remote repo
```git
git clone <url>
```

## See the status of your repo
```git
git status
```

## Stage files
```git
git add <filename>
git add .
```

## Record the current state

- The git stash command takes your uncommitted changes (both staged and unstaged), saves them away for later use, and then reverts them from your working copy.

- At this point you're free to make changes, create new commits, switch branches, and perform any other Git operations; then come back and re-apply your stash when you're ready.
```git
git stash
git stash list
git stash pop
git stash apply <stash>
git stash clear
git stash drop <stash>
```

## Commit
```git
git commit 
git commit -m “message”
git commit -am “message”
git commit --amend
```

## See commit logs
```git
git log
git log --oneline
git log --since=<date>
git log --since=2.weeks
git log --since="2008-01-15"
git log --since="2 years 1 day 3 minutes"
git log --until=<date>
git log -- <file>
```

## See code differences
```git
git diff
```

## Clean
```git
git rm
git rm --cached
git checkout
```

# Branches

## Rename the current branch
```git
git branch -m <branch>
```

## Rename the default branch
```git
git config --global init.defaultBranch main
```

## Create a new branch
```git
git branch <branchname>
```

## Switch to a branch
```git
git checkout <branchname>
```

## Create and switch to a branch
```git
git checkout -b <branchname>
```

## Delete a local branch
```git
git branch -d <branchname>
git branch -D <branchname>
```
- Use -D instead if you want to force the branch to be deleted, even if it hasn't been pushed or merged yet.

## See branches
```git
git branch
git branch -r
git branch -a
```

## Merge two branches
```git
git merge
```

# Remote Ops

## Connect to remote repo
```git
git remote add origin <url>
```

## Get the latest version
```git
git fetch
git pull
```

## Upload your commit
```git
git push -u origin master/main
git push
```

## Delete a remote branch
```git
git push origin --delete <branchname>
git push origin :<branchname>
```

# gitignore

- A good documentation about [gitignore](https://www.atlassian.com/git/tutorials/saving-changes/gitignore)
