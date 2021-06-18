/*
 * @Author: B2C
 * @since: 2021-06-18 13:55:49
 * @LastAuthor: zhixiliu
 * @lastTime: 2021-06-18 15:21:23
 * @message: file content
 * @The path of the file relative to the project: \hub\utilityMethods\utils.js
 */
// 200多个JavaScript工具函数
// 1.匹配正整数

// 匹配正整数
let isPositiveNum = val => {
    return /^[1-9]d*$/.test(val);
};
console.log(isPositiveNum(9)) //true
console.log(isPositiveNum(2.2)) //false
// 2.匹配负整数

// 匹配负整数
 let isNegativeNum = val => {
     return /^-[1-9]d*$/.test(val);
 };
 console.log(isNegativeNum(-9)) //true
 console.log(isNegativeNum(2.2)) //false
// 3.匹配整数

// 匹配整数
let isInteger = val => {
    return /^(-|\+)?\d+$/.test(val);
};
console.log(isInteger(-9)) //true
console.log(isInteger(2.2)) //false
// 4.匹配非负浮点数
// 匹配非负浮点数
let isNotNegativeFloatNum = val => {
    return /^\d+(\.\d+)?$/.test(val);
};
console.log(isNotNegativeFloatNum(-9)) //false
console.log(isNotNegativeFloatNum(2.2)) //true
// 5.匹配由 26 个英文字母组成的字符串

//匹配由 26 个英文字母组成的字符串
let isAZaz = val => {
    return /^[A-Za-z]+$/.test(val);
};
console.log(isAZaz('122a')) //false
console.log(isAZaz('abc')) //true
// 6.匹配由 26 个英文字母的大写组成的字符串

//匹配由 26 个英文字母的大写组成的字符串
let isAZ = val => {
    return /^[A-Z]+$/.test(val);
};
console.log(isAZ('Acs')) //false
console.log(isAZ('ABC')) //true
// 7.匹配由 26 个英文字母的小写组成的字符串

//匹配由 26 个英文字母的小写组成的字符串
let isaz = val => {
    return /^[a-z]+$/.test(val);
};
console.log(isaz('Acs')) //false
console.log(isaz('abc')) //true
// 8.匹配电子邮件地址

// 匹配电子邮件地址
let isEmailAddress = val => {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val);
};
console.log(isEmailAddress('Acs')) //false
console.log(isEmailAddress('133@qq.com')) //true
// 9.返回数组中的最大值
// arrayMax: 返回数组中的最大值
// 将Math.max()与扩展运算符 (...) 结合使用以获取数组中的最大值。
let arrayMax = arr => Math.max(...arr);
let arr = [1,2,3,5];
console.log(arrayMax(arr)) //5
// 10.返回数组中的最小值
// arrayMin: 返回数组中的最小值
// 将Math.min()与扩展运算符 (...) 结合使用以获取数组中的最小值。
let arrayMin = arr => Math.min(...arr);
let arr = [1, 2, 3, 5];
console.log(arrayMin(arr)) //1
// 11.将数组块划分为指定大小的较小数组
// chunk: 将数组块划分为指定大小的较小数组。
// 使用Array.from()创建新的数组, 这符合将生成的区块数。使用Array.slice()将新数组的每个元素映射到size长度的区块。如果原始数组不能均匀拆分, 则最终的块将包含剩余的元素。
let chunk = (arr, size) => Array.from({
    length: Math.ceil(arr.length / size)
}, (v, i) => arr.slice(i * size, i * size + size));
let arr = [1, 2, 3, 5];
console.log(chunk(arr,2)) //0: Array [ 1, 2 ],1: Array [ 3, 5 ],
// 12.从数组中移除 falsey 值
// compact: 从数组中移除 falsey 值。
// 使用Array.filter()筛选出 falsey 值 (false、null、0、""、undefined和NaN).
let compact = arr => arr.filter(Boolean);
let arr = [false,null,0,"",undefined,NaN,1]
console.log(compact(arr)) //[ 1 ]
// 13.计算数组中值的出现次数
// countOccurrences: 计算数组中值的出现次数
// 使用Array.reduce()在每次遇到数组中的特定值时递增计数器。
let countOccurrences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
let arr = [1,2,1,2,3,3,3,3];
console.log(countOccurrences(arr,3))//4
// 14.深拼合数组
// deepFlatten: 深拼合数组
// 使用递归。使用Array.concat()与空数组 ([]) 和跨页运算符 (...) 来拼合数组。递归拼合作为数组的每个元素。
let deepFlatten= arr => [].concat(...arr.map(v => Array.isArray(v) ? deepFlatten(v) : v));
let arr = [1, 2, [1, 2, [1, 2, [2, 3]]]];
console.log(deepFlatten(arr)) // [ 1, 2, 1, 2, 1, 2, 2, 3 ]
// 15.返回两个数组之间的差异
// difference: 返回两个数组之间的差异
// 从b创建Set, 然后使用Array.filter() on 只保留a b中不包含的值.
let difference = (a, b) => {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
};
let arr = [1,2,3];
let arr2 = [2,3,4];
console.log(difference(arr,arr2))//[1]
console.log(difference(arr2,arr))//[4]
// 16.返回数组的所有不同值
// distinctValuesOfArray: 返回数组的所有不同值
// 使用 ES6 Set和...rest运算符放弃所有重复的值。
let distinctValuesOfArray = arr => [...new Set(arr)];
let arr = [1, 2, 3, 1, 2];
console.log(distinctValuesOfArray(arr)) // [ 1, 2, 3 ]
// 17.返回数组中的每个第 n 个元素
// everyNth: 返回数组中的每个第 n 个元素
// 使用Array.filter()创建一个包含给定数组的每个第 n 个元素的新数组。
let everyNth = (arr, nth) => arr.filter((e, i) => i % nth === 0);
// 18.筛选出数组中的非唯一值
// filterNonUnique：筛选出数组中的非唯一值
// 对于只包含唯一值的数组, 请使用Array.filter()。
let filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
// 20.拼合数组
// flatten: 拼合数组
// 使用Array.reduce()获取数组中的所有元素和concat()以拼合它们
let flatten = arr => arr.reduce((a, v) => a.concat(v), []);
// 21.将数组向上拼合到指定深度
// falttenDepth: 将数组向上拼合到指定深度
// 使用递归, 递减depth, 每层深度为1。使用Array.reduce()和Array.concat()来合并元素或数组。基本情况下, 对于等于1的depth停止递归。省略第二个元素,depth仅拼合到1的深度 (单个拼合)。
// falttenDepth: (arr, depth = 1) => depth != 1 ? arr.reduce((a, v) => a.concat(Array.isArray(v) ? flattenDepth(v, depth - 1) : v), []) : arr.reduce((a, v) => a.concat(v), []),
// 22.根据给定函数对数组元素进行分组
// groupby: 根据给定函数对数组元素进行分组
// 使用Array.map()将数组的值映射到函数或属性名。使用Array.reduce()创建一个对象, 其中的键是从映射的结果生成的。
// groupBy: (arr, func) => arr.map(typeof func === 'function' ? func : val => val[func]).reduce((acc, val, i) => { acc[val] = (acc[val] || []).concat(arr[i]); return acc; }, {}),
// 23.返回列表的头
// head: 返回列表的头
// 使用arr[0]可返回传递的数组的第一个元素。
let head = arr => arr[0];
// 24.返回除最后一个数组之外的所有元素
// initial: 返回除最后一个数组之外的所有元素
// 使用 "arr.slice(0,-1)" 返回数组的最后一个元素。
let initial = arr => arr.slice(0, -1);
// 25.初始化并填充具有指定值的数组
// initializeArrayWithRange: 初始化并填充具有指定值的数组
// 使用Array(n)创建所需长度的数组,fill(v)以填充所需的值。可以省略value以使用默认值0.
let initializeArrayWithRange = (end, start = 0) => Array.from({
    length: end - start
}).map((v, i) => i + start);
// 26.初始化并填充具有指定值的数组
// initializeArrayWithValues: 初始化并填充具有指定值的数组
// 使用Array(n)创建所需长度的数组,fill(v)以填充所需的值。可以省略value以使用默认值0
let initializeArrayWithValues = (n, value = 0) => Array(n).fill(value);
// 27.返回两个数组中存在的元素的列表
// intersection: 返回两个数组中存在的元素的列表
// 从b创建Set, 然后使用Array.filter()on a只保留b中包含的值.
let intersection = (a, b) => {
    const s = new Set(b);
    return a.filter(x => s.has(x));
};
// 28.返回数组中的最后一个元素
// last: 返回数组中的最后一个元素
// 使用arr.length - 1可计算给定数组的最后一个元素的索引并返回它
let last = arr => arr[arr.length - 1];
// 29.使用函数将数组的值映射到对象, 其中键值对由原始值作为键和映射值组成
// mapObject: 使用函数将数组的值映射到对象, 其中键值对由原始值作为键和映射值组成
// 使用匿名内部函数范围来声明未定义的内存空间, 使用闭包来存储返回值。使用新的Array可将该数组与函数的映射放在其数据集上, 而逗号运算符返回第二个步骤, 而不需要从一个上下文移动到另一个环境 (由于关闭和操作顺序)。
let mapObject = (arr, fn) => (a => (a = [arr, arr.map(fn)], a[0].reduce((acc, val, ind) => (acc[val] = a[1][ind], acc), {})))
    ();
