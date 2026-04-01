import { useSearchParams } from 'react-router-dom';

import css from './SearchBox.module.css';
import { CircleX, Search } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllThemes } from '../../redux/themes/selectors.js';
import { useEffect, useState } from 'react';
import { getAllThemes } from '../../redux/themes/operations.js';

function SearchBox() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllThemes());
  }, [dispatch]);

  const [query, setQuery] = useSearchParams();
  const [inputValue, setInputValue] = useState(
    query.get('name') || query.get('fig_num') || ''
  );
  const themeValue = query.get('theme') || '';

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    const input = inputValue.trim();
    setQuery(prev => {
      const params = new URLSearchParams(prev);
      if (!input) {
        params.delete('name');
        params.delete('fig_num');
      } else if (input.toLowerCase().startsWith('fig-')) {
        params.set('fig_num', input);
        params.delete('name');
      } else {
        params.set('name', input);
        params.delete('fig_num');
      }
      params.set('page', 1);
      return params;
    });
  };

  const handleInputClear = () => {
    setInputValue('');
    setQuery(prev => {
      const params = new URLSearchParams(prev);
      params.delete('name');
      params.delete('fig_num');
      params.set('page', 1);
      return params;
    });
  };

  const handleThemeChange = e => {
    const selected = e.target.value;
    setQuery(prev => {
      const params = new URLSearchParams(prev);
      if (!selected || selected === 'All themes') {
        params.delete('theme');
      } else {
        params.set('theme', selected);
      }
      params.set('page', 1);
      return params;
    });
  };

  const themes = useSelector(selectAllThemes);

  return (
    <div className={css.wrapper}>
      <div className={css.searchbox}>
        <input
          className={css.input}
          type="text"
          placeholder="Search by name or fig number"
          value={inputValue}
          onChange={handleInputChange}
        />

        {inputValue && (
          <button
            type="button"
            onClick={handleInputClear}
            className={css.clear}
          >
            <CircleX size={24} strokeWidth={1} />
          </button>
        )}

        <button type="button" onClick={handleSearch} className={css.search}>
          <Search className={css.inputIcon} />
        </button>
      </div>

      <div className={css.selectWrapper}>
        <select
          value={themeValue}
          onChange={handleThemeChange}
          className={css.select}
        >
          <option value="" disabled>
            Select theme
          </option>
          <option value="All themes">All themes</option>
          {[...themes]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(theme => (
              <option key={theme.id} value={theme.id}>
                {theme.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default SearchBox;
