const ExamsCountInput = () => {
  return (
    <>
      <label htmlFor="Exams-count-input">How many Exams Do you have</label>
      <input type="number" id="Exams-count-input" required />
    </>
  );
};

const InputForEachExam = () => {
  return (
    <>
      <label htmlFor="Exam-name-input">Name of the Exam and Date</label>
      <input type="text" id="Exam-name-input" required />
      <input type="number" required />
    </>
  );
};

const ScheduleForm = () => {
  return (
    <form className="Schedule-input-form">
      <ExamsCountInput />
      <InputForEachExam />
    </form>
  )
};

export default ScheduleForm;
