import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

import css from "./Contact.module.css";

export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <div className={css.item}>
      <div>
        <p className={css.name}>
          <IoPerson className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
