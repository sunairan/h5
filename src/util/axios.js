import axios from 'axios'

let AxiosUtil = {}

function request (param) {
  return new Promise((resolve, reject) => {
    axios(param).then((res) => {
      if (res.data.status === 200) {
        resolve(res.data.response)
      } else {
        const {data} = res
        // 接口返回错误
        const json = {
          status: data.status,
          message: data.message,
          url: param.url
        }
        // 默认不显示错误
        if (param.isShowError) {
          // Tips.info({
          //   children: data.message
          // })
        }
        reject(json)
      }
    }).catch((error) => {
    })
  })
}

AxiosUtil.get = function (url, cache, isShowError = false) {
  const param = {
    method: 'get',
    url: url,
    isShowError: isShowError
  }
  return request(param)
}

AxiosUtil.post = function (url, data, isShowError = false) {
  const param = {
    headers: {'Content-Type': 'application/json'},
    method: 'post',
    url: url,
    data: data,
    isShowError: isShowError
  }
  return request(param)
}

export default AxiosUtil
