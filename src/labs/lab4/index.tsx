import { ArrayStateVariable } from "./ArrayStateVariable"
import { BooleanStateVariables } from "./BooleanStateVariables"
import { ClickEvent } from "./ClickEvent"
import { Counter } from "./Counter"
import { DateStateVariable } from "./DateStateVariable"
import { EventObject } from "./EventObject"
import { ObjectStateVariable } from "./ObjectStateVariable"
import { ParentStateComponent } from "./ParentStateComponent"
import { PassingDataOnEvent } from "./PassingDataOnEvent"
import { PassingFunctions } from "./PassingFunctions"
import { StringStateVariables } from "./StringStateVariables"

const sayHello = () => {
    alert("Hello")
}

export const Lab4 = () => {
    return (
        <div id="wd-lab4">
            <h2>Lab 4</h2>
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
        </div>
    )
}
