

 
 function getRoundamQuote(){
    var Quote=[
        {
            quote :'“Be yourself; everyone else is already taken.”',
            authar:' --Oscar Wilde'
        },
        {
            quote :'“So many books, so little time.”',
            authar:' --Frank Zappa'
        },
        {
            quote :'“A room without books is like a body without a soul.”',
            authar:'--Marcus Tullius Cicero'
        },
        {
            quote :'“You only live once, but if you do it right, once is enough.”',
            authar:'--Mae West'
        },
        {
            quote :'“Be the change that you wish to see in the world.”',
            authar:' --Mahatma Gandhi'
        }
    ];
    var result= Math.floor(Math.random() * Quote.length);
    document.getElementById("quote").innerHTML = Quote[result].quote;
    document.getElementById("authar").innerHTML = Quote[result].authar;

    return Quote;
 }