// 30.nthElement: 返回数组的第 n 个元素
// nthElement: 返回数组的第 n 个元素
// 使用Array.slice()可获取包含第 n 个元素的数组。如果索引超出界限, 则返回[]。省略第二个参数n, 以获取数组的第一个元素
let nthElement = (arr, n = 0) => (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];
// 31.从对象中选取对应于给定键的键值对
// pick: 从对象中选取对应于给定键的键值对
// 使用Array.reduce()将筛选/选取的密钥转换回具有相应键值对的对象 (如果在 obj 中存在该键)。
let pick = (obj, arr) => arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
// 32.对原始数组进行变异, 以筛选出指定的值
// pull: 对原始数组进行变异, 以筛选出指定的值
// 使用Array.filter()和Array.includes()来拉出不需要的值。使用Array.length = 0可将传入的数组中的长度重置为零, 并将其设置为Array.push(), 以便仅使用所提取的值填充它。
let pull = (arr, ...args) => {
    let pulled = arr.filter((v, i) => !args.includes(v));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
};
// 33.从数组中移除给定函数返回false的元素
// remove: 从数组中移除给定函数返回false的元素
//  使用Array.filter()查找返回 truthy 值的数组元素和Array.reduce()以使用Array.splice()删除元素。使用三参数 (func value, index, array调用函数).
let remove = (arr, func) => Array.isArray(arr) ? arr.filter(func).reduce((acc, val) => {
    arr.splice(arr.indexOf(val), 1);
    return acc.concat(val);
}, []) : [];
// 34.返回数组中的随机元素
// sample: 返回数组中的随机元素
// 使用Math.random()生成一个随机数, 将它与length相乘, 并使用数学将其舍入到最接近的整数Math.floor()。此方法也适用于字符串
let sample = arr => arr[Math.floor(Math.random() * arr.length)];
// 35.随机数组值的顺序
// shuffle: 随机数组值的顺序
// 使用Array.sort()可在比较器中使用Math.random()重新排序元素。
let shuffle = arr => arr.sort(() => Math.random() - 0.5);
// 36.返回两个数组中都显示的元素的数组
// similarity: 返回两个数组中都显示的元素的数组
// 使用filter()可删除不属于values的值, 使用includes()确定.
let similarity = (arr, values) => arr.filter(v => values.includes(v));
// 37.返回两个数组之间的对称差
// symmetricDifference: 返回两个数组之间的对称差
// 从每个数组创建一个Set, 然后对它们中的每一个都使用Array.filter(), 以便只保留其他值中不包含的数值。
let symmetricDifference = (a, b) => {
    const sA = new Set(a),
        sB = new Set(b);
    return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
};
// 38.返回数组中的所有元素, 除第一个
// tail: 返回数组中的所有元素, 除第一个
// 如果数组的length大于1, 则返回arr.slice(1), 否则返回整个数组。
let tail = arr => arr.length > 1 ? arr.slice(1) : arr;
// 39.返回一个数组, 其中 n 个元素从开始处移除
// take: 返回一个数组, 其中 n 个元素从开始处移除
// 使用Array.slice()创建数组的切片, 其中包含从开始处取出的n元素
let take = (arr, n = 1) => arr.slice(0, n);
// 40.返回一个数组, 其中 n 个元素从末尾移除
// takeRight: 返回一个数组, 其中 n 个元素从末尾移除
// 使用Array.slice()创建数组的切片, 其中包含从末尾取出的n元素
let takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);
// 41.返回在两个数组中的任意一个中存在的每个元素
// union: 返回在两个数组中的任意一个中存在的每个元素
// 创建一个Set, 其中包含a和b的所有值, 并将其转换为数组。
let union = (a, b) => Array.from(new Set([...a, ...b]));
// 42.筛选出数组中具有指定值之一的元素
// without: 筛选出数组中具有指定值之一的元素
// 使用Array.filter()创建不包括的数组 (使用!Array.includes()) 所有给定值。
let without = (arr, ...args) => arr.filter(v => !args.includes(v));
// 43.创建基于原始数组中的位置分组的元素数组
// zip: 创建基于原始数组中的位置分组的元素数组
// 使用Math.max.apply()获取参数中最长的数组。创建一个以该长度为返回值的数组, 并使用 map 函数创建一个分组元素的数组Array.from()如果参数数组的长度不同, 则在未找到任何值的情况下使用undefined。
let zip = (...arrays) => {
    const maxLength = Math.max(...arrays.map(x => x.length));
    return Array.from({
        length: maxLength
    }).map((_, i) => {
        return Array.from({
            length: arrays.length
        }, (_, k) => arrays[k][i]);
    })
};
// 44.从给定数组中移除一项
// 从给定数组中移除一项
let removeArrayItem = function(arr, item) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] == item) {
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
    return arr;
};
// 45.检查给定数组中是否包含某项
// 检查给定数组中是否包含某项
let contains = function(arr, item) {
    var i = arr.length;
    while (i--) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
};
// 46.验证不能包含字母
 /**
 * @param { string } value
  */
 export const isNoWord = value => /^[^A-Za-z]*$/g.test(value);
// 47.验证中文和数字
/**
@param { string } value
*/
export const isCHNAndEN = value => /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/g.test(value);
// 48.验证邮政编码(中国)
/**
@param { string } value
*/
export const isPostcode = value => /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(value);
// 49.验证微信号，6至20位，以字母开头，字母，数字，减号，下划线
/**
@param { string } value
*/
export const isWeChatNum = value => /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(value);
// 50.验证16进制颜色
/**
@param { string } value
*/
export const isColor16 = value => /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(value);
// 51.验证火车车次
/**
@param { string } value
*/
export const isTrainNum = value => /^[GCDZTSPKXLY1-9]\d{1,4}$/g.test(value);
// 52.验证手机机身码(IMEI)
/**
@param { string } value
*/
export const isIMEI = value => /^\d{15,17}$/g.test(value);
// 53.验证必须带端口号的网址(或ip)
/**
@param { string } value
*/
export const isHttpAndPort = value => /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/g.test(value);
// 54.验证网址(支持端口和"?+参数"和"#+参数)
/**
@param { string } value
*/
export const isRightWebsite = value => /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/g.test(value);
// 55.验证统一社会信用代码
/**
@param { string } value
*/
export const isCreditCode = value => /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(value);
// 56.验证迅雷链接
/**
@param { string } value
*/
export const isThunderLink = value => /^thunderx?:\/\/[a-zA-Z\d]+=$/g.test(value);
// 57.验证ed2k链接(宽松匹配)
/**
@param { string } value
*/
export const ised2k = value => /^ed2k:\/\/\|file\|.+\|\/$/g.test(value);
// 58.验证磁力链接(宽松匹配)
/**
@param { string } value
*/
export const isMagnet = value => /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/g.test(value);
// 59.验证子网掩码
/**
@param { string } value
*/
export const isSubnetMask = value => /^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/g.test(value);
// 60.验证linux"文件夹"路径
/**
@param { string } value
*/
export const isLinuxFolderPath = value => /^(\/[^/]+)+\/?$/g.test(value);
// 61.验证linux"文件"路径
/**
@param { string } value
*/
export const isLinuxFilePath = value => /^(\/[^/]+)+$/g.test(value);
// 62.验证window"文件夹"路径
/**
@param { string } value
*/
export const isWindowsFolderPath = value => /^[a-zA-Z]:\\(?:\w+\\?)*$/g.test(value);
// 63.验证window下"文件"路径
/**
@param { string } value
*/
export const isWindowsFilePath = value => /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/g.test(value);
// 64.验证股票代码(A股)
/**
@param { string } value
*/
export const isAShare = value => /^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/g.test(value);
// 65.验证版本号格式必须为X.Y.Z
/**
@param { string } value
*/
export const isVersion = value => /^\d+(?:\.\d+){2}$/g.test(value);
// 66.验证视频链接地址（视频格式可按需增删）
/**
@param { string } value
*/
export const isVideoUrl = value => /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i.test(value);
// 67.验证图片链接地址（图片格式可按需增删）
/**
@param { string } value
*/
export const isImageUrl = value => /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(value);
// 68.验证银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付）
/**
@param { string } value
*/
export const isAccountNumber = value => /^[1-9]\d{9,29}$/g.test(value);
// 69.验证中文姓名
/**
@param { string } value
*/
export const isChineseName = value => /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value);
// 70.验证英文姓名
/**
@param { string } value
*/
export const isEnglishName = value => /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(value);
// 71.验证车牌号(新能源)

/**
@param { string } value
*/
export const isLicensePlateNumberNER = value => /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/g.test(value);
// 72.验证车牌号(非新能源)

/**
@param { string } value
*/
export const isLicensePlateNumberNNER = value => /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/g.test(value);
// 73.验证车牌号(新能源+非新能源)

/**
@param { string } value
*/
export const isLicensePlateNumber = value => /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/g.test(value);
// 74.验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段
/**
@param { string } value
*/
export const isMPStrict = value => /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(value);
// 75.验证手机号中国(宽松), 只要是13,14,15,16,17,18,19开头即可
/**
@param { string } value
*/
export const isMPRelaxed = value => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(value);
// 76.验证email(邮箱)
/**
@param { string } value
*/
export const isEmail = value => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(value);
// 77.验证座机电话(国内),如: 0341-86091234

/**
@param { string } value
*/
export const isLandlineTelephone = value => /\d{3}-\d{8}|\d{4}-\d{7}/g.test(value);
// 78.验证身份证号(1代,15位数字)

/**
@param { string } value
*/
export const isIDCardOld = value => /^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$/g.test(value);
// 79.验证身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X

/**
@param { string } value
*/
export const isIDCardNew = value => /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/g.test(value);
// 80.验证身份证号, 支持1/2代(15位/18位数字)

/**
@param { string } value
*/
export const isIDCard = value => /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/g.test(value);
// 81.验证护照（包含香港、澳门）

/**
@param { string } value
*/
export const isPassport = value => /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/g.test(value);
// 82.验证帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合

/**
@param { string } value
*/
export const isWebAccount = value => /^[a-zA-Z]\w{4,15}$/g.test(value);
// 83.验证中文/汉字

/**
@param { string } value
*/
export const isChineseCharacter = value => /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/g.test(value);
// 84.验证小数

/**
@param { string } value
*/
export const isDecimal = value => /^\d+\.\d+$/g.test(value);
// 85.验证数字

/**
@param { string } value
*/
export const isNumber = value => /^\d{1,}$/g.test(value);
// 86.验证qq号格式

/**
@param { string } value
*/
export const isQQNum = value => /^[1-9][0-9]{4,10}$/g.test(value);

// 92.获取url参数（第一种）

/**

 * @param {*} name
 * @param {*} origin
   */
export function getUrlParam(name, origin = null) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = null;
    if (origin == null) {
        r = window.location.search.substr(1).match(reg);
    } else {
        r = origin.substr(1).match(reg);
    }
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}
// 93.获取url参数（第二种）

 /**
     * @param {*} name
     * @param {*} origin
       */
       export function getUrlParams(name, origin = null) {
       let url = location.href;
       let temp1 = url.split('?');
       let pram = temp1[1];
       let keyValue = pram.split('&');
       let obj = {};
       for (let i = 0; i < keyValue.length; i++) {
           let item = keyValue[i].split('=');
       let key = item[0];
        let value = item[1];
        obj[key] = value;
    }
    return obj[name];

    }
// 94.修改url中的参数

 /**
     * @param { string } paramName
     * @param { string } replaceWith
       */
       export function replaceParamVal(paramName,replaceWith) {
   var oUrl = location.href.toString();
    var re=eval('/('+ paramName+'=)([^&]*)/gi');
    location.href = oUrl.replace(re,paramName+'='+replaceWith);
    return location.href;
    }
// 95.删除url中指定的参数

 /**
     * @param { string } name
       */
       export function funcUrlDel(name){
       var loca =location;
       var baseUrl = loca.origin + loca.pathname + "?";
       var query = loca.search.substr(1);
       if (query.indexOf(name)>-1) {
           var obj = {};
           var arr = query.split("&");
           for (var i = 0; i < arr.length; i++) {
               arr[i] = arr[i].split("=");
               obj[arr[i][0]] = arr[i][1];
           }
           delete obj[name];
       var url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&");
        return url
    }
    }
// 96.获取窗口可视范围的高度

