function Spørsmål (text, choices, answer) {
    this.text=text;
    this.choices = choices;
    this.answer = answer;
}

Spørsmål.prototype.correctAnswer = function (choice) {
    return choice === this.answer;
}
