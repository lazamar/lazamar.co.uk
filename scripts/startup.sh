#!/bin/bash


# Kill any previous server process
ps -x |
 grep -G "node index.js" |
 awk '{ print "kill "$1 }' |
 xargs -0 bash -c

# Start a new server process in the background
node index.js &
