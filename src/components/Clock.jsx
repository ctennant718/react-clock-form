import React from "react";

const locales = ["en-GB"];

function Clock({
  date,
  locale = locales,
  // locale = navigator.languages[0] for current users locale
  options = { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" },
}) {
  const formatter = Intl.DateTimeFormat(locale, options);
  return (
    <>
      <dl>
        <dt className="locale">Locale: {locale}</dt>
        <dd className="time">Current date and time: {formatter.format(date)}</dd>
      </dl>
    </>
  );
}

export default Clock;
