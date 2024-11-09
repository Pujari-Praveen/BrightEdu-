import '../styles/ScheduleForm.css';

const ExamsCountInput = () => {
  return (
    <label className="Exam-input-label">How many Exams Do you have :
      <input type="number" id="Exams-count-input" className="Each-exam-input" required />
    </label>
  );
};

const InputForEachExam = () => {
  return (
    <label htmlFor="Exam-name-input" className="Exam-input-label">Name of the Exam and Date :
      <input type="text" id="Exam-name-input" className="Each-exam-input" required />
      <input type="date" className="Each-exam-input" required />
    </label>
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
