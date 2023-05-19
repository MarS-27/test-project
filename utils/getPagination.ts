export const getPaginationTemplate = (
  activePageNumber: number,
  pagesCount: number,
) => {
  return activePageNumber < 3 || activePageNumber > pagesCount - 2
    ? [1, 2, 3, '...', pagesCount - 2, pagesCount - 1, pagesCount]
    : activePageNumber === 3
    ? [1, 2, 3, 4, '...', pagesCount - 1, pagesCount]
    : activePageNumber === pagesCount - 2
    ? [1, 2, '...', pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount]
    : [
        1,
        '...',
        activePageNumber - 1,
        activePageNumber,
        activePageNumber + 1,
        '...',
        pagesCount,
      ];
};