export function getClientHeight() {
    let clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    else {
        clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    return clientHeight;
}
// 97.获取窗口可视范围宽度

export function getPageViewWidth() {
    let d = document,
        a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
    return a.clientWidth;
}
// 98.获取窗口宽度

export function getPageWidth() {
    let g = document,
        a = g.body,
        f = g.documentElement,
        d = g.compatMode == "BackCompat" ? a : g.documentElement;
    return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}
// 99.获取窗口尺寸

export function getViewportOffset() {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else {
        // ie8及其以下
        if (document.compatMode === "BackCompat") {
            // 怪异模式
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            }
        } else {
            // 标准模式
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        }
    }
}
// 100.获取滚动条距顶部高度

export function getPageScrollTop() {
    let a = document;
    return a.documentElement.scrollTop || a.body.scrollTop;
}
// 101.获取滚动条距左边的高度

export function getPageScrollLeft() {
    let a = document;
    return a.documentElement.scrollLeft || a.body.scrollLeft;
}
// 104.返回当前滚动条位置

export const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});
// 105.滚动到指定元素区域

export const smoothScroll = element =>{
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
    });
};
// 106.平滑滚动到页面顶部

export const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};
// 107.http跳转https

export const httpsRedirect = () => {
    if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};
// 108.检查页面底部是否可见

export const bottomVisible = () =>{
    return document.documentElement.clientHeight + window.scrollY >=
        (document.documentElement.scrollHeight || document.documentElement.clientHeight);
};
// 109.打开一个窗口

 /**
     * @param { string } url
     * @param { string } windowName
     * @param { number } width
     * @param { number } height
       */
       export function openWindow(url, windowName, width, height) {
       var x = parseInt(screen.width / 2.0) - width / 2.0;
       var y = parseInt(screen.height / 2.0) - height / 2.0;
       var isMSIE = navigator.appName == "Microsoft Internet Explorer";
       if (isMSIE) {
           var p = "resizable=1,location=no,scrollbars=no,width=";
           p = p + width;
           p = p + ",height=";
           p = p + height;
           p = p + ",left=";
           p = p + x;
           p = p + ",top=";
           p = p + y;
           window.open(url, windowName, p);
       } else {
           var win = window.open(
               url,
               "ZyiisPopup",
               "top=" +
               y +
               ",left=" +
               x +
               ",scrollbars=" +
               scrollbars +
               ",dialog=yes,modal=yes,width=" +
               width +
               ",height=" +
           height +
            ",resizable=no"
        );
        eval("try { win.resizeTo(width, height); } catch(e) { }");
        win.focus();
    }
    }
// 110.自适应页面（rem）

 /**
     * @param { number } width
       */
       export function AutoResponse(width = 750) {
       const target = document.documentElement;
   target.clientWidth >= 600
        ? (target.style.fontSize = "80px")
        : (target.style.fontSize = target.clientWidth / width * 100 + "px");
    }

// 130.blob转file
 /**
     *  @param { blob } blob
     *  @param { string } fileName
        */
    export const blobToFile = (blob, fileName) => {
     blob.lastModifiedDate = new Date();
     blob.name = fileName;
     return blob;
     };
// 131.file转base64
 /**
     * @param { * } file 图片文件
       */
       export const fileToBase64 = file => {
       let reader = new FileReader();
       reader.readAsDataURL(file);
   reader.onload = function (e) {
        return e.target.result
    };
    };
// 132.递归生成树形结构

export function getTreeData(data, pid, pidName = 'parentId', idName = 'id', childrenName = 'children', key) {
    let arr = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i][pidName] == pid) {
            data[i].key = data[i][idName];
            data[i][childrenName] = getTreeData(data, data[i][idName], pidName, idName, childrenName);
            arr.push(data[i]);
        }
    }

    return arr;

}
// 133.遍历树节点

export function foreachTree(data, childrenName = 'children', callback) {
    for (let i = 0; i < data.length; i++) {
        callback(data[i]);
        if (data[i][childrenName] && data[i][childrenName].length > 0) {
            foreachTree(data[i][childrenName], childrenName, callback);
        }
    }
}
// 134.追溯父节点

export function traceParentNode(pid, data, rootPid, pidName = 'parentId', idName = 'id', childrenName = 'children') {
    let arr = [];
    foreachTree(data, childrenName, (node) => {
        if (node[idName] == pid) {
            arr.push(node);
            if (node[pidName] != rootPid) {
                arr = arr.concat(traceParentNode(node[pidName], data, rootPid, pidName, idName));
            }
        }
    });
    return arr; 
}
// 135.寻找所有子节点

export function traceChildNode(id, data, pidName = 'parentId', idName = 'id', childrenName = 'children') {
    let arr = [];
    foreachTree(data, childrenName, (node) => {
        if (node[pidName] == id) {
            arr.push(node);
            arr = arr.concat(traceChildNode(node[idName], data, pidName, idName, childrenName));
        }
    });
    return arr;
}
// 136.根据pid生成树形结构

 /**
     *  @param { object } items 后台获取的数据
 *  @param { * } id 数据中的id
  *  @param { * } link 生成树形结构的依据
     */
     export const createTree = (items, id = null, link = 'pid') =>{
     items.filter(item => item[link] === id).map(item => ({ ...item, children: createTree(items, item.id) }));
     };
// 137.查询数组中是否存在某个元素并返回元素第一次出现的下标

 /** 
     * @param {*} item 
     * @param { array } data
       */
       export function inArray(item, data) {
       for (let i = 0; i < data.length; i++) {
           if (item === data[i]) {
           return i;
        }
    }
    return -1;
    }
// 138.Windows根据详细版本号判断当前系统名称

 /**
     * @param { string } osVersion 
       */
       export function OutOsName(osVersion) {
       if(!osVersion){
           return
       }
       let str = osVersion.substr(0, 3);
       if (str === "5.0") {
           return "Win 2000"
       } else if (str === "5.1") {
           return "Win XP"
       } else if (str === "5.2") {
           return "Win XP64"
       } else if (str === "6.0") {
           return "Win Vista"
       } else if (str === "6.1") {
           return "Win 7"
       } else if (str === "6.2") {
           return "Win 8"
       } else if (str === "6.3") {
           return "Win 8.1"
       } else if (str === "10.") {
           return "Win 10"
   } else {
        return "Win"
    }
    }
// 139.判断手机是Andoird还是IOS

 /**
     *  0: ios
     *  1: android
     *  2: 其它
        */
        export function getOSType() {
        let u = navigator.userAgent, app = navigator.appVersion;
        let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
        let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (isIOS) {
            return 0;
    }
     if (isAndroid) {
         return 1;
     }
     return 2;
     }
// 140.函数防抖

 /**
     * @param { function } func

     * @param { number } wait 延迟执行毫秒数

 * @param { boolean } immediate  true 表立即执行，false 表非立即执行
       */
       export function debounce(func,wait,immediate) {
       let timeout;
       return function () {
           let context = this;
           let args = arguments;

           if (timeout) clearTimeout(timeout);
           if (immediate) {
               let callNow = !timeout;
               timeout = setTimeout(() => {
                   timeout = null;
               }, wait);
               if (callNow) func.apply(context, args)
       }
        else {
            timeout = setTimeout(() => {
                func.apply(context, args)
            }, wait);
        }

    }
    }
// 145.函数节流

 /**
     * @param { function } func 函数

     * @param { number } wait 延迟执行毫秒数

     * @param { number } type 1 表时间戳版，2 表定时器版
       */
       export function throttle(func, wait ,type) {
       let previous, timeout;
       if(type===1){
           previous = 0;
       }else if(type===2){
       timeout = null;
       }
       return function() {
           let context = this;
           let args = arguments;
           if(type===1){
               let now = Date.now();

               if (now - previous > wait) {
                   func.apply(context, args);
                   previous = now;
               }
           }else if(type===2){
           if (!timeout) {
                   timeout = setTimeout(() => {
                   timeout = null;
                    func.apply(context, args)
                }, wait)
            }
        }

    }
    }
// 146.判断数据类型

 /**
     * @param {*} target 
       */
       export function type(target) {
       let ret = typeof(target);
       let template = {
           "[object Array]": "array",
           "[object Object]":"object",
           "[object Number]":"number - object",
       "[object Boolean]":"boolean - object",
           "[object String]":'string-object'
       };

       if(target === null) {
           return 'null';
       }else if(ret == "object"){
           let str = Object.prototype.toString.call(target);
           return template[str];
   }else{
        return ret;
    }
    }
// 147.生成指定范围随机数

 /**
  * @param { number } min 
  * @param { number } max 
    */
    export const RandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// 148.数组乱序

 /**
     * @param {array} arr
       */
       export function arrScrambling(arr) {
       let array = arr;
       let index = array.length;
       while (index) {
           index -= 1;
           let randomIndex = Math.floor(Math.random() * index);
           let middleware = array[index];
           array[index] = array[randomIndex];
       array[randomIndex] = middleware
    }
    return array
    }
// 150.数组交集

 /**
  * @param { array} arr1
  * @param { array } arr2
    */
    export const similarity = (arr1, arr2) => arr1.filter(v => arr2.includes(v));
// 151.数组中某元素出现的次数

 /**

     * @param { array } arr
 * @param {*} value
    */
    export function countOccurrences(arr, value) {
    return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
    }
// 152.加法函数（精度丢失问题）

 /**
     * @param { number } arg1
     * @param { number } arg2
       */
       export function add(arg1, arg2) {
       let r1, r2, m;
   try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m
    }
// 153.减法函数（精度丢失问题）

 /**
     * @param { number } arg1
     * @param { number } arg2
       */
       export function sub(arg1, arg2) {
       let r1, r2, m, n;
       try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
   try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2));
    n = (r1 >= r2) ? r1 : r2;
    return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
    }
// 154.除法函数（精度丢失问题）

 /**
     * @param { number } num1
     * @param { number } num2
       */
       export function division(num1,num2){
       let t1,t2,r1,r2;
       try{
           t1 = num1.toString().split('.')[1].length;
       }catch(e){
           t1 = 0;
       }
       try{
           t2=num2.toString().split(".")[1].length;
       }catch(e){
           t2=0;
   }
    r1=Number(num1.toString().replace(".",""));
    r2=Number(num2.toString().replace(".",""));
    return (r1/r2)*Math.pow(10,t2-t1);
    }
// 155.乘法函数（精度丢失问题）

 /**
     * @param { number } num1
     * @param { number } num2
       */
       export function mcl(num1,num2){
   let m=0,s1=num1.toString(),s2=num2.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
    }
// 156.递归优化（尾递归）

 /**
     * @param { function } f
       */
       export function tco(f) {
   let value;
       let active = false;
       let accumulated = [];

       return function accumulator() {
           accumulated.push(arguments);
           if (!active) {
               active = true;
               while (accumulated.length) {
                   value = f.apply(this, accumulated.shift());
               }
               active = false;
           return value;
        }
    };
    }
// 157.生成随机整数

export function randomNumInteger(min, max) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * min + 1, 10);
        case 2:
            return parseInt(Math.random() * (max - min + 1) + min, 10);
        default:
            return 0
    }
}
// 158.去除空格

 /**
     * @param { string } str 待处理字符串
     * @param  { number } type 去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格 默认为1
       */
       export function trim(str, type = 1) {
       if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return;
       switch (type) {
           case 1:
               return str.replace(/\s/g, "");
           case 2:
               return str.replace(/(^\s)|(\s*$)/g, "");
           case 3:
               return str.replace(/(^\s)/g, "");
           case 4:
           return str.replace(/(\s$)/g, "");
        default:
            return str;
    }
    }
