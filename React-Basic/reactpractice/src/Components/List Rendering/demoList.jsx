import React from 'react';

export default function NameList() {
    const names=['list','rendering']
  return(
<div>
    {
        names.map(name=><h2>{name}</h2>)
    }
</div>
  ) 
}
