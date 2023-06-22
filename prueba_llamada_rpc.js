/* eslint-disable quotes */
const axios = require('axios')
const CryptoJS = require("crypto-js")

function b64EncodeUnicode(str) {
  return Buffer.from(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
    function toSolidBytes(match, p1) {
      return String.fromCharCode('0x' + p1)
    }), 'utf8').toString('base64')
}



function base64url(input) {
  var base64String = b64EncodeUnicode(input)
  base64String = base64String.replace(/=+$/, '')
  base64String = base64String.replace(/\+/g, '-')
  base64String = base64String.replace(/\//g, '_')

  return base64String
}

const apiKey = 'clave publica'  /// OJO SUSTITUIR
const apiSecret = 'clave privada' /// OJO SUSTITUIR




/*
axios.interceptors.request.use( async function (config) {

  let hash = CryptoJS.HmacSHA256(base64url(config.request.data), apiSecret)
  config.headers.Authorization = 'Basic ' + b64EncodeUnicode(apiKey + ':' + hash)


}, function (error) {

  return Promise.reject(error)
}) */

// Make a request for a user with a given ID



let data = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "activity.find",
  "params": {
    "query": {
      "supplierId": "sup_ee9f3fbe-72b7-4677-8a91-a76c5325b635",
      "activityIds": [],
      "cursor": null,
      "categoryIds": [
        "2"
      ]
    }
  },
  "id": 1
})

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.experiencebank.io/v1',
  headers: { 
    'Authorization': '{{authToken}}', 
    'Content-Type': 'application/json'
  },
  data : data,
  transformRequest : [
    function (data, headers) {
      // Do whatever you want to transform the data
      let hash = CryptoJS.HmacSHA256(base64url(data), apiSecret)
      headers.Authorization = 'Basic ' + b64EncodeUnicode(apiKey + ':' + hash)
  
      return data
    }
  ]
}







axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data))
  })
  .catch((error) => {
    console.log(error)
  })
