import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import warningIcon from "../../assets/icons/warning.svg";

import "./styles.css";

function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: "",
      to: "",
    },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: "",
        to: "",
      },
    ]);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Wanna teach? Join us!"
        description="Register as a teacher by filling the form below."
      />

      <main>
        <fieldset>
          <legend>Teacher information</legend>

          <Input name="name" label="Full name" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biography" />
        </fieldset>

        <fieldset>
          <legend>Class information</legend>

          <Select
            name="subject"
            label="Subject"
            options={[
              { value: "Math", label: "Math" },
              { value: "Sciences", label: "Sciences" },
              { value: "Geography", label: "Geography" },
              { value: "English", label: "English" },
              { value: "History", label: "History" },
              { value: "Philosofy", label: "Philosofy" },
              { value: "Physics", label: "Physics" },
              { value: "Programming", label: "Programming" },
            ]}
          />

          <Input name="cost" label="Hour rate" />
        </fieldset>

        <fieldset>
          <legend>
            Availability
            <button type="button" onClick={addNewScheduleItem}>
              + New Time
            </button>
          </legend>

          {scheduleItems.map((scheduleItem) => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  name="week_day"
                  label="Weekday"
                  options={[
                    { value: "0", label: "Sunday" },
                    { value: "1", label: "Monday" },
                    { value: "2", label: "Tuesday" },
                    { value: "3", label: "Wednesday" },
                    { value: "4", label: "Thursday" },
                    { value: "5", label: "Friday" },
                    { value: "6", label: "Saturday" },
                  ]}
                />
                <Input name="from" label="From" type="time" />
                <Input name="to" label="To" type="time" />
              </div>
            );
          })}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Important reminder!" />
            Important! <br />
            All fields must be completed for your registration!
          </p>
          <button type="button">Register</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
