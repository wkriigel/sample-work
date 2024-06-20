document.addEventListener("DOMContentLoaded", function () {
    var myj = {
        "html": "<div class=\"indicator invisible\"></div><div class=\"blockelem noselect block" +
                "\" style=\"left: 845px; top: 258px;\">\n                        <input type=\"" +
                "hidden\" name=\"blockelemtype\" class=\"blockelemtype\" value=\"1\">\n        " +
                "                \n                        <div class=\"sidebar-icon\">\n      " +
                "                      <span class=\"material-symbols-outlined\">dynamic_form</" +
                "span></div>\n                        \n                    <input type=\"hidde" +
                "n\" name=\"blockid\" class=\"blockid\" value=\"0\"><div class=\"blockyleft\"><" +
                "img src=\"assets/eyeblue.svg\"><p class=\"blockyname\">New drag visitor</p></d" +
                "iv><div class=\"blockyright\"><img src=\"assets/more.svg\"></div><div class=\"" +
                "blockydiv\"></div><div class=\"blockyinfo\">When a <span>new visitor</span> go" +
                "es to <span>Site 1xxx</span></div></div>",
        "blockarr": [
            {
                "parent": -1,
                "childwidth": 0,
                "id": 0,
                "x": 682,
                "y": 279,
                "width": 442,
                "height": 186
            }
        ],
        "blocks": [
            {
                "id": 0,
                "parent": -1,
                "data": [
                    {
                        "name": "blockelemtype",
                        "value": "1"
                    }, {
                        "name": "blockid",
                        "value": "0"
                    }
                ],
                "attr": [
                    {
                        "class": "blockelem noselect block"
                    }, {
                        "style": "left: 845px; top: 258px;"
                    }
                ]
            }
        ]
    };
    var rightcard = false;
    var tempblock;
    var tempblock2;
    // document     .getElementById("blocklist")     .innerHTML = '<div
    // class="blockelem create-flowy noselect"><input type="hidden" name="blocke' +
    // 'lemtype" class="blockelemtype" value="1"><div class="grabme"><img
    // src="assets/' +             'grabme.svg"></div><div class="blockin">
    // <div class="blockico"' +             '><span></span><img
    // src="assets/eye.svg"></div><div class="blocktext">         ' +             '
    // <p class="blocktitle">New set visitor</p><p class="blockdesc">Trigg' +
    // 'ers when somebody visits a specified page</p>        </div></div></div><div
    // cl' +             'ass="blockelem create-flowy noselect"><input type="hidden"
    // name="blockelemtype' +             '" class="blockelemtype" value="2"><div
    // class="grabme"><img src="assets/grabme.' +             'svg"></div><div
    // class="blockin">                    <div class="blockico"><spa' +
    // 'n></span><img src="assets/action.svg"></div><div class="blocktext">
    // ' +             '             <p class="blocktitle">Action is performed</p><p
    // class="blockdesc"' +             '>Triggers when somebody performs a
    // specified action</p></div></div></div><div ' +             'class="blockelem
    // create-flowy noselect"><input type="hidden" name="blockelemty' +
    // 'pe" class="blockelemtype" value="3"><div class="grabme"><img
    // src="assets/grabm' +             'e.svg"></div><div class="blockin">
    // <div class="blockico"><s' +             'pan></span><img
    // src="assets/time.svg"></div><div class="blocktext">           ' +
    // '             <p class="blocktitle">Time has passed</p><p
    // class="blockdesc">Tri' +             'ggers after a specified amount of
    // time</p>          </div></div></div><div cla' +             'ss="blockelem
    // create-flowy noselect"><input type="hidden" name="blockelemtype"' +
    // ' class="blockelemtype" value="4"><div class="grabme"><img
    // src="assets/grabme.s' +             'vg"></div><div class="blockin">
    // <div class="blockico"><span' +             '></span><img
    // src="assets/error.svg"></div><div class="blocktext">             ' +
    // '           <p class="blocktitle">Error prompt</p><p
    // class="blockdesc">Triggers' +             ' when a specified error
    // happens</p>              </div></div></div>';
    flowy(
        document.getElementById("canvas"),
        drag,
        release,
        snapping,
        undefined,
        40,
        40
    );
    function addEventListenerMulti(type, listener, capture, selector) {
        var nodes = document.querySelectorAll(selector);
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].addEventListener(type, listener, capture);
        }
    }
    function snapping(drag, first) {
        if (drag.querySelector(".grabme")) 
            drag
                .querySelector(".grabme")
                .parentNode
                .removeChild(drag.querySelector(".grabme"));
        if (drag.querySelector(".blockin")) 
            drag
                .querySelector(".blockin")
                .parentNode
                .removeChild(drag.querySelector(".blockin"));
        if (drag.querySelector(".blockelemtype").value == "1") {
            drag.innerHTML += "";
        } else if (drag.querySelector(".blockelemtype").value == "2") {
            drag.innerHTML += "<div class='blockyleft'><img src='assets/actionblue.svg'><p class='blockyname'" +
                    ">Action is performed</p></div><div class='blockyright'><img src='assets/more.s" +
                    "vg'></div><div class='blockydiv'></div><div class='blockyinfo'>When <span>Acti" +
                    "on 1</span> is performed</div>";
        } else if (drag.querySelector(".blockelemtype").value == "3") {
            drag.innerHTML += "<div class='blockyleft'><img src='assets/timeblue.svg'><p class='blockyname'>T" +
                    "ime has passed</p></div><div class='blockyright'><img src='assets/more.svg'></" +
                    "div><div class='blockydiv'></div><div class='blockyinfo'>When <span>10 seconds" +
                    "</span> have passed</div>";
        } else if (drag.querySelector(".blockelemtype").value == "4") {
            drag.innerHTML += "<div class='blockyleft'><img src='assets/errorblue.svg'><p class='blockyname'>" +
                    "Error prompt</p></div><div class='blockyright'><img src='assets/more.svg'></di" +
                    "v><div class='blockydiv'></div><div class='blockyinfo'>When <span>Error 1</spa" +
                    "n> is triggered</div>";
        } else if (drag.querySelector(".blockelemtype").value == "5") {
            drag.innerHTML += "<div class='blockyleft'><img src='assets/databaseorange.svg'><p class='blockyn" +
                    "ame'>New database entry</p></div><div class='blockyright'><img src='assets/mor" +
                    "e.svg'></div><div class='blockydiv'></div><div class='blockyinfo'>Add <span>Da" +
                    "ta object</span> to <span>Database 1</span></div>";
        } else if (drag.querySelector(".blockelemtype").value == "6") {
            drag.innerHTML += "<div class='blockyleft'><img src='assets/databaseorange.svg'><p class='blockyn" +
                    "ame'>Update database</p></div><div class='blockyright'><img src='assets/more.s" +
                    "vg'></div><div class='blockydiv'></div><div class='blockyinfo'>Update <span>Da" +
                    "tabase 1</span></div>";
        } else if (drag.querySelector(".blockelemtype").value == "7") {
            drag.innerHTML += "<div class='blockyleft'><img src='assets/actionorange.svg'><p class='blockynam" +
                    "e'>Perform an action</p></div><div class='blockyright'><img src='assets/more.s" +
                    "vg'></div><div class='blockydiv'></div><div class='blockyinfo'>Perform <span>A" +
                    "ction 1</span></div>";
        } else if (drag.querySelector(".blockelemtype").value == "8") {
            drag.innerHTML += "<div class='blockyleft'><img src='assets/twitterorange.svg'><p class='blockyna" +
                    "me'>Make a tweet</p></div><div class='blockyright'><img src='assets/more.svg'>" +
                    "</div><div class='blockydiv'></div><div class='blockyinfo'>Tweet <span>Query 1" +
                    "</span> with the account <span>@alyssaxuu</span></div>";
        } else if (drag.querySelector(".blockelemtype").value == "9") {
            drag.innerHTML += "<div class='blockyleft'><img src='assets/logred.svg'><p class='blockyname'>Add" +
                    " new log entry</p></div><div class='blockyright'><img src='assets/more.svg'></" +
                    "div><div class='blockydiv'></div><div class='blockyinfo'>Add new <span>success" +
                    "</span> log entry</div>";
        } else if (drag.querySelector(".blockelemtype").value == "10") {
            drag.innerHTML += "<div class='blockyleft'><img src='assets/logred.svg'><p class='blockyname'>Upd" +
                    "ate logs</p></div><div class='blockyright'><img src='assets/more.svg'></div><d" +
                    "iv class='blockydiv'></div><div class='blockyinfo'>Edit <span>Log Entry 1</spa" +
                    "n></div>";
        } else if (drag.querySelector(".blockelemtype").value == "11") {
            drag.innerHTML += "<div class='blockyleft'><img src='assets/errorred.svg'><p class='blockyname'>P" +
                    "rompt an error</p></div><div class='blockyright'><img src='assets/more.svg'></" +
                    "div><div class='blockydiv'></div><div class='blockyinfo'>Trigger <span>Error 1" +
                    "</span></div>";
        }

        return true;
    }
    function drag(block) {
        block
            .classList
            .add("blockdisabled");
        tempblock2 = block;
    }
    function release() {
        if (tempblock2) {
            tempblock2
                .classList
                .remove("blockdisabled");
        }
    }
    // document     .getElementById("close")     .addEventListener("click", function
    // () {         if (rightcard) {             rightcard = false;
    // document                 .getElementById("properties")
    // .classList                 .remove("expanded");
    // setTimeout(function () {                 document
    // .getElementById("propwrap")                     .classList
    // .remove("itson");             }, 300);             tempblock
    // .classList                 .remove("selectedblock");         }     });
    // document     .getElementById("removeblock")     .addEventListener("click",
    // function () {         flowy.deleteBlocks();     });
    document
        .getElementById("output")
        .addEventListener("click", function () {
            console.log(JSON.stringify(flowy.output()));
        });
    document
        .getElementById("import")
        .addEventListener("click", function () {
            console.log('loading');
            flowy.import (myj);
        });
    var aclick = false;
    var noinfo = false;
    var beginTouch = function (event) {
        aclick = true;
        noinfo = false;
        if (event.target.closest(".create-flowy")) {
            noinfo = true;
        }
    }
    var checkTouch = function (event) {
        aclick = false;
    }
    var doneTouch = function (event) {
        if (event.type === "mouseup" && aclick && !noinfo) {
            if (!rightcard && event.target.closest(".block") && !event.target.closest(".block").classList.contains("dragging")) {
                tempblock = event
                    .target
                    .closest(".block");
                rightcard = true;
                document
                    .getElementById("properties")
                    .classList
                    .add("expanded");
                document
                    .getElementById("propwrap")
                    .classList
                    .add("itson");
                tempblock
                    .classList
                    .add("selectedblock");
            }
        }
    }
    addEventListener("mousedown", beginTouch, false);
    addEventListener("mousemove", checkTouch, false);
    addEventListener("mouseup", doneTouch, false);
    addEventListenerMulti("touchstart", beginTouch, false, ".block");
});
