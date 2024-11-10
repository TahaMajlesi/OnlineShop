let commentsList = []
let resultComments = '';


$(document).ready(function() {

    fetch('https://dummyjson.com/comments?limit=10').then((res) => res.json()).then((data) => {

        data["comments"].forEach(element => {
            commentsList.push(`<li class="text-lg">${element["user"]["fullName"]} : ${element["body"]}</li>`)


        });
        for (let i = 0; i < commentsList.length; i++) {
            resultComments += commentsList[i];
            if (i < commentsList.length - 1) {
                resultComments += ' '; // Add space between elements
            }
        }


    })

})