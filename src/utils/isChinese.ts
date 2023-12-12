function isChineseCharacter(char: string) {
  const chineseRegex = /^[\u4e00-\u9fa5]$/; // 中文字符的 Unicode 范围是 \u4e00-\u9fa5 
  return chineseRegex.test(char);
}
const isChinese = isChineseCharacter
export default isChinese
