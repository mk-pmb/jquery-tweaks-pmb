/*jslint indent: 2, maxlen: 80, browser: true */
/* -*- tab-width: 2 -*- */
/*global define: true */
(function () {
  'use strict';
  var EX = {}, rqr = ((typeof require === 'function') && require),
    jq = (rqr ? rqr('jquery') : window.jQuery);

  function noop() { return; }

  EX.dataType2mime = {
    text: 'text/plain',
    json: 'text/json',
  };

  EX.tweakAjaxOpts = function (opt, origOpt, jqXHR) {
    noop(origOpt);
    var mimeOvr = opt.overrideResponseMimeType;
    if (mimeOvr === undefined) { mimeOvr = EX.dataType2mime[opt.dataType]; }
    if (mimeOvr !== undefined) { jqXHR.overrideMimeType(mimeOvr); }
  };
  jq.ajaxPrefilter(EX.tweakAjaxOpts);






  (function unifiedExport(e) {
    var d = ((typeof define === 'function') && define),
      m = ((typeof module === 'object') && module);
    if (d && d.amd) { d(function () { return e; }); }
    if (m && m.exports) { m.exports = e; }
  }(EX));
}());
