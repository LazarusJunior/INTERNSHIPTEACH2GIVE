//Exercise 5: Functions Returning
var addClickEventListener = function (listener) {
    document.addEventListener("click", listener);
};
addClickEventListener(function () {
    console.log("Clicked!"); // OK
});
// @ts-expect-error
addClickEventListener("abc");
