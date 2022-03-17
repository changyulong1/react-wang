#!/usr/bin/env bash
yarn build &&
cd build &&
git init &&
git  add . &&
git commit -m 'geng' &&
git remote add origin git@gitee.com:xiaocao2019/react-wang.git &&
git push -u origin master -f  &&
cd -