const DURING_WEEK_MIN_HOUR = 9;
const DURING_WEEK_MAX_HOUR = 21;
const DURING_WEEK_MAX_MINUTE = 30;
const SUNDAY = 0;
const THURSDAY = 4;
const FRIDAY = 5;
const FRIDAY_MIN_HOUR = 9;
const FRIDAY_MAX_HOUR = 13;

export function isDispatchOpen() {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();
  // Check if it's Friday and the time is between 09:00-13:00
  if (
    dayOfWeek === FRIDAY &&
    hour >= FRIDAY_MIN_HOUR &&
    hour < FRIDAY_MAX_HOUR
  ) {
    return true;
  }

  // Check if it's Sunday-Thursday and the time is between 09:00-21:30
  if (
    dayOfWeek >= SUNDAY &&
    dayOfWeek <= THURSDAY &&
    hour >= DURING_WEEK_MIN_HOUR &&
    (hour < DURING_WEEK_MAX_HOUR ||
      (hour === DURING_WEEK_MAX_HOUR && minute <= 30))
  ) {
    return true;
  }

  // Dispatch is not open
  return false;
}
