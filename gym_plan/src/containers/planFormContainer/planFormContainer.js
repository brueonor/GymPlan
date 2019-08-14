import React from 'react';
import IdentificationPlanFormContainer from '../identificationPlanFormContainer/identificationPlanFormContainer';
import ExerciceItem from '../../components/exerciceItem/ExerciceItem';


function PlanFormContainer() {
    return (
        <React.Fragment>
           <IdentificationPlanFormContainer/>
           <ExerciceItem/>
        </React.Fragment>
    );
}

export default PlanFormContainer;