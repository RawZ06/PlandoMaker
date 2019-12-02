#include <stdio.h>
#include <string.h>

int main()
{
    FILE* in = fopen("item.txt", "r");
    FILE* out = fopen("item.js", "w+");

    char buffer[0xFFF];

    fprintf(out, "const items = [];");

    for(int i=0; fgets(buffer, 0xFFF, in) != NULL; i++)
    {
        char* name = strtok(buffer, "\"");
        fprintf(out, "items.push(new Item(\"%s\", %d));\n", name, i);
    }

    return 0;
}