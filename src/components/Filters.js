import React from 'react';

const Filter = (props) => {
  const handleInputValue = (ev) => {
    props.handleFilters({
      key: 'inputValue',
      value: ev.target.value,
    });
  };

  const handleChangeStatus = (ev) => {
    props.handleFilters({
      key: 'status',
      value: ev.target.value,
    });
  };

  const handleSortChild = (ev) => {
    props.handleFilters({
      key: 'isSorted',
      value: ev.target.checked,
    });
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
        <label htmlFor="species" className="label-species ">
          Filter by status
          <select
            id="species"
            name="species"
            className="select-species"
            value={props.status}
            onChange={handleChangeStatus}
          >
            <option value="all">All</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
          </select>
        </label>
        <label htmlFor="sort" className="sort__label">
          A - Z:{' '}
        </label>
        <input
          className="sort__input"
          unchecked="true"
          type="checkbox"
          id="sort"
          name="isSorted"
          checked={props.isSorted}
          onChange={handleSortChild}
        />
      </form>
    </section>
  );
};

export default Filter;
