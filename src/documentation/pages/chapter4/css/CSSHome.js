import React from "react";

const CSSHome = () => {
  return (
    <div className="lg:flex flex-wrap w-full justify-center">
      <div className="w-full lg:w-1/2 lg:p-1">
        <img
          src="https://i.ibb.co/mZJwyNn/front-Page.jpg"
          alt="front-Page"
          border="0"
          className="h-full w-full"
        />
      </div>
      <div className="w-full lg:w-1/2 lg:p-1">
        <pre className=" text-yellow-200 bg-black p-5 text-sm">
          <code>
            {`
/*:::::::::::::::::::::::::::::::::::::::
 C Program For Addition Of Two Numbers
:::::::::::::::::::::::::::::::::::::::::*/
#include <stdio.h>

int main() {
    int num1, num2, sum;
    
    printf("Enter the first number: ");
    scanf("%d", &num1);
    
    printf("Enter the second number: ");
    scanf("%d", &num2);
    
    sum = num1 + num2;
    
    printf("The sum of %d and %d is %d\n", num1, num2, sum);
    
    return 0;
}`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CSSHome;
