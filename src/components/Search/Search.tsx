import './search.scss';
import { SearchType } from './types/search.interface';

function Search({
  value, onReset, onChange,
}: SearchType) {
  return (
    <section
      className="search"
    >
      <form
        className="search__form"
        role="search"
      >
        <input
          data-testid="search"
          type="search"
          name="search"
          placeholder="Search"
          spellCheck="false"
          className="search__input"
          value={value}
          onChange={onChange}
        />
        <button
          data-testid="search-reset"
          type="button"
          className="search__reset search__button"
          onClick={onReset}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <g clipPath="url(#clip0_6_4778)">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.24742 3.3415C7.43731 3.12448 7.71164 3 8 3H21C21.7957 3 22.5587 3.31607 23.1213 3.87868C23.6839 4.44129 24 5.20435 24 6V18C24 18.7957 23.6839 19.5587 23.1213 20.1213C22.5587 20.6839 21.7957 21 21 21H8C7.71164 21 7.43731 20.8755 7.24742 20.6585L0.247423 12.6585C-0.0824744 12.2815 -0.0824744 11.7185 0.247423 11.3415L7.24742 3.3415ZM8.45377 5L2.32877 12L8.45377 19H21C21.2652 19 21.5196 18.8946 21.7071 18.7071C21.8946 18.5196 22 18.2652 22 18V6C22 5.73478 21.8946 5.48043 21.7071 5.29289C21.5196 5.10536 21.2652 5 21 5H8.45377Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071C10.9024 15.3166 10.9024 14.6834 11.2929 14.2929L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L11.2929 9.70711C10.9024 9.31658 10.9024 8.68342 11.2929 8.29289Z" />
            </g>
            <defs>
              <clipPath id="clip0_6_4778">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </form>
    </section>
  );
}

export default Search;
