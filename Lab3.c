#include <stdio.h>
#include <stdlib.h>
int main()
{FILE *file;
file = fopen("tab.txt", "w");
double x;
double y;
for(x=0;x<=0.8;x=x+0.1){
    y=x-1/(3-sin(3.6*x));

    fprintf(file,"x=%f y=%f\n",x,y);

}
}
