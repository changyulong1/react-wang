#!/usr/bin/env bash
yarn build &&
cd build &&
git init &&
git  add . &&
git comiit -m '更新' &&
git remote add origin git@github.com:changyulong1/jizhang1.git &&
git push -u origin master -f
cd ..