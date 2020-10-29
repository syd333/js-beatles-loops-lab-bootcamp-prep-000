function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < musicians.length; i++) {
    var result = []
    result.push(musicians[i]+' plays ' + instruments[i])
  }
  return result
}
