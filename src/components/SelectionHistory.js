import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadSelections } from "../selectionActions";

const SelectionHistory = () => {
    const dispatch = useDispatch();

    const selectionHistory = useSelector((state) => state.selections.selectionHistory);

    useEffect(() => {
        dispatch(loadSelections(['test']));
    }, []);

    // first mount, loadSelections haven't update the store
    // second mount, store updated, selectionHistory dependency triggered
    useEffect(() => {
        console.log({ selectionHistory });
    }, [selectionHistory]);

    return (
        <div>
            {selectionHistory !== null ? (
                <div>Can try select a location hehe</div>
            ) : (
                selectionHistory?.map((selection, index) => (
                    <div key={index}>{selection}</div>
                ))
            )}
        </div>
    );
};

export default SelectionHistory;