// 159.大小写转换

/**
 * @param { string } str 待转换的字符串
 * @param { number } type 1-全大写 2-全小写 3-首字母大写 其他-不转换
   */

export function turnCase(str, type) {
    switch (type) {
        case 1:
            return str.toUpperCase();
        case 2:
            return str.toLowerCase();
        case 3:
            return str[0].toUpperCase() + str.substr(1).toLowerCase();
        default:
            return str;
    }
}
// 160.随机16进制颜色 hexColor

 /**
 * 方法一
       */
       export function hexColor() {

       let str = '#';
       let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
       for (let i = 0; i < 6; i++) {
           let index = Number.parseInt((Math.random() * 16).toString());
       str += arr[index]
    }
    return str;
    }
// 161.随机16进制颜色 randomHexColorCode

 /**
     * 方法二
       */
   export const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
    };
// 162.转义html(防XSS攻击)

export const escapeHTML = str =>{
    str.replace(
        /[&<>'"]/g,
        tag =>
            ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
    );
};
// 163.检测移动/PC设备

export const detectDeviceType = () => { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'; };
// 164.隐藏所有指定标签

 /**
  * 例: hide(document.querySelectorAll('img'))
    */
    export const hideTag = (...el) => [...el].forEach(e => (e.style.display = 'none'));
// 165.返回指定元素的生效样式

 /**
  * @param { element} el  元素节点
  * @param { string } ruleName  指定元素的名称
    */
    export const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];
// 166.检查是否包含子元素

 /**
  * @param { element } parent
  * @param { element } child
  * 例：elementContains(document.querySelector('head'), document.querySelector('title')); // true
    */
    export const elementContains = (parent, child) => parent !== child && parent.contains(child);
// 167.数字超过规定大小加上加号“+”，如数字超过99显示99+

 /**
     * @param { number } val 输入的数字
     * @param { number } maxNum 数字规定界限
       */
       export const outOfNum = (val, maxNum) =>{
       val = val ? val-0 :0;
       if (val > maxNum ) {
       return `${maxNum}+`
    }else{
        return val;
    }
    };
// 168.如何隐藏所有指定的元素

 const hide = (el) => Array.from(el).forEach(e => (e.style.display = 'none'));

 // 事例:隐藏页面上所有`<img>`元素?
 hide(document.querySelectorAll('img'))
// 169.如何检查元素是否具有指定的类？

// 页面DOM里的每个节点上都有一个classList对象，程序员可以使用里面的方法新增、删除、修改节点上的CSS类。使用classList，程序员还可以用它来判断某个节点是否被赋予了某个CSS类。

 const hasClass = (el, className) => el.classList.contains(className)

 // 事例
 hasClass(document.querySelector('p.special'), 'special') // true
// 170.如何切换一个元素的类?

 const toggleClass = (el, className) => el.classList.toggle(className)

 // 事例 移除 p 具有类`special`的 special 类
 toggleClass(document.querySelector('p.special'), 'special')
// 171.如何获取当前页面的滚动位置？

 const getScrollPosition = (el = window) => ({
   x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
   y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
 });

 // 事例
 getScrollPosition(); // {x: 0, y: 200}
// 172.如何平滑滚动到页面顶部
 const scrollToTop = () => {
   const c = document.documentElement.scrollTop || document.body.scrollTop;
   if (c > 0) {
     window.requestAnimationFrame(scrollToTop);
     window.scrollTo(0, c - c / 8);
   }
 }

 // 事例
 scrollToTop()
// window.requestAnimationFrame() 
// 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。
//  requestAnimationFrame：优势：由系统决定回调函数的执行时机。60Hz的刷新频率，那么每次刷新的间隔中会执行一次回调函数，不会引起丢帧，不会卡顿。

// window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。
//  requestAnimationFrame：优势：由系统决定回调函数的执行时机。60Hz的刷新频率，那么每次刷新的间隔中会执行一次回调函数，不会引起丢帧，不会卡顿。
// 173.如何检查父元素是否包含子元素？

 const elementContains = (parent, child) => parent !== child && parent.contains(child);

 // 事例
 elementContains(document.querySelector('head'), document.querySelector('title')); 
 // true
 elementContains(document.querySelector('body'), document.querySelector('body')); 
 // false
// 174.如何检查指定的元素在视口中是否可见？

 const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
   const { top, left, bottom, right } = el.getBoundingClientRect();
   const { innerHeight, innerWidth } = window;
   return partiallyVisible
     ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
         ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
     : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
 };

 // 事例
 elementIsVisibleInViewport(el); // 需要左右可见
 elementIsVisibleInViewport(el, true); // 需要全屏(上下左右)可以见
// 175.如何获取元素中的所有图像？

 const getImages = (el, includeDuplicates = false) => {
   const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'));
   return includeDuplicates ? images : [...new Set(images)];
 };

 // 事例：includeDuplicates 为 true 表示需要排除重复元素
 getImages(document, true); // ['image1.jpg', 'image2.png', 'image1.png', '...']
 getImages(document, false); // ['image1.jpg', 'image2.png', '...']
// 176.如何确定设备是移动设备还是台式机/笔记本电脑？

 const detectDeviceType = () =>
   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
     ? 'Mobile'
     : 'Desktop';

 // 事例
 detectDeviceType(); // "Mobile" or "Desktop"
// 177.How to get the current URL?

 const currentURL = () => window.location.href

 // 事例
 currentURL() // 'https://google.com'
// 178.如何创建一个包含当前URL参数的对象？

 const getURLParameters = url =>
   (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
     (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
     {}
   );

 // 事例
 getURLParameters('http://url.com/page?n=Adam&s=Smith'); // {n: 'Adam', s: 'Smith'}
 getURLParameters('google.com'); // {}
// 179.如何将一组表单元素转化为对象？

 const formToObject = form =>
   Array.from(new FormData(form)).reduce(
     (acc, [key, value]) => ({
       ...acc,

[key]: value

     }),
     {}
   );

 // 事例
 formToObject(document.querySelector('#form')); 
 // { email: 'test@email.com', name: 'Test Name' }
// 180.如何从对象检索给定选择器指示的一组属性？

 const get = (from, ...selectors) =>
   [...selectors].map(s =>
     s
       .replace(/\[([^\[\]]*)\]/g, '.$1.')
       .split('.')
       .filter(t => t !== '')
       .reduce((prev, cur) => prev && prev[cur], from)
   );
 const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };

 // Example
 get(obj, 'selector.to.val', 'target[0]', 'target[2].a'); 
 // ['val to select', 1, 'test']
// 181.如何在等待指定时间后调用提供的函数？
 const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);
 delay(
   function(text) {
     console.log(text);
   },
   1000,
   'later'
 ); 
 // 1秒后打印 'later'
// 182.如何在给定元素上触发特定事件且能选择地传递自定义数据？
 const triggerEvent = (el, eventType, detail) =>
   el.dispatchEvent(new CustomEvent(eventType, { detail }));

 // 事例
 triggerEvent(document.getElementById('myId'), 'click');
 triggerEvent(document.getElementById('myId'), 'click', { username: 'bob' });
// 自定义事件的函数有 Event、CustomEvent 和 dispatchEvent
 // 向 window派发一个resize内置事件
 window.dispatchEvent(new Event('resize'))


 // 直接自定义事件，使用 Event 构造函数：
 var event = new Event('build');
 var elem = document.querySelector('#id')
 // 监听事件
 elem.addEventListener('build', function (e) {
  //XXX
 }, false);
 // 触发事件.
 elem.dispatchEvent(event);
// CustomEvent 可以创建一个更高度自定义事件，还可以附带一些数据，具体用法如下：
//  var myEvent = new CustomEvent(eventname, options);
//  其中 options 可以是：
//  {
//    detail: {
//      ...
//    },
//    bubbles: true,    //是否冒泡
//    cancelable: false //是否取消默认事件
//  }
// 其中 detail 可以存放一些初始化的信息，可以在触发的时候调用。其他属性就是定义该事件是否具有冒泡等等功能。
//  内置的事件会由浏览器根据某些操作进行触发，自定义的事件就需要人工触发。
//  dispatchEvent 函数就是用来触发某个事件：
//  element.dispatchEvent(customEvent);

//  上面代码表示，在 element 上面触发 customEvent 这个事件。
 // add an appropriate event listener
 obj.addEventListener("cat", function(e) { process(e.detail) });

 // create and dispatch the event
 var event = new CustomEvent("cat", {"detail":{"hazcheeseburger":true}});
 obj.dispatchEvent(event);
 // 使用自定义事件需要注意兼容性问题，而使用 jQuery 就简单多了：

 // 绑定自定义事件
 $(element).on('myCustomEvent', function(){});

 // 触发事件
 $(element).trigger('myCustomEvent');
 // 此外，你还可以在触发自定义事件时传递更多参数信息：

 $( "p" ).on( "myCustomEvent", function( event, myName ) {
   $( this ).text( myName + ", hi there!" );
 });
 $( "button" ).click(function () {
   $( "p" ).trigger( "myCustomEvent", [ "John" ] );
 });
// 183.如何从元素中移除事件监听器?

 const off = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);

 const fn = () => console.log('!');
 document.body.addEventListener('click', fn);
 off(document.body, 'click', fn); 
// 184.如何获得给定毫秒数的可读格式？

 const formatDuration = ms => {
   if (ms < 0) ms = -ms;
   const time = {
     day: Math.floor(ms / 86400000),
     hour: Math.floor(ms / 3600000) % 24,
     minute: Math.floor(ms / 60000) % 60,
     second: Math.floor(ms / 1000) % 60,
     millisecond: Math.floor(ms) % 1000
   };
   return Object.entries(time)
     .filter(val => val[1] !== 0)
     .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
     .join(', ');
 };

 // 事例
 formatDuration(1001); // '1 second, 1 millisecond'
 formatDuration(34325055574); 
 // '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'
// 185.如何获得两个日期之间的差异（以天为单位）？

 const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
   (dateFinal - dateInitial) / (1000 * 3600 * 24);

 // 事例
 getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9
// 186.如何向传递的URL发出GET请求？

 const httpGet = (url, callback, err = console.error) => {
   const request = new XMLHttpRequest();
   request.open('GET', url, true);
   request.onload = () => callback(request.responseText);
   request.onerror = () => err(request);
   request.send();
 };

 httpGet(
   'https://jsonplaceholder.typicode.com/posts/1',
   console.log
 ); 

 // {"userId": 1, "id": 1, "title": "sample title", "body": "my text"}
