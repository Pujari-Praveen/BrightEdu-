import '../styles/ScheduleForm.css';

const SubmitBtn = () => {
  return (
    <button className="Submit-btn btn">Sumbit</button>
  );
};

const ExamsCountInput = () => {
  return (
    <div className="Form-group">
      <label className="Exam-input-label">How many Exams Do you have :</label>
      <input type="number" className="Each-exam-input Exams-count-input" placeholder='' required />
    </div>
  );
};

const InputForEachExam = () => {
  return (
    <div className="Form-group Each-exam-inputs-container">
      <label htmlFor="Exam-name-input" className="Exam-input-label">Name of the Exam and Date :</label>
      <div>
        <input type="text" className="Each-exam-input Exam-name-input" placeholder='Enter the Name of the exam' required />
        <input type="date" className="Each-exam-input" required />
      </div>
    </div>
  );
};

const ScheduleForm = () => {
  return (
    <form className="Schedule-input-form">
      <ExamsCountInput />
      <InputForEachExam />
      <SubmitBtn />
    </form>
  )
};

export default ScheduleForm;
