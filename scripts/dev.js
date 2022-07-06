const inquirer = require('inquirer')

inquirer
  .prompt([{
      type: 'list',          // 类型
      name: 'name',       // 字段名称，在then里可以打印出来
      message: '请选择:',   // 提示信息
      choices: ["pc", "other"],
  },
  // {
  //   type: 'input',          // 类型
  //   name: 'name',       // 字段名称，在then里可以打印出来
  //   message: '请输入:',   // 提示信息
  // },
  ])
  .then(answers => {
    process.argv.push(answers.name);
    require('./start')
    // console.log('answers',process, answers)    // 与prompt的name字段对应
  })
  .catch(error => {
      if(error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
      } else {
          // Something else went wrong
      }
  });