const fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant suprise.",
    "Whenever possible, keep it simple.",
];

exports.getFortune = () => {
    const idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
};