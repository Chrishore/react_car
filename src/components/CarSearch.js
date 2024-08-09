import { useDispatch, useSelector } from "react-redux";
import { updateSearchTerm } from "../store";


function CarSearch() {
    const dispatch = useDispatch();
    const searchTerm = useSelector(state => state.carList.searchTerm);
    const handleSearchTermChange = (e) => {
        dispatch(updateSearchTerm(e.target.value));
    }
    return (
        <div className="card m-3">
            <div className="card-content">
                <div className="content">
                    <div className="field has-addons is-flex is-justify-content-end">
                        <div className="control">
                        <input className="input" type="text" placeholder="e.g Hyundai Xcent" value={searchTerm} onChange={handleSearchTermChange} />
                        </div>
                        <div className="control">
                            <button className="button is-info">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarSearch;