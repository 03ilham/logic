let camp = "bootcamp"
console.log(camp);

camp = "bootcmap "+"nodejs";
console.log(camp);

//tab space/ruang baru
camp = "bootcamp "+"nodejs"+"\tfullstack"
console.log(camp);

//newlinespace/ruang baris baru
camp = "bootcamp "+"nodejs"+"\nfullstack\nwith codeid\nviva"
console.log(camp);

//literal string
let nama = "codeid"
camp = 'bootcamp with ${nama}'
console.log(camp);

//replase/mengganti
camp = "bootcamp codeid fullsstak"
let boot = camp.replace("codeid","codeid academy")
camp.replace("codeid","hello")
console.log(boot);

//split -> ubah string menjadi array charakter
let campSplit = "aku-suka-ecma"
campSplit = campSplit.split("-",2)
console.log(campSplit);

//join
let campJoin = campSplit.join("**")
console.log(campJoin);

//trim -> remove whitespace both side
let campTrim = "    aku suka black pink    "  
console.log(campTrim);

//regualar expression
let story = 'saya ikutan bootcmap java bersama codeid, di java kita belajar asyn oop java adalah dynamik language'
let searchReplace = /java/g;
console.log(story.replace(searchReplace,"javascript"));