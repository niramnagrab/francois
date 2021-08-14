<?php

require 'vendor/autoload.php';
\Stripe\Stripe::setApiKey('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

header('Content-Type: application/json');

$YOUR_DOMAIN = 'https://englishinspiredbyfootball.com/';

$checkout_session = \Stripe\Checkout\Session::create([
    'payment_method_types' => ['card'],
    'line_items' => [
        [
            'price_data' => [
                'currency' => 'usd',
                'unit_amount' => $_POST['price'] * 100,
                'product_data' => [
                    'name' => 'Dhaka bangladesh',
                    'images' => [
                        'https://englishthroughfootball.com/static/media/hero-teacher-computer.5dc4e0f6.png',
                    ],
                ],
            ],
            'quantity' => 1,
        ],
    ],
    'mode' => 'payment',
    'success_url' => $YOUR_DOMAIN . '?success=true',
    'cancel_url' => $YOUR_DOMAIN . '?canceled=true',
]);

header('HTTP/1.1 303 See Other');
header('Location: ' . $checkout_session->url);
