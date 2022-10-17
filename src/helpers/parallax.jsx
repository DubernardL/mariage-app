export const translateXParallax = (
  startValue,
  endValue,
  scrollStart,
  scrollEnd
) => {
  return [
    {
      start: scrollStart,
      duration: 1000,
      properties: [
        {
          startValue: startValue,
          endValue: endValue,
          property: "translateX",
        },
      ],
    },
    {
      start: scrollEnd,
      duration: 1000,
      properties: [
        {
          startValue: endValue,
          endValue: startValue,
          property: "translateX",
        },
      ],
    },
  ];
};

export const blurParallax = () => {
  return [
    {
      start: 800,
      duration: 600,
      properties: [
        {
          startValue: 0,
          endValue: 2.5,
          property: "blur",
        },
      ],
    },
  ];
};
