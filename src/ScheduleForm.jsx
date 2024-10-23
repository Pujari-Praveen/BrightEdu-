const ExamsCountInput = () => {
  return (
    <>
      <label htmlFor="Exams-count-input">How many Exams Do you have</label>
      <input type="number" id="Exams-count-input" required />
    </>
  );
};

const ScheduleForm = () => {
  return (
    <form className="Schedule-input-form">
      <ExamsCountInput />
      
    </form>
  )
};

export default ScheduleForm;
