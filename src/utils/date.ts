/** Format a date for display, e.g. "8 octombrie 2026". */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ro-RO', { dateStyle: 'long' }).format(date);
}
