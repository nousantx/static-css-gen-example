const { defaultProps } = require("@tenoxui/property");

module.exports = {
  input: ["*.html", "*.vue"],
  output: "styles.css",
  // property: defaultProps,
  property: {
    ...defaultProps,
    ...{
      gradient: {
        property: "background-image",
        value: "linear-gradient(to right, {value}, blue)"
      }
    }
  },
  values: {
    primary: "#ccf654"
  },
  classes: {
    display: {
      center: "flex",
      flex: "flex",
      iflex: "inline-flex"
    },
    alignItems: {
      center: "center"
    },
    justifyContent: {
      center: "center"
    }
  }
};
