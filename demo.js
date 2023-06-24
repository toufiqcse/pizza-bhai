pizzaData.map((pizza, index) => {
  const pizzaObject = pizza.pizza;
  return (
    <Grid sx={PizzaListStyle.wrapper} container spacing={3} key={index}>
      {pizzaObject.map(
        (pizzaObj, i) => (
          console.log(pizzaObj), (<PizzaCard key={i} pizzaObj={pizzaObj} />)
        )
      )}
    </Grid>
  );
});
