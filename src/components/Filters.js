import React from 'react';

const Filter = (props) => {
  const handleInputValue = (ev) => {
    props.handleInputChange(ev.target.value);
  };

  const inputEnterHandler = (ev) => {
    let keyCode = ev.keyCode;
    if (keyCode === 13) {
      ev.preventDefault();
    }
  };

  return (
    <section className="filter-section">
      <form className="form">
        <label htmlFor="filterName" className="form__label">
          <input
            id="filterName"
            type="text"
            className="form__input"
            value={props.inputValue}
            placeholder="Rick"
            onChange={handleInputValue}
            onKeyDown={inputEnterHandler}
          />
        </label>
        {/* <label htmlFor="checkbox">
          <input
            onChange={handleSort}
            type="checkbox"
            id="chackbox"
            name="sort"
            value="sort"
            checked={props.sortCharacter}
            defaultChecked={isSortChecked}
          />
          Sort alphabetically
        </label> */}
      </form>
    </section>
  );
};

export default Filter;
