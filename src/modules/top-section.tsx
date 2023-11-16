import { useState, useContext } from 'react';
import AppContext from '../common/controllers/paginationContext';
import {
  selectSearchValue,
  setSearchValue,
} from '../common/redux/slice/searchSlice';
import { useAppDispatch, useAppSelector } from '../hooks';

const TopSection = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(selectSearchValue);
  console.log(
    '🚀 ~ file: top-section.tsx:12 ~ TopSection ~ searchValue:',
    searchValue
  );
  // const [searchString, setSearchString] = useState('');

  const [searchInputValue, setSearchInputValue] = useState(searchValue);

  const [isError, setIsError] = useState(false);

  const { setPage } = useContext(AppContext);
  // // const { setSearchStr } = useContext(ApiContext);

  const handleSearch = () => {
    dispatch(setSearchValue(searchInputValue));
  };

  // useEffect(() => {
  //   const value = localStorage.getItem('searchInputValue') || '';
  //   dispatch(setSearchValue(value));
  // }, [dispatch]);

  if (isError) {
    throw new Error('Clicked on error button');
  }

  return (
    <section className="top-section">
      <input
        className="input"
        type="text"
        placeholder="Search here..."
        value={searchInputValue}
        onChange={(e) => {
          setSearchInputValue(e.target.value);
        }}
      />
      <button
        className="button"
        onClick={() => {
          setPage(1);
          handleSearch();
        }}
      >
        Search
      </button>
      <button className="button" onClick={() => setIsError(true)}>
        Err btn
      </button>
    </section>
  );
};

export default TopSection;
