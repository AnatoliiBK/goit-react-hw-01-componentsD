import { getRandomColor } from "./random_color";
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  // Створити об'єкт для зберігання об'єднаних даних
  const mergedData = {};

  // Пройтися по всіх об'єктах в масиві data
  for (const obj of stats) {
    const { id, label, percentage } = obj;

    if (label in mergedData) {
      // Якщо об'єкт з таким значенням label вже існує, об'єднати дані
      mergedData[label].percentage += percentage;
    } else {
      // Якщо об'єкта з таким значенням label ще немає, створити новий
      mergedData[label] = { id, label, percentage };
    }
  }

  // Перетворити об'єкт об'єднаних даних на масив
  const mergedArray = Object.values(mergedData);

  // Рендерити статистику у вигляді списку
  return (
    <section className={css.statistics}>
      <div className={css.statistics_container}>
        <h2 className={css.title}>{title}</h2>

        <ul className={css.stat_list}>
          {mergedArray.map((item) => (
            <li className={css.item} key={item.id} style={{ backgroundColor: getRandomColor() }}>
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    percentage: PropTypes.number
  }))
}