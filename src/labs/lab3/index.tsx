import { ArrowFunctions } from "./ArrowFunctions";
import { BooleanVariables } from "./BooleanVariables";
import { ConditionalOutputIfElse } from "./ConditionalOutputIfElse";
import { ConditionalOutputInline } from "./ConditionalOutputInline";
import { IfElse } from "./IfElse";
import { ImpliedReturn } from "./ImpliedReturn";
import LegacyFunctions from "./LegacyFunctions";
import TemplateLiterals from "./TemplateLiterals";
import { TernaryOperator } from "./TernaryOperator";
import { VariablesAndConstants } from "./VariablesAndConstants";
import { VariableTypes } from "./VariableTypes";

export const Lab3 = () => {
    return (
        <div id="wd-lab3" className="container-fluid">
            <h2>Lab 3</h2>
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOperator />
            <ConditionalOutputIfElse />
            <ConditionalOutputInline />
            <LegacyFunctions />
            <ArrowFunctions />
            <ImpliedReturn />
            <TemplateLiterals />
        </div>
    );
}

