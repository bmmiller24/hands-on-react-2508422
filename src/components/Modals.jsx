import { useState, useEffect } from "react"

export default ({cast, member, handleClose, handlePrevNext}) => {
  
  return (
    <dialog id="modal-member" open>
      <a href="#" 
         onClick={(event) => {
          event.preventDefault();
          let memberIdx = Number(member.id);
          { if(memberIdx > 0){
             handlePrevNext(memberIdx - 1);
            }
            else {
              handlePrevNext(cast.length - 1);
            } 
          }
          return false;
         }} 
         role="button"><span className="material-symbols-outlined">arrow_back</span></a>

      <article>
        <a href="#close" 
           aria-label="Close"
           className="close"
           data-target="modal-member"
           onClick={handleClose}
        ></a>
        <hgroup>
          <div style={{
            display: "flex",
            gap: '1rem'
          }}>
            <img style={{ width: '200px' }} 
                 src={`images/${member.slug}.svg`} 
                 alt={member.name} />
            <hgroup>
              <h1>{member.name}</h1>
              <p>{member.bio}</p>
            </hgroup>
          </div>
        </hgroup>
      </article>
      
      <a href="#"
         onClick={(event) => {
          event.preventDefault();
          let memberIdx = Number(member.id);
          { if (memberIdx < (cast.length - 1)) {
              handlePrevNext(memberIdx + 1);
            }
            else {
              handlePrevNext(0);
            }
          }
          return false;
         }} 
         role="button"><span className="material-symbols-outlined">arrow_forward</span></a>
    </dialog>
  ) 
}