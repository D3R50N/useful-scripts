$name =  Split-Path -Path (Get-Location) -Leaf
Expand-Archive '.\Runner.app.zip' -DestinationPath Payload
Compress-Archive -Path .\Payload -DestinationPath $name
Rename-Item -Path $name'.zip' -NewName $name'.ipa'
Remove-Item Payload -Recurse