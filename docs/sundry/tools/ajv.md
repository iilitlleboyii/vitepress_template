---
outline: false
---

# Ajv 的简单使用

详细了解请访问[Ajv 官网](https://ajv.js.org/)。

## 安装

要安装 Ajv 版本 8，请执行以下操作：

```sh
$ npm install ajv
```

如果需要将 Ajv 与 JSON 架构 draft-04 一起使用，则需要安装 Ajv 版本 6：

```sh
$ npm install ajv@6
```

一般地，我们想要自定义错误提示，可以再安装 `ajv-errors` ，不要再安装 `ajv-i18n` ，两者不兼容。

```sh
$ npm install ajv-errors
```

## 使用

关于 JSON Schema 的详细介绍，可访问[JSON Schema 官网](http://json-schema.org/)。

::: code-group

```json [schema.json]
{
  "type": "object",
  "properties": {
    "phoneNumber": {
      "type": "string",
      "pattern": "^(?:(?:\\+|00)86)?1(?:(?:3[\\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\\d])|(?:9[1589]))\\d{8}$",
      "errorMessage": {
        "type": "手机号类型为11位数字字符串",
        "pattern": "手机号格式不正确"
      }
    },
    "code": {
      "type": "string",
      "pattern": "[0-9]\\d{6}",
      "errorMessage": {
        "type": "验证码类型为6位数字字符串",
        "pattern": "验证码格式不正确"
      }
    }
  },
  "required": ["phoneNumber", "code"],
  "additionalProperties": false,
  "errorMessage": {
    "required": {
      "phoneNumber": "手机号为必填项",
      "code": "验证码为必填项"
    }
  }
}
```

```js [validate.js]
// module
import Ajv from "ajv"
import ajvErrors from "ajv-errors"

// 注意高版本node才能这样加载json，否则请换成js
import { createRequire } from "module"
const require = createRequire(import.meta.url)
const schema = require("./schema.json")

const ajv = new Ajv({ allErrors: true })
ajvErrors(ajv)

// commonjs
// const Ajv = require("ajv").default
// const ajv = new Ajv({ allErrors: true })
// require("ajv-errors")(ajv)
// const schema = require("./schema.json")

const data = {
  phoneNumber: "17600000000",
  code: "123456",
}

console.log(validate(data, schema))

export function validate(data, schema) {
  const validate = ajv.compile(schema)
  const isValid = validate(data)
  let msgs = []
  if (!isValid) {
    const errors = ajv.errorsText(validate.errors).split(", ")
    msgs = errors.map((item) => item.split(" ")[1])
  }
  return msgs
}
```

:::

::: warning
注意，微信小程序不允许动态加载脚本，所以不能使用，您可以考虑使用 `async-validator` 。
:::
