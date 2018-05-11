import moment from 'moment'

export function humaniseDate(lastIn) {
  const then = moment(lastIn)
  const now = moment(new Date())
  const hours = Math.floor(moment.duration(now.diff(then)).as('seconds'))
  return moment.duration(hours, 'seconds').humanize()
}

