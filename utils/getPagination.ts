export const getPaginationTemplate = (
  activePage: number,
  pagesCount: number,
) => {
  return activePage < 3 || activePage > pagesCount - 2
    ? [1, 2, 3, '...', pagesCount - 2, pagesCount - 1, pagesCount]
    : activePage === 3
    ? [1, 2, 3, 4, '...', pagesCount - 1, pagesCount]
    : activePage === pagesCount - 2
    ? [1, 2, '...', pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount]
    : [1, '...', activePage - 1, activePage, activePage + 1, '...', pagesCount];
};
