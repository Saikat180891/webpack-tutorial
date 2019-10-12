# Webpack Tutorial #

## Different Types of Module Systems

|             Module System            |           Common System | Usage                                                         |
|:------------------------------------:|------------------------:|---------------------------------------------------------------|
|               Common JS              | module.exports, require | Mostly used outside browser i.e. NodeJS                       |
| AMD (Asynchronous Module Definition) |         define, require |                                                               |
|                ES 2015               |          export, import | Mostly browser side application, also can be used with NodeJS |


### Webpack Configuration
1. Create a file named `webpack.config.js` (name should be same)
2. Create an `const` object named as `config`
3. Export the object using CommonJS syntax `module.exports = config`
4. Inside the config object create a property called `entry` - this is place where webpack will get to know about which file to start with
5. Create another property as `output`, this will be an object with one property as path which need the root path and another is the output `filename`



### Common JS

> Create a file called `index.js` and another file called `print.js`

[print.js](https://github.com/Saikat180891/webpack-tutorial/blob/master/src/print.js)

```
const print = (...args) => console.log(...args)
module.exports = print;
```

### Babel

|      Module      |                                                                                                                 Purpose |
|:----------------:|------------------------------------------------------------------------------------------------------------------------:|
|   babel-loader   |                                                                                  Teaches babel how to work with webpack |
|    babel-core    |                                                     Knows how to take in code, parse it, and generate some output files |
| babel-preset-env | Rule set for telling babel exactly what pieces of ES 2015/16/17...  syntax to look for and how to turn it into ES5 code |

