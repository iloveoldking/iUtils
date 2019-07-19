/**
 * @param {Object} 请求返回的JSON数据
 * @description 判断请求返回的状态码是否为正确码
 */
export const isCorrect = res => {
  if (res && (res.status === setting.correctStatusCode)) {
    return true;
  } else {
    return false;
  }
}

/**
 * @param {String} 需要判断的地址
 * @description 判断传入地址是否为标准url
 */
const regUrl = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
export function isUrl(path) {
  return regUrl.test(path);
}