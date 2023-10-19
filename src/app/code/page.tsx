'use client';

import { useState } from 'react';
import Title from './title';
import { codeList } from '@/config/frame';
import Custom from './custom';

export default function Code() {
  const [query, setQuery] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [custom, setCustom] = useState<Custom | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setQuery(e.target.value);
  };

  const checkCode = () => {
    if (!query) return setError('Enter the code.');

    const isCode = codeList.hasOwnProperty(query);
    if (isCode) {
      setCustom(codeList[query]);
    } else {
      setCustom(null);
      setError('Please check the code.');
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      checkCode();
    }
  };

  return (
    <div className="body-container">
      {!custom ? (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_5fr]">
          <Title title={'CODE'} />
          <div className="w-full min-h-[80vh] flex-center flex-col">
            <div>
              <input
                type="text"
                onChange={handleChange}
                onKeyDown={handleKey}
                className="w-[300px] md:w-[500px] border-b-2 border-slate-500 text-5xl font-thin text-center"
              />
              <button onClick={checkCode} className="text-5xl text-slate-500">
                ↲
              </button>
            </div>
            <div className="flex-center text-2xl font-thin text-rose-500 h-[100px]">
              {error}
            </div>
          </div>
        </div>
      ) : (
        <Custom custom={custom} />
      )}
    </div>
  );
}
