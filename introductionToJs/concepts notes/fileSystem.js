/*
Synchronous Functions to create, write, read and delete
1. files - 
openFileSync(), 
writeFileSync() - overwrites a file if file already exists, creates a file and then writes if file not present
appendFileSync() - appends in the file, does not overwrite like writeFileSync()

let content = readFileSync("SourceFile.txt" ) - reads file in binary format stores in buffer, use utf-8 to display as string 
unlinkSync() to remove file, to remove all files from a folder, use for loop

2. Directories
mkdirSync() to create a directory
rmdirSync() to remove a directory
?functions missing

lstatSync() returns if the given path points to a file or a directory
existFile()[check FUNC NAME] - returns true/false if file exists/doesnot exist on the given path


*/
