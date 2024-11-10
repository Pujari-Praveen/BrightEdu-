import { useState } from 'react';
import '../styles/ScheduleForm.css';

const SubmitBtn = () => {
  return (
    <button className="Submit-btn button">Sumbit</button>
  );
};

const AddInputBtn = ({ setExamInputs }) => {
  return (
    <button className="Add-input-btn"
      onClick={() => setExamInputs(previousInputs => [...previousInputs, <EachExamInput key={previousInputs.length}/>])}>
      <span>+</span>
      Add Exam
    </button>
  );
};

const EachExamInput = ({ isActive }) => {
  return (
    <div className={`carousel-item ${isActive ? 'active' : ''}`}>
      <label htmlFor="Exam-name-input" className="Exam-input-label">Name of the Exam and Date :</label>
      <div>
        <input type="text" className="Each-exam-input Exam-name-input" placeholder='Enter the Name of the exam' required />
        <input type="date" className="Each-exam-input" required />
      </div>
    </div>
  );
};

const ExamInputsCarousel = ({ ExamInputs }) => {
  return (
    <div id="carousel" className="carousel slide" data-bs-ride="false" data-bs-touch="false" data-bs-interval="false">
      <div className="carousel-inner">
        {ExamInputs}
      </div>
      <div className="Next-Exam-input-navigation">
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
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

const ScheduleForm = () => {
  const [ExamInputs, setExamInputs] = useState([<EachExamInput key={0} isActive={true} />]);
  return (
    <div className="Schedule-input-form">
      <ExamsCountInput />
      <ExamInputsCarousel ExamInputs={ExamInputs} />
      <AddInputBtn setExamInputs={setExamInputs} />
      <SubmitBtn />
    </div>
  )
};

export default ScheduleForm;
