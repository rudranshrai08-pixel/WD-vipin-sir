import React, { useState } from 'react';

const App = () => {
  const [studentInfo, setStudentInfo] = useState([
    { id: 1, name: 'S1', marks: 90, class: 'MCA 3rd C', result: 'failed' },
    { id: 2, name: 'S1', marks: 90, class: 'MCA 3rd C' },
    { id: 3, name: 'S1', marks: 90, class: 'MCA 3rd C' },
    { id: 4, name: 'S1', marks: 90, class: 'MCA 3rd C', result: 'passed' },
  ]);

  const updateInfo = () => {
    setStudentInfo((prevStudent) =>
      prevStudent.map((row) => ({
        ...row,
        name: 'Name' + row.id,
      }))
    );
  };

  return (
    <div>
      <h2>List Of Students:</h2>

      {studentInfo.map((row) => (
        <div key={row.id}>
          <h2>
            ID: {row.id}, Name: {row.name}, Marks: {row.marks}
            {row.result && <b> Result: {row.result}</b>}
          </h2>
        </div>
      ))}

      <button onClick={updateInfo}>Update Names</button>
    </div>
  );
};

export default App;