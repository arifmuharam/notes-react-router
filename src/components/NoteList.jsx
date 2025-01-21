import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList() {
  return (
    <section className="notes-list">
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
    </section>
  );
}
