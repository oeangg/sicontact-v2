export function GeneratePagination(currentPages, totalPages) {
  if (totalPages <= 8) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  return [
    1,
    "...",
    currentPages - 1,
    currentPages,
    currentPages + 1,
    "...",
    totalPages,
  ];
}
