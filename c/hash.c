#include <stdio.h>
#include <string.h>

int main()
{
    FILE* in = fopen("hash.txt", "r");
    FILE* out = fopen("hash.js", "w+");

    char buffer[0xFFF];

    fprintf(out, "{\n");

    for(int i=0; fgets(buffer, 0xFFF, in) != NULL; i++)
    {
        char* s = strtok(buffer, "\n");
        fprintf(out, "\"%s\" : \"https://ootrandomizer.com/img/hash/%s.png\",\n", s, s);
    }

    fprintf(out, "}\n");

    return 0;
}