// 187.如何对传递的URL发出POST请求？

 const httpPost = (url, data, callback, err = console.error) => {
   const request = new XMLHttpRequest();
   request.open('POST', url, true);
   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
   request.onload = () => callback(request.responseText);
   request.onerror = () => err(request);
   request.send(data);
 };

 const newPost = {
   userId: 1,
   id: 1337,
   title: 'Foo',
   body: 'bar bar bar'
 };
 const data = JSON.stringify(newPost);
 httpPost(
   'https://jsonplaceholder.typicode.com/posts',
   data,
   console.log
 ); 

 // {"userId": 1, "id": 1337, "title": "Foo", "body": "bar bar bar"}
// 188.如何为指定选择器创建具有指定范围，步长和持续时间的计数器？

 const counter = (selector, start, end, step = 1, duration = 2000) => {
   let current = start,
     _step = (end - start) * step < 0 ? -step : step,
     timer = setInterval(() => {
       current += _step;
       document.querySelector(selector).innerHTML = current;
       if (current >= end) document.querySelector(selector).innerHTML = end;
       if (current >= end) clearInterval(timer);
     }, Math.abs(Math.floor(duration / (end - start))));
   return timer;
 };

 // 事例
 counter('#my-id', 1, 1000, 5, 2000); 
 // 让 `id=“my-id”`的元素创建一个2秒计时器
// 189.如何将字符串复制到剪贴板？

   const el = document.createElement('textarea');
   el.value = str;
   el.setAttribute('readonly', '');
   el.style.position = 'absolute';
   el.style.left = '-9999px';
   document.body.appendChild(el);
   const selected =
     document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
   el.select();
   document.execCommand('copy');
   document.body.removeChild(el);
   if (selected) {
     document.getSelection().removeAllRanges();
     document.getSelection().addRange(selected);
   }
 // };

 // 事例
 copyToClipboard('Lorem ipsum'); 
 // 'Lorem ipsum' copied to clipboard
// 190.如何确定页面的浏览器选项卡是否聚焦？

 const isBrowserTabFocused = () => !document.hidden;

 // 事例
 isBrowserTabFocused(); // true
// 191.如何创建目录（如果不存在）？

 const fs = require('fs');
 const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);

 // 事例
 createDirIfNotExists('test'); 

// 192.日期型函数封装

function formatTime(date) {
  if(!!date){
    if(!(date instanceof Date))
    date = new Date(date);
    var month = date.getMonth() + 1
    var day = date.getDate()
    return `${month}月${day}日`;
  }
}

function formatDay(date) {
  if(!!date){
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    return [year, month, day].map(formatNumber).join('-');
  }
}

function formatDay2(date) {
  if(!!date){
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    return [year, month, day].map(formatNumber).join('/');
  }
}

function formatWeek(date){
  if(!!date){
    var day = date.getDay();
    switch (day) {
      case 0:
        return '周日'
        break;
      case 1:
        return '周一'
        break;
      case 2:
        return '周二'
        break;
      case 3:
        return '周三'
        break;
      case 4:
        return '周四'
        break;
      case 5:
        return '周五'
        break;
      case 6:
        return '周六'
        break;
    }
  }
}

function formatHour(date){
  if(!!date){
    var hour = new Date(date).getHours();
    var minute = new Date(date).getMinutes();
    return [hour, minute].map(formatNumber).join(':');
  }
}

function timestamp(date, divisor=1000){
  if(date == undefined){
    return;
  }else if(typeof date == 'number'){
    return Math.floor(date/divisor);
  }else if(typeof date == 'string'){
    var strs = date.split(/[^0-9]/);
    return Math.floor(+new Date(strs[0] || 0,(strs[1] || 0)-1,strs[2] || 0,strs[3] || 0,strs[4] || 0,strs[5] || 0)/divisor);
  }else if(Date.prototype.isPrototypeOf(date)){
    return Math.floor(+date/divisor);
  }
}

function detimestamp(date){
  if(!!date){
    return new Date(date*1000);
  }
}

function formatNumber(n) {//给在0-9的日期加上0
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  formatDay: formatDay,
  formatDay2: formatDay2,
  formatHour: formatHour,
  formatWeek: formatWeek,
  timestamp: timestamp,
  detimestamp: detimestamp
}
// 193.时间戳转时间

/** 
 * 时间戳转化为年 月 日 时 分 秒 
 * number: 传入时间戳 
 * format：返回格式，支持自定义，但参数必须与formateArr里保持一致 
*/  
function formatTime(number,format) {  

  var formateArr  = ['Y','M','D','h','m','s'];  
  var returnArr   = [];  

  var date = new Date(number * 1000);  
  returnArr.push(date.getFullYear());  
  returnArr.push(formatNumber(date.getMonth() + 1));  
  returnArr.push(formatNumber(date.getDate()));  

  returnArr.push(formatNumber(date.getHours()));  
  returnArr.push(formatNumber(date.getMinutes()));  
  returnArr.push(formatNumber(date.getSeconds()));  

  for (var i in returnArr)  
  {  
    format = format.replace(formateArr[i], returnArr[i]);  
  }  
  return format;  
} 

//数据转化  
function formatNumber(n) {  
  n = n.toString()  
  return n[1] ? n : '0' + n  
}  

// 调用示例：

// var sjc = 1488481383;//时间戳
// console.log(time.formatTime(sjc,'Y/M/D h:m:s'));//转换为日期：2017/03/03 03:03:03
// console.log(time.formatTime(sjc, 'h:m'));//转换为日期：03:03
// 194.js中获取上下文路径

// js中获取上下文路径
    //js获取项目根路径，如： http://localhost:8083/uimcardprj
    function getRootPath(){
        //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
        var curWwwPath=window.document.location.href;
        //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
        var pathName=window.document.location.pathname;
        var pos=curWwwPath.indexOf(pathName);
        //获取主机地址，如： http://localhost:8083
        var localhostPaht=curWwwPath.substring(0,pos);
        //获取带"/"的项目名，如：/uimcardprj
        var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
        return(localhostPaht+projectName);
    }
// 195.JS大小转化B KB MB GB的转化方法

function conver(limit){  
            var size = "";  
            if( limit < 0.1 * 1024 ){ //如果小于0.1KB转化成B  
                size = limit.toFixed(2) + "B";    
            }else if(limit < 0.1 * 1024 * 1024 ){//如果小于0.1MB转化成KB  
                size = (limit / 1024).toFixed(2) + "KB";              
            }else if(limit < 0.1 * 1024 * 1024 * 1024){ //如果小于0.1GB转化成MB  
                size = (limit / (1024 * 1024)).toFixed(2) + "MB";  
            }else{ //其他转化成GB  
                size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB";  
            }  

            var sizestr = size + "";   
            var len = sizestr.indexOf("\.");  
            var dec = sizestr.substr(len + 1, 2);  
            if(dec == "00"){//当小数点后为00时 去掉小数部分  
                return sizestr.substring(0,len) + sizestr.substr(len + 3,2);  
            }  
            return sizestr;  
}  
// 196.js全屏和退出全屏

function fullScreen() {
      var el = document.documentElement;
      var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;

      //typeof rfs != "undefined" && rfs
      if (rfs) {
        rfs.call(el);
      } else if (typeof window.ActiveXObject !== "undefined") {
        //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
          wscript.SendKeys("{F11}");
        }
      }
    }

    //退出全屏
    function exitScreen() {
      var el = document;
      var cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen;

      //typeof cfs != "undefined" && cfs
      if (cfs) {
        cfs.call(el);
      } else if (typeof window.ActiveXObject !== "undefined") {
        //for IE，这里和fullScreen相同，模拟按下F11键退出全屏
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
          wscript.SendKeys("{F11}");
        }
      }
    }
// 197.格式化时间，转化为几分钟前，几秒钟前

 /**
     * 格式化时间，转化为几分钟前，几秒钟前
     * @param timestamp 时间戳，单位是毫秒
     */
    function timeFormat(timestamp) {
        var mistiming = Math.round((Date.now() - timestamp) / 1000);
        var arrr = ['年', '个月', '星期', '天', '小时', '分钟', '秒'];
        var arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];
        for (var i = 0; i < arrn.length; i++) {
            var inm = Math.floor(mistiming / arrn[i]);
            if (inm != 0) {
                return inm + arrr[i] + '前';
            }
        }
    }
// 198 获取n天之前的日期 getDaysBeforeDate(10) 10天前

/**
     * 获取n天之前的日期 getDaysBeforeDate(10) 10天前
     * @param day 天数
     */
    function getDaysBeforeDate(day) {
        var date = new Date(),
            timestamp, newDate;
        timestamp = date.getTime();
        // 获取三天前的日期
        newDate = new Date(timestamp - day * 24 * 3600 * 1000);
        var year = newDate.getFullYear();
        // 月+1是因为js中月份是按0开始的
        var month = newDate.getMonth() + 1;
        var day = newDate.getDate();
        if (day < 10) { // 如果日小于10，前面拼接0
            day = '0' + day;
        }
        if (month < 10) { // 如果月小于10，前面拼接0
            month = '0' + month;
        }
        return [year, month, day].join('/');
    }
// 199.获取跳转的classId,通过hash方式获取

 /**
     * 获取跳转的classId,通过hash方式获取
     * @return 返回值
     */

    $scope.getQueryString = function() {
        var url= {},
            a = '';
        (a = window.location.search.substr(1)) || (a = window.location.hash.split('?')[1])
        a.split(/&/g).forEach(function(item) {
            url[(item = item.split('='))[0]] = item[1];
        })
        return url
    }
// 200.过滤器指定字段

function filterArrBySex(data, name) {
        if (!name) {
            console.log(name)
            return data;
        } else {
            return data.filter(function(ele, index, self) {
                if (ele.name.includes(name)) {
                    return ele
                }
            })
        }
    }
// 201.根据身份证获取出生年月

 /**
     * 根据身份证获取出生年月
     * @param idCard
     */
    function getBirthdayFromIdCard(idCard) {
        var birthday = "";
        if (idCard != null && idCard != "") {
            if (idCard.length == 15) {
                birthday = "19" + idCard.substr(6, 6);
            } else if (idCard.length == 18) {
                birthday = idCard.substr(6, 8);
            }

            birthday = birthday.replace(/(.{4})(.{2})/, "$1-$2-");
        }

        return birthday;
    }
// 202.根据身份证获取年龄

/**
     * 根据身份证获取年龄
     * @param UUserCard
     */
    function IdCard(UUserCard) {
        //获取年龄
        var myDate = new Date();
        var month = myDate.getMonth() + 1;
        var day = myDate.getDate();
        var age = myDate.getFullYear() - UUserCard.substring(6, 10) - 1;
        if (UUserCard.substring(10, 12) < month || UUserCard.substring(10, 12) == month && UUserCard.substring(12, 14) <= day) {
            age++;
        }
        return age
    }
