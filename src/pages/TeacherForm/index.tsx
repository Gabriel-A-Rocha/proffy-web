import React from "react";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import warningIcon from "../../assets/icons/warning.svg";

import "./styles.css";

function TeacherForm() {
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
              { value: "Science", label: "Science" },
              { value: "Geography", label: "Geography" },
              { value: "English", label: "English" },
              { value: "History", label: "History" },
            ]}
          />

          <Input name="cost" label="Hour rate" />
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
