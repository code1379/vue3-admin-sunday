module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 定义规则类型
  rules: {
    // type 类型定义，表示 git 提交的 type 必须是一下类型范围内
    'type-enum': [
      // 当前验证的错误级别
      2,
      // 在什么情况下验证
      'always',
      [
        'feat', // 新功能 feature
        'fixed', // 修复 bug
        'docs', // 文档注释
        'style', // 代码格式（不影响代码运行的变动）
        'refactor', // 重构
        'perf', // 性能优化
        'test', // 测试
        'chore', // 主要功能
        'revert', // 回退
        'build' // 打包
      ]
    ],
    // subject 大小写不做校验
    'subject-case': [0]
  }
}
