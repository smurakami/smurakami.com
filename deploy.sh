#!/bin/bash
git push origin master
ssh smurakami.com "cd /var/www/smurakami.com; git pull origin master; /home/smurakami/.ndenv/shims/yarn build"
