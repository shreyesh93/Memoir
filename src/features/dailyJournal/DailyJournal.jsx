
import React, { useState, useEffect } from "react";
import "./DailyJournal.css";

const DailyJournal = () => {
  const [text, setText] = useState("");

  // Load saved journal entries from localStorage
  const [journalEntry, setJournalEntry] = useState(() => {
    const savedEntries = localStorage.getItem("journalEntry");

    return savedEntries ? JSON.parse(savedEntries) : [];
  });

  // Save journal entries whenever they change
  useEffect(() => {
    localStorage.setItem(
      "journalEntry",
      JSON.stringify(journalEntry)
    );
  }, [journalEntry]);

  function handleJournalToday(text) {
    if (!text.trim()) return;

    setJournalEntry([
      ...journalEntry,
      {
        id: crypto.randomUUID(),
        task: text.trim(),
        date: new Date().toLocaleDateString(),
        toggled: false,
      },
    ]);

    setText("");
  }

  function handleToggleJournalToday(id) {
    setJournalEntry(
      journalEntry.map((item) =>
        item.id === id
          ? { ...item, toggled: !item.toggled }
          : item
      )
    );
  }

  return (
    <div className="daily-journal">
      {/* Header */}
      <header className="journal-header">
        <h1>Daily Journal 📓</h1>
        <p>Self-Discovery and Reflection</p>
      </header>

      {/* Journal input */}
      <section className="journal-card">
        <label htmlFor="DT">How was your day?</label>

        <textarea
          name="DT"
          id="DT"
          className="journal-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write about your day, thoughts, and feelings..."
        />

        <div className="journal-actions">
          <span className="journal-count">
            {text.length} characters
          </span>

          <button
            className="journal-button"
            onClick={() => handleJournalToday(text)}
          >
            Journal Today
          </button>
        </div>
      </section>

      {/* Journal history */}
      <section className="journal-history">
        <h2>Journal History</h2>

        {journalEntry.length === 0 ? (
          <p className="journal-empty">
            No journal entries yet. Write about your day!
          </p>
        ) : (
          <ol className="journal-list">
            {journalEntry.map((item) => (
              <li className="journal-item" key={item.id}>
                <button
                  className={`journal-date ${
                    item.toggled ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleToggleJournalToday(item.id)
                  }
                  aria-expanded={item.toggled}
                >
                  <span>{item.date}</span>
                  <span className="journal-arrow">
                    {item.toggled ? "−" : "+"}
                  </span>
                </button>

                {item.toggled && (
                  <p className="journal-entry-text">
                    {item.task}
                  </p>
                )}
              </li>
            ))}
          </ol>
        )}
      </section>
    </div>
  );
};

export default DailyJournal;
