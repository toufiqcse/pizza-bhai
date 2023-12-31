export const PizzaListStyle = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  desc: {
    fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.2rem" },
    color: "#444",
    lineHeight: 1,
    width: "80%",
    marginBottom: "1em",
    textAlign: "center",
  },
  wrapper: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    // padding: "0 0.5em",
  },
  title: {
    fontSize: { xs: "1.3rem", sm: "1.5rem", md: "2rem" },
    fontWeight: "600",
    margin: "0.5em 0",
  },
  ProductHeading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "0 2em",
  },

  linkText: {
    fontSize: "1rem",
    fontWeight: "500",
  },
  headerText: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

// "& before": {
//   content: "",
//   borderTop: "2px solid",
//   margin: "0 20px 0 0",
//   flex: "1 0 20px",
//   color: "#777",
// },
