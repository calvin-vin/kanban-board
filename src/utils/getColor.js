export const getColor = (id) => {
  let bg, border, text;
  if (id % 4 === 0) {
    bg = "bg-primary-surface";
    border = "border-primary-main";
    text = "text-primary-main";
  } else if (id % 4 === 1) {
    bg = "bg-secondary-surface";
    border = "border-secondary-border";
    text = "text-secondary-main";
  } else if (id % 4 === 2) {
    bg = "bg-danger-surface";
    border = "border-danger-border";
    text = "text-danger-main";
  } else if (id % 4 === 3) {
    bg = "bg-success-surface";
    border = "border-success-border";
    text = "text-success-main";
  }
  return { bg, border, text };
};
