import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";

export default class ArchivePage extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <main>
          <section className="archives-page">
            <h2>Catatan Arsip</h2>
            <SearchBar />
            <section className="notes-list-empty">
              <p className="notes-list__empty">Tidak Ada Catatan</p>
            </section>
          </section>
        </main>
      </div>
    );
  }
}
