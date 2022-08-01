import React from 'react'


const fetchData = () => new Promise((resolve, reject) => setTimeout(() => resolve(Date.now()), 100));

const Test = () => {

  const [ result , setResult ] = React.useState();
  const data = fetchData().then((value) => setResult(value));

  return (
    <div>
      <div>
        { result === data.toString() ? (
          <div>hello</div>
        ) : (
          <div>good bye</div>
        )}
      </div>
    </div>
  )
}

export default Test