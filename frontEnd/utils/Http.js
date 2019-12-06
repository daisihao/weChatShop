import { config } from "../config"

class Http {
    static request(params) {
      if(!params.methods){
        params.methods = 'GET'
      }
      wx.request({
        url: config.base_url + params.url,
        method:params.method,
        data:params.data,
        header:{
          'content-type': 'application/json',
          'appkey': config.appkey
        },
        success:(res)=>{
          //...
        },
        fail:(error)=>{
          //...
        }
      })
    };
}