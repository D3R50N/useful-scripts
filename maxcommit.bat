mkdir temp
for /l %%i in (1,1,1000)do echo "yo" >> temp/fil%%i ; & commit
rm -r -f temp