//vue购物车金额结算
window.onload = function() {
    var vm = new Vue({
        el: '#app',
        data: {
            items: [{
                    id: 1,
                    name: "苹果",
                    price: 10,
                    count: 1,
                    url: "http://www.jq22.com/img/cs/500x500-1.png"
                },
                {
                    id: 2,
                    name: "蝴蝶",
                    price: 8,
                    count: 5,
                    url: "http://www.jq22.com/img/cs/500x500-2.png"
                },
                {
                    id: 3,
                    name: "小狗",
                    price: 100,
                    count: 1,
                    url: "http://www.jq22.com/img/cs/500x500-3.png"
                },
                {
                    id: 4,
                    name: "鲜花",
                    price: 10,
                    count: 1,
                    url: "http://www.jq22.com/img/cs/500x500-4.png"
                }
            ],
            search: ""
        },
        methods: {

        },
        filters: { //过滤器
            numFilter: function(data, n) { //data==item.price 当前过滤的数据 n==2
                return "￥" + data.toFixed(n)
            }
        },
        computed: { //计算属性
            totalCount: function() {
                var n = 0;
                this.items.forEach((v, i) => {
                    n += v.count
                });
                return n;
            },
            totalPrice: function() {
                var money = 0;
                this.items.forEach((v, i) => {
                    money += v.count * v.price
                });
                return money;
            },
            searchFor: function() {
                if (!this.search) {
                    return this.items
                }
                return this.items.filter((v, i) => {
                    if (v.name.indexOf(this.search) !== -1) { //匹配成功
                        return v
                    }
                })
            }

        }
    })
}

//设置iframe高度
function setIframeHeight(sonH) { //debugger;            
    var height = 0;
    //比较父子页面高度，以高度更大的为准
    var parentH = $(window).height(); //iframe最小高度应为浏览器视口高度，否则门户管理页面弹窗大小会受限制
    height = parentH > sonH ? parentH : sonH;
    $('#mainIframe').height(height);

    //子页面有传值过来，覆盖iframe的最小高度-2000px
    $("#mainIframe").css("min-height", 'auto');
    $(".body-bg").css("height", height + 200);
    try {
        var childBody = $("#mainIframe")[0].contentWindow.document.getElementsByTagName("body")[0];
        //childBody.style.minHeight = height + "px";
    } catch (error) {
        if (error.message.indexOf("Blocked from frame") > -1) console.warn("当前页面存在跨域！");
    }
}


(function($) {
    $("#username").keyup(function(event) {
        if (event.keyCode == 13) $("#password").focus().select();
    });
    $("#password").keyup(function(event) {
        if (event.keyCode == 13) $("#login-button").click();
    });
})(jQuery);


//回到顶部
function goTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

window.onscroll = function() {
    var t = document.documentElement.scrollTop;
    if (t > 50) {
        $(".toTop").fadeIn();
    } else {
        $(".toTop").fadeOut();
    }
}


function urlAnalysis() {
    var url = window.location.href;
    var paraString = url.substring(url.indexOf("?") + 1, url.length);
    var indexFirst = paraString.indexOf("&");
    var paraStringTitle = paraString.slice(0, indexFirst);
    paraStringElse = paraString.slice(indexFirst + 1, paraString.length);
    var paraStringUrl = paraStringElse;

    //区分是否传参：functionId
    if (paraString.indexOf("functionId") > -1) {
        var indexSecond = paraStringElse.indexOf("&");
        var paraStringFId = paraStringElse.slice(0, indexSecond);

        var functionId = paraStringFId.split("=")[1];
        var $body = angular.element(document.body);
        var $rootScope = $body.scope().$root;
        $rootScope.navFunctionId = functionId;

        paraStringUrl = paraStringElse.slice(indexSecond + 1, paraStringElse.length);
    }

    var title = paraStringTitle.split("=")[1] === "undefined" ? "" : decodeURI(paraStringTitle.split("=")[1]);
    var indexUrl = paraStringUrl.indexOf("=");
    var iframeUrl = paraStringUrl.slice(indexUrl + 1, paraStringUrl.length);

    document.title = title;
    $("#mainIframe").attr("src", iframeUrl);
}



// 监听enter按下事件，页面跳转
$scope.enterEvent = function(e) {
    var keycode = window.event ? e.keyCode : e.which;
    if (keycode == 13) {
        console.log($scope.searchVal)
        console.log('监听成功')
        var baseUrl = '#/pages/knowlege/knowlegeSeach.html'
        window.open(baseUrl)
    }
};


function showDate() {
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    var date = myDate.getDate();
    date = date < 10 ? '0' + date : date;
    var weekDay = myDate.getDay();

    switch (weekDay) {
        case 0:
            weekDay = "天";
            break;
        case 1:
            weekDay = "一";
            break;
        case 2:
            weekDay = "二";
            break;
        case 3:
            weekDay = "三";
            break;
        case 4:
            weekDay = "四";
            break;
        case 5:
            weekDay = "五";
            break;
        case 6:
            weekDay = "六";
            break;
            "name"
    }

    $scope.year = year;
    $scope.month = month;
    $scope.date = date;
    $scope.weekDay = weekDay;
}


//获取跳转的classId,通过hash方式获取
$scope.getQueryString = function() {
    var obg = {},
        a = '';
    (a = window.location.search.substr(1)) || (a = window.location.hash.split('?')[1])
    a.split(/&/g).forEach(function(item) {
        obg[(item = item.split('='))[0]] = item[1];
    })
    return obg
}
var classId = $scope.getQueryString();
// 203.原生js滑块验证

//event.clientX:鼠标点下的点到左侧x轴的距离
window.onload = function() {
    //事件处理  onmousedown  onmousemove  onmouseup
    var box = document.querySelector(".box")
    var btn = document.querySelector(".btn")
    var bg = document.querySelector(".bg")
    var text1 = document.querySelector(".text")
    //封装的选择器 声明式函数可以提升
    //            function fun(){
    //                
    //            }
    var flag = false; //标记
    btn.onmousedown = function(event) {
        var downx = event.clientX; //按下后获取的与x轴的距离
        btn.onmousemove = function(e) {
            var movex = e.clientX - downx; //滑块滑动的距离
            //移动的范围
            if (movex > 0) {
                this.style.left = movex + "px";
                bg.style.width = movex + "px";
                if (movex >= box.offsetWidth - 40) {
                    //验证成功
                    flag = true
                    text1.innerHTML = "验证成功"
                    text1.style.color = "#fff"
                    //清除事件
                    btn.onmousedown = null;
                    btn.onmousemove = null;
                }
            }
        }
    }
    //松开事件
    btn.onmouseup = function() {
        //清除事件
        btn.onmousemove = null;
        if (flag) return;
        this.style.left = 0;
        bg.style.width = 0 + "px";
    }
}
// 204.纯 js无限加载瀑布（原创）

//随机[m,n]之间的整数 封装
function randomNumber(m, n) {
    return Math.floor(Math.random() * (n - m + 1) + m);
}
//随机颜色 封装
function randomColor() {
    return "rgb(" + randomNumber(0, 255) + "," + randomNumber(0, 255) + "," + randomNumber(0, 255) + ")";
}

//获取当前的scrollTop 
var scrollTopDistance;
//获取所有的ul 
var uls = document.querySelectorAll("ul");
var i = 0;
var k = i;

function waterFall() {
    for (i = k; i < k + 4; i++) {
        //创建li 
        var li = document.createElement("li");
        //随机颜色 
        li.style.backgroundColor = randomColor();
        //随机高度 
        li.style.height = randomNumber(120, 400) + "px";
        //手动转换为字符串 
        li.innerHTML = i + 1 + "";
        //插入到对应的ul中 
        //判断哪个ul的高度低，该次创建的li就插入到此ul中 
        var index = 0; //记录下标 
        for (var j = 0; j < uls.length; j++) {
            if (uls[j].offsetHeight < uls[index].offsetHeight) {
                index = j;
            }
        }
        //将元素节点插入文档中 
        uls[index].appendChild(li);
    }
    k = i;
    return uls[index].offsetHeight;
}
waterFall();
//鼠标滚轮事件,由于右侧没有滚轮，所以使用onmousewheel事件
window.onmousewheel = function() {
    //获取窗口的高度，要兼容浏览器
    var windowH = document.documentElement.clientHeight;
    //滚轮于top的距离，要兼容浏览器
    var scrollH = document.documentElement.scrollTop ||
        document.body.scrollTop;
    //获取窗口的可见高度
    var documentH = document.documentElement.scrollHeight ||
        document.body.scrollHeight;
    //窗口的高度 + 滚轮与顶部的距离 > 窗口的可见高度-200
    if (windowH + scrollH > documentH - 200) {
        //执行此函数 
        waterFall()
    }
}
// 205.jQuery两个元素比较高度

// $(*function* () {
//   *var* w_max = 0;
//   *//求最大高度*
//   $("#MenuNavigation li").each(*function* () {
//     *var* w = $(*this*).innerWidth();
//     w_max = w > w_max ? w : w_max;
//   })
//   $("#MenuNavigation li").width(w_max)
//   *//将最大高度赋值给所有元素，*
// })
// 206.js定时清除缓存，存储缓存，获取缓存
// 封装本地存储的方法
export const storage = {
  set: function(variable, value, ttl_ms) {
    var data = { value: value, expires_at: new Date(ttl_ms).getTime() };
    localStorage.setItem(variable.toString(), JSON.stringify(data));
  },
  get: function(variable) {
    var data = JSON.parse(localStorage.getItem(variable.toString()));
    if (data !== null) {
      debugger
      if (data.expires_at !== null && data.expires_at < new Date().getTime()) {
        localStorage.removeItem(variable.toString());
      } else {
        return data.value;
      }
    }
    return null;
  },
  remove(key) {
    localStorage.removeItem(key);
  }
}
// 207.数组降维

//数组降维
function reduceDimension (arr){
      var reduced = [];
      for (var i = 0; i < arr.length; i++) {
        reduced = reduced.concat(arr[i]);
      }
      return reduced;
};
// 208.设置cookie,获取cookie,删除cookie

 var cookieUtil = {
  getCookie: function (name) {
    var arrCookie = document.cookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
      var cookieItem = arrCookie[i].split('=');
      if (cookieItem[0] == name) {
        return cookieItem[1];
      }
    }
    return undefined;
  },
  setCookie: function (name, value, expires, path, domain, secure) {
    var cookieText = encodeURIComponent(name) + "=" +
      encodeURIComponent(value);
    if (expires instanceof Date) {
      cookieText += "; expires=" + expires.toGMTString();
    }
    if (path) {
      cookieText += "; path=" + path;
    }
    if (domain) {
      cookieText += "; domain=" + domain;
    }
    if (secure) {
      cookieText += "; secure";
    }
    document.cookie = cookieText;
  },
  removeCookie: function (name, path, domain, secure) {
    this.set(name, "", new Date(0), path, domain, secure);
  }
} 
// 209.判读是否为外链

/**

 * @description 判读是否为外链
 * @param path
 * @returns {boolean}
   */
   export function isExternal(path) {
     return /^(https?:|mailto:|tel:)/.test(path);
   }
// 210.校验密码是否小于6位

 /**
     * @description 校验密码是否小于6位
     * @param str
     * @returns {boolean}
       */
       export function isPassword(str) {
         return str.length >= 6;
       }
