import React, { useEffect, useState } from "react";
import { UserContext } from "../App";

function ComponentC() {

    return (
        <div>
            <UserContext.Consumer>
                {
                    user =>{
                        return(
                            <div>
                                This is {user} from component C.
                            </div>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}
export default ComponentC;