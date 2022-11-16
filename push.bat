git add .

if '%1'=='-p' goto haspull
goto nopull


:haspull
   if '%2'=='' goto defaultCommitAndPull
   goto commitAndPull

:nopull 
   if '%1'=='' goto defaultCommitAndPush
   goto commitAndPush

:commitAndPush
   git commit -m %1
   goto push

:commitAndPull
   git commit -m %2
   goto pull

:defaultCommitAndPush
   git commit -m "Some updates" 
   goto push

:defaultCommitAndPull
   git commit -m "Some updates" 
   goto pull

:pull
   git pull 
   goto push

:push
   git push 
   