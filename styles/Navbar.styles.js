export const NavStyle = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: "#d1411e",
    padding: "1em",
  },

  logo: {
    color: "white",
    fontSize: "1.8rem",
  },

  MenuIcon: {
    marginRight: ".5em",
    display: { xs: "block", sm: "block", md: "none" },
  },

  icon: {
    color: "white",
  },

  callButton: {
    marginRight: ".5em",
    backgroundColor: "white",
    borderRadius: "50%",
    padding: ".2rem",
  },

  texts: {
    color: "white",
    fontSize: "1.1rem",
    "& p": {
      fontSize: ".8rem",
    },
  },

  list: {
    display: "flex",
    alignItems: "center",

    "> button:first-of-type": { marginLeft: ".5em" },
    "> button:last-of-type": { marginLeft: "0" },

    "> button:nth-of-type(-n+3)": {
      display: { xs: "none", sm: "none", md: "block" },
    },
    "> button:nth-of-type(n+5)": {
      display: { xs: "none", sm: "none", md: "block" },
    },

    "& button": {
      marginRight: ".4vw",
      fontWeight: 500,
      color: "white",
    },
  },
};
