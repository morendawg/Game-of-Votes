// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */

var toggle = true;

function hello() {
    if (toggle) {
        chrome.tabs.executeScript({
            file: 'changeKeywords.js'
        }); 
        chrome.tabs.executeScript({
            file: 'changeLocations.js'
        }); 
        chrome.tabs.executeScript({
            file: 'changeCandidates.js'
        }); 
        chrome.tabs.executeScript({
            file: 'changeImages.js'
        }); 
        chrome.tabs.executeScript({
            file: 'changeQuotes.js'
        }); 
        //document.getElementById('clickme').textContent = "Reset";
        //toggle = !toggle;
    } else {
        chrome.tabs.reload(null);
        document.getElementById('clickme').textContent = "GoTify";
        toggle = !toggle;
    }
}



document.getElementById('clickme').addEventListener('click', function(){
    hello();
    $("#reset").show();
    $(this).hide();
});
document.getElementById('reset').addEventListener('click', function(){
    chrome.tabs.reload(null);
});
