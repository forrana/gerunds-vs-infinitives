class AlarmManager {
  static startAlarm(node) {
    node.classList.add('alarm')
    setTimeout((node) => node.classList.remove('alarm'), 1500, node)
  }
}


export default AlarmManager
