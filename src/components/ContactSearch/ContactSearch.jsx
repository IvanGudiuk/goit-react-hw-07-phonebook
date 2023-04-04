import css from './ContactSearch.module.css';
import { setFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export function ContactSearch() {
  const dispatch = useDispatch();

  const inputHandler = e => {
    const { value } = e.target;
    const search = value.trim().toLowerCase();
    dispatch(setFilter(search));
  };

  return <input className={css.input} name="search" onChange={inputHandler} />;
}
