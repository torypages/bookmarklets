function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}


window.location.href = "//rawgit.com/torypages/bookmarklets/master/refresh.html?url=" + b64EncodeUnicode(window.location.href)
