import React from 'react';

const Filter = (props) => {
  const handleInputValue = (ev) => {
    props.handleFilters({
      key: 'inputValue',
      value: ev.target.value,
    });
  };

  const handleChangeSpecie = (ev) => {
    props.handleFilters({
      key: 'species',
      value: ev.target.value,
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
          Filtrar por especie
        </label>
        <select
          id="species"
          name="species"
          className="select-species"
          value={props.species}
          onChange={handleChangeSpecie}
        >
          <option value="all">Todos</option>
          <option value="Alien">Alienígena</option>
          <option value="Human">Humano</option>
        </select>
      </form>
    </section>
  );
};

export default Filter;
