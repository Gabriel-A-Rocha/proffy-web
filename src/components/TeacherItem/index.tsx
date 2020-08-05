import React from "react";

import whatsappIcon from "../../assets/icons/whatsapp.svg";

import "./styles.css";

interface TeacherItemProps {}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/60102062?s=460&u=d46cf65e8d14695ff7ef324c1bc2d903d8248f24&v=4"
          alt="Gabriel Altair Rocha"
        />
        <div>
          <strong>Gabriel Rocha</strong>
          <span>Alien studies</span>
        </div>
      </header>

      <p>
        Expert in alien communications.
        <br />
        <br />
        Experienced several abductions and frequently talks with non human
        beings. Teached more than 15 people, who can now have a more fulfilling
        life by making friends from another galaxies.
      </p>

      <footer>
        <p>
          Price/hour
          <strong>U$ 45</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Contact teacher
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
