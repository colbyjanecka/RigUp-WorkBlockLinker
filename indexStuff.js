document.getElementById("wbid").focus();

var input = document.getElementById("wbid");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("openWB").click();
  }
});

function showIndex() {
    var id = document.getElementById("wbid").value;
    var base = "https://app.rigup.com/admin/#/endeavor/work_blocks/";
    var url = base.concat(id);
    chrome.tabs.create({
        url: url
    });
}

document.getElementById('openWB').addEventListener("click", showIndex);
