import React from 'react';

const Accordion = ({ items }) => {
  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          className="title active"
          onClick={() => console.log('Title Clicked.', index)}
        >
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
