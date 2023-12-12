interface ICookieAttrs {
  expires: string | number
  path?: string
}

/**
 * 
 * @param name cookie 名称
 * @param value cookie 值
 * @param attributes 
 * @description expires 小时 1代表一小时
 * @returns 
 */
function set(name: string, value?: any, attributes?: ICookieAttrs) {
  if (!document) return
  if (attributes) {
    let { expires, path } = attributes
    const time = new Date(new Date().getTime() + Math.floor(expires as number) * 60 * 1000).toUTCString()
    document.cookie = `${name}=${value}; expires=${time}; path=${path || '/'}`
    return
  }
  document.cookie = `${name}=${value}`
}

/**
 * @param name cookie 名称
 */
function get(name: string) {
  if (!document) return
  if (!name) return
  const cookies = document.cookie.split(';')
  const cookie = cookies.map((c: string) => {
    return c.split('=')
  }).find((c: string[]) => {
    return c[0] == name
  })
  return cookie ? cookie[1] : undefined
}

/**
 * document.cookie = 'xxx=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
 * @param name cookie 名称
 */
function remove(name: string) {
  set(name, '', { expires: -1 })
}

export default {
  set,
  get,
  remove
}
