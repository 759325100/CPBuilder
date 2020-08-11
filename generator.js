/**
 * 生成投注号码
 * bedWay 投注方式：
 * 0：单式投注，6个红球1个蓝球
 * 1：红色球号码复式，7-20个红球 1个蓝球
 * 2：蓝色球号码复试，6个红球 2-16个蓝球
 * 3：全复式，7-20个红球 2-12个蓝球
 */
// exports.generate = function (betWay, callback) {
//     betWay = betWay || 0;
//     if (betWay < 0 || betWay > 3) {
//         betWay = 0;
//     }

//     var ways = [__singleBets, __redMultipleBets, __blueMultipleBets, __fullMultipleBets];
//     var retVal = ways[betWay]();
//     if (callback) {
//         callback(retVal);
//     }

//     return retVal;
// }

function gener(betWay, callback) {
    betWay = betWay || 0;
    if (betWay < 0 || betWay > 3) {
        betWay = 0;
    }

    var ways = [__singleBets, __redMultipleBets, __blueMultipleBets, __fullMultipleBets];
    var retVal = ways[betWay]();
    if (callback) {
        callback(retVal);
    }

    alert("red balls:"+retVal[0].join(",")+", blue balls:"+retVal[1].join(","));
    return retVal;
}

var redBalls = [];
for (var i = 1; i < 34; i++) {
    redBalls.push(i);
}

var blueBalls = [];
for (var i = 1; i < 17; i++) {
    blueBalls.push(i);
}

//6个红球1个蓝球
function __singleBets() {
    var _redBalls = __getBalls(redBalls, 6);
    var _blueBalls = __getBalls(blueBalls, 1);
    return [_redBalls, _blueBalls];
}

//7-20个红球 1个蓝球
function __redMultipleBets() {
    var _redBalls = __getBalls(redBalls, 7, 20);
    var _blueBalls = __getBalls(blueBalls, 1);
    return [_redBalls, _blueBalls];
}

//6个红球 2-16个蓝球
function __blueMultipleBets() {
    var _redBalls = __getBalls(redBalls, 6);
    var _blueBalls = __getBalls(blueBalls, 2, 16);
    return [_redBalls, _blueBalls];
}

//7-20个红球 2-12个蓝球
function __fullMultipleBets() {
    var _redBalls = __getBalls(redBalls, 7, 20);
    var _blueBalls = __getBalls(blueBalls, 2, 12);

    return [_redBalls, _blueBalls];
}

/**
 * 
 * @param {*} balls 球类集合
 * @param {Number} min 生成最小数量
 * @param {Number} max 生成最大数量
 * @returns {Array} 号码集合
 */
function __getBalls(balls, min, max) {
    var count;
    if (max) {
        //随机生成min-max范围数值
        count = __randomNum(min, max);
    }
    else {
        count = min;
    }

    if (count > balls.length) {
        count = balls.length;
    }

    // todo: 从balls中取出count个值
    var retVal = [];
    var used = [];
    var i = 0;
    while (count > 0) {
        i = __randomNum(0, balls.length - 1);
        if (used[i]) {
            continue;
        }

        --count;
        used[i] = 1;
        retVal.push(balls[i]);
    }

    return retVal;
}

/**
 * 生成范围内的随机数
 * @param {Number} minNum 最小值（包含）
 * @param {Number} maxNum 最大值（包含）
 */
function __randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
} 