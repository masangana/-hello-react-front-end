import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from './redux/messageSlice';

export const Greeting = () => {
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessages());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {message.loading && <div>Loading...</div>}
      {!message.loading && message.error ? (
        <div>
          Error:
          {message.error}
        </div>
      ) : null}
      {!message.loading && message.messages.length ? (
        <ul>
            
          {message.messages.map((message) => (
            <li key={message.greeting}>
              <span>
                {message.greeting}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Greeting;