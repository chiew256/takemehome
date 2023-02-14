import { useEffect } from "react";
import { connect } from "react-redux";
import { loadSelections } from "../selectionActions";

const SelectionHistory = ({ selectionHistory, loadSelections }) => {
  useEffect(() => {
    loadSelections();
  }, []);

  console.log(loadSelections());
  console.log(selectionHistory);

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

const mapStateToProps = (state) => {
  return {
    selectionHistory: state.selectionHistory,
  };
};

export default connect(mapStateToProps, { loadSelections })(SelectionHistory);
