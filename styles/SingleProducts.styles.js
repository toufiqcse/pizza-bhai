export const SingleProductStyle = {
  container: {
    height: "calc(100vh - 100px)",
    display: "flex",
  },
  leftSide: {
    flex: "1",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rightSide: {
    flex: "1",
    padding: "1.2em",
  },
  imgContainer: {
    width: "80%",
    height: "80%",
    position: "relative",
  },
  title: {
    fontSize: { xs: "1.3rem", sm: "1.5rem", md: "2rem" },
    fontWeight: "600",
    margin: "0.5em 0",
  },
  price: {
    color: "#d1411e",
    fontSize: "1.4rem",
    fontWeight: "500",
    borderBottom: "1px solid #d1411e",
  },
  desc: {
    margin: "0.5em 0 ",
    lineHeight: "1",
    color: "#444",
  },
  choose: {
    color: "#444",
    marginBottom: "0.5em",
  },
  sizes: {
    display: "flex",
    justifyContent: "space-between",
    width: "40%",
    marginBottom: "0.5em",
  },
  size: {
    width: "1.6em",
    height: "1.6em",
    position: "relative",
    cursor: "pointer",
  },

  number: {
    fontSize: "0.8rem",
    position: "absolute",
    top: "-5px",
    right: "-20px",
    backgroundColor: "teal",
    color: "white",
    padding: "0 5px",
    borderRadius: "10px",
  },
  ingredients: {
    display: "flex",
    marginBottom: "1.9em",
  },
  option: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    marginRight: "10px",
    fontSize: "0.9rem",
    fontWeight: "500",
  },
  checkbox: {
    width: "1.4em",
    height: "1.4em",
  },
  add: {},
  quantity: {
    width: "4.1em",
    height: "1.9em",
    textAlign: "center",
    fontWeight: "400",
    fontSize: "0.8rem",
  },
  cartBtn: {
    height: "1.9em",
    marginLeft: "1em",
    backgroundColor: "#d1411e",
    color: "white",
    border: "none",
    fontWeight: "500",
    cursor: "pointer",
    fontSize: "0.8rem",
  },
};
