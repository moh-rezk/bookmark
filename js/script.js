var markBookName = document.getElementById("markBookName");
var urlLink = document.getElementById("urlLink");
var bookmark;
if (localStorage.getItem("bookmarkSave") == null) {
    bookmark = [];
} else {
    bookmark = JSON.parse(localStorage.getItem("bookmarkSave"));
    displayBookMark();

}

function addBookMark() {
    bookmarkElement = {

        name: markBookName.value,
        url: urlLink.value
    }



    var urlAlert = `
        
    <div class="alert alert-danger w-75 m-auto" role="alert">
    <div class="w-75 m-auto ">  <h6 class="  text-center"> inter URL! </h6></div>
                  </div>
    `;

    var nameAlert = `
        
    <div class="alert alert-danger w-75 m-auto" role="alert">
                 <div class="w-75 m-auto ">  <h6 class="  text-center"> inter name of book mark! </h6></div>
                  </div>
    `;



    if (markBookName.value == "" && urlLink.value == "") {


        document.getElementById("nameAlert").innerHTML = nameAlert;

        document.getElementById("urlAlert").innerHTML = urlAlert;
    } else if (markBookName.value == "") {


        document.getElementById("nameAlert").innerHTML = nameAlert;


    } else if (urlLink.value == "") {
        
        document.getElementById("urlAlert").innerHTML = urlAlert;


    }
    else {

        bookmark.push(bookmarkElement);
        localStorage.setItem("bookmarkSave", JSON.stringify(bookmark));
        displayBookMark();
        clear();

    }

}

function displayBookMark() {

    var htmlElement = "";
    for (i = 0; i < bookmark.length; i++) {

        htmlElement += `
        
        <div class=" col-sm-6 bg-color-items my-3 p-2" id="`+ bookmark[i].name + `">
                <h2 class="d-inline">`+ bookmark[i].name + `</h2>
               
            </div>
            <div class=" col-sm-6 bg-color-items my-3 p-2">
            <a class="btn btn-primary text-center" href="https://${bookmark[i].url}" target="_blank">visit</a>
            <button class="btn btn-danger text-center " onclick="deleteItem(`+ i + `)" >Delete</button>
            </div>


        
        
        `
    }
    document.getElementById("addInHtml").innerHTML = htmlElement;

}

function clear() {

    markBookName.value = "";
    urlLink.value = "";
}


function deleteItem(deleteItem) {

    bookmark.splice(deleteItem, 1);
    localStorage.setItem("bookmarkSave", JSON.stringify(bookmark));
    displayBookMark();

}