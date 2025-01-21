import React from "react";

export default function NoteItem() {
  return (
    <article className="note-item">
      <h3 className="note-item__title">
        <a href="">Babel</a>
      </h3>
      <p className="note-item__createdAt">Kamis</p>
      <p className="note-item__body">Babel merupakn</p>
    </article>
  );
}
