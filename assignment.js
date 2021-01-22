//  https://github.com/md-fahim18/fahim_complete_web_dev_assignment_3



// -------------------------------------------kilometerToMeter_Part----------------------------------


function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        console.log("Distance Can't be Negative.");
    }
    else {
        var meter = kilometer * 1000;
    }
    return meter;
}



// -------------------------------------------budgetCalculator_Part--------------------------------


function budgetCalculator(totalWatch, totalMobile, totalLaptop) {
    if (totalWatch < 0 || totalMobile < 0 || totalLaptop < 0) {
        console.log("Math Error");
    }
    else {
        var overallBudget = totalWatch * 50 + totalMobile * 100 + totalLaptop * 500;

    }
    return overallBudget;
}



// -------------------------------------------hotelCost_Part-----------------------------------------

function hotelCost(daySpent) {
    var overallCost = 0;
    if (daySpent < 0) {
        console.log("This Value Can't Be Negative")
    }
    else if (daySpent <= 10) {
        overallCost = daySpent * 100;
    } else if (daySpent <= 20) {
        var firstStep = 10 * 100;
        var remaining = daySpent - 10;
        var secondStep = remaining * 80;
        overallCost = firstStep + secondStep;
    }
    else {
        var firstStep = 10 * 100;
        var secondStep = 10 * 80;
        var remaining = daySpent - 20;
        var thirdStep = remaining * 50;
        overallCost = firstStep + secondStep + thirdStep;
    }
    return overallCost;
}

// -------------------------------megaFriend_Part-----------------------------------------


function megaFriend(friendList) {
    var largestWord = friendList[0];
    for (i = 0; i < friendList.length; i++) {
        var element = friendList[i];
        if (element.length > largestWord.length) {
            largestWord = element;
        }
    }
    return largestWord;
}
var result = megaFriend(["mehedi", "adib", "nurunnobi", "farhan"]);
console.log(result);





// ------------------------------------END------------------------------