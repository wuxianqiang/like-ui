#!/bin/sh

if [ $VERSION = 0 ];then
  echo $VERSION
else
  npm publish
fi
git pull origin master
yarn install
yarn docs:build
cp -rf ${WORKSPACE}/docs/.vuepress/dist/* /usr/share/nginx/html
nginx -s reload