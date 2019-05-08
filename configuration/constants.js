/**
 * @author：eleven
 * @version：v0.0.1
 * 创建日期：2019/4/25
 * 历史修订：
 */
import path from 'path'

export default {
  /**
   * 错误信息常量
   */
  ERRORS: {
    // 常规错误码对照表
    CODEERR: {
      400: '请求出现错误',
      401: '未授权',
      403: '服务器拒绝请求',
      404: '请求的内容不存在',
      500: '服务器遇到错误，无法完成请求',
      501: '服务器无法识别请求方法',
      502: '错误网关',
      503: '服务器目前无法使用',
      504: ' 请求超时',
      505: '服务器不支持请求中所用的 HTTP 协议版本',
      10001: '数据库查询出错！'
    },
    // 数据库错误
    DBERR: {
      ERR_WHEN_INSERT_TO_DB: 'ERR_WHEN_INSERT_TO_DB',
      ERR_NO_SKEY_ON_CALL_GETUSERINFOFUNCTION: 'ERR_NO_SKEY_ON_CALL_GETUSERINFOFUNCTION',
      ERR_NO_OPENID_ON_CALL_GETUSERINFOFUNCTION: 'ERR_NO_OPENID_ON_CALL_GETUSERINFOFUNCTION'
    }
  },
  /**
   * LOG日志常量
   */
  LOGGER: {
    BASE_PATH: path.resolve(__dirname, '../logs'),
    ERR_PATH: '/error',// 错误日志目录
    ERR_FILE_NAME: 'error',// 错误日志文件名
    RES_PATH: '/response',// 响应日志目录
    RES_FILE_NAME: 'response',// 响应日志文件名
    HANDLE_PATH: '/handle',// 操作日志目录
    HANDLE_FILE_NAME: 'handle',// 操作日志文件名
    MQ_PATH: '/mq',// rabbitMQ 日志目录
    MQ_FILE_NAME: 'mq',// rabbitMQ日志文件名
  },
  /**
   * 登录状态常量
   */
  LOGIN_STATE: {
    SUCCESS: 1,  // 登陆成功
    FAILED: 0    // 登录失败
  },
  /**
   * MQ 服务常量
   */
  MQ: {
    QUEUE_API_REST: "service-api-rest",//api服务
    QUEUE_COMMON: "service-common", // 公用服务
    QUEUE_ORDER: "service-order", // 订单服务
    QUEUE_COMMON_TEST: "service-common-test", // 测试服务
  },
  /**
   * MQ消息常量
   */
  MQ_MSG: {
    CONNECT_TYPE: '建立连接',
    SEND_TYPE: '发送消息：',
    RECEIVE_TYPE: '收到消息：',
    ERR_WHEN_CONNECT: 'ERR_WHEN_CONNECT',
    ERR_WHEN_SEND: 'ERR_WHEN_SEND'
  }
};