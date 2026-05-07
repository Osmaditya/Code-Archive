import { useState } from "react"

export default function Counter(){
        let [Count , setCount] = useState(0);   //count = current value  & setCount() = updates value //UI re-renders automatically

        // function incCount(){

        //     // console.log(Count);
        //     setCount(Count + 1);
        // }
        function incCount(){

            setCount((currCount) => {       //State updates can be asynchronous so use
                                            //callback in updater fn
                return currCount + 1;
            });
            setCount((currCount) => {
                return currCount + 1;
            });
        }

        return (
            <div>
                <h3>Count = {Count}</h3>
                <button onClick={incCount}>Increse Count</button>
            </div>
        )
}