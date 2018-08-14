/*货币格式化*/
export const formatMoney = (number = 0, places = 2, symbol = '￥', thousand = ',', decimal = '.') => {
  let negative, i, j

  negative = number < 0 ? '-' : ''
  i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + ''
  j = (j = i.length) > 3 ? j % 3 : 0
  return symbol + negative + (j ? i.substr(0, j) + thousand : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : '')
}
