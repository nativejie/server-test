type FailCode = 500 | 501 | 502;

class ApiResult {

  public static toSuccess(
    result: Array<Object> | Object | Boolean,
    code: number = 200,
    msg: string = '请求成功',
  ): Object {
    return {
      data: result,
      code: code,
      msg: msg,
    };
  }

  public static toFail(
    result: Array<Object> | Object | Boolean,
    code: FailCode = 500,
    msg: string = '请求失败',
  ): Object {
    return {
      data: result,
      msg: msg,
      code: code,
    };
  }
}

export default ApiResult;
