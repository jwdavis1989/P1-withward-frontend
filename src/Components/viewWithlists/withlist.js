import React from 'react';

const Withlist = ({ withlist }) => {
console.log(withlist);
   return (
      <tr>
         <td>{withlist.id}</td>
         <td>{withlist.title}</td>
         <td>{withlist.description}</td>
      </tr>
   )
}

export default Withlist;