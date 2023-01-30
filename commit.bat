@echo off
git add .

if '%1'=='' goto defaultCommit
goto commit


:defaultCommit
   git commit -m "Some updates" 
   goto end

:commit
   git commit -m %1
   goto end

:end

