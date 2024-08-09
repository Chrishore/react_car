import { useDispatch, useSelector } from "react-redux";


function CarValue() {
    const totalValue = useSelector(({ carList: { searchTerm, displayList } }) => {
        return displayList.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }).reduce((total, car) => total + car.cost, 0);
    return (
        <div className="card m-3">
            <div className="card-content">
                <div className="content is-flex is-justify-content-space-between">
                        <div className='is-size-5'>Total Value of Cars </div>
                        <div className='is-size-4 has-text-weight-bold'>{totalValue}</div>
                </div>
            </div>
        </div>
    );
}

export default CarValue;