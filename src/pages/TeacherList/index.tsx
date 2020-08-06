import React from "react";

import TeacherItem from "../../components/TeacherItem";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the proffy teachers">
        <form id="search-teachers">
          <Input name="subject" label="Subject" />
          <Input name="week_day" label="Weekday" />
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
