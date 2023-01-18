import { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  return (
    <button className="outline" onClick={() => setCount(count + 1)}>
      
      {count === 0 ? "Click to Support" : `Supported ${count} times`}
      
      {/* {(() => {
        if (count === 0) {
          return "Click to Support";
        }
        else {
          return `Supported ${count} times`;
        }
      })()} */}
    </button>
  )
}