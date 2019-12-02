#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char* toVariabilize(char* name, int force)
{
    if(name[0] >= '0' && name[0] <= '9' && force == 0)
    {
        char * dup = calloc(sizeof(char), strlen(name) + 10);
        sprintf(dup, "loc_%s", toVariabilize(name, 1));
        return dup;
    }
    for(int i=0; name[i]; i++)
    {
        if(name[i] >= 'A' && name[i] <= 'Z')
            name[i] += 'a' - 'A';
        else if(name[i] == ' ')
            name[i] = '_';
    }
    return name;
}

int main()
{
    FILE* in = fopen("input.txt", "r");
    FILE* out = fopen("output.js", "w+");

    char buffer[0xFFF];

    for(int i=0; fgets(buffer, 0xFFF, in) != NULL; i++)
    {
        char* name = strtok(buffer, "\"");
        fprintf(out, "const %s = new Location(\"%s\", %d);\n", toVariabilize(strdup(name), 0), name, i);
    }

    return 0;
}