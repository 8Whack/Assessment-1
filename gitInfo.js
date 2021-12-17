/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

var gitDefinition = "git is a program that logs your changes made to code. it creates a file that acts as a kind of snapshot to let you see and access old build of your code."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

var gitHubDefinition = "Github is a website that stores git files. in the case that your computer ever falls into a river (or more likely, just dies) you'll still be able to have access to whatever git files you uploaded there. You can also use github to see other people's files, which can be very valuable in helping you learn more coding."


//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

var gitInitDefinition = "initializes git in the folder where your files are, so you can then use git commands for that particular folder and its files."

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

var gitCloneDefinition =  "this copies a repository from github to your computer, using a url."

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

var gitStatusDefinition = "this checks the status of the git file that you're currently working with. if you've saved files that need to be uploaded, or if your working tree is clean. also shows what branch you're on, for example the main branch."

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

var gitAddDefinition = "adds all unsaved changes into a new file/s, often so they can then be sent to github."
var gitAddCode = "git add ."

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

var gitCommitDefinition = "this lets you add a tag for each commit, so you can keep track of wwhat changes you've made recently."
var gitCommitCode = "git commit -m 'tag here' "


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

var gitPushDefinition = "this command is what actually uploads your files to github. until you do, they're only stored on your computer."