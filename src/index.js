module.exports = function toReadable(number) {
    let integers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
    let integers_two_length = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
    let round_numbers = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',]
    let number_str = number + ""
    if (number_str.length === 1) {
        return integers[number];
    } else if (number_str.length === 2 && number_str[0] === '1') {
        return integers[number];
    } else if (number_str.length === 2 && number_str[1] === '0' && number_str[0] !== '1') {
        return round_numbers[number_str[0]];
    } else if (number_str.length === 2 && number_str[1] !== '0' && number_str[0] !== '1') {
        return round_numbers[number_str[0]] + ' ' + integers[number_str[1]];
    } else if (number_str.length === 3 && number_str[1] === '0' && number_str[2] === '0') {
        return integers[number_str[0]] + ' ' + "hundred";
    } else if (number_str.length === 3 && number_str[1] === '0') {
        return integers[number_str[0]] + ' ' + "hundred" + ' ' + integers[number_str[2]];
    } else if (number_str.length === 3 && number_str[1] === '1') {
        return integers[number_str[0]] + ' ' + "hundred" + ' ' + integers_two_length[number_str[2]];
    } else if (number_str.length === 3 && number_str[1] !== '1' && number_str[2] === '0') {
        return integers[number_str[0]] + ' ' + "hundred" + ' ' + round_numbers[number_str[1]];
    } else if (number_str.length === 3 && number_str[1] !== '1' && number_str[1] !== '0') {
        return integers[number_str[0]] + ' ' + "hundred" + ' ' + round_numbers[number_str[1]] + ' ' + integers[number_str[2]];
    }
}
