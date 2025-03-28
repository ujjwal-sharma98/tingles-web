import React from 'react';
import { Button, Card, CardContent, Typography, Box } from '@mui/material';

const plans = [{
    name: 'Silver',
    cost: 1000,
    currency: 'Rupees',
}, {
    name: 'Gold',
    cost: 1500,
    currency: 'Rupees',
}]

const Account = () => {

    const handlePlanSelection = (plan) => {
        console.log(`Selected ${plan} plan`);
    };

    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Select a Plan
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        {plans.map((plan, index) => (<Card key={index} sx={{ width: 300, height: 200, display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: '20px' }}>
                            <CardContent>
                                <Typography variant="h6" component="h3">
                                    {plan.name} Plan
                                </Typography>
                                <Typography color="textSecondary">
                                    Cost: {plan.cost} {plan.currency}
                                </Typography>
                            </CardContent>
                            <Box sx={{ p: 2, mt: "auto" }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    onClick={() => handlePlanSelection(plan.name)}
                                >
                                    Pay Now
                                </Button>
                            </Box>
                        </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Account;