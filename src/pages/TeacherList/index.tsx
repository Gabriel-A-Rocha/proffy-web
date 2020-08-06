import React from "react";

import TeacherItem from "../../components/TeacherItem";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Select from "../../components/Select";

import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the proffy teachers">
        <form id="search-teachers">
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

          <Input type="time" name="time" label="Time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
