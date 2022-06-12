export const Shadows = {
  0: 'none',
  1: `
        0.5px 1px 1px hsl($$shadow-color / 0.333)
      `,
  2: `
        1px 2px 2px hsl($$shadow-color / 0.333)
        2px 4px 4px hsl($$shadow-color / 0.333)
        3px 6px 6px hsl($$shadow-color / 0.333)
      `,
  3: `
        1px 2px 2px hsl($$shadow-color / 0.2)
        2px 4px 4px hsl($$shadow-color / 0.2)
        4px 8px 8px hsl($$shadow-color / 0.2)
        8px 16px 16px hsl($$shadow-color / 0.2)
        16px 32px 32px hsl($$shadow-color / 0.2)
      `
};
