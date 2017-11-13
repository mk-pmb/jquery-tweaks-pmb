
<!--#echo json="package.json" key="name" underline="=" -->
jquery-tweaks-pmb
=================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Some tweaks for jQuery.
<!--/#echo -->

* AJAX tweaks
  * Override the server response's MIME type for `dataType`s
    `text` and `json` to evade browsers' XML parsing attempts
    in case of unfortunate MIME header.



Usage
-----

```html
<script src="node_modules/jquery-tweaks-pmb/t.js"></script>
```

<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
