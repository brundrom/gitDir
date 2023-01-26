var number = Math.trunc(Math.random() * 10)

let affirmationsSet = [
    "It's okay to take time to myself",                                         //0
    "I am fo much stronger than I think",                                       //1
    "I let go of things that I have no control over",                           //2
    "I am free to ask others for help when I need it",                          //3
    "I make my needs a priority because I am my priority",                      //4
    "I am worthy without conditions",                                           //5
    "I am creating the life i want to live",                                    //6
    "I give myself permission to leave the older versions of me in the past",   //7
    "I refuse to let anyone take advantage of me",                              //8
    "I learning my own value"                                                   //9
]

const giveAffirmation = function (number) {
    document.write(affirmationsSet[number]);
}

giveAffirmation(number)