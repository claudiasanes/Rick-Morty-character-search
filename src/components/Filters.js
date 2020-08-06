import React from 'react';

const Filter = (props) => {
  const getInputValue = (ev) => {
    props.handleInputChange(ev.target.value);
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
            onChange={getInputValue}
          />
        </label>
      </form>
    </section>
  );
};

export default Filter;
