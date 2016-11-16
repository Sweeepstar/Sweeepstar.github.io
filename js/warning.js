window.console.log = function(){
    console.error('%c Oh my heavens! ', 'background: #222; color: #bada55');
    window.console.log = function() {
        return false;
    }
}

console.log('test');
