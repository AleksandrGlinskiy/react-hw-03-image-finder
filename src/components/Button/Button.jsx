import css from './Button.module.css';
export const Button = ({ onClick }) => {
  return (
    <div >
      <button className={css.Button} type="button" onClick={onClick}>
      <span>Load More...</span>
    </button>
    </div>
  );
};
