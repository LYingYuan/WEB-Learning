"use strict";

const fs = require("fs");
const path = require("path");

let time = new Date().getTime() - 6 * 24 * 60 * 60 * 1000;
time = new Date(time).toLocaleDateString();

const date_time = addZero(time);

// 文件目录
// G:\OneDrive\Luo\工作\团小组\青年大学习
const main_file_path = path.join(
  "G:",
  "OneDrive",
  "Luo",
  "工作",
  "团小组",
  "青年大学习"
);

const final_main_file_path = path.join(main_file_path, date_time);
// 新建文件夹
fs.mkdir(final_main_file_path, err => {
  if (err) console.error(err);
});

// 图片最终名称
const final_names = [
  "2019211529-罗迎元",
  "2019211462-刘凯",
  "2019214489-张蕴涵",
  "2019211524-周渝",
  "2019211523-王燚",
];

// 各小组成员名称（与 final_names 顺序对应）
const file_names = ["罗迎元", "刘凯", "张蕴涵", "周渝", "王燚"];

for (let i = 0; i < file_names.length; i++) {
  const picture_old_path = path.join(main_file_path, file_names[i]);
  fs.readdir(picture_old_path, (err, picture_file) => {
    if (err) {
      throw err;
    }
    const new_name = change_file_name(picture_file[0], final_names[i]);
    fs.rename(
      path.join(picture_old_path, picture_file[0]),
      path.join(final_main_file_path, new_name),
      err => {
        if (err) {
          throw err;
        }
      }
    );
  });
}

// 获得全新名称
function change_file_name(old_name, new_name) {
  // 切割文件名(以最后一个点为分隔符)
  const cut_index = old_name.lastIndexOf(".");
  // 保存文件后缀名
  const type_name = old_name.slice(cut_index);
  // 组合成新名称并返回
  return new_name + type_name;
}

// NOTE: 2022/5/4 -> 2022-05-04
function addZero(date) {
  const arr = date.split("/");
  const res_arr = [];
  for (let num of arr) {
    num = Number(num);
    if (num >= 1 && num < 10) {
      num = "0" + num;
    }
    res_arr.push(num);
  }
  return res_arr.join("-");
}
