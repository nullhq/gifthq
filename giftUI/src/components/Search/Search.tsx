// Path: src/components/Search/Search.tsx
// Search component to search for users

import styles from "./Search.module.css";
import { SearchIcon } from "../../assets/icons/icon";

function Search () {
    return (
        <div className={styles.search}>
            <label htmlFor="search">
                <input 
                    type="text"
                    id="search"
                    placeholder="Search"
                    className={styles.search_input}
                />
                <SearchIcon className={styles.search_icon}/>
            </label>
        </div>
    );
}

export default Search;