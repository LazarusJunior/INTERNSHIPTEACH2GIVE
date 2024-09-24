//Exercise 5: Functions Returning
const addClickEventListener = (listener: (event: MouseEvent) => void) => {
    document.addEventListener("click", listener);
  };

  addClickEventListener(() => {
    console.log("Clicked!"); // OK
  });
  
  // @ts-expect-error
  addClickEventListener("abc"); 