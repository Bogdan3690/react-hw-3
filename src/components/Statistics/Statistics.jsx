import css from "./Statistics.module.css";

const Statistics = ({ stats }) => {
  return (
    <section className={css.stats}>
      <h2 className={css.title}>UPLOAD STATS</h2>

      <ul className={css.statList}>
        {stats.map((stat) => {
          return (
            <li key={stat.id} className={css.item}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;