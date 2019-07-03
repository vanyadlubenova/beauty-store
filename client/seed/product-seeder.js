var Product = require('../../models/Product');
var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/shopping");

var products = [
new Product({
    id: 1,
    title: "MAC Cosmetics Cremeblend Blush",
    img: "img/product-1.png",
    price: 10,
    company: "MAC",
    info:
      "A totally new texture, this soft-crème blush instantly blends into cheeks to create a glow-from-within translucent radiance. Featuring highly translucent pearls with coated pigment technology that prevents color from getting dark or dull throughout wear. Available in 8 shades.",
    inCart: false,
    count: 0,
    total: 0,
    quantity: 100
}),
new Product({
    id: 2,
    title: "MAC Buildable Coverage Matte Lipstick",
    img: "img/product-2.png",
    price: 16,
    company: "MAC",
    info:
      "Load your lips with plush, pigment-rich color choosing from 12 brand new shades of Matte Lipstick—our shockingly smooth lip color that glides right on and stays in place with a silky matte finish that never feels dry. Now available in a range of fresh new hues, these playful pops of color are just what your spring wardrobe needs!",
    inCart: false,
    count: 0,
    total: 0,
    quantity: 100
}),
new Product({
    id: 3,
    title: "Revlon Eyes, Cheeks + Lips Pallet",
    img: "img/product-3.png",
    price: 8,
    company: "Revlon",
    info:
      "The proprietary blend of ingredients allows color to weave itself through the Eyeshadow formula. ... Color that stays on your lids. And a velvety, suede-like smoothness and blendability.",
    inCart: false,
    count: 0,
    total: 0,
    quantity: 100
}),
new Product({
    id: 4,
    title: "Maybelline Lash Sensational Washable Mascara",
    img: "img/product-4.png",
    price: 18,
    company: "Maybelline",
    info:
      "Curling, lengthening, thickening, and volumizing formulas give you the tools to put on the perfect lash from full fan effects to pushed up scene stealers.",
    inCart: false,
    count: 0,
    total: 0,
    quantity: 100
}),
new Product({
    id: 5,
    title: "Catrice | HD Liquid Foundation",
    img: "img/product-5.png",
    price: 24,
    company: "Catrice",
    info:
      "Catrice has sheer, medium, and full coverage foundation for dry, combination, normal or oily skin. Longwear, hydrating, dewy and matte foundation formulas to help you create a perfect canvas from breakfast to bedtime.",
    inCart: false,
    count: 0,
    total: 0,
    quantity: 100
}),
new Product({
    id: 6,
    title: "NYX PROFESSIONAL MAKEUP High Definition",
    img: "img/product-6.png",
    price: 17,
    company: "NYX",
    info:
      "A high definition, lightweight blush that blends evenly! Coral with gold iridescence. Use a powder or blush brush to apply lightly to the apples of the cheeks.",
    inCart: false,
    count: 0,
    total: 0,
    quantity: 100
}),
new Product({
    id: 7,
    title: "Ellen Tracy Five Face Essential Brush Collection",
    img: "img/product-7.png",
    price: 30,
    company: "Ellen Tracy",
    info:
      "Ellen Tracy five piece face essential brush collection contains everything you need to apply powders, creams and liquids and achieve flawless results every time.",
    inCart: false,
    count: 0,
    total: 0,
    quantity: 100
}),
new Product({
    id: 8,
    title: "Beauty Makeup Sponges Blender Makeup Egg",
    img: "img/product-8.png",
    price: 2,
    company: "SHIH SHUMS",
    info:
      "Makeup sponges for all kinds of cosmetics, foundation, BB cream, powder, concealer, isolation, liquid, etc. Made from non-latex material, Minimal absorption with maximum coverage and made to last! Minimum water retention ensures that your sponge only holds what is necessary for flawless application.",
    inCart: false,
    count: 0,
    total: 0,
    quantity: 100
})
];

var done = 0;
for(var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if(done == products.length){
            exit();
        }
    });
}
function exit() {
    mongoose.disconnect();
}

