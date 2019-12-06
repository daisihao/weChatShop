import {
    config
} from "../config";

class Http_P {
    request(params) {
        if (!params.methods) {
            params.methods = 'GET'
        }
        return new Promise((resolve, reject) => {
            wx.request({
                url: config.base_url + params.url,
                methods: config.methods,
                data: params.data,
                header: {
                    'content-type': 'application/json',
                    'appkey': config.appkey
                },
                success: (res) => {
                    let resCode = res.code;
                    if (resCode.startWith('2')) {
                        resolve(res);
                    } else {
                        reject(res);
                    }
                },
                fail: (error) => {
                    reject(error);
                }
            })
        });
    }
}