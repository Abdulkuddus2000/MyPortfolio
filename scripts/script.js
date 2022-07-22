// mijn leeftijd laten berekenen
function getAge(dateString) {
    const birthDate = new Date(dateString);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear(); // 2022 - 2000 = 22 
    const month = today.getMonth() - birthDate.getMonth(); /* 07 - 06 = 1 */

    if (month < 0 || (month === 0 && today.getDate < birthDate.getDate())) {
        age--;
    }

    return age;
}

document.getElementById("myAge").innerHTML = getAge("1 Jun 2000");