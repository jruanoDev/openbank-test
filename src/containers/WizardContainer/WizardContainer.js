import React from 'react';
import ProductInformation from '../../views/ProductInformation/ProductInformation';

import './WizardContainer.scss';

const WizardContainer = () => {
    return (
        <div className="Wizard">
            <div className="Wizard-header">
                {/* Stepper */}
            </div>
            <div className="Wizard-content">
                <ProductInformation />
            </div>
        </div>
    )
};

export default WizardContainer;