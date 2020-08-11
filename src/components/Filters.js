import React from 'react';

const Filter = (props) => {
  const handleInputValue = (ev) => {
    props.handleInputChange({ key: 'filterName', value: ev.target.value });
  };

  const inputEnterHandler = (ev) => {
    ev.preventDefault();
  };

  const handleChangeSpecie = (ev) => {
    props.handleFilter({
      key: 'species',
      value: ev.target.value,
    });
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
          value={props.speciesFilter}
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
