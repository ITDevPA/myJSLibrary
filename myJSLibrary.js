var myDate = new Date();


    function getInnerDiv(){

      alert(document.getElementById("div1").innerHTML);
    }

    function getNumbers(){
      return prompt("Please enter num", 0);

    }

    function setLocation()
    {
      location.href = prompt("Please enter location", "http://www.google.com");

    }
    function replaceLocation()
    {
      location.replace( prompt("Please enter location", "http://www.google.com"));

    }
    function reloadThis(){
    //  alert(document.getElementById("trueReload").checked);
      location.reload(document.getElementById("trueReload").checked);
    }
    function goTo(){
      var numPage = getNumbers();
      if (numPage == 0 ) {alert('abort') ; return; }

      if(numPage)
      history.go(numPage);

    }
    function goPrev(){
      history.back();

    }
    function goFwd(){
      history.forward();
    }

    function setInnerDiv(){

      document.getElementById("div1").innerHTML="<p style='background=red'>nuovo valore del par</p>" ;
      alert("You've visited " + history.length + " web pages in this browser session");
    }

    function getDate(){

      //var myDate = new Date();
      return myDate;
    }

    function getYear(){
      return myDate.getFullYear();
    }
    function getMonth(){
      return myDate.getMonth();
    }
    function getDay(){
      return myDate.getDay();
    }
    function getHours(){
      return myDate.getHours();
    }
    function getMinutes(){
      return myDate.getMinutes();
    }
    function getSeconds(){
      return myDate.getSeconds();
    }



    function getNavigatorInfo(){

      document.write("<table>");
      document.write("<tr><td>appName</td><td>"+navigator.appName + "</td></tr>");
      document.write("<tr><td>appCodeName</td><td>"+navigator.appCodeName + "</td></tr>");
      document.write("<tr><td>appVersion</td><td>"+navigator.appVersion + "</td></tr>");
      document.write("<tr><td>language</td><td>"+navigator.language + "</td></tr>");
      document.write("<tr><td>cookieEnabled</td><td>"+navigator.cookieEnabled + "</td></tr>");
      document.write("<tr><td>cpuClass</td><td>"+navigator.cpuClass + "</td></tr>");
      document.write("<tr><td>onLine</td><td>"+navigator.onLine + "</td></tr>");
      document.write("<tr><td>platform</td><td>"+navigator.platform + "</td></tr>");
      document.write("<tr><td>No of Plugins</td><td>"+navigator.plugins.length + "</td></tr>");
      document.write("<tr><td>No of Plugins</td><td>"+navigator.platform + "</td></tr>");

      document.write("</table>");


    }
