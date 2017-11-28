
export const styleSheetQueries = {
  xs: { min: 0, max: 575 },
  sm: { min: 576, max: 767 },
  md: { min: 768, max: 991 },
  lg: { min: 992, max: 1190 },
  xl: { min: 1200, max: 9999 },
};

export const mobile = attrs => ({
  '@media (max-width: 813px)': attrs,
});

export const retina = attrs => ({
  '@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx), (min-resolution: 192dpi)': attrs,
});

export const retina3x = attrs => ({
  '@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 3dppx), (min-resolution: 350dpi)': attrs,
});
