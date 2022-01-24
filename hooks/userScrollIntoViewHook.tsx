export const useScrollIntoView = (id: string): void => {
  document
    .querySelector(`#${id}`)
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
