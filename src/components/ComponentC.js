import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../App";
import { ChannelContext } from "../App";



function ComponentC() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            user - {user}, channel - {channel}
        </div>
    )
}
export default ComponentC;