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
            className="form__input"
            value={props.inputValue}
            placeholder="Rick"
            onChange={handleInputValue}
            onKeyDown={inputEnterHandler}
          />
        </label>
      </form>
    </section>
  );
};

export default Filter;
