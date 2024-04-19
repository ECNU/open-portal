import mirrors from '../../static/mirrors.json'

export const initTypes = () => {
  const types = mirrors.map(mirror => mirror.type)
  // 统计每个type出现的次数
  const typeCount = {}
  types.forEach(type => {
    if (typeCount[type]) {
      typeCount[type]++
    } else {
      typeCount[type] = 1
    }
  })
  // 取前8名
  const topTypes = Object.keys(typeCount)
    .sort((a, b) => typeCount[b] - typeCount[a])
    .slice(0, 8)

  return ['全部', ...topTypes]
}