// 211.判断是否为数字

 /**

   * @description 判断是否为数字
   * @param value
 * @returns {boolean}
    */
    export function isNumber(value) {
      const reg = /^[0-9]*$/;
      return reg.test(value);
    }
// ## 212.判断是否是名称

 /**

   * @description 判断是否是名称
   * @param value
 * @returns {boolean}
    */
    export function isName(value) {
      const reg = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/;
      return reg.test(value);
    }
// 213.判断是否为IP

 /**

   * @description 判断是否为IP
   * @param ip
 * @returns {boolean}
    */
    export function isIP(ip) {
      const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
      return reg.test(ip);
    }
// 214.判断是否是传统网站

 /**

   * @description 判断是否是传统网站
   * @param url
 * @returns {boolean}
    */
    export function isUrl(url) {
      const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
      return reg.test(url);
    }
// 215.判断是否是小写字母

 /**

   * @description 判断是否是小写字母
   * @param str
 * @returns {boolean}
    */
    export function isLowerCase(str) {
      const reg = /^[a-z]+$/;
      return reg.test(str);
    }
// 216.判断是否是大写字母

 /**

   * @description 判断是否是大写字母
   * @param str
 * @returns {boolean}
    */
    export function isUpperCase(str) {
      const reg = /^[A-Z]+$/;
      return reg.test(str);
    }
// 217.判断是否是大写字母开头

 /**

   * @description 判断是否是大写字母开头
   * @param str
 * @returns {boolean}
    */
    export function isAlphabets(str) {
      const reg = /^[A-Za-z]+$/;
      return reg.test(str);
    }
// 218.判断是否是字符串

 /**

   * @description 判断是否是字符串
 * @param str
  * @returns {boolean}
    */
    export function isString(str) {
      return typeof str === "string" || str instanceof String;
    }
// 219.判断是否是数组

 /**

   * @description 判断是否是数组
     * @param arg
   * @returns {arg is any[]|boolean}
     */
   export function isArray(arg) {
      if (typeof Array.isArray === "undefined") {
    return Object.prototype.toString.call(arg) === "[object Array]";
      }
      return Array.isArray(arg);
    }
// 220.判断是否是端口号

 /**

   * @description 判断是否是端口号
   * @param str
 * @returns {boolean}
    */
    export function isPort(str) {
      const reg = /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/;
      return reg.test(str);
    }
// 221.判断是否是手机号

 /**

   * @description 判断是否是手机号
   * @param str
 * @returns {boolean}
    */
    export function isPhone(str) {
      const reg = /^1\d{10}$/;
      return reg.test(str);
    }
// 222.判断是否是身份证号(第二代)

 /**

   * @description 判断是否是身份证号(第二代)
   * @param str
 * @returns {boolean}
    */
    export function isIdCard(str) {
      const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
      return reg.test(str);
    }
// 223.判断是否是邮箱

 /**

   * @description 判断是否是邮箱
   * @param str
 * @returns {boolean}
    */
    export function isEmail(str) {
      const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      return reg.test(str);
    }
// ## 224.判断是否中文

 /**

   * @description 判断是否中文
   * @param str
 * @returns {boolean}
    */
    export function isChina(str) {
      const reg = /^[\u4E00-\u9FA5]{2,4}$/;
      return reg.test(str);
    }
// ## 225.判断是否为空

 /**

   * @description 判断是否为空
     * @param str
     * @returns {boolean}
       */
       export function isBlank(str) {
         return (
     str == null ||
   false ||
    str === "" ||
    str.trim() === "" ||
    str.toLocaleLowerCase().trim() === "null"
      );
    }
// ## 226.判断是否为固话

 /**

   * @description 判断是否为固话
   * @param str
 * @returns {boolean}
    */
    export function isTel(str) {
      const reg = /^(400|800)([0-9\\-]{7,10})|(([0-9]{4}|[0-9]{3})(-| )?)?([0-9]{7,8})((-| |转)*([0-9]{1,4}))?$/;
      return reg.test(str);
    }
// ## 227.判断是否为数字且最多两位小数

 /**

   * @description 判断是否为数字且最多两位小数
   * @param str
 * @returns {boolean}
    */
    export function isNum(str) {
      const reg = /^\d+(\.\d{1,2})?$/;
      return reg.test(str);
    }
// ## 228.判断经度 -180.0～+180.0（整数部分为0～180，必须输入1到5位小数）

 /**

   * @description 判断经度 -180.0～+180.0（整数部分为0～180，必须输入1到5位小数）
   * @param str
 * @returns {boolean}
    */
    export function isLongitude(str) {
      const reg = /^[-|+]?(0?\d{1,2}\.\d{1,5}|1[0-7]?\d{1}\.\d{1,5}|180\.0{1,5})$/;
      return reg.test(str);
    }
// ## 229.判断纬度 -90.0～+90.0（整数部分为0～90，必须输入1到5位小数）

 /**

   * @description 判断纬度 -90.0～+90.0（整数部分为0～90，必须输入1到5位小数）
   * @param str
 * @returns {boolean}
    */
    export function isLatitude(str) {
      const reg = /^[-|+]?([0-8]?\d{1}\.\d{1,5}|90\.0{1,5})$/;
      return reg.test(str);
    }
// ## 230.rtsp校验只要有rtsp://

 /**

   * @description rtsp校验，只要有rtsp://
   * @param str
   * @returns {boolean}
     */
   export function isRTSP(str) {
      const reg = /^rtsp:\/\/([a-z]{0,10}:.{0,10}@)?(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
      const reg1 = /^rtsp:\/\/([a-z]{0,10}:.{0,10}@)?(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5]):[0-9]{1,5}/;
      const reg2 = /^rtsp:\/\/([a-z]{0,10}:.{0,10}@)?(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\//;
      return reg.test(str) || reg1.test(str) || reg2.test(str);
    }
// 231.判断IE浏览器版本和检测是否为非IE浏览器

function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return 7;
        } else if (fIEVersion == 8) {
            return 8;
        } else if (fIEVersion == 9) {
            return 9;
        } else if (fIEVersion == 10) {
            return 10;
        } else {
            return 6; //IE版本<=7
        }
    } else if (isEdge) {
        return 'edge'; //edge
    } else if (isIE11) {
        return 11; //IE11  
    } else {
        return -1; //不是ie浏览器
    }
}
// 232.数组去重

// 方案一：`Set + …`

function noRepeat(arr) {
  return [...new Set(arr)];
}
noRepeat([1,2,3,1,2,3])
// 方案二：`Set + Array.from`

function noRepeat(arr) {
  return Array.from(new Set(arr));
}
noRepeat([1,2,3,1,2,3])
// 方案三：双重遍历比对下标

function noRepeat(arr) {
  return arr.filter((v, idx)=>idx == arr.lastIndexOf(v))
}
noRepeat([1,2,3,1,2,3])
// 方案四：单遍历 + Object 特性

// Object 的特性是 Key 不会重复。
// 这里使用 values 是因为可以保留类型，keys 会变成字符串。

function noRepeat(arr) {
  return Object.values(arr.reduce((s,n)=>{
    s[n] = n;
    return s
  },{}))
}
noRepeat([1,2,3,1,2,3])


// 233.查找数组最大

// 方案一：`Math.max + …`

function arrayMax(arr) {
  return Math.max(...arr);
}
arrayMax([-1,-4,5,2,0])
// 方案二：`Math.max + apply`

function arrayMax(arr) {
  return Math.max.apply(Math, arr)
}
arrayMax([-1,-4,5,2,0])
// 方案三：`Math.max` + 遍历

function arrayMax(arr) {
  return arr.reduce((s,n)=>Math.max(s, n))
}
arrayMax([-1,-4,5,2,0])
// 方案四：比较、条件运算法 + 遍历

function arrayMax(arr) {
  return arr.reduce((s,n)=>s>n?s:n)
}
arrayMax([-1,-4,5,2,0])
// 方案五：排序

function arrayMax(arr) {
  return arr.sort((n,m)=>m-n)[0]
}
arrayMax([-1,-4,5,2,0])
// 234.查找数组最小

// Math.max 换成 Math.min

// s&gt;n?s:n 换成 s </li> <li>(n,m)=>m-n换成(n,m)=>n-m，或者直接取最后一个元素</li> </ol> ¨K273K ¨K274K ¨G108G ¨K275K ¨G109G ¨K276K ¨G110G ¨K277K ¨K278K ¨G111G ¨K279K ¨G112G ¨K280K ¨K281K ¨G113G ¨K282K ¨G114G ¨K283K ¨K284K 他原文有问题，以下方法的4,5没有返回 ¨G115G 需要再操作一遍 ¨G116G ¨K285K 算是方案1的变种吧，优化了includes` 的性能。


// 237.返回两个数组中相同的元素

// 方案一：filter + includes

function intersection(arr1, arr2) {
  return arr2.filter((v) => arr1.includes(v));
}
intersection([1,2,3], [3,4,5,2])
// 方案二：同理变种用 hash

function intersection(arr1, arr2) {
    var set = new Set(arr2)
  return arr1.filter((v) => set.has(v));
}
intersection([1,2,3], [3,4,5,2])
// 238.从右删除 n 个元素

// 方案一：slice

function dropRight(arr, n = 0) {
  return n < arr.length ? arr.slice(0, arr.length - n) : [];
}
dropRight([1,2,3,4,5], 2)
// 方案二: splice

function dropRight(arr, n = 0) {
  return arr.splice(0, arr.length - n)
}
dropRight([1,2,3,4,5], 2)
// 方案三: slice 另一种

function dropRight(arr, n = 0) {
  return arr.slice(0, -n)
}
dropRight([1,2,3,4,5], 2)
// 方案四: 修改 length

function dropRight(arr, n = 0) {
    arr.length = Math.max(arr.length - n, 0)
    return arr
}
dropRight([1,2,3,4,5], 2)
// 239.截取第一个符合条件的元素及其以后的元素

// 方案一：slice + 循环

function dropElements(arr, fn) {
  while (arr.length && !fn(arr[0])) arr = arr.slice(1);
  return arr;
}
dropElements([1,2,3,4,5,1,2,3], (v) => v == 2)
// 方案二：findIndex + slice

function dropElements(arr, fn) {
  return arr.slice(Math.max(arr.findIndex(fn), 0));
}
dropElements([1,2,3,4,5,1,2,3], (v) => v === 3)
// 方案三：splice + 循环

function dropElements(arr, fn) {
  while (arr.length && !fn(arr[0])) arr.splice(0,1);
  return arr;
}
dropElements([1,2,3,4,5,1,2,3], (v) => v == 2)
// 240.返回数组中下标间隔 nth 的元素

// 方案一：filter

function everyNth(arr, nth) {
  return arr.filter((v, i) => i % nth === nth - 1);
}
everyNth([1,2,3,4,5,6,7,8], 2)
// 方案二：方案一修改判断条件

function everyNth(arr, nth) {
  return arr.filter((v, i) => (i+1) % nth === 0);
}
everyNth([1,2,3,4,5,6,7,8], 2)
// 241.返回数组中第 n 个元素（支持负数）

// 方案一：slice

