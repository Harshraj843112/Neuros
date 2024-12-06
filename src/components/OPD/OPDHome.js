import React from 'react';
import HeaderOPD from './HeaderOPD';
import ProcessStepsOPD from './ProcessStepsOPD';
import BenefitsOPD from './BenefitsOPD';

const OPDHome = () => (
    <div className="w-full p-8 space-y-8">
        <HeaderOPD />
        <ProcessStepsOPD />
        <BenefitsOPD />
    </div>
);
export default OPDHome;