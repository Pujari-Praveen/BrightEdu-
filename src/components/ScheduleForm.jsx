import '../styles/ScheduleForm.css';

const SubmitBtn = () => {
  return (
    <button className="Submit-btn button">Sumbit</button>
  );
};

const AddInputBtn = () => {
  return (
    <button className="Add-input-btn"><span>+</span>Add Exam</button>
  );
};

const EachExamInput = () => {
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

const ExamInputsCarousel = () => {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <EachExamInput />
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
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
  return (
    <div className="Schedule-input-form">
      <ExamsCountInput />
      <ExamInputsCarousel />
      <AddInputBtn />
      <SubmitBtn />
    </div>
  )
};

export default ScheduleForm;