function nthElement(arr, n = 0) {
  return (n >= 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];
}
nthElement([1,2,3,4,5], 0)
nthElement([1,2,3,4,5], -1)
// 方案二：三目运算符

function nthElement(arr, n = 0) {
  return (n >= 0 ? arr[0] : arr[arr.length + n])
}
nthElement([1,2,3,4,5], 0)
nthElement([1,2,3,4,5], -1)
// 242.返回数组头元素

// 方案一：

function head(arr) {
  return arr[0];
}
head([1,2,3,4])
// 方案二：

function head(arr) {
  return arr.slice(0,1)[0];
}
head([1,2,3,4])
// 243.返回数组末尾元素

// 方案一：

function last(arr) {
  return arr[arr.length - 1];
}
// 方案二：

function last(arr) {
  return arr.slice(-1)[0];
}
last([1,2,3,4,5])
// 245.数组乱排

// 方案一：洗牌算法

function shuffle(arr) {
  let array = arr;
  let index = array.length;

  while (index) {
    index -= 1;
    let randomInedx = Math.floor(Math.random() * index);
    let middleware = array[index];
    array[index] = array[randomInedx];
    array[randomInedx] = middleware;
  }

  return array;
}
shuffle([1,2,3,4,5])
// 方案二：sort + random

function shuffle(arr) {
  return arr.sort((n,m)=>Math.random() - .5)
}
shuffle([1,2,3,4,5])
// 246.伪数组转换为数组

// 方案一：Array.from

Array.from({length: 2})
// 方案二：prototype.slice

Array.prototype.slice.call({length: 2,1:1})
// 方案三：prototype.splice

Array.prototype.splice.call({length: 2,1:1},0)
// 浏览器对象 BOM

// 195.判读浏览器是否支持 CSS 属性

/**
 * 告知浏览器支持的指定css属性情况
 * @param {String} key - css属性，是属性的名字，不需要加前缀
 * @returns {String} - 支持的属性情况
 */
function validateCssKey(key) {
  const jsKey = toCamelCase(key); // 有些css属性是连字符号形成
  if (jsKey in document.documentElement.style) {
    return key;
  }
  let validKey = "";
  // 属性名为前缀在js中的形式，属性值是前缀在css中的形式
  // 经尝试，Webkit 也可是首字母小写 webkit
  const prefixMap = {
    Webkit: "-webkit-",
    Moz: "-moz-",
    ms: "-ms-",
    O: "-o-",
  };
  for (const jsPrefix in prefixMap) {
    const styleKey = toCamelCase(`${jsPrefix}-${jsKey}`);
    if (styleKey in document.documentElement.style) {
      validKey = prefixMap[jsPrefix] + key;
      break;
    }
  }
  return validKey;
}

/**
 * 把有连字符号的字符串转化为驼峰命名法的字符串
 */
function toCamelCase(value) {
  return value.replace(/-(\w)/g, (matched, letter) => {
    return letter.toUpperCase();
  });
}

/**
 * 检查浏览器是否支持某个css属性值（es6版）
 * @param {String} key - 检查的属性值所属的css属性名
 * @param {String} value - 要检查的css属性值（不要带前缀）
 * @returns {String} - 返回浏览器支持的属性值
 */
function valiateCssValue(key, value) {
  const prefix = ["-o-", "-ms-", "-moz-", "-webkit-", ""];
  const prefixValue = prefix.map((item) => {
    return item + value;
  });
  const element = document.createElement("div");
  const eleStyle = element.style;
  // 应用每个前缀的情况，且最后也要应用上没有前缀的情况，看最后浏览器起效的何种情况
  // 这就是最好在prefix里的最后一个元素是''
  prefixValue.forEach((item) => {
    eleStyle[key] = item;
  });
  return eleStyle[key];
}

/**
 * 检查浏览器是否支持某个css属性值
 * @param {String} key - 检查的属性值所属的css属性名
 * @param {String} value - 要检查的css属性值（不要带前缀）
 * @returns {String} - 返回浏览器支持的属性值
 */
function valiateCssValue(key, value) {
  var prefix = ["-o-", "-ms-", "-moz-", "-webkit-", ""];
  var prefixValue = [];
  for (var i = 0; i < prefix.length; i++) {
    prefixValue.push(prefix[i] + value);
  }
  var element = document.createElement("div");
  var eleStyle = element.style;
  for (var j = 0; j < prefixValue.length; j++) {
    eleStyle[key] = prefixValue[j];
  }
  return eleStyle[key];
}

function validCss(key, value) {
  const validCss = validateCssKey(key);
  if (validCss) {
    return validCss;
  }
  return valiateCssValue(key, value);
}

// 247.返回当前网页地址

// 方案一：location

function currentURL() {
  return window.location.href;
}
currentURL()
// 方案二：a 标签

function currentURL() {
  var el = document.createElement('a')
  el.href = ''
  return el.href
}
currentURL()
// 获取滚动条位置
function getScrollPosition(el = window) {
  return {
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
  };
}
// 248.获取 url 中的参数

// 方案一：正则 + reduce

function getURLParameters(url) {
  return url
    .match(/([^?=&]+)(=([^&]*))/g)
    .reduce(
      (a, v) => (
        (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
      ),
      {}
    );
}
getURLParameters(location.href)
// 方案二：split + reduce

function getURLParameters(url) {
  return url
    .split('?') //取？分割
    .slice(1) //不要第一部分
    .join() //拼接
    .split('&')//&分割
    .map(v=>v.split('=')) //=分割
    .reduce((s,n)=>{s[n[0]] = n[1];return s},{})
}
getURLParameters(location.href)
// getURLParameters('')
// 方案三: URLSearchParams

// 249.页面跳转，是否记录在 history 中

// 方案一：

function redirect(url, asLink = true) {
  asLink ? (window.location.href = url) : window.location.replace(url);
}
// 方案二：

function redirect(url, asLink = true) {
  asLink ? window.location.assign(url) : window.location.replace(url);
}
// 250.滚动条回到顶部动画

// 方案一： c - c / 8

function scrollToTop() {
  const scrollTop =0
    document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, scrollTop - scrollTop / 8);
  } else {
    window.cancelAnimationFrame(scrollToTop);
  }
}
scrollToTop()
// 251.复制文本

// 方案一：

function copy(str) {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  el.style.top = "-9999px";
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
}
// 方案二：cliboard.js

// 252.检测设备类型

// 方案一： ua

function detectDeviceType() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";
}
detectDeviceType()
// 方案二：事件属性

function detectDeviceType() {
  return ("ontouchstart" in window || navigator.msMaxTouchPoints)
    ? "Mobile"
    : "Desktop";
}
detectDeviceType()
// 253.Cookie

// 增

function setCookie(key, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie =
    key +
    "=" +
    escape(value) +
    (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
}
// 删

function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null) {
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  }
}
// 查

function getCookie(name) {
  var arr,
    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if ((arr = document.cookie.match(reg))) {
    return arr[2];
  } else {
    return null;
  }
}
// 清空
// 有时候我们想清空，但是又无法获取到所有的cookie。
// 这个时候我们可以了利用写满，然后再清空的办法。

// 日期 Date

// 254.时间戳转换为时间

function timestampToTime(timestamp = Date.parse(new Date()), isMs = true) {
  const date = new Date(timestamp * (isMs ? 1 : 1000));
  return `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
// 如果做海外的话，还会有时区问题，一般我用moment解决。如果想看原生的

// 获取当前时间戳

// 基于上一个想到的问题

// 方案一：Date.parse(new Date())

// 方案二：Date.now()

// 方案三：+new Date()

// 文档对象 DOM

// 255固定滚动条

/**
 * 功能描述：一些业务场景，如弹框出现时，需要禁止页面滚动，这是兼容安卓和 iOS 禁止页面滚动的解决方案
 */

let scrollTop = 0;

function preventScroll() {
  // 存储当前滚动位置
  scrollTop = window.scrollY;

  // 将可滚动区域固定定位，可滚动区域高度为 0 后就不能滚动了
  document.body.style["overflow-y"] = "hidden";
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
  document.body.style.top = -scrollTop + "px";
  // document.body.style['overscroll-behavior'] = 'none'
}

function recoverScroll() {
  document.body.style["overflow-y"] = "auto";
  document.body.style.position = "static";
  // document.querySelector('body').style['overscroll-behavior'] = 'none'

  window.scrollTo(0, scrollTop);
}
// 256 判断当前位置是否为页面底部

function bottomVisible() {
  return (
    document.documentElement.clientHeight + window.scrollY >=
    (document.documentElement.scrollHeight ||
      document.documentElement.clientHeight)
  );
}
// 257判断元素是否在可视范围内

function elementIsVisibleInViewport(el, partiallyVisible = false) {
  const { top, left, bottom, right } = el.getBoundingClientRect();

  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}
// 258.获取元素 css 样式

function getStyle(el, ruleName) {
  return getComputedStyle(el, null).getPropertyValue(ruleName);
}
// 259.进入全屏

function launchFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen();
  }
}

launchFullscreen(document.documentElement);
launchFullscreen(document.getElementById("id")); //某个元素进入全屏
// 260退出全屏

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

exitFullscreen();
// 261全屏事件

document.addEventListener("fullscreenchange", function (e) {
  if (document.fullscreenElement) {
    console.log("进入全屏");
  } else {
    console.log("退出全屏");
  }
});
// 数字 Number

// 262.数字千分位分割

function commafy(num) {
  return num.toString().indexOf(".") !== -1
    ? num.toLocaleString()
    : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
}
commafy(1000)
// 263.生成随机数

function randomNum(min, max) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * min + 1, 10);
    case 2:
      return parseInt(Math.random() * (max - min + 1) + min, 10);
    default:
      return 0;
  }
}
randomNum(1,10)
// 264 时间戳转时间

/* 时间戳转时间 */
function timestampToTime(cjsj) {
    var date = new Date(cjsj); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() + 1 < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    return Y + M + D
}
// 265 过滤富文本和空格为纯文本

/* 过滤富文本和空格为纯文本 */
function filterHtml(str) {
    return str.replace(/<[^<>]+>/g, '').replace(/&nbsp;/ig, '');
}
// 266 指定显示的文字数量多余的使用省略号代替

/*指定显示的文字数量多余的使用省略号代替*/
function strEllp(str, num = str.length) {
    var subStr = str.substring(0, num);
    return subStr + (str.length > num ? '...' : '');
}
// 267 获取滚动条当前的位置

// 获取滚动条当前的位置
function getScrollTop() {
    var scrollTop = 0
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop
}
// 268 获取当前可视范围的高度

// 获取当前可视范围的高度
function getClientHeight() {
    var clientHeight = 0
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
    } else {
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
    }
    return clientHeight
}
// 269 获取文档完整的高度

// 获取文档完整的高度
function getScrollHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
}
// partiallyVisible 为是否为完全可见
// 返回值为 true/false
// 默认为当前时间转换结果
// isMs 为时间戳是否为毫秒
// 补位可以改成 padStart
// 补位还可以改成 slice
// 图片
