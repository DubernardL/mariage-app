export const translateXParallax = (
  startValue,
  endValue,
  scrollStart,
  scrollEnd,
  duration = 1000
) => {
  return [
    {
      start: scrollStart,
      duration: duration,
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
      duration: duration,
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

export const backgroundTranslation = () => {
  return [
    {
      start: 2000,
      end: 5000,
      properties: [
        {
          startValue: -400,
          endValue: 0,
          property: "translateY",
        },
      ],
    },
  ];
};
