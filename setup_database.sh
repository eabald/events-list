#!/bin/bash

file="db.sqlite"

if [ -f "$file" ] ; then
    rm "$file"
fi

touch db.sqlite
sqlite3 db.sqlite < init.sql
