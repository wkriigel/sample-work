document.addEventListener("DOMContentLoaded", function () {
    var myj = {
        "html":"\n<div class=\"blockelem noselect block\" style=\"left: 302px; top: 242px;\"><input type=\"hidden\" name=\"blockelemtype\" class=\"blockelemtype\" value=\"3\"><input type=\"hidden\" name=\"blockid\" class=\"blockid\" value=\"0\"><div class=\"blockyleft\"><img src=\"assets/timeblue.svg\"><p class=\"blockyname\">Time has passed</p></div><div class=\"blockyright\"><img src=\"assets/more.svg\"></div><div class=\"blockydiv\"></div><div class=\"blockyinfo\">When <span>10 seconds</span> have passed</div><div class=\"indicator invisible\" style=\"left: 154px; top: 120px;\"></div></div><div class=\"blockelem noselect block\" style=\"left: 133px; top: 442px;\"><input type=\"hidden\" name=\"blockelemtype\" class=\"blockelemtype\" value=\"2\"><input type=\"hidden\" name=\"blockid\" class=\"blockid\" value=\"1\"><div class=\"blockyleft\"><img src=\"assets/actionblue.svg\"><p class=\"blockyname\">Action is performed</p></div><div class=\"blockyright\"><img src=\"assets/more.svg\"></div><div class=\"blockydiv\"></div><div class=\"blockyinfo\">When <span>Action 1</span> is performed</div></div><div class=\"arrowblock\" style=\"left: 287px; top: 362px;\"><input type=\"hidden\" class=\"arrowid\" value=\"1\"><svg preserveAspectRatio=\"none\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M174 0L174 40L5 40L5 80\" stroke=\"#C5CCD0\" stroke-width=\"2px\"></path><path d=\"M0 75H10L5 80L0 75Z\" fill=\"#C5CCD0\"></path></svg></div><div class=\"blockelem noselect block\" style=\"left: 471px; top: 442px;\"><input type=\"hidden\" name=\"blockelemtype\" class=\"blockelemtype\" value=\"2\"><input type=\"hidden\" name=\"blockid\" class=\"blockid\" value=\"2\"><div class=\"blockyleft\"><img src=\"assets/actionblue.svg\"><p class=\"blockyname\">Action is performed</p></div><div class=\"blockyright\"><img src=\"assets/more.svg\"></div><div class=\"blockydiv\"></div><div class=\"blockyinfo\">When <span>Action 1</span> is performed</div></div><div class=\"arrowblock\" style=\"left: 441px; top: 362px;\"><input type=\"hidden\" class=\"arrowid\" value=\"2\"><svg preserveAspectRatio=\"none\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 0L20 40L189 40L189 80\" stroke=\"#C5CCD0\" stroke-width=\"2px\"></path><path d=\"M184 75H194L189 80L184 75Z\" fill=\"#C5CCD0\"></path></svg></div>","blockarr":[{"childwidth":656,"parent":-1,"id":0,"x":461,"y":302,"width":318,"height":120},{"childwidth":0,"parent":0,"id":1,"x":292,"y":502,"width":318,"height":120},{"childwidth":0,"parent":0,"id":2,"x":630,"y":502,"width":318,"height":120}],"blocks":[{"id":0,"parent":-1,"data":[{"name":"blockelemtype","value":"3"},{"name":"blockid","value":"0"}],"attr":[{"class":"blockelem noselect block"},{"style":"left: 302px; top: 242px;"}]},{"id":1,"parent":0,"data":[{"name":"blockelemtype","value":"2"},{"name":"blockid","value":"1"}],"attr":[{"class":"blockelem noselect block"},{"style":"left: 133px; top: 442px;"}]},{"id":2,"parent":0,"data":[{"name":"blockelemtype","value":"2"},{"name":"blockid","value":"2"}],"attr":[{"class":"blockelem noselect block"},{"style":"left: 471px; top: 442px;"}]}]
    };
    var rightcard = false;
    var tempblock;
    var tempblock2;
    document
        .getElementById("blocklist")
        .innerHTML = '<div class="blockelem create-flowy noselect"><input type="hidden" name="blocke' +
                'lemtype" class="blockelemtype" value="1"><div class="grabme"><img src="assets/' +
                'grabme.svg"></div><div class="blockin">                  <div class="blockico"' +
                '><span></span><img src="assets/eye.svg"></div><div class="blocktext">         ' +
                '               <p class="blocktitle">New set visitor</p><p class="blockdesc">Trigg' +
                'ers when somebody visits a specified page</p>        </div></div></div><div cl' +
                'ass="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype' +
                '" class="blockelemtype" value="2"><div class="grabme"><img src="assets/grabme.' +
                'svg"></div><div class="blockin">                    <div class="blockico"><spa' +
                'n></span><img src="assets/action.svg"></div><div class="blocktext">           ' +
                '             <p class="blocktitle">Action is performed</p><p class="blockdesc"' +
                '>Triggers when somebody performs a specified action</p></div></div></div><div ' +
                'class="blockelem create-flowy noselect"><input type="hidden" name="blockelemty' +
                'pe" class="blockelemtype" value="3"><div class="grabme"><img src="assets/grabm' +
                'e.svg"></div><div class="blockin">                    <div class="blockico"><s' +
                'pan></span><img src="assets/time.svg"></div><div class="blocktext">           ' +
                '             <p class="blocktitle">Time has passed</p><p class="blockdesc">Tri' +
                'ggers after a specified amount of time</p>          </div></div></div><div cla' +
                'ss="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype"' +
                ' class="blockelemtype" value="4"><div class="grabme"><img src="assets/grabme.s' +
                'vg"></div><div class="blockin">                    <div class="blockico"><span' +
                '></span><img src="assets/error.svg"></div><div class="blocktext">             ' +
                '           <p class="blocktitle">Error prompt</p><p class="blockdesc">Triggers' +
                ' when a specified error happens</p>              </div></div></div>';
    flowy(document.getElementById("canvas"), drag, release, snapping);
    function addEventListenerMulti(type, listener, capture, selector) {
        var nodes = document.querySelectorAll(selector);
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].addEventListener(type, listener, capture);
        }
    }
    function snapping(drag, first) {
        var grab = drag.querySelector(".grabme");
        grab
            .parentNode
            .removeChild(grab);
        var blockin = drag.querySelector(".blockin");
        blockin
            .parentNode
            .removeChild(blockin);
        if (drag.querySelector(".blockelemtype").value == "1") {
            drag.innerHTML += "<div class='blockyleft'><img src='assets/eyeblue.svg'><p class='blockyname'>Ne" +
                    "w set visitor</p></div><div class='blockyright'><img src='assets/more.svg'></div><" +
                    "div class='blockydiv'></div><div class='blockyinfo'>When a <span>new visitor</" +
                    "span> goes to <span>Site 1xxx</span></div>";
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
    var disabledClick = function () {
        document
            .querySelector(".navactive")
            .classList
            .add("navdisabled");
        document
            .querySelector(".navactive")
            .classList
            .remove("navactive");
        this
            .classList
            .add("navactive");
        this
            .classList
            .remove("navdisabled");
        if (this.getAttribute("id") == "triggers") {
            document
                .getElementById("blocklist")
                .innerHTML = '<div class="blockelem create-flowy noselect"><input type="hidden" name="blocke' +
                        'lemtype" class="blockelemtype" value="1"><div class="grabme"><img src="assets/' +
                        'grabme.svg"></div><div class="blockin">                  <div class="blockico"' +
                        '><span></span><img src="assets/eye.svg"></div><div class="blocktext">         ' +
                        '               <p class="blocktitle">New visitor</p><p class="blockdesc">Trigg' +
                        'ers when somebody visits a specified page</p>        </div></div></div><div cl' +
                        'ass="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype' +
                        '" class="blockelemtype" value="2"><div class="grabme"><img src="assets/grabme.' +
                        'svg"></div><div class="blockin">                    <div class="blockico"><spa' +
                        'n></span><img src="assets/action.svg"></div><div class="blocktext">           ' +
                        '             <p class="blocktitle">Action is performed</p><p class="blockdesc"' +
                        '>Triggers when somebody performs a specified action</p></div></div></div><div ' +
                        'class="blockelem create-flowy noselect"><input type="hidden" name="blockelemty' +
                        'pe" class="blockelemtype" value="3"><div class="grabme"><img src="assets/grabm' +
                        'e.svg"></div><div class="blockin">                    <div class="blockico"><s' +
                        'pan></span><img src="assets/time.svg"></div><div class="blocktext">           ' +
                        '             <p class="blocktitle">Time has passed</p><p class="blockdesc">Tri' +
                        'ggers after a specified amount of time</p>          </div></div></div><div cla' +
                        'ss="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype"' +
                        ' class="blockelemtype" value="4"><div class="grabme"><img src="assets/grabme.s' +
                        'vg"></div><div class="blockin">                    <div class="blockico"><span' +
                        '></span><img src="assets/error.svg"></div><div class="blocktext">             ' +
                        '           <p class="blocktitle">Error prompt</p><p class="blockdesc">Triggers' +
                        ' when a specified error happens</p>              </div></div></div>';
        } else if (this.getAttribute("id") == "actions") {
            document
                .getElementById("blocklist")
                .innerHTML = '<div class="blockelem create-flowy noselect"><input type="hidden" name="blocke' +
                        'lemtype" class="blockelemtype" value="5"><div class="grabme"><img src="assets/' +
                        'grabme.svg"></div><div class="blockin">                  <div class="blockico"' +
                        '><span></span><img src="assets/database.svg"></div><div class="blocktext">    ' +
                        '                    <p class="blocktitle">New database entry</p><p class="bloc' +
                        'kdesc">Adds a new entry to a specified database</p>        </div></div></div><' +
                        'div class="blockelem create-flowy noselect"><input type="hidden" name="blockel' +
                        'emtype" class="blockelemtype" value="6"><div class="grabme"><img src="assets/g' +
                        'rabme.svg"></div><div class="blockin">                  <div class="blockico">' +
                        '<span></span><img src="assets/database.svg"></div><div class="blocktext">     ' +
                        '                   <p class="blocktitle">Update database</p><p class="blockdes' +
                        'c">Edits and deletes database entries and properties</p>        </div></div></' +
                        'div><div class="blockelem create-flowy noselect"><input type="hidden" name="bl' +
                        'ockelemtype" class="blockelemtype" value="7"><div class="grabme"><img src="ass' +
                        'ets/grabme.svg"></div><div class="blockin">                  <div class="block' +
                        'ico"><span></span><img src="assets/action.svg"></div><div class="blocktext">  ' +
                        '                      <p class="blocktitle">Perform an action</p><p class="blo' +
                        'ckdesc">Performs or edits a specified action</p>        </div></div></div><div' +
                        ' class="blockelem create-flowy noselect"><input type="hidden" name="blockelemt' +
                        'ype" class="blockelemtype" value="8"><div class="grabme"><img src="assets/grab' +
                        'me.svg"></div><div class="blockin">                  <div class="blockico"><sp' +
                        'an></span><img src="assets/twitter.svg"></div><div class="blocktext">         ' +
                        '               <p class="blocktitle">Make a tweet</p><p class="blockdesc">Make' +
                        's a tweet with a specified query</p>        </div></div></div>';
        } else if (this.getAttribute("id") == "loggers") {
            document
                .getElementById("blocklist")
                .innerHTML = '<div class="blockelem create-flowy noselect"><input type="hidden" name="blocke' +
                        'lemtype" class="blockelemtype" value="9"><div class="grabme"><img src="assets/' +
                        'grabme.svg"></div><div class="blockin">                  <div class="blockico"' +
                        '><span></span><img src="assets/log.svg"></div><div class="blocktext">         ' +
                        '               <p class="blocktitle">Add new log entry</p><p class="blockdesc"' +
                        '>Adds a new log entry to this project</p>        </div></div></div><div class=' +
                        '"blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" cl' +
                        'ass="blockelemtype" value="10"><div class="grabme"><img src="assets/grabme.svg' +
                        '"></div><div class="blockin">                  <div class="blockico"><span></s' +
                        'pan><img src="assets/log.svg"></div><div class="blocktext">                   ' +
                        '     <p class="blocktitle">Update logs</p><p class="blockdesc">Edits and delet' +
                        'es log entries in this project</p>        </div></div></div><div class="blocke' +
                        'lem create-flowy noselect"><input type="hidden" name="blockelemtype" class="bl' +
                        'ockelemtype" value="11"><div class="grabme"><img src="assets/grabme.svg"></div' +
                        '><div class="blockin">                  <div class="blockico"><span></span><im' +
                        'g src="assets/error.svg"></div><div class="blocktext">                        ' +
                        '<p class="blocktitle">Prompt an error</p><p class="blockdesc">Triggers a speci' +
                        'fied error</p>        </div></div></div>';
        }
    }
    addEventListenerMulti("click", disabledClick, false, ".side");
    document
        .getElementById("close")
        .addEventListener("click", function () {
            if (rightcard) {
                rightcard = false;
                document
                    .getElementById("properties")
                    .classList
                    .remove("expanded");
                setTimeout(function () {
                    document
                        .getElementById("propwrap")
                        .classList
                        .remove("itson");
                }, 300);
                tempblock
                    .classList
                    .remove("selectedblock");
            }
        });

    document
        .getElementById("removeblock")
        .addEventListener("click", function () {
            flowy.deleteBlocks();
        });
    document
        .getElementById("publish")
        .addEventListener("click", function () {
            console.log(JSON.stringify(flowy.output()));
        });
    document
        .getElementById("discard")
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
