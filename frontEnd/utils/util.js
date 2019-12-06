/**
 * 将普通的微信方法封装成Promise
 * 使用用例：
 * promisic(wx.request)({
 *    url:'',
 *    data:'',
 *    methos:''
 * })
 * 第一步:调用promisic方法传入wx.request对象,返回一个promise函数
 * 第二步:执行这个返回的函数,并将请求参数对象传入方法
 * 第三步:调用Object.assign方法,替换微信原生方法中的success函数和fail函数
 * 第四步:调用传入的函数
 * @param {*} func 
 */
const promisic = function (func) {
  return function (params = {}) {
    return new Promise((resolve, reject) => {
      const args = Object.assign(params, {
        success: (res) => {
          resolve(res)
        },
        fail: (error) => {
          reject(error)
        }
      });
      func(args);
    });
  }
}

export {
  promisic
}