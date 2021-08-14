<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'vendor/autoload.php';
\Stripe\Stripe::setApiKey('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

header('Content-Type: application/json');

// $YOUR_DOMAIN = 'https://englishthroughfootball.netlify.app/';
$YOUR_DOMAIN = 'https://englishthroughfootball.com/';

$checkout_session = \Stripe\Checkout\Session::create([
    'payment_method_types' => ['wechat_pay', 'alipay', 'card'],
    'payment_method_options[wechat_pay][client]' => 'web',
    'line_items' => [
        [
            'price_data' => [
                'currency' => 'cny',
                //'payment_method_types' => ['alipay'],
                'unit_amount' => $_POST['price'] * 100,
                'product_data' => [
                    'name' => 'Learn English Through Football',
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
