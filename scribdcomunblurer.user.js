// ==UserScript==
// @id             ScribdRo
// @name           ScribdRo
// @namespace      com.scribd.scribdro
// @version        1.0
// @author         Tudor Coman
// @description    Unblur ro.scribd.com document pages
// @include        https://ro.scribd.com/*
// @run-at         document-end
// @require        http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @homepageURL    https://github.com/tudorcoman/Hack-Scribd-Unblurer
// @iconURL        http://www.scribd.com/favicon.ico
// @supportURL     https://github.com/tudorcoman/ScribdRo
// @updateURL      https://github.com/tudorcoman/ScribdRo/blob/master/scribdcomunblurer.meta.js
// @downloadURL    https://github.com/tudorcoman/ScribdRo/blob/master/scribdcomunblurer.user.js
// ==/UserScript==
setInterval(function() {
    $('.page-blur-promo-overlay').remove();
    $('.page_missing_explanation_inner').remove();
    $('.autogen_class_views_read2_page_blur_promo').remove();
    $('.outer_page only_ie6_border blurred_page').remove();
    $('.page-blur-promo').removeClass('page-blur-promo');
     $('.page_blur_promo').remove();
    $('.absimg').css('opacity', '1.0');
    $('.text_layer').css('color', '#000');
    $('.text_layer').css('text-shadow', '0px 0px 0px #000');
}, 1000);
