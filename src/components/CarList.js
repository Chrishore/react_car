import { GoTrash } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
    const dispatch = useDispatch();
    const carName = useSelector(state => state.carCreate.name);
    const carList = useSelector(({ carList: { searchTerm, displayList } }) => {
        return displayList.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
    });
    const searchTerm = useSelector(state => state.carList.searchTerm);
    const renderedList = carList.map((car) => {
        let listItemClass = "";
        if (carName != "" && car.name.toLowerCase().includes(carName.toLowerCase())) {
            listItemClass = "has-background-success-light";
        }
        return (
            <tr className={listItemClass} key={car.id}>
                <td>{car.name}</td>
                <td>{car.cost}</td>
                <td><button className="button is-danger" onClick={() => dispatch(removeCar(car.id))}>Remove <GoTrash className='ml-2' /></button></td>
            </tr>
        )
    })
    const tableElement = <table className="table is-fullwidth">
        <thead>
            <tr>
                <th>Car Name</th>
                <th>Car Value</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {renderedList}
        </tbody>
    </table>
    return (
        <div className="card m-3">
            <div className="card-content">
                <div className="content">
                    {carList.length > 0 ? tableElement : <p className='is-size-5'>No cars added yet</p>}
                </div>
            </div>
        </div>
    );
}

export default CarList;