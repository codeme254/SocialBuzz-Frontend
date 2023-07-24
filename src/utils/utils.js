export const apiDomain = `http://localhost:8081`;

export const samplePostText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
anim id est laborum.`;

// Function to calculate relative time difference
export function getRelativeTime(date) {
    const now = new Date();
    const diff = now - date;
  
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year = 365 * day;
  
    if (diff < minute) {
      return 'Just now';
    } else if (diff < hour) {
      const minutesAgo = Math.floor(diff / minute);
      return `${minutesAgo}m ago`;
    } else if (diff < day) {
      const hoursAgo = Math.floor(diff / hour);
      return `${hoursAgo}h ago`;
    } else if (diff < week) {
      const daysAgo = Math.floor(diff / day);
      return `${daysAgo}d ago`;
    } else if (diff < month) {
      const weeksAgo = Math.floor(diff / week);
      return `${weeksAgo}w ago`;
    } else if (diff < year) {
      const monthsAgo = Math.floor(diff / month);
      return `${monthsAgo}mo ago`;
    } else {
      const yearsAgo = Math.floor(diff / year);
      return `${yearsAgo}y ago`;
    }
}
  
