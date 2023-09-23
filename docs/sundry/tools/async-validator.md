---
outline: false
---

# async-validator 的简单使用

相信大家都比较熟悉 `ElementPlus` ， 也是使用它来做表单验证的。`async-validator` 是一个使用 Promise 实现的异步表单验证器，详细了解可访问 [async-validator 源码地址](https://github.com/yiminghe/async-validator)。

## 安装

```sh
$ npm install async-validator
```

## 使用

```js [validate.js]
import Schema from "async-validator"

// node环境报错TypeError: Schema is not a constructor请使用下面方式
// import asyncValidator from "async-validator"
// const Schema = asyncValidator.default

const data = {
  phoneNumber: "15000000000",
  code: "123456",
}

const rules = {
  phoneNumber: [
    { required: true, message: "手机号为必填项" },
    {
      pattern: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/,
      message: "请输入正确的手机号",
    },
  ],
  code: [
    {
      required: true,
      message: "验证码为必填项",
    },
    {
      pattern: /^\d{6}$/,
      message: "验证码为6位数字",
    },
  ],
}

validate(data, rules)
  .then(() => {})
  .catch((err) => {
    console.log(err)
  })

export function validate(data, rules) {
  return new Promise((resolve, reject) => {
    const validator = new Schema(rules)
    let msgs = []
    validator.validate(data, (errors, fields) => {
      if (errors) {
        msgs = errors.map((item) => item.message)
      }
    })
    if (msgs.length > 0) {
      console.log(msgs[0])
      reject(msgs)
    } else {
      resolve()
    }
  })
}
```
