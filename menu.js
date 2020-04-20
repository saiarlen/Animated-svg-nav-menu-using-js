$(document).ready(function() {
    //Element one hover

    $("a#svimg1").hover(
        function(e) {
            $("a.clb, a.clc, a.cld, a.cle, a.clf, a.clg, a.clh").addClass("op");
            $("p.rooms_text_one#link_blog").addClass("link_vb");
        },

        function(e) {
            $("p.rooms_text_one#link_blog").removeClass("link_vb");
            $("a.clb, a.clc, a.cld, a.cle, a.clf, a.clg, a.clh").removeClass("op");
        }
    );

    //Element two hover
    $("a#svimg2").hover(
        function(e) {
            $("a.cla, a.clc, a.cld, a.cle, a.clf, a.clg, a.clh").addClass("op");
            $("p.rooms_text_one#link_pm").addClass("link_vb");
        },
        function(e) {
            $("p.rooms_text_one#link_pm").removeClass("link_vb");
            $("a.cla, a.clc, a.cld, a.cle, a.clf, a.clg, a.clh").removeClass("op");
        }
    );

    //Element three hover
    $("a#svimg3").hover(
        function(e) {
            $("a.cla, a.clb, a.cld, a.cle, a.clf, a.clg, a.clh").addClass("op");
            $("p.rooms_text_one#link_test").addClass("link_vb");
        },
        function(e) {
            $("p.rooms_text_one#link_test").removeClass("link_vb");
            $("a.cla, a.clb, a.cld, a.cle, a.clf, a.clg, a.clh").addClass("op");
        }
    );


    //Element four hover
    $("a#svimg4").hover(
        function(e) {
            $("a.cla, a.clb, a.clc, a.cle, a.clf, a.clg, a.clh").addClass("op");
            $("p.rooms_text_one#link_abt").addClass("link_vb");
        },
        function(e) {
            $("p.rooms_text_one#link_abt").removeClass("link_vb");
            $("a.cla, a.clb, a.clc, a.cle, a.clf, a.clg, a.clh").removeClass("op");
        }
    );

    //Element five hover
    $("a#svimg5").hover(
        function(e) {
            $("a.cla, a.clb, a.clc, a.cld, a.clf, a.clg, a.clh").addClass("op");
            $("p.rooms_text_one#link_contact").addClass("link_vb");
        },
        function(e) {
            $("p.rooms_text_one#link_contact").removeClass("link_vb");
            $("a.cla, a.clb, a.clc, a.cld, a.clf, a.clg, a.clh").removeClass("op");
        }
    );

    //Element six hover
    $("a#svimg6").hover(
        function(e) {
            $("a.cla, a.clb, a.clc, a.cld, a.cle, a.clg, a.clh").addClass("op");
            $("p.rooms_text_one#link_services").addClass("link_vb");
        },
        function(e) {
            $("p.rooms_text_one#link_services").removeClass("link_vb");
            $("a.cla, a.clb, a.clc, a.cld, a.cle, a.clg, a.clh").removeClass("op");
        }
    );

    //Element seven hover
    $("a#svimg7").hover(
        function(e) {
            $("a.cla, a.clb, a.clc, a.cld, a.cle, a.clf, a.clh").addClass("op");
            $("p.rooms_text_one#link_clients").addClass("link_vb");
        },
        function(e) {
            $("p.rooms_text_one#link_clients").removeClass("link_vb");
            $("a.cla, a.clb, a.clc, a.cld, a.cle, a.clf, a.clh").removeClass("op");
        }
    );


    //Element eight hover
    $("a#svimg8").hover(
        function(e) {
            $("a.cla, a.clb, a.clc, a.cld, a.cle, a.clf, a.clg").addClass("op");
            $("p.rooms_text_one#link_pl").addClass("link_vb");
        },
        function(e) {
            $("p.rooms_text_one#link_pl").removeClass("link_vb");
            $("a.cla, a.clb, a.clc, a.cld, a.cle, a.clf, a.clg").removeClass("op");
        }
    );




    $(".wr-container").hover(
        function(e) {
            $("a.cla, a.clb, a.clc, a.cld, a.cle, a.clf, a.clg, a.clh").removeClass("op");
        }
    );

});