import React from 'react';

const Filter = (props) => {
  const handleInputValue = (ev) => {
    props.handleInputChange(ev.target.value);
  };

  const inputEnterHandler = (ev) => {
    ev.preventDefault();
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
            placeholder="Search"
            onChange={handleInputValue}
            onSubmit={inputEnterHandler}
          />
        </label>
      </form>
    </section>
  );
};

export default Filter;
