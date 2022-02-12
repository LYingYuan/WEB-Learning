// ● 用箭头表示其前后的两次输出之间有 1 秒的时间间隔，而逗号表示其前后的两次输出之间的时间间隔可以忽略，代码实际运行的结果该如何描述？
// 5 -> 5,5,5,5,5

// ● 改造上述代码，实现输出变成：5 -> 0,1,2,3,4（即第 1 个 5 直接输出，1 秒之后，输出 0，1，2，3，4）
for (var i = 0; i < 5; i++) {
    let j = i;
    setTimeout(function () {
        console.log(new Date(), j);
    }, 1000);
}
console.log(new Date(), i);

// ● 改造代码，实现代码执行时，立即输出 0，之后每隔 1 秒依次输出 1,2,3,4,5。且要求原有的代码块中的循环和两处 console.log 不变。
for (var i = 0; i < 5; i++) {
    let j = i;
    setTimeout(function () {
        console.log(new Date(), j);
    }, 1000 * j);
}

setTimeout(function () {
    console.log(new Date(), i * 1000);
});
