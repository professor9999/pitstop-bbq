import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious BBQ, Delivered To You</h2>
      <p>
        Choose your favorite BBQ dish from our broad selection of available meals
        and enjoy a mouthwatering lunch or dinner at home.
      </p>
      <p>
        All our BBQ dishes are prepared with high-quality ingredients, smoked to perfection,
        and of course by experienced pitmasters!
      </p>
    </section>
  );
};

export default MealsSummary;