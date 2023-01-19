import React, { useState, useEffect } from 'react';
import ListCast from './components/ListCast';
import Modals from './components/Modals';
import Nav from './components/Nav';

function App() {
  let [memberInfo, setMemberInfo] = useState(null);
  const [cast, setCast] = useState([]);

  async function fetchCast() {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  });

  return (
    <>
      <Nav cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
      <div className="container">
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <h1>Meet the Stargazers</h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <ListCast cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
          {memberInfo &&
            <Modals 
                    member={memberInfo} 
                    cast={cast} 
                    handleClose={() => setMemberInfo(null)}
                    handlePrevNext={(idx) => setMemberInfo(cast[idx])} />
          }
        </hgroup>
      </div>
    </>
  )
}
export default App
