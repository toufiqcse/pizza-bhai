export const PizzaCardStyle = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.2em",
    alignItems: "center",
    justifyContent: "center",
    padding: "1em 0.5em",
    flexDirection: "column",
    border: "1px solid #777",
    margin: "5px",
    borderRadius: "4px",
  },
  title: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "#666",
  },
  price: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#d1411e",
    marginBottom: "0.1em 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  desc: {
    textAlign: "center",
    color: "#777",
    lineHeight: 1,
    fontSize: "0.9rem",
  },
  linkText: {
    fontSize: "0.8rem",
    color: "#11009E",
    fontWeight: "500",
    transition: "color 0.3s", // Add transition for a smooth effect
    "&:hover": {
      color: "#11009E",
    },
  },
  textContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
