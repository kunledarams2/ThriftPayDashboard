
export var getInitials = function (string: string) {
    var names = string.split(" "),
      initials = names[0].substring(0, 1).toUpperCase();
  
    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  };
  
 export var getCurrency = function (amount: number) {
    
    return amount.toLocaleString(
      "en-NG",
      {
        style: "currency",
        currency: "NGN",
      }
    );
 };
  

 export var range = function(start: number, end: number, step: number = 1): number[] {
  const result: number[] = [];
  
  for (let i = start; i <= end; i += step) {
      result.push(i);
  }

  return result;
}
