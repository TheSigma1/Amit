mem = [
 {Name: "abc", Age:20, Email:"abc@mem.com", Address: "Hsn.32,96 street"},
 {Name: "def", Age:17, Email:"def@mem.com", Address: "Hsn.20,48 street"},
 {Name: "ghi", Age:18, Email:"ghi@mem.com", Address: "Hsn.88,15 street"},
 {Name: "jkl", Age:36, Email:"jkl@mem.com", Address: "Hsn.72,36 street"},
 {Name: "rst", Age:41, Email:"rst@mem.com", Address: "Hsn.92,59 street"},
 {Name: "buo", Age:59, Email:"buo@mem.com", Address: "Hsn.52,36 street"},
 {Name: "tst", Age:15, Email:"tst@mem.com", Address: "Hsn.78,30 street"},
 {Name: "esw", Age:12, Email:"esw@mem.com", Address: "Hsn.69,95 street"},
 {Name: "uwu", Age:47, Email:"uwu@mem.com", Address: "Hsn.23,86 street"},
 {Name: "sen", Age:36, Email:"sen@mem.com", Address: "Hsn.56,25 street"},];
function array()
{
    for(i = 0; i<mem.length;i++)
    {
        if (mem[i]["Age"]>20)
        {
            console.log(mem[i]);
        }
        else
        {
            console.log(" This one is under age");
        }
    }
}
array();