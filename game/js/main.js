var postNo = 0;

$(document).ready(function() {
      changePost();
});

function addToPost() {
      postNo++;
      changePost();
}
function addFiveToPost() {
      postNo = postNo+5;
      changePost();
}
function lessFromPost() {
      postNo--;
      changePost();
}
function lessFiveFromPost() {
      postNo = postNo-5;
      changePost();
}

function changePost() {
      $.getJSON("https://www.reddit.com/r/FiftyFifty/new/.json?limit=100", function(response) {
            var title = response.data.children[postNo].data.title;
            var sep;
            for(var i=0;i<title.length;i++){
                  if(title.charAt(i)==="|"){
                        sep=i;
                  }
            }
            var firstTitle = title.substring(7,sep);
            var secondTitle = title.substring(sep+1,title.length);
            $("#firstInput").html(firstTitle);
            $("#secondInput").html(secondTitle);
            var fiftyLink = response.data.children[postNo].data.url;
            $("#goBtn").attr("href", fiftyLink);
      });
}
