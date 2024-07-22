function invokeNoArgsNoReturn(object, func) {

    if(object[func] && typeof object[func] === "function") {
        object[func]();
    }
}