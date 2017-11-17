@ECHO OFF
GIT stage --all
GIT commit --message="Publish Build"
GIT push
PAUSE
