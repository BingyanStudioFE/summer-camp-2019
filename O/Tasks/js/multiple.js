// 打印九九乘法表

for(var row = 1; row <= 9; row++)
{
    for(var col = 1; col <= row; col++)
        document.write(row + "*" + col + "=" + row*col + " ");
    document.write("</br>");
}