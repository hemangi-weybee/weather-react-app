import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { useSearchCityQuery } from '../redux/api/searchCity';

const NewSearchBox = () => {
  const navigate = useNavigate();
  const [call, setCall] = useState(true);
  const [city, setCity] = useState(null);
  const [options, setOptions] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const searchCity = useSearchCityQuery(city, { skip: call });

  const searchOption = (inputValue) => {
    errorMsg && setErrorMsg(null);
    setCity(inputValue);
    if (inputValue.length >= 3 && inputValue.length <= 5) {
      setCall(false);
    } else if (inputValue.length < 3) {
      setCall(true);
      setOptions([]);
    }
  };

  useEffect(() => {
    setOptions(searchCity.data);
  }, [searchCity]);

  return (
    <div className="search-bar-wrapper">
      <div className={`search-bar ${errorMsg ? 'search-bar-error' : ''}`}>
        <Select
          defaultValue={selectedOption}
          onChange={(selected, e) => {
            setSelectedOption(selected);
            if (e.action === 'select-option') {
              setSelectedOption('');
              navigate(`/current/${selected.value}`);
            }
          }}
          value={selectedOption}
          options={options}
          onInputChange={searchOption}
          isLoading={searchCity?.isLoading}
          isSearchable={true}
          menuIsOpen={Boolean(city)}
          placeholder="Search City"
          noOptionsMessage={() => 'No related city found'}
          styles={{
            control: (base) => ({
              ...base,
              borderRadius: '8px',
              border: 'none',
              borderColor: 'transparent',
              boxShadow: 'none',
              ['&:hover']: {
                borderColor: 'transparent',
                boxShadow: 'none'
              },
              minHeight: '45px'
            }),
            indicatorsContainer: (base) => ({
              ...base,
              display: 'none'
            }),
            container: (base) => ({
              ...base,
              width: 'calc(100% - 50px)'
            })
          }}
        />
        <button
          className="search-btn"
          onClick={() =>
            selectedOption
              ? navigate(`/current/${selectedOption}`)
              : setErrorMsg('Please select city')
          }>
          <img src="/icons/search.svg" id="search-btn" alt="search-icon" className="search-icon" />
        </button>
      </div>
      {errorMsg && <div className="search-error">{errorMsg}</div>}
    </div>
  );
};

export default NewSearchBox;
