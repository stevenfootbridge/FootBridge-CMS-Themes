// ==UserScript==
// @name         Footbridge Media CMS Themes
// @namespace    http://tampermonkey.net/
// @version      0.022
// @description  Footbridge Media CMS Themes
// @author       Steven Lawson
// @match        *://localhost:*/fbm-cms/page-editor
// @match        *://localhost:*/fbm-cms/page-editor/*

// @match        *://localhost:*/fbm-cms/theme-manager
// @match        *://localhost:*/fbm-cms/theme-manager/*

// @match        *://localhost:*/fbm-cms/find-and-replace

// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle(`
body, html, footer {
    background-color: #272b33;
}
body {
    color: #9ca4b3;
}
.bg-primary {
    background-color: #7289da !important;
}
/*------ back page ------*/
.bg-white, .cms-content-container, .material-select-menu>label{
    background-color: #272b33 !important;
}
#page{
    background-color: #272b33 !important;
}



/*------ start syntax colors ------*/

/*------ main editor box ------*/
.ace-tm {
    background-color: #272b33 !important;
    color: #9ca4b3;
}

/*------ comment ------*/
.ace_comment.ace_xml {
    font-style: italic;
    color: gray;
}

/*------ active line ------*/
.ace-tm .ace_marker-layer .ace_active-line {

}
/*------ cursor caret color ------*/
.ace-tm .ace_cursor {
    color: #466dbc;
}

.ace-tm .ace_entity.ace_attribute-name {
    color: #cf9763 !important;
}

/*------ <> ------*/
.ace-tm .ace_meta.ace_tag {
    color: #db6c6d !important;
}

.ace-tm .ace_meta.ace_tag-name {
    color: #db6c6d !important;
}

.ace-tm .ace_string {
    color: #95bd73 !important;
}

.ace-tm .ace_gutter {
    background-color: #2e323c !important;
}

.ace-tm .ace_indent-guide {
    background: none;
    border-right: 1px solid #3e424d;
    margin-left:-1px;
}

.ace-tm .ace_gutter-active-line {
    background-color: #111 !important;
}
.ace-tm .ace_keyword {
    color: #c674cc !important;
}

.ace-tm .ace_variable {
    color: #bd4f42 !important;
}
.ace_support .ace_php_tage {
    color: #bd4f42 !important;
}

/*------ end syntax colors ------*/


/*------ find a link buttons ------*/

#searched-page-names-for-links-results-container > div > div.d-flex > div {
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
}

.form-control {
    background-color: #1a1c21;
    border-color: #17191d;
    border-radius: 2px;
    color: white;
}

.form-control:focus {
    background-color: #1f2533;
    border-color: #4568ae;
    color: white;
}

#content-editor-options-bar {
    background-color: #20242a;
}

button {
    color: white;
}

/*-- back of tabs -- */
#content-editor-tabs-container {
    border-bottom:2px solid #7289da;
    background-color: #34363b;
}

/*------ tabs ------*/
#content-editor-tabs-container .editor-tab {
    background-color: #20242a;
    margin-top: 4px;
}

/*------ selected tab ------*/
#content-editor-tabs-container .editor-tab.selected {
    background-color: #7289da;
}

.btn-link,
#content-editor-page-navigation-column .page-list-page-button{
    color: #9ca4b3;
}

#content-editor-page-navigation-column .page-list-page-button:hover {
    background-color: #393e4a;
    border-radius: 10px;
    color: white;
}

#content-editor-sidebar {
    background-color: #34363b;
    margin-top: 1px;
}

/*------ start page data box ------*/
#page-data > section {
    background-color: #272b33 !important;
}
.material-text-input>label,
.material-select-menu>label{
    background-color: #272b33 !important;
    color: #7289da;
}

/*------ end page data box ------*/


.btn { border-radius: 30px; }

/*------ selected page/section ------*/

#content-editor-page-navigation-column .page-list-page-button.current-page {
    color: white;
    background-color: #7289da;
    border-radius:10px;font-weight:initial;}

.text-primary-contrast, .horizontal-resizer, .floater {
    border-radius:35px;}



/*------ file/image/etc ------*/

#content-editor-options-bar>section:nth-child(1) button:hover,
#content-editor-options-bar>section:nth-child(1) a:hover{
    background-color: #7289da;
}

#content-editor-options-bar>section:nth-child(1) .editor-options-dropdown>div {
    background-color: #272b33;
    color:white;
    border-radius:5px;
}

#content-editor-options-bar>section:nth-child(1) .editor-options-dropdown>div button,
#content-editor-options-bar>section:nth-child(1) .editor-options-dropdown>div a {
    color:white;
}

/*------ modal ------*/
.modal-content {
    border-radius:10px;
    background-color: #272b33 !important;
}
.modal-footer, .modal-header {
    border-color: #7289da;
}
/*--- search bar --- */

#content-editor-sidebar > section:nth-child(1) {
    margin:3px;
}

/*------ general/blog/city buttons ------*/

#content-editor-page-navigation-column {
    background-color: #20242a;
    border-right: 0px solid #17191d;
    border-top: 2px solid #7289da;
}

#page-lists > div > button:hover {
    color:white;
}

/*------ img manager ------*/

#image-manager .searches, #image-manager .image-preview-container {
    border-color: #7289da;
}
#image-manager .contents-title-bar {
    background-color: #7289da;
}
#image-manager .image-item-container button {
    color: white;
}

#image-manager .modal-header {
    background-color: #7289da;
    border-top-left-radius: 10px;
    border-top-right-radius:10px;
}

.image-manager-close-icon:hover {
    border-top-right-radius:10px;
}

/*------ sidebar ------*/

#sidebar {
    background-color:#17191d;
    border-right:1px solid #17191d;
}

/*------ scrollbar mini ------*/

::-webkit-scrollbar{
	width:5px;
}
::-webkit-scrollbar-track-piece{
	background-color: #272b33;
}
::-webkit-scrollbar-thumb{
	background-color: #4a5261;
	border-radius:100px;
}

/*------ find and replace page ------*/

.far-page-matches-container>.row>.col-xl,
.far-page-matches-container>.installer-navigation-buttons>.col-xl {
	background-color: #1a1c21;
}

/*------ link finder pop up ------*/
.link-context-menu {
	background-color: #1a1c21;
	border:1px solid #1a1c21;
}

/*-- results --*/
.link-cm-result-item {
	background-color: #1a1c21;
}
.link-cm-result-item:hover {
	background-color: #7289da;
}

`);

var body = document.body

window.addEventListener('load', function() {
  var x = location.pathname;
  if (x.startsWith("/fbm-cms/page-editor") == true) {
    Additionals()
  }
}, false);

function Additionals() {
  var view_button = document.getElementById("content-editor-options-bar").getElementsByTagName('section')[1].getElementsByTagName('a')[0]
  view_button.setAttribute("target", "_blank")
  view_button.innerHTML = '<i class="far fa-eye"></i> View'

  var save_button = document.getElementById("content-editor-options-bar").getElementsByTagName('section')[1].getElementsByTagName('button')[0]
  save_button.innerHTML = '<i class="fas fa-save"></i> Save'

}


console.log('Footbridge Media CMS Themes Started');
