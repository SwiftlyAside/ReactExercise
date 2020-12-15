//
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: '한국어',
    value: 'kr',
  },
  {
    label: '일본어',
    value: 'ja',
  },
  {
    label: '아랍어',
    value: 'ar',
  },
  {
    label: '힌디어',
    value: 'hi',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>텍스트를 입력하세요</label>
          <input value={text} onChange={event => setText(event.target.value)} />
        </div>
      </div>
      <Dropdown
        label="언어를 선택하세요"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">결과</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
