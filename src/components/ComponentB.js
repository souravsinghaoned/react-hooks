import React, { useEffect, useState } from "react";
import ComponentC from "./ComponentC";


function ComponentB() {
    
    return (
        <div>
           <h3>This is component B</h3>
           <ComponentC/>
        </div>
    )
}
export default ComponentB;