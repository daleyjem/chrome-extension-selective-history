(function(){
    var linkBlockDomain = document.getElementById('contextBlockDomain');
    linkBlockDomain.addEventListener('click', onLinkBlockDomainClick);
    
    function onLinkBlockDomainClick(evt){
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
            blockRawUrl( tabs[0].url );
        });
    }

    function blockRawUrl(url){

    }

    function blockDomain(domain){
        // Emit to the extension's main JS to record block, and delete current domains matching
    }

})();