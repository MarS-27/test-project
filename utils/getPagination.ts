export const getPaginationTemplate = (activePage: number) => {
  return activePage < 3 || activePage > 8
    ? [1, 2, 3, '...', 8, 9, 10]
    : activePage === 3
    ? [1, 2, 3, 4, '...', 9, 10]
    : activePage === 8
    ? [1, 2, '...', 7, 8, 9, 10]
    : [1, '...', activePage - 1, activePage, activePage + 1, '...', 10];
};
