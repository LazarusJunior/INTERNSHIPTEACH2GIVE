//Exercise 7: Typing Async Functions

async function fetchData(): Promise<number> {
    const response = await fetch("https://api.lkj.com/data");
    const data = await response.json() as number;
    return data;
  }

  