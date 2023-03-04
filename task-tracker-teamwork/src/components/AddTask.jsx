const AddTask = () => {
  return (
    <div>
      <form className="form-group">

        <div className="form-group text-start">
          <label htmlFor="formGroupExampleInput">Add Task</label>
          <input
            type="text"
            className="form-control"
            id="addTask"
            placeholder="Add Task"
          />
        </div>
        <div className="form-group text-start">
          <label htmlFor="formGroupExampleInput2">Day & Time</label>
          <input
            type="text"
            className="form-control"
            id="dayTime"
            placeholder="Add Day & Time"
          />
        </div>

        <button type="submit" className="btn btn-info mt-3 w-100">
          Save Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
