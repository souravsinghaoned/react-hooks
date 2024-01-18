import React, { useEffect, useState } from "react";
import ComponentB from "./ComponentB";


function ComponentA() {
    
    return (
        <div>
           <h3>This is component A</h3>
           <ComponentB/>
        </div>
    )
}
export default ComponentA;