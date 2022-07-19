const getTheme = (mode) => {
  const currentStyles = mode === 'light' ? ({
    background: { paper: '#edeef0', default: '#fff' }
  }) : ({
    background: { paper: '#222226', default: '#333336' }
  });
  return {
    primary: {
      main: "#55AE7E",
      light: "#77be97",
      dark: "#3b7958",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FB3640",
      light: "#fb5e66",
      dark: "#af252c",
      contrastText: "#fff",
    },
    typography: {
      fontFamily: ["Oswald, sans-serif"],
    },
    palette: {
      ...currentStyles,
      mode,
      primary: {
        main: "#55AE7E",
        light: "#77be97",
        dark: "#3b7958",
        contrastText: "#fff",
      },
      secondary: {
        main: "#FB3640",
        light: "#fb5e66",
        dark: "#af252c",
        contrastText: "#fff",
      },
      typography: {
        fontFamily: ["Oswald, sans-serif"],
      },
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)"
      },
    }
  };
};

export default getTheme;