import { GoCreditCard } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setCost, addCar, resetCarCreate } from '../store';

function CarForm() {

    const dispatch = useDispatch();
    const name = useSelector(state => state.carCreate.name);
    const cost = useSelector(state => state.carCreate.cost);
    var showErrorMsg = false;
    const handleValueChange = (e) => {
        let costInput = parseInt(e.target.value);
        if (isNaN(costInput)) {
            dispatch(setCost(0));
        }
        else {
            dispatch(setCost(costInput));
        }
    }

    const handleNameChange = (e) => {
        dispatch(setName(e.target.value));
    }

    const handleSubmit = (e) => {
        if (name && name !== "" && cost && cost > 0) {
            showErrorMsg = false;
            dispatch(addCar({ name, cost }));
            handleReset();
        }
        else {
            showErrorMsg = true;
        }
    }

    const handleReset = (e) => {
        dispatch(resetCarCreate());
    }

    const errorMsg = <div className="field">
        <label className="label has-text-danger-00-invert">Car Name must not be empty (or) Car Value must be not be less than 1</label>
    </div>

    return (
        <div className="card m-3">
            <div className="card-content">
                <div className="content">
                    <div className="field is-grouped">
                        <div className="field ">
                            <label className="label">Car Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="e.g Hyundai Xcent" value={name} onChange={handleNameChange} />
                            </div>
                        </div>
                        <div className="field ">
                            <label className="label">Car Value</label>
                            <div className="control has-icons-left">
                                <input className="input" type="number" placeholder="e.g 550000" value={cost || ""} onChange={handleValueChange} />
                                <span className="icon is-left has-text-primary-invert">
                                    <GoCreditCard ></GoCreditCard >
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link" onClick={handleSubmit}>Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-link is-light" onClick={handleReset}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarForm;