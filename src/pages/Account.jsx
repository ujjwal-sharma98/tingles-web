import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { Button, Card, CardContent, Typography, Box } from '@mui/material';

const plans = [{
    name: 'Silver',
    value: 'silver',
    cost: 500,
    currency: 'INR',
}, {
    name: 'Gold',
    value: 'gold',
    cost: 800,
    currency: 'INR',
}]

const Account = () => {

    const [isUserPremium, setIsUserPremium] = useState(false);

    useEffect(() => {
        verifyPremiumUser();
    }, []);

    const verifyPremiumUser = async () => {
        const res = await axios.get(BASE_URL + "/premium/verify", {
            withCredentials: true,
        });

        if (res.data.isPremium) {
            setIsUserPremium(true);
        }
    };

    const handleBuyClick = async (type) => {
        const order = await axios.post(
            BASE_URL + "/payment/create",
            {
                membershipType: type,
            },
            { withCredentials: true }
        );

        const { amount, keyId, currency, notes, orderId } = order.data;

        const options = {
            key: keyId,
            amount,
            currency,
            name: "Tingles",
            description: "Connect to people",
            order_id: orderId,
            prefill: {
                name: notes.firstName + " " + notes.lastName,
                email: notes.emailId,
                // contact: "9999999999",
            },
            theme: {
                color: "#F37254",
            },
            handler: verifyPremiumUser,
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <div>
            <Card>
                <CardContent> {isUserPremium ? ("You're are already a premium user") : (<>
                    <Typography variant="h5" component="h2">
                        Select a Plan!
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
                                    onClick={() => handleBuyClick(plan.name)}
                                >
                                    Pay Now
                                </Button>
                            </Box>
                        </Card>
                        ))}
                    </div>
                </>
                )}
                </CardContent>
            </Card>
        </div>
    );
};

export default Account;