// ============================================================= Topics Array ===============================================
var _tab = "&nbsp;&nbsp;&nbsp;";
var jsObj = new Object();
jsObj.topics = [
{
    name: "Capsules Programming",
    desc: [
	/*
	 {
        type: "syntax",
        data: '',
    },
	*/
	{
            type: "text",
            data: "<div class='well docWell' style='text-align: center;'>This Section focuses on programming basics of Capsules.</div>",
	}, 
	{
		type: "text",
		data: "<h3>Javascript</h3>",
	},
    {
        type: "image",
        data: "../media/images/javascript/maxresdefault.jpg",
    },
    {
        type: "text",
        data: "Here for the Capsule development we have selected Javascript language since it is very easy to understand. Its easy syntax will help you to build more and more complex capsules. If you don't know about javascript just don't worry go through our programming topics and read w3c school, your basics will get clear. Just keep in mind one thing bulding a capsule is all about playing with the variables with some logic and mathematics. And what is variable it is container like your pendrive where you can store various kinds of things or data.",
    },
    {
        type: "image",
        data: "../media/images/javascript/variable.jpg",
    },
   /* {
        type: "text",
        data: "JAVASCRIPT is a programming language which is designed to add interactivity to a web page. When it was introduced it was simple but now we can do any thing with the combination of JAVASCRIPT and HTML5. Once Flash was a big player in web industry but now today HTML5 and JAVASCRIPT are the big players in web industry and both have a bright future. The things which made HTML5 popular is that it doesn't require any plug-in to work. While other languages require various plug-ins to be present in your PC or mobile. And HTML5 works well on almost all the mobile devices , ipads and browsers. This cross compatibility makes HTML5 strongest player in web industry. So if you know these languages it will give you additional boost to your carrier. It will be easy for you to present anything on-line.Because now everything is going on-line. And if you make carrier in these field you  can easily earn millions. So if you want to learn the basics of these language go through our tutorials.",
    },
    {
        type: "image",
        data: "../media/images/javascript/Flash_to_HTML5.jpg",
    },
    {
        type: "text",
        data: "<div class='well' style='font-weight:bold;font-style:italic;'>Simplicity is the beauty of JavaScript. You can use this quality to build any complex structure. The example is in front of you the Scortual. Major part of the framework is designed in JavaScript.</div>",
    },
    {
        type: "text",
        data: "Now programming is just a playing with the variables with some maths. All the programming languages have same things variables , conditional statements and functions etc. They only differs in their syntax and platform on which it runs. The main part of programming are variables , array or object to store data.",
    },
    {
        type: "image",
        data: "../media/images/javascript/HTML5smackflash.jpg",
    },
    {
        type: "text",
        data: "<div class='well' style='font-weight:bold;font-style:italic;'>With advncement in technology our processor and internet speed is becoming powerful so to handle these browsers are getting powerful and ultimately Javascript is getting powerful day by day.</div>",
    },
    {
        type: "text",
        data: "There are many JavaScript tutorial available on the web but they all are simple like an reading an old book. And I believe that <span class='bi'>we learn things only when we feel it or experience it</span>. So i want to present the JavaScript tutorials in a different angle with actual practical examples so that you can learn it ,  understand it better.",
    },
    {
        type: "image",
        data: "../media/images/javascript/jquery.png",
    },
    {
        type: "text",
        data: "Jquery is also famous in designing a web page. Jquery is a library which is build on top of JavaScript which makes DOM element handling much simpler. You can easily learn HTML and Jquery from W3school after you understand how to work with JavaScript. This is the heart of your web technology.",
    },
    {
        type: "text",
        data: "Here i have not focused on the HTML part since in our lab HTML part is handled by the framework. So i will focus on logic part and data processing part. So that you can work easily with JavaScript and in our lab.",
    },
    */
	{
		type: "text",
		data: "<h3>Canvas Basics</h3>",
	},
	
	{
        type: "text",
        data: "Canvas allows you draw free flow designs. You can draw anything on any pixels on it. Major part of capsules are designed using canvas. Canvas programming basics section is also added on this page. Below are some examples where canvas drawing is majorly used.",
    },
	{
		type: "text",
		data: "<center><b>Paint Application</b></center>",
	},
	{
        type: "app",
        data: "313",
    },
	{
		type: "text",
		data: "<center><b>Color Mixing</b></center>",
	},
	{
        type: "app",
        data: "276",
    },
	{
		type: "text",
		data: "<center><b>Atomic Structure</b></center>",
	},
	{
        type: "app",
        data: "298",
    },
	{
		type: "text",
		data: "<h3>Game Development</h3>",
	},
	{
        type: "text",
        data: "Following are the games created using Scortual framework.",
    },
		{
        type: "app",
        data: "314",
    },
		{
        type: "app",
        data: "315",
    },
	{
        type: "app",
        data: "316",
    },
	{
		type: "text",
		data: "<h3>3D Development</h3>",
	},
	{
        type: "app",
        data: "242",
    },
	{
        type: "app",
        data: "255",
    },
	{
        type: "app",
        data: "260",
    },
	
    {
        type: "text",
        data: "So go to our topics. We have tried to explain a major part of it in a most simpler way. I am sure you will enjoy learning these language.",
    }, ],
},
{
    name: "Statements",
    desc: [
    {
        type: "text",
        data: "Statements are set of instructions which are used to tell the browser what to do. Statements are separated by <span class='bi'>semicolon</span>. Please see the below eg. Here code will be executed step by step.",
    },
    {
        type: "syntax",
        data: 'var x = 5;\nvar y  =  6;\nvar z = x + y;',
    },
    {
        type: "text",
        data: "Here in the above code you will see the all the characters are separated by a single space. But JavaScript ignores space between characters.",
    },
    {
        type: "app",
        data: "23",
    }, ],
    subTopics:
    {
        "Keywords": [
        {
            type: "table",
            data: [
                ["keyword", "explanation"],
                ["<b>var</b>", "It is used to declare variable."],
                ["<b>for</b>", "It is used to declare function."],
                ["<b>if-else</b>", "Marks a block of statements to be executed, as long as a condition is true"],
                ["<b>do-while</b>", "Executes a block of statements, and repeats the block, while a condition is true"],
                ["<b>switch</b>", "Marks a block of statements to be executed, depending on different cases"],
                ["<b>try-catch</b>", "Implements error handling to a block of statements"],
                ["<b>break</b>", "Terminates a switch or a loop"],
                ["<b>continue</b>", "Jumps out of a loop and starts at the top"],
                ["<b>debugger</b>", "Stops the execution of JavaScript, and calls (if available) the debugging function"],
                ["<b>return</b>", "Exits a function"],
            ],
        }, ],
        "Comment": [
        {
            type: "text",
            data: "Comments are used to stop the execution of the code. Since comment part is not executed so it is used to explain the code in human readable format.",
        },
        {
            type: "syntax",
            data: '/*\n =============== This is Multiline Comment ===================\n Scortual - The Virtual School \n HTML5 INTERACTIVE SCIENCE LAB\n ==============================================================\n */\n\n// This is a Single Line Comment\n // Below is X varable\n var x = 5;\n // Below is Y varable\n var y = 6;\n // Below is addition if X and Y is done. And it is stored in variable Z.\n var z = x + y;\n \n',
        }, ],
        "Conditional": [
        {
            type: "text",
            data: "Conditional statements are used to perform different actions based on different conditions. Very often when you write code, you want to perform different actions for different decisions. You can use conditional statements in your code to do this.",
        },
        {
            type: "table",
            data: [
                ["keyword", "explanation"],
                ["<b>if</b>", "It is used to specify a block of code to be executed, if a specified condition is true."],
                ["<b>else</b>", "It is used to specify a block of code to be executed, if the same condition is false."],
                ["<b>else if</b>", "It is used to specify a new condition to test, if the first condition is false."],
                ["<b>switch</b>", "It is used to specify many alternative blocks of code to be executed."],
            ],
        },
        {
            type: "text",
            data: "Codes of above statements are explained at the bottom part of the topics..",
        }, ],
        "Function": [
        {
            type: "text",
            data: "When statements are grouped together in a curly braces that group of statements is called as function.",
        },
        {
            type: "syntax",
            data: 'function addVariables()\n {\n' + _tab + 'var x = 5;\n' + _tab + 'var y = 6;\n' + _tab + 'var z = x + y;\n };\n addVariables();\n',
        },
        {
            type: "text",
            data: "Here in the above code we have grouped all our statements in a function named addVariables. When this function will get called as shown in the bottom of the code. All that group of statements will be executed.",
        }, ]
    },
},
{
    name: "Variables",
    desc: [
    {
        type: "image",
        data: "../media/images/javascript/variable.jpg",
    },
    {
        type: "text",
        data: "Variables are the containers or memory units which stores data. Variables can store any kind of data like numbers , string etc. Please see the below example.Variable defined inside functions are private and defined outside are global",
    },
    {
        type: "syntax",
        data: 'var x = 5;\n var y  =  6;\n var z = x + y;',
    },
    {
        type: "text",
        data: "Here in the above code you will see when you declare var x , memory units are allocated which are named as x. So x is a name of memory units where we will store data. Here memory units allocated to a variable are sufficient enough to store any large value.In case if browser is not able to handled the data it will get hang. But for normal code this condition doesn't come. So you can work freely. So don't worry about its memory limit. It is handled by the browser. Please see our framework. In lab we perform millions of calculations within a second but everything works smooth even on your android phone.",
    },
    {
        type: "text",
        data: "So cominig to the above code we have store the value 5 in a variable X , 6 in a variable y and we have performed algebric operation whose result we have stored in Z.",
    },
    {
        type: "text",
        data: "You can give any name to a variable. But in javascript some words are reserved you cant use them to name your varibles. These words are as folloes",
    },
    {
        type: "list",
        data:
        {
            "abstract": "",
            "boolean": "",
            "break": "",
            "byte ": "",
            "case ": "",
            "catch ": "",
            "char ": "",
            "class ": "",
            "const ": "",
            "continue ": "",
            "debugger ": "",
            "default ": "",
            "delete ": "",
            "do ": "",
            "double ": "",
            "else ": "",
            "enum ": "",
            "export ": "",
            "extends ": "",
            "false ": "",
            "final ": "",
            "finally ": "",
            "float ": "",
            "for ": "",
            "function ": "",
            "goto ": "",
            "if ": "",
            "implements ": "",
            "import ": "",
            "in ": "",
            "instanceof ": "",
            "int ": "",
            "interface ": "",
            "long ": "",
            "native ": "",
            "new ": "",
            "null ": "",
            "packagge ": "",
            "private ": "",
            "protected ": "",
            "public ": "",
            "return ": "",
            "short ": "",
            "static ": "",
            "super ": "",
            "switch ": "",
            "synchronized ": "",
            "this ": "",
            "throw ": "",
            "throws ": "",
            "transient ": "",
            "true ": "",
            "try ": "",
            "typeof ": "",
            "var ": "",
            "void ": "",
            "volatile ": "",
            "while ": "",
            "with ": "",
        },
    }, ]
},
{
    name: "Operators",
    desc: [
    {
        type: "text",
        data: "Operators are predefined symbols which are used in a statements along with the variables. They tell the browser type of operations to be performed on the variables. Browser performs the operations indicated by the operator. For example.",
    },
    {
        type: "syntax",
        data: 'var x = 5;\n var y  =  6;\n var z = x + y;',
    },
    {
        type: "text",
        data: "Here in the above code we have instructed browser that perform addition operation on variable x and y and store the result in z. So as per instruction browser will perform the operation and it will store the result in variable z.",
    },
    {
        type: "text",
        data: "There are four kinds of operators as follows. All these are explained in the sub topic pages.",
    },
    {
        type: "list",
        data:
        {
            "Arithmatic": "",
            "Assignment": "",
            "Comparison": "",
            "Logical": "",
            "Bitwise": "",
        },
    }, ],
    subTopics:
    {
        "Arithmatic": [
            {
                type: "image",
                data: "../media/images/javascript/arithmatic.jpg",
            },
            {
                type: "text",
                data: "Arithmatic operators performs basic mathematical operations on variables. They are as follows.",
            },
            {
                type: "table",
                data: [
                    ["keyword", "explanation"],
                    ["<b>+</b>", "This operator adds the right side value of variable to the left side variable."],
                    ["<b>-</b>", "This operator substract the right side value of variable to the left side variable."],
                    ["<b>*</b>", "This operator multiply the right side value of variable to the left side variable."],
                    ["<b>/</b>", "This operator divides the right side value of variable to the left side variable."],
                    ["<b>%</b>", "This operator returns the remainder of division of two variables."],
                    ["<b>++</b>", "This operator increments the value of the variable by 1."],
                    ["<b>--</b>", "This operator decrements the value of the variable by 1."],
                ],
            },
            //=============================
            {
                type: "text",
                data: "<h3>Addition</h3>",
            },
            {
                type: "text",
                data: "This operator is used to perform Mathematical addition on variables.",
            },
            {
                type: "app",
                data: "27",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>Subtraction</h3>",
            },
            {
                type: "text",
                 data: "This operator is used to perform Mathematical Subtraction on variables.",
            },
            {
                type: "app",
                data: "28",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>Multiplication</h3>",
            },
            {
                type: "text",
                 data: "This operator is used to perform Mathematical Multiplication on variables.",
            },
            {
                type: "app",
                data: "29",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>Division</h3>",
            },
            {
                type: "text",
                 data: "This operator is used to perform Mathematical Division on variables.",
            },
            {
                type: "app",
                data: "30",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>Modulus</h3>",
            },
            {
                type: "text",
                 data: "This operator is used to perform Mathematical Modulus on variables.",
            },
            {
                type: "app",
                data: "31",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>Increment</h3>",
            },
            {
                type: "text",
                 data: "This operator is used to perform Mathematical Increment on variables.",
            },
            {
                type: "app",
                data: "32",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>Decrement</h3>",
            },
            {
                type: "text",
                 data: "This operator is used to perform Mathematical Decrement on variables.",
            },
            {
                type: "app",
                data: "33",
            },
            //=============================
        ],
		"Comparison": [
            {
                type: "image",
                data: "../media/images/javascript/assignment.jpg",
            },
            {
                type: "text",
                data: "Comparison and Logical operators are used to test for true or false.Comparison operators are used in logical statements to determine equality or difference between variables or values.",
            },
            {
                type: "table",
                data: [
                    ["keyword", "description"],
                    ["<b>==</b>", "equal to"],
                    ["<b>===</b>", "equal value and equal type"],
                    ["<b>!=</b>", "not equal to"],
                    ["<b>!==</b>", "not equal value or not equal type"],
                    ["<b>></b>", "greater than"],
                    ["<b><</b>", "less than"],
                    ["<b>>=</b>", "greater than or equal to"],
                    ["<b><=</b>", "less than or equal to"],
                ],
            },
            //=============================
            {
                type: "text",
                data: "<h3>equal to</h3>",
            },
            {
                type: "text",
                data: "This operator is used to check equality of variables. Please see the below example",
            },
            {
                type: "app",
                data: "34",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>equal value and equal type</h3>",
            },
            {
                type: "text",
                 data: "This operator is used to check equality and the types of variables. Please see the below example",
            },
            {
                type: "app",
                data: "35",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>not equal to</h3>",
            },
            {
                type: "text",
                data: "This operator is used to check inequality of variables. Please see the below example",
            },
            {
                type: "app",
                data: "36",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>not equal value or not equal type</h3>",
            },
            {
                type: "text",
               data: "This operator is used to check inequality and the not equal types of variables. Please see the below example",
            },
            {
                type: "app",
                data: "37",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>greater than</h3>",
            },
            {
                type: "text",
                data: "This operator is used to compare values of two variables. Please see the below example.",
            },
            {
                type: "app",
                data: "38",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>less than</h3>",
            },
            {
                type: "text",
                data: "This operator is used to compare values of two variables. Please see the below example.",
            },
            {
                type: "app",
                data: "39",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>greater than or equal to</h3>",
            },
            {
                type: "text",
                data: "This operator is used to compare values of two variables. Please see the below example.",
            },
            {
                type: "app",
                data: "40",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>less than or equal to</h3>",
            },
            {
                type: "text",
                data: "This operator is used to compare values of two variables. Please see the below example.",
            },
            {
                type: "app",
                data: "41",
            },
            //=============================
        ],
		
        
        
        "Logical": [
            {
                type: "image",
                data: "../media/images/javascript/andOr.jpg",
            },
            {
                type: "text",
                data: "Logical operators are used to determine the logic between variables or values.",
            },
            {
                type: "table",
                data: [
                    ["keyword", "description"],
                    ["<b>&&</b>", "and"],
                    ["<b>||</b>", "or"],
                    ["<b>!</b>", "not"],
                ],
            },
            //=============================
            {
                type: "text",
                data: "<h3>LOGICAL AND OPERATION</h3>",
            },
            {
                type: "text",
                data: "Logical AND operation uses boolean algebra to determine its output. Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "42",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>LOGICAL OR OPERATION</h3>",
            },
            {
                type: "text",
                data: "Logical OR operation uses boolean algebra to determine its output. Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "43",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>LOGICAL NOT OPERATION</h3>",
            },
            {
                type: "text",
               data: "Logical NOT operation uses boolean algebra to determine its output. Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "44",
            },
            //=============================
        ],
       
        "Bitwise": [
            {
                type: "text",
                data: "It is used to performed logical operations on binary data.",
            },
            {
                type: "table",
                data: [
                    ["keyword", "description"],
                    ["<b>&</b>", "AND"],
                    ["<b>|</b>", "OR"],
                    ["<b>~</b>", "NOT"],
                    ["<b>^</b>", "XOR"],
                    ["<b><<</b>", "Zero fill left shift"],
                    ["<b>>></b>", "Signed right shift"],
                    ["<b>>>></b>", "Zero fill right shift"],
                ],
            },
            //=============================
            {
                type: "text",
                data: "<h3>AND</h3>",
            },
            {
                type: "text",
                data: "This performs Logical And operation between two variables. Please see the below example to understand it better.",
            },
            {
                type: "app",
                data: "45",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>OR</h3>",
            },
            {
                type: "text",
               data: "This performs Logical OR operation between two variables. Please see the below example to understand it better.",
            },
            {
                type: "app",
                data: "46",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>XOR</h3>",
            },
            {
                type: "text",
                data: "This performs Logical XOR operation between two variables. Please see the below example to understand it better.",
            },
            {
                type: "app",
                data: "47",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>bitwiseNOT</h3>",
            },
            {
                type: "text",
              data: "This performs Logical bitwiseNOT operation between two variables. Please see the below example to understand it better.",
            },
            {
                type: "app",
                data: "48",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>bits left shift</h3>",
            },
            {
                type: "text",
                data: "This performs Logical bits left shift operation between two variables. Please see the below example to understand it better.",
            },
            {
                type: "app",
                data: "49",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>bits right shift</h3>",
            },
            {
                type: "text",
               data: "This performs Logical bits right shift operation between two variables. Please see the below example to understand it better.",
            },
            {
                type: "app",
                data: "50",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>bits right shift with zeros</h3>",
            },
            {
                type: "text",
                data: "This performs Logical bits right shift with zeros operation between two variables. Please see the below example to understand it better.",
            },
            {
                type: "app",
                data: "51",
            },
            //=============================
        ],
		
		"Assignment": [
            {
                type: "image",
                data: "../media/images/javascript/assignment.jpg",
            },
            {
                type: "text",
                data: "Assignment operators assign values to JavaScript variables.",
            },
            {
                type: "table",
                data: [
                    ["keyword", "explanation"],
                    ["<b>=</b>", "This operator assigns the right side value of the variable to the left side variable."],
                    ["<b>+=</b>", "This operator first adds the right side value of the variable to the left side variable and then assigns the  final value to the left side variable."],
                    ["<b>-=</b>", "This operator first substract the right side value of the variable to the left side variable and then assigns the  final value to the left side variable."],
                    ["<b>*=</b>", "This operator first multiply the right side value of the variable to the left side variable and then assigns the  final value to the left side variable."],
                    ["<b>/=</b>", "This operator first divide the right side value of the variable to the left side variable and then assigns the  final value to the left side variable."],
                    ["<b>%=</b>", "This operator first divide the right side value of the variable to the left side variable and then assigns the  remainder value to the left side variable."],
                    ["<b>&=</b>", "This is a Binary/Bitwise operator. It first performs AND operation of right hand side varaiable value with the left hand side and the result is stored in left hand side variable."],
                    ["<b>|=</b>", "This is a Binary/Bitwise operator. It first performs OR operation of right hand side varaiable value with the left hand side and the result is stored in left hand side variable."],
                    ["<b>^=</b>", "This is a Binary/Bitwise operator. It first performs NOT operation of right hand side varaiable value with the left hand side and the result is stored in left hand side variable."],
                    ["<b><<=</b>", "This is a Binary/Bitwise operator. It first shifts the bits of left side value to the left. The shift depends upon the value of the variable on the right. It then assigns the result back to the left side variable."],
                    ["<b>>>=</b>", "This is a Binary/Bitwise operator. It first shifts the bits of right side value to the left. The shift depends upon the value of the variable on the right. It then assigns the result back to the left side variable."],
                    ["<b>>>>=</b>", "Decrement"],
                ],
            },
            //=============================
            {
                type: "text",
                data: "<h3>= (Simple Assignment )</h3>",
            },
            {
                type: "text",
                data: "This operation is used to assign a variable value of other variable. Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "52",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>+= (Add and Assignment)</h3>",
            },
            {
                type: "text",
                 data: "This operator is used to perform addition operation with other variable and assign the result to a variable variable . . Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "53",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>−= (Subtract and Assignment)</h3>",
            },
            {
                type: "text",
                data: "This operator is used to perform subtraction operation with other variable and assign the result to a variable variable . . Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "54",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>*= (Multiply and Assignment)</h3>",
            },
            {
                type: "text",
                data: "This operator is used to perform multiply operation with other variable and assign the result to a variable variable . . Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "55",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>/= (Divide and Assignment)</h3>",
            },
            {
                type: "text",
                data: "This operator is used to perform Divide operation with other variable and assign the result to a variable variable . Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "56",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>%= (Modules and Assignment)</h3>",
            },
            {
                type: "text",
                data: "This operator is used to find remainder with other variable  and assign the result to a variable variable. Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "57",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>&= (AND and Assignment)</h3>",
            },
            {
                type: "text",
                  data: "This operator is used to perform AND operation with other variable and assign the result back to a variable. Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "58",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>|= (OR and Assignment)</h3>",
            },
            {
                type: "text",
                data: "This operator is used to perform OR operation with other variable and assign the result back to a variable. Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "59",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>^= (XOR and Assignment)</h3>",
            },
            {
                type: "text",
                 data: "This operator is used to perform XOR operation with other variable and assign the result back to a variable. Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "60",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3><<= (LEFT SHIFT and Assignment)</h3>",
            },
            {
                type: "text",
                data: "This operator is used to perform LEFT SHIFT operation with other variable and assign the result back to a variable. Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "61",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3> >>= (RIGHT SHIFT and Assignment)</h3>",
            },
            {
                type: "text",
                data: "This operator is used to perform RIGHT SHIFT  operation with other variable and assign the result back to a variable. Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "62",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3> >>>= (RIGHT SHIFT with zeros and Assignment)</h3>",
            },
            {
                type: "text",
                data: "This operator is used to perform RIGHT SHIFT with zeros operation with other variable and assign the result back to a variable. Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "63",
            },
            //=============================
        ],
		
		 "Conditional or Ternary": [
        {
            type: "text",
            data: "It is a shortcut to write IF-ELSE condition.",
        },
        {
            type: "syntax",
            data: ' _x > _y ? console.log("x is greater than y") :  console.log("x is not greater than y");',
        },
        {
            type: "app",
            data: "64",
        }, ],
		
        "function": [
        {
            type: "image",
            data: "../media/images/javascript/function_machine.png",
        },
        {
            type: "text",
            data: "The () Operator Invokes the Function.",
        },
        {
            type: "syntax",
            data: 'sampleFunction();\n function sampleFunction()\n {\n' + _tab + 'alert("function in invoked")\n }\n',
        },
        {
            type: "text",
            data: "As seen in the above example if you just write sampleFunction in your code browser will try to interpret it as a variable. But when you write () in front of it. That block of code stored in a variable gets executed.",
        }, ]
    },
},
{
    name: "Data Types",
    desc: [
    {
        type: "image",
        data: "../media/images/javascript/data_type.png",
    },
    {
        type: "text",
        data: "Data types are the types of data which can be stored in a variable. They are as follows:",
    },
    {
        type: "list",
        data:
        {
            "numbers": "",
            "strings": "",
            "arrays": "",
            "objects ": "",
            "boolean ": "",
        },
    }, ],
    subTopics:
    {
        "Numbers": [
            {
                type: "image",
                data: "../media/images/javascript/numbers.jpg",
            },
            {
                type: "text",
                data: "Data type is number if we assign any number to a variable without any quotes..",
            },
            {
                type: "syntax",
                data: 'var x = 5;',
            },
            {
                type: "table",
                data: [
                    ["keyword", "Property"],
                    ["<b>constructor</b>", "Returns the function that created JavaScript's Number prototype"],
                    ["<b>MAX_VALUE</b>", "Returns the largest number possible in JavaScript"],
                    ["<b>MIN_VALUE</b>", "Returns the smallest number possible in JavaScript"],
                    ["<b>NEGATIVE_INFINITY</b>", "Represents negative infinity (returned on overflow)"],
                    ["<b>NaN</b>", "Represents a 'Not-a-Number' value"],
                    ["<b>POSITIVE_INFINITY</b>", "Represents infinity (returned on overflow)"],
                    ["<b>prototype</b>", "Allows you to add properties and methods to an object"],
                ],
            },
            {
                type: "table",
                data: [
                    ["keyword", "method"],
                    ["<b>isFinite()</b>", "Checks whether a value is a finite number."],
                    ["<b>isInteger()</b>", "Checks whether a value is an integer"],
                    ["<b>isNaN()</b>", "Checks whether a value is Number.NaN"],
                    ["<b>isSafeInteger()</b>", "Checks whether a value is a safe integer"],
                    ["<b>toExponential(x)</b>", "Converts a number into an exponential notation"],
                    ["<b>toFixed(x)</b>", "Formats a number with x numbers of digits after the decimal point"],
                    ["<b>toPrecision(x)</b>", "Formats a number to x length"],
                    ["<b>toString()</b>", "Converts a number to a string"],
                    ["<b>valueOf()</b>", "Returns the primitive value of a number"],
                ],
            },
            //=============================
            {
                type: "text",
                data: "<h3>isFinite()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "65",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>isInteger()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "66",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>isNaN()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "syntax",
                data: "Number.isNaN(123) //false \n Number.isNaN(-1.23) //false \n Number.isNaN(5-2) //false \n Number.isNaN(0) //false \n Number.isNaN('123') //false \n Number.isNaN('Hello') //false \n Number.isNaN('2005/12/12') //false \n Number.isNaN('') //false \n Number.isNaN(true) //false \n Number.isNaN(undefined) //false \n Number.isNaN('NaN') //false \n Number.isNaN(NaN) //true \n Number.isNaN(0 / 0) //true \n",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>isSafeInteger()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "syntax",
                data: "Number.isSafeInteger(123) //true \n Number.isSafeInteger(-123) //true \n Number.isSafeInteger(5-2) //true \n Number.isSafeInteger(0) //true \n Number.isSafeInteger(0.5) //false \n Number.isSafeInteger(Math.pow(2, 53)) //false \n Number.isSafeInteger(Math.pow(2, 53) - 1) //true \n Number.isSafeInteger('123') //false \n Number.isSafeInteger(false) //false \n Number.isSafeInteger(Infinity) //false \n Number.isSafeInteger(-Infinity) //false \n Number.isSafeInteger(0 / 0) //false \n",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>toExponential()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "67",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>toFixed()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "68",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>toPrecision()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "69",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>toString()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "syntax",
                data: "var num = 15; \n var n = num.toString(); \n",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>valueOf()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "syntax",
                data: "var num = 15; \n var n = num.toString(); \n",
            },
            //=============================
        ],
        "String": [
            {
                type: "image",
                data: "../media/images/javascript/Education.jpg",
            },
            {
                type: "text",
                data: "Data type is String if we assign any number or word to a variable with quotes..",
            },
            {
                type: "syntax",
                data: 'var x = "5";\nvar name = "scortual";',
            },
            {
                type: "text",
                data: "Following are the string methods..",
            },
            {
                type: "table",
                data: [
                    ["keyword", "Property"],
                    ["<b>constructor</b>", "Returns the string's constructor function"],
                    ["<b>length</b>", "Returns the length of a string"],
                    ["<b>prototype</b>", "Allows you to add properties and methods to an object"],
                ],
            },
            {
                type: "table",
                data: [
                    ["keyword", "method"],
                    ["<b>charAt()</b>", "Returns the character at the specified index (position)"],
                    ["<b>charCodeAt()</b>", "Returns the Unicode of the character at the specified index"],
                    ["<b>concat()</b>", "Joins two or more strings, and returns a new joined strings"],
                    ["<b>endsWith()</b>", "Checks whether a string ends with specified string/characters"],
                    ["<b>fromCharCode()</b>", "Converts Unicode values to characters"],
                    ["<b>includes()</b>", "Checks whether a string contains the specified string/characters"],
                    ["<b>indexOf()</b>", "Returns the position of the first found occurrence of a specified value in a string"],
                    ["<b>lastIndexOf()</b>", "Returns the position of the last found occurrence of a specified value in a string"],
                    ["<b>localeCompare()</b>", "Compares two strings in the current locale"],
                    ["<b>match()</b>", "Searches a string for a match against a regular expression, and returns the matches"],
                    ["<b>repeat()</b>", "Returns a new string with a specified number of copies of an existing string"],
                    ["<b>replace()</b>", "Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced"],
                    ["<b>search()</b>", "Searches a string for a specified value, or regular expression, and returns the position of the match"],
                    ["<b>slice()</b>", "Extracts a part of a string and returns a new string"],
                    ["<b>split()</b>", "Splits a string into an array of substrings"],
                    ["<b>startsWith()</b>", "Checks whether a string begins with specified characters"],
                    ["<b>substr()</b>", "Extracts the characters from a string, beginning at a specified start position, and through the specified number of character"],
                    ["<b>substring()</b>", "Extracts the characters from a string, between two specified indices"],
                    ["<b>toLocaleLowerCase()</b>", "Converts a string to lowercase letters, according to the host's locale"],
                    ["<b>toLocaleUpperCase()</b>", "Converts a string to uppercase letters, according to the host's locale"],
                    ["<b>toLowerCase()</b>", "Converts a string to lowercase letters"],
                    ["<b>toString()</b>", "Returns the value of a String object"],
                    ["<b>toUpperCase()</b>", "Converts a string to uppercase letters"],
                    ["<b>trim()</b>", "Removes whitespace from both ends of a string"],
                    ["<b>valueOf()</b>", "Returns the primitive value of a String object"],
                ],
            },
            //=============================
            {
                type: "text",
                data: "<h3>charAt()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "71",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>charCodeAt()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "72",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>concat()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "73",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>endsWith()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "74",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>fromCharCode()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "75",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>includes()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "76",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>indexOf()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "77",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>lastIndexOf()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "78",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>localeCompare()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "79",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>match()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "80",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>repeat()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "81",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>replace()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "82",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>search()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "83",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>slice()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "84",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>split()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "85",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>startsWith()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "86",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>substr()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "87",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>substring()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "88",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>toLocaleLowerCase()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "89",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>toLocaleUpperCase()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "90",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>toLowerCase()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "91",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>toString()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "92",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>toUpperCase()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "93",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>trim()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "94",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>valueOf()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "95",
            },
            //=============================
        ],
        "Arrays": [
            {
                type: "image",
                data: "../media/images/javascript/array.jpg",
            },
            {
                type: "text",
                data: "JavaScript arrays are used to store multiple values in a single variable. These values are stored against a key. These keys are numbers.",
            },
            {
                type: "syntax",
                data: 'var cars = ["Saab", "Volvo", "BMW"];',
            },
            {
                type: "table",
                data: [
                    ["keyword", "Property"],
                    ["<b>constructor</b>", "Returns the function that created the Array object's prototype"],
                    ["<b>length</b>", "Sets or returns the number of elements in an array"],
                    ["<b>prototype</b>", "Allows you to add properties and methods to an Array object"],
                ],
            },
            {
                type: "table",
                data: [
                    ["keyword", "method"],
                    ["<b>concat()</b>", "Joins two or more arrays, and returns a copy of the joined arrays"],
                    ["<b>copyWithin()</b>", "Copies array elements within the array, to and from specified positions"],
                    ["<b>every()</b>", "Checks if every element in an array pass a test"],
                    ["<b>fill()</b>", "Fill the elements in an array with a static value"],
                    ["<b>filter()</b>", "Creates a new array with every element in an array that pass a test"],
                    ["<b>find()</b>", "Returns the value of the first element in an array that pass a test"],
                    ["<b>findIndex()</b>", "Returns the index of the first element in an array that pass a test"],
                    ["<b>forEach()</b>", "Calls a function for each array element"],
                    ["<b>indexOf()</b>", "Search the array for an element and returns its position"],
                    ["<b>isArray()</b>", "Checks whether an object is an array"],
                    ["<b>join()</b>", "Joins all elements of an array into a string"],
                    ["<b>lastIndexOf()</b>", "Search the array for an element, starting at the end, and returns its position"],
                    ["<b>map()</b>", "Creates a new array with the result of calling a function for each array element"],
                    ["<b>pop()</b>", "Removes the last element of an array, and returns that element"],
                    ["<b>push()</b>", "Adds new elements to the end of an array, and returns the new length"],
                    ["<b>reduce()</b>", "Reduce the values of an array to a single value (going left-to-right)"],
                    ["<b>reduceRight()</b>", "Reduce the values of an array to a single value (going right-to-left)"],
                    ["<b>reverse()</b>", "Reverses the order of the elements in an array"],
                    ["<b>shift()</b>", "Removes the first element of an array, and returns that element"],
                    ["<b>slice()</b>", "Selects a part of an array, and returns the new array."],
                    ["<b>some()</b>", "Checks if any of the elements in an array pass a test"],
                    ["<b>sort()</b>", "Sorts the elements of an array"],
                    ["<b>splice()</b>", "Adds/Removes elements from an array"],
                    ["<b>toString()</b>", "Converts an array to a string, and returns the result"],
                    ["<b>unshift()</b>", "Adds new elements to the beginning of an array, and returns the new length"],
                    ["<b>valueOf()</b>", "Returns the primitive value of an array"],
                ],
            },
            //=============================
            {
                type: "text",
                data: "<h3>Array()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "96",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>concat()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "97",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>copyWithin()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "98",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>every()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "99",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>fill()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "100",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>filter()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "101",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>find()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "102",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>findIndex()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "103",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>forEach()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "104",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>indexOf()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "105",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>isArray()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "106",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>join()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "107",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>lastIndexOf()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "108",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>map()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "109",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>pop()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "110",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>push()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "111",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>reduce()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "112",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>reduceRight()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "113",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>reverse()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "114",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>shift()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "115",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>slice()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "116",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>some()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "117",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>sort()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "118",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>splice()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "119",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>toString()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "120",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>unshift()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "121",
            },
            //=============================
            //=============================
            {
                type: "text",
                data: "<h3>valueOf()</h3>",
            },
            {
                type: "text",
                data: "Please see the below example in our lab to understand it better.",
            },
            {
                type: "app",
                data: "122",
            },
            //=============================
        ],
        "Objects": [
        {
            type: "image",
            data: "../media/images/javascript/object2.jpg",
        },
        {
            type: "text",
            data: "Objects are variables containing so many variables. These variables can store be any data type number , string , array or objects. Javascript is an object oriented language. For ex. look at below exmaple.",
        },
        {
            type: "syntax",
            data: '\n var fruitObj =\n{ \n\t"watermelon":screen.img_1,\n\t"orange":screen.img_2,\n\t"banana":screen.img_3,\n\t"strawberry":screen.img_4,\n} \n',
        },
        {
            type: "text",
            data: "Here we have initialised object named person and we have stored the person information in it. The information is stored in a key value format.",
        },
        {
            type: "text",
            data: "<h3>Ways to create Javascript objects</h3>",
        },
        {
            type: "text",
            data: "<h3>Object Notation</h3>",
        },
        {
            type: "text",
            data: "Please see the below example in our lab to understand it better.",
        },
        {
            type: "syntax",
            data: '\n var fruitObj =\n{ \n\t"watermelon":screen.img_1,\n\t"orange":screen.img_2,\n\t"banana":screen.img_3,\n\t"strawberry":screen.img_4,\n} \n',
        },
        {
            type: "text",
            data: "<h3>Object Constructors</h3>",
        },
        {
            type: "text",
            data: "Please see the below example in our lab to understand it better.",
        },
        {
            type: "syntax",
            data: 'var fruitObj = new Object();\n fruitObj.watermelon = screen.img_1;\n fruitObj.orange = screen.img_2;\n fruitObj.banana = screen.img_3;\n fruitObj.strawberry = screen.img_3;\n',
        },
        {
            type: "text",
            data: "<h3>Object Function</h3>",
        },
        {
            type: "text",
            data: "Please see the below example in our lab to understand it better.",
        },
        {
            type: "syntax",
            data: ' function fruits ()\n {\n\tthis.watermelon = screen.img_1.read("domElem");\n\tthis.orange = screen.img_2.read("domElem");\n\tthis.banana = screen.img_3.read("domElem");\n\tthis.strawberry = screen.img_4.read("domElem");\n };\n  var fruitObj = new fruits();\n',
        },
        {
            type: "text",
            data: "<h3>Ways to access Javascript objects</h3>",
        },
        {
            type: "syntax",
            data: 'console.log(fruitObj.watermelon);\nconsole.log(fruitObj["watermelon"]);',
        },
        {
            type: "text",
            data: "<h3>Loop over Object</h3>",
        },
        {
            type: "text",
            data: "The JavaScript for...in statement loops through the properties of an object.",
        },
        {
            type: "syntax",
            data: 'for(var i in persons)\n {\n console.log(i,persons[i]);\n }\n',
        },
        {
            type: "app",
            data: "123",
        },
        {
            type: "text",
            data: "<h3>Delete property in  Javascript objects</h3>",
        },
        {
            type: "syntax",
            data: 'delete fruitObj.watermelon;',
        },
        {
            type: "app",
            data: "124",
        },
        {
            type: "text",
            data: "<h3>prototype</h3>",
        },
        {
            type: "text",
            data: "Prototype property allows you to add new properties and methods to an existing objects.",
        },
        {
            type: "syntax",
            data: 'Person.prototype.color = "white";\nPerson.prototype.getCompleteInfo = function()\n{\n return this.firstname+" "+this.lastname}',
        },
        {
            type: "app",
            data: "125",
        },
        {
            type: "text",
            data: "<h3>Built-in JavaScript Constructors</h3>",
        },
        {
            type: "syntax",
            data: 'var x1 = new Object();    // A new Object object \n var x2 = new String();    // A new String object \n var x3 = new Number();    // A new Number object \n var x4 = new Boolean();   // A new Boolean object \n var x5 = new Array();     // A new Array object \n var x6 = new RegExp();    // A new RegExp object \n var x7 = new Function();  // A new Function object \n var x8 = new Date();      // A new Date object \n',
        }, ]
    },
},
{
    name: "Data Type Conversion",
    desc: [
        {
            type: "text",
            data: "Javascript allows us to convert one type of data to another.",
        },
        {
            type: "text",
            data: "In JavaScript there are 5 different data types that can contain values:",
        },
        {
            type: "list",
            data:
            {
                "string": "",
                "number": "",
                "boolean": "",
                "object": "",
                "function": "",
            },
        },
        {
            type: "text",
            data: "There are 3 types of objects:",
        },
        {
            type: "list",
            data:
            {
                "Object": "",
                "Date": "",
                "Array": "",
            },
        },
        {
            type: "text",
            data: "There are 2 data types that cannot contain values",
        },
        {
            type: "list",
            data:
            {
                "null": "",
                "undefined": "",
            },
        },
        {
            type: "text",
            data: "<h3>Type of operator</h3>",
        },
        {
            type: "text",
            data: "You can use the typeof operator to find the data type of a JavaScript variable.",
        },
        {
            type: "syntax",
            data: 'typeof "John"                 // Returns "string" \n typeof 3.14                   // Returns "number"\n typeof NaN                    // Returns "number"\n typeof false                  // Returns "boolean"\n typeof [1,2,3,4]              // Returns "object"\n typeof {name:"John", age:34}  // Returns "object"\n typeof new Date()             // Returns "object"\n typeof function () {}         // Returns "function"\n typeof myCar                  // Returns "undefined" *\n typeof null                   // Returns "object"\n',
        },
        //========================
        {
            type: "text",
            data: "<h3>Numbers to Strings</h3>",
        },
        {
            type: "text",
            data: "The global method String() can convert numbers to strings.It can be used on any type of numbers, literals, variables, or expressions:",
        },
        {
            type: "syntax",
            data: 'String(x)         // returns a string from a number variable x \n String(123)       // returns a string from a number literal 123\n String(100 + 23)  // returns a string from a number from an expression\n',
        },
        //========================
        //========================
        {
            type: "text",
            data: "<h3>Booleans to Strings</h3>",
        },
        {
            type: "text",
            data: "The global method String() can convert booleans to strings.",
        },
        {
            type: "syntax",
            data: 'String(false)        // returns "false" \nString(true)         // returns "true"',
        },
        //========================
        //========================
        {
            type: "text",
            data: "<h3>Dates to Strings</h3>",
        },
        {
            type: "text",
            data: "The global method String() can convert booleans to strings.",
        },
        {
            type: "syntax",
            data: 'String(Date())      // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"',
        },
        //========================
        //========================
        {
            type: "text",
            data: "<h3>Strings to Numbers</h3>",
        },
        {
            type: "text",
            data: "The global method Number() can convert strings to numbers.",
        },
        {
            type: "syntax",
            data: 'Number("3.14")    // returns 3.14 \n parseFloat("3.14")    // returns 3.14 \n parseInt("3.14")    // returns 3.14 \n Number(" ")       // returns 0 \n Number("")        // returns 0\n Number("99 88")   // returns NaN\n',
        },
        //========================
        //========================
        {
            type: "text",
            data: "<h3>Strings to Numbers with Unary + Operator</h3>",
        },
        {
            type: "text",
            data: "The unary + operator can be used to convert a variable to a number:",
        },
        {
            type: "syntax",
            data: 'var y = "5";      // y is a string\n var x = + y;      // x is a number\n',
        },
        {
            type: "text",
            data: "If the variable cannot be converted, it will still become a number, but with the value NaN (Not a number):",
        },
        {
            type: "syntax",
            data: 'var y = "John";   // y is a string     // var x = + y;      // x is a number (NaN)\n',
        },
        //========================
        //========================
        {
            type: "text",
            data: "<h3>Booleans to Numbers</h3>",
        },
        {
            type: "text",
            data: "The global method Number() can also convert booleans to numbers.",
        },
        {
            type: "syntax",
            data: 'Number(false)     // returns 0\nNumber(true)      // returns 1',
        },
        //========================
        //========================
        {
            type: "text",
            data: "<h3>Dates to Numbers</h3>",
        },
        {
            type: "text",
            data: "The global method Number() can be used to convert dates to numbers.",
        },
        {
            type: "syntax",
            data: 'd = new Date();\nNumber(d)          // returns 1404568027739',
        },
        //========================
        //========================
        {
            type: "text",
            data: "<h3>Dates to Numbers</h3>",
        },
        {
            type: "text",
            data: "The global method Number() can be used to convert dates to numbers.",
        },
        {
            type: "syntax",
            data: 'd = new Date();\nNumber(d)          // returns 1404568027739',
        },
        //========================
    ]
},
{
    name: "Functions",
    desc: [
    {
        type: "text",
        data: "Function is nothing but a variable where block of code is stored. The practise of creating functions is followed so that we dont have to write the same code again again for the same operation. The block of code stored in a variable is executed after writing () in front of variable.",
    },
    {
        type: "syntax",
        data: 'var x = 5;\n var y = 6;\n var z = x + y;\n\n  var z = add(x,y);\n function add(num1,num2)\n {\n' + _tab + 'return num1+num2;\n }\n',
    },
    {
        type: "text",
        data: "Here as shown in the above code we have performed addition operation via function. Hence if we have many numbers to add so in this case we don't have to write the addition operator again and again. Just by calling function and assigning the return value to a third variable will do our work. It will also save our time. And make our code more structure.",
    }, ]
},
{
    name: "Events",
    desc: [
    {
        type: "text",
        data: "Events are generated by the physical devices or functions.",
    },
    {
        type: "image",
        data: "../media/images/javascript/pendrive.jpg",
    },
    {
        type: "text",
        data: "For example when you insert a pendrive in your computer an event is generated that pendrive is inserted. Then the pendrive event listner functions listners this event and take action of reading the pendrive data and it opens the window listing files on the pendrive.",
    },
    {
        type: "image",
        data: "../media/images/javascript/event.png",
    },
    {
        type: "text",
        data: "Similarly in javascript the browser continously listens the event genrated by mouse , keyboard or any function. For touch devices like ipad and mobile touch events are used. Events genrated by the external devices are as follows:",
    },
    {
        type: "text",
        data: "<h3>Mouse</h3>",
    },
    {
        type: "text",
        data: "Following are the list of primary generated by mouse.",
    },
    {
        type: "table",
        data: [
            ["Event", "Description"],
            ["<b>mouseup</b>", "It is used to declare variable."],
            ["<b>mousemove</b>", "It is used to declare function."],
            ["<b>mousedown</b>", "Marks a block of statements to be executed, as long as a condition is true"],
        ],
    },
    {
        type: "text",
        data: "Following are the list of secondary generated by mouse.",
    },
    {
        type: "table",
        data: [
            ["Event", "Description"],
            ["<b>click</b>", "It is used to declare variable."],
            ["<b>dblclick</b>", "It is used to declare function."],
            ["<b>mouseenter</b>", "Marks a block of statements to be executed, as long as a condition is true"],
            ["<b>mouseout</b>", "Marks a block of statements to be executed, as long as a condition is true"],
        ],
    },
    {
        type: "text",
        data: "<h3>Touch Devices</h3>",
    },
    {
        type: "text",
        data: "For touch devices following types are events are defined.",
    },
    {
        type: "table",
        data: [
            ["Event", "Description"],
            ["<b>touchstart</b>", "It is used to declare variable."],
            ["<b>touchmove</b>", "It is used to declare function."],
            ["<b>touchend</b>", "Marks a block of statements to be executed, as long as a condition is true"],
        ],
    },
    {
        type: "text",
        data: "<h3>Keyboard</h3>",
    },
    {
        type: "text",
        data: "Following are the list of primary generated by keyboard.",
    },
    {
        type: "table",
        data: [
            ["Event", "Description"],
            ["<b>keydown</b>", "It is used to declare variable."],
            ["<b>keyup</b>", "It is used to declare function."],
            ["<b>keypress</b>", "Marks a block of statements to be executed, as long as a condition is true"],
        ],
    },
    {
        type: "text",
        data: "All the events are well handled by our framework. So you need not to worry about them..",
    }, ]
},
{
    name: "Maths Oprations",
    desc: [
        {
            type: "image",
            data: "../media/images/javascript/scary_math.jpg",
        },
        {
            type: "text",
            data: "The JavaScript Math object allows you to perform mathematical tasks on number variables. They are predefined functions already stored in browser to perform mathematical task. You just have to call these functions to get values.",
        },
        //========================
        {
            type: "text",
            data: "<h3>Math Properties (Constants)</h3>",
        },
        {
            type: "text",
            data: "JavaScript provides 8 mathematical constants that can be accessed with the Math object:",
        },
        {
            type: "syntax",
            data: 'Math.E        // returns Euler"s number\n Math.PI       // returns PI\n Math.SQRT2    // returns the square root of 2\n Math.SQRT1_2  // returns the square root of 1/2\n Math.LN2      // returns the natural logarithm of 2\n Math.LN10     // returns the natural logarithm of 10\n Math.LOG2E    // returns base 2 logarithm of E\n Math.LOG10E   // returns base 10 logarithm of E \n',
        },
        //========================
        //========================
        {
            type: "text",
            data: "<h3>Math Object Methods</h3>",
        },
        {
            type: "table",
            data: [
                ["keyword", "description"],
                ["<b>abs(x)</b>", "Returns the absolute value of x"],
                ["<b>acos(x)</b>", "Returns the arccosine of x, in radians"],
                ["<b>asin(x)</b>", "Returns the arcsine of x, in radians"],
                ["<b>atan(x)</b>", "Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians"],
                ["<b>atan2(x)</b>", "Returns the arctangent of the quotient of its arguments"],
                ["<b>ceil(x)</b>", "Returns the value of x rounded up to its nearest integer"],
                ["<b>cos(x)</b>", "Returns the cosine of x (x is in radians)"],
                ["<b>exp(x)</b>", "Returns the value of Ex"],
                ["<b>floor(x)</b>", "Returns the value of x rounded down to its nearest integer"],
                ["<b>log(x)</b>", "Returns the natural logarithm (base E) of x"],
                ["<b>max(x,y,z,...,n)</b>", "Returns the number with the highest value"],
                ["<b>min(x,y,z,...,n)</b>", "Returns the number with the lowest value"],
                ["<b>pow(x,y)</b>", "Returns the value of x to the power of y"],
                ["<b>random()</b>", "Returns a random number between 0 and 1"],
                ["<b>round(x)</b>", "Returns the value of x rounded to its nearest integer"],
                ["<b>sin(x)</b>", "Returns the sine of x (x is in radians)"],
                ["<b>sqrt(x)</b>", "Returns the square root of x"],
                ["<b>tan(x)</b>", "Returns the tangent of an angle"],
            ],
        },
        //========================
        //========================
        {
            type: "text",
            data: "<h3>Math.abs(x)</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'Math.abs(4.7);    // returns 5\nMath.round(4.4);    // returns 4',
        },
        {
            type: "app",
            data: "203",
        },
        //========================
		  //========================
        {
            type: "text",
            data: "<h3>Math.cos(x)</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'Math.abs(4.7);    // returns 5\nMath.round(4.4);    // returns 4',
        },
        {
            type: "app",
            data: "204",
        },
        //========================
		
        //========================
        {
            type: "text",
            data: "<h3>Math.acos(x)</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'Math.abs(4.7);    // returns 5\nMath.round(4.4);    // returns 4',
        },
        {
            type: "app",
            data: "205",
        },
        //========================
      
        //========================
        {
            type: "text",
            data: "<h3>Math.sin(x)</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'Math.abs(4.7);    // returns 5\nMath.round(4.4);    // returns 4',
        },
        {
            type: "app",
            data: "206",
        },
        //========================
        //========================
        {
            type: "text",
            data: "<h3>Math.asin(x)</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'Math.abs(4.7);    // returns 5\nMath.round(4.4);    // returns 4',
        },
        {
            type: "app",
            data: "207",
        },
        //========================
        //========================
        {
            type: "text",
            data: "<h3>Math.tan(x)</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'Math.abs(4.7);    // returns 5\nMath.round(4.4);    // returns 4',
        },
        {
            type: "app",
            data: "208",
        },
        //========================
        //========================
        {
            type: "text",
            data: "<h3>Math.atan(x)</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'Math.abs(4.7);    // returns 5\nMath.round(4.4);    // returns 4',
        },
        {
            type: "app",
            data: "209",
        },
        //========================
        //========================
        {
            type: "text",
            data: "<h3>Math.ceil(x)</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'Math.abs(4.7);    // returns 5\nMath.round(4.4);    // returns 4',
        },
        {
            type: "app",
            data: "210",
        },
        //========================
		//========================
        {
            type: "text",
            data: "<h3>Math.floor(x)</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'Math.abs(4.7);    // returns 5\nMath.round(4.4);    // returns 4',
        },
        {
            type: "app",
            data: "211",
        },
        //========================
        //========================
        {
            type: "text",
            data: "<h3>Math.exp(x)</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'Math.abs(4.7);    // returns 5\nMath.round(4.4);    // returns 4',
        },
        {
            type: "app",
            data: "212",
        },
        //========================
        
        //========================
        {
            type: "text",
            data: "<h3>Math.log(x)</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'Math.abs(4.7);    // returns 5\nMath.round(4.4);    // returns 4',
        },
        {
            type: "app",
            data: "213",
        },
        //========================
        //========================
        {
            type: "text",
            data: "<h3>Math.pow(x)</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'Math.abs(4.7);    // returns 5\nMath.round(4.4);    // returns 4',
        },
        {
            type: "app",
            data: "214",
        },
        //========================
        //========================
        {
            type: "text",
            data: "<h3>Math.random(x)</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'Math.abs(4.7);    // returns 5\nMath.round(4.4);    // returns 4',
        },
        {
            type: "app",
            data: "215",
        },
        //========================
    ]
},
{
    name: "Date",
    desc: [
        //========================
        {
            type: "app",
            data: "126",
        },
        {
            type: "text",
            data: "<h3>Date object</h3>",
        },
        {
            type: "text",
            data: "A date consists of a year, a month, a day, an hour, a minute, a second, and milliseconds.",
        },
        {
            type: "syntax",
            data: 'new Date()\n new Date(milliseconds)\n new Date(dateString)\n new Date(year, month, day, hours, minutes, seconds, milliseconds)\n',
        },
	{
		type: "text",
		data: "<h3>Date object property</h3>",
	},
    {
        type: "text",
        data: "Following are the list of primary generated by keyboard.",
    },
    {
        type: "table",
        data: [
            ["Event", "Description"],
            ["<b>constructor</b>", "It is used to declare variable."],
            ["<b>prototype</b>", "It is used to declare function."],
           
        ],
    },
	{
		type: "text",
		data: "<h3>Date Object Methods</h3>",
	},
    {
        type: "text",
        data: "Following are the list of primary generated by keyboard.",
    },
    {
        type: "table",
        data: [
            ["Event", "Description"],
            ["<b>getDate()</b>", "It is used to declare variable."],
            ["<b>getDay()</b>", "It is used to declare function."],
            ["<b>getFullYear()</b>", "It is used to declare function."],
            ["<b>getHours()</b>", "It is used to declare function."],
            ["<b>getMilliseconds()</b>", "It is used to declare function."],
            ["<b>getMinutes()</b>", "It is used to declare function."],
            ["<b>getMonth()</b>", "It is used to declare function."],
            ["<b>getSeconds()</b>", "It is used to declare function."],
            ["<b>getTime()</b>", "It is used to declare function."],
            ["<b>getTimezoneOffset()</b>", "It is used to declare function."],
            ["<b>getUTCDate()</b>", "It is used to declare function."],
            ["<b>getUTCDay()</b>", "It is used to declare function."],
            ["<b>getUTCFullYear()</b>", "It is used to declare function."],
            ["<b>getUTCHours()</b>", "It is used to declare function."],
            ["<b>getUTCMilliseconds()</b>", "It is used to declare function."],
            ["<b>getUTCMinutes()</b>", "It is used to declare function."],
            ["<b>getUTCMonth()</b>", "It is used to declare function."],
            ["<b>getUTCSeconds()</b>", "It is used to declare function."],
            ["<b>now()</b>", "It is used to declare function."],
            ["<b>parse()</b>", "It is used to declare function."],
            ["<b>setDate()</b>", "It is used to declare function."],
            ["<b>setFullYear()</b>", "It is used to declare function."],
            ["<b>setHours()</b>", "It is used to declare function."],
            ["<b>setMilliseconds()</b>", "It is used to declare function."],
            ["<b>setMinutes()</b>", "It is used to declare function."],
            ["<b>setMonth()</b>", "It is used to declare function."],
            ["<b>setSeconds()</b>", "It is used to declare function."],
            ["<b>setTime()</b>", "It is used to declare function."],
            ["<b>setUTCDate()</b>", "It is used to declare function."],
            ["<b>setUTCFullYear()</b>", "It is used to declare function."],
            ["<b>setUTCHours()</b>", "It is used to declare function."],
            ["<b>setUTCMilliseconds()</b>", "It is used to declare function."],
            ["<b>setUTCMinutes()</b>", "It is used to declare function."],
            ["<b>setUTCMonth()</b>", "It is used to declare function."],
            ["<b>setUTCSeconds()</b>", "It is used to declare function."],
            ["<b>toDateString()</b>", "It is used to declare function."],
            ["<b>toISOString()</b>", "It is used to declare function."],
            ["<b>toJSON()</b>", "It is used to declare function."],
            ["<b>toLocaleDateString()</b>", "It is used to declare function."],
            ["<b>toLocaleTimeString()</b>", "It is used to declare function."],
            ["<b>toLocaleString()</b>", "It is used to declare function."],
            ["<b>toString()</b>", "It is used to declare function."],
            ["<b>toTimeString()</b>", "It is used to declare function."],
            ["<b>toUTCString()</b>", "It is used to declare function."],
            ["<b>UTC()</b>", "It is used to declare function."],
            ["<b>valueOf()</b>", "It is used to declare function."],
           
        ],
    },
        //========================
		
		 //========================
        {
            type: "text",
            data: "<h3>getDate()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "126",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>getDay()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "127",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>getFullYear()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "128",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>getHours()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "129",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>getMilliseconds()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "130",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>getMinutes()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "131",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>getMonth()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "132",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>getSeconds()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "133",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>getTime()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "134",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>getTimezoneOffset()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "135",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>getUTCDate()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "136",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>getUTCDay()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "137",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>getUTCFullYear()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "138",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>getUTCHours()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "139",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>getUTCMilliseconds()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "140",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>getUTCMinutes()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "141",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>getUTCMonth()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "142",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>getUTCSeconds()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "143",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>now()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "144",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>parse()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "145",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>setDate()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "146",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>setFullYear()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "147",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>setHours()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "148",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>setMilliseconds()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "149",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>setMinutes()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "150",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>setMonth()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "151",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>setSeconds()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "152",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>setTime()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "153",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>setUTCDate()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "154",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>setUTCFullYear()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "155",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>setUTCHours()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "156",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>setUTCMilliseconds()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "157",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>setUTCMinutes()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "158",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>setUTCMonth()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "159",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>setUTCSeconds()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "160",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>toDateString()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "161",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>toISOString()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "162",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>toJSON()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "163",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>toLocaleDateString()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "164",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>toLocaleTimeString()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "165",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>toLocaleString()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "166",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>toString()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "167",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>toTimeString()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "168",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>toUTCString()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "169",
        },
        //========================
		 //========================
        {
            type: "text",
            data: "<h3>UTC()</h3>",
        },
        {
            type: "text",
            data: "Math.abs(x) returns the value of x rounded to its nearest integer:",
        },
        {
            type: "syntax",
            data: 'var today = new Date();\n var n = today.getDate();',
        },
        {
            type: "app",
            data: "170",
        },
        //========================
		
		
    ]
},
{
    name: "Conditional Statements",
    desc: [
       
        {
            type: "text",
            data: "<h3>if statement</h3>",
        },
		 {
            type: "app",
            data: "24",
        },
        {
            type: "text",
            data: "Use if to specify a block of code to be executed, if a specified condition is true",
        },
        {
            type: "syntax",
            data: 'if (hour < 18) \n {\n' + _tab + 'greeting = "Good day";\n }\n',
        },
        //========================
        //========================
        {
            type: "text",
            data: "<h3>else Statement</h3>",
        },
		 {
            type: "app",
            data: "25",
        },
        {
            type: "text",
            data: "Use the else statement to specify a block of code to be executed if the condition is false.",
        },
        {
            type: "syntax",
            data: 'if (hour < 18) \n {\n greeting = "Good day";\n } \n else \n {\n greeting = "Good evening";\n }\n',
        },
        //========================
        //========================
        {
            type: "text",
            data: "<h3>else if Statement</h3>",
        },
        {
            type: "text",
            data: "Use the else if statement to specify a new condition if the first condition is false.",
        },
        {
            type: "syntax",
            data: 'if (time < 10)\n {\n greeting = "Good morning";\n } \n else if (time < 20) \n {\n greeting = "Good day";\n } \n else \n {\n greeting = "Good evening";\n }\n',
        },
        //========================
        {
            type: "text",
            data: "<h3>Switch</h3>",
        },
        {
            type: "app",
            data: "26",
        },
        {
            type: "text",
            data: "The switch statement is used to perform different actions based on different conditions.Use the switch statement to select one of many blocks of code to be executed.",
        },
        {
            type: "syntax",
            data: 'switch (new Date().getDay())\n {\n case 0:\n day = "Sunday";\n break;\n case 1:\n day = "Monday";\n break;\n case 2:\n day = "Tuesday";\n break;\n case 3:\n day = "Wednesday";\n break;\n case 4:\n day = "Thursday";\n break;\n case 5:\n day = "Friday";\n break;\n case 6:\n day = "Saturday";\n }\n',
        },
    ]
},
{
    name: "Loops",
    desc: [
        //========================
        {
            type: "text",
            data: "<h3>For loop</h3>",
        },
        {
            type: "app",
            data: "202",
        },
        {
            type: "text",
            data: "Loops can execute a block of code a number of times.Loops are handy, if you want to run the same code over and over again, each time with a different value.",
        },
        {
            type: "syntax",
            data: 'for (i = 0; i < cars.length; i++) \n { \n text += cars[i] + "\n";\n }\n',
        },
        //========================
        {
            type: "text",
            data: "<h3>For/in Loop</h3>",
        },
		 {
            type: "app",
            data: "123",
        },
        {
            type: "text",
            data: "The JavaScript for/in statement loops through the properties of an object:",
        },
        {
            type: "syntax",
            data: 'var person = {fname:"John", lname:"Doe", age:25}; \n  var text = "";\n var x;\n for (x in person) \n {\n text += person[x];\n }\n',
        },
        //========================
        //========================
        {
            type: "text",
            data: "<h3>while Loop</h3>",
        },
        {
            type: "app",
            data: "201",
        },
        {
            type: "text",
            data: "The while loop loops through a block of code as long as a specified condition is true.",
        },
        {
            type: "syntax",
            data: 'while (i < 10) \n { \n text += "The number is " + i; \n i++; \n } \n',
        },
        //========================
        //========================
        //========================
        {
            type: "text",
            data: "<h3>do/while</h3>",
        },
        {
            type: "text",
            data: "The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.",
        },
        {
            type: "syntax",
            data: 'do \n {\n text += "The number is " + i;\n i++;\n }\n while (i < 10);\n',
        },
        //========================
        //========================
        {
            type: "text",
            data: "<h3>For and While</h3>",
        },
        //========================
    ]
},
{
    name: "Canvas Basics",
    desc: [
	 {
		type: "text",
		data: "In this topic we will cover following points.",
	},
	 {
        type: "list",
		cls:"scroller",
        data:
        {
            "<span data='pt_drawImage'>Draw Image</span>": "",
            "<span data='pt_line'>Line</span>": "",
            "<span data='pt_arc'>Arc</span>": "",
            "<span data='pt_quadraticCurve'>quadraticCurve</span>": "",
            "<span  data='pt_bezierCurve'>bezierCurve</span>": "",
            "<span  data='pt_path'>path</span>": "",
            "<span data='pt_lineJoin'>lineJoin</span>": "",
            "<span  data='pt_roundedCorners'>roundedCorners</span>": "",
            "<span  data='pt_customShape'>customShape</span>": "",
            "<span  data='pt_rectangle'>rectangle</span>": "",
            "<span data='pt_circle'>circle</span>": "",
            "<span  data='pt_semiCircle'>semiCircle</span>": "",
            "<span  data='pt_shapeColorFill'>shapeColorFill</span>": "",
            "<span data='pt_gradient'>gradient</span>": "",
            "<span  data='pt_radialGradient'>radialGradient</span>": "",
            "<span  data='pt_text'>text</span>": "",
            "<span  data='pt_translate'>translate</span>": "",
            "<span  data='pt_scale'>scale</span>": "",
            "<span  data='pt_rotate'>rotate</span>": "",
            "<span  data='pt_transform'>transform</span>": "",
            "<span data='pt_shear'>shear</span>": "",
            "<span  data='pt_mirror'>mirror</span>": "",
        },
    },
	 {
		type: "text",
		data: "<h3 id='pt_drawImage'>Draw image</h3>",
	},
	{
        type: "syntax",
        data: 'var canvas = screen.cnv_1.canvas;\n var context = screen.cnv_1.context;\n screen.loaded = function()\n {\n var img_1 = screen.img_1.read("domElem");\n context.drawImage(img_1, x, y);\n }\n',
    },
	{
		type: "app",
		data: "193",
	},
    {
		type: "text",
		data: "<h3 id='pt_line'>Line</h3>",
	},
	{
		type: "app",
		data: "172",
	},
	{
        type: "syntax",
        data: 'var canvas = screen.cnv_1.canvas;\nvar context = screen.cnv_1.context;\ncontext.beginPath();\ncontext.moveTo(100, 150);\ncontext.lineTo(450, 50);\ncontext.lineWidth = 10;\ncontext.strokeStyle = "#ff0000";\ncontext.lineCap = "round"; // butt,round,square\ncontext.stroke();\n',
    },
	{
		type: "text",
		data: "<h3 id='pt_arc'>arc</h3>",
	},
	{
		type: "app",
		data: "173",
	},
	{
        type: "syntax",
        data: 'var canvas = screen.cnv_1.canvas;\nvar context = screen.cnv_1.context;\nvar x = canvas.width / 2;\nvar y = canvas.height / 2;\nvar radius = 75;\nvar startAngle = 1.1 * Math.PI;\nvar endAngle = 1.9 * Math.PI;\nvar counterClockwise = false;\n\ncontext.beginPath();\ncontext.arc(x, y, radius, startAngle, endAngle, counterClockwise);\ncontext.lineWidth = 15;\ncontext.strokeStyle = "black";\ncontext.stroke();\n',
    },
	{
		type: "text",
		data: "<h3 id='pt_quadraticCurve'>quadraticCurve</h3>",
	},
	{
		type: "app",
		data: "174",
	},
	{
        type: "syntax",
        data: 'var canvas = screen.cnv_1.canvas;\n var context = screen.cnv_1.context;\n context.beginPath();\n context.moveTo(188, 150);\n context.quadraticCurveTo(288, 0, 388, 150);\n context.lineWidth = 10;\n context.strokeStyle = "black";\n context.stroke();\n',
    },
	{
		type: "text",
		data: "<h3 id='pt_bezierCurve'>bezierCurve</h3>",
	},
	{
		type: "app",
		data: "175",
	},
	{
        type: "syntax",
        data: 'var canvas = screen.cnv_1.canvas;\n var context = screen.cnv_1.context;\n context.beginPath();\n context.moveTo(188, 130);\n context.bezierCurveTo(140, 10, 388, 10, 388, 170);\n context.lineWidth = 10;\n context.strokeStyle = "black";\n context.stroke();\n',
    },
	{
		type: "text",
		data: "<h3 id='pt_path'>path</h3>",
	},
	{
		type: "app",
		data: "176",
	},
	{
        type: "syntax",
        data: 'var canvas = screen.cnv_1.canvas;\n var context = screen.cnv_1.context;\n context.beginPath();\n context.moveTo(100, 20);\n context.lineTo(200, 160); // line 1\n context.quadraticCurveTo(230, 200, 250, 120); // quadratic curve\n context.bezierCurveTo(290, -40, 300, 200, 400, 150); // bezier curve\n context.lineTo(500, 90); // line 2\n context.lineWidth = 5;\n context.strokeStyle = "blue";\n context.stroke();\n',
    },
	{
		type: "text",
		data: "<h3 id='pt_lineJoin'>lineJoin</h3>",
	},
	{
		type: "app",
		data: "177",
	},
	{
        type: "syntax",
        data: '// set line width for all lines\n context.lineWidth = 25;\n  // miter line join (left)\n context.beginPath();\n context.moveTo(99, 150);\n context.lineTo(149, 50);\n context.lineTo(199, 150);\n context.lineJoin = "miter";\n context.stroke();\n  // round line join (middle)\n context.beginPath();\n context.moveTo(239, 150);\n context.lineTo(289, 50);\n context.lineTo(339, 150);\n context.lineJoin = "round";\n context.stroke();\n  // bevel line join (right)\n context.beginPath();\n context.moveTo(379, 150);\n context.lineTo(429, 50);\n context.lineTo(479, 150);\n context.lineJoin = "bevel";\n context.stroke();\n',
    },
	{
		type: "text",
		data: "<h3 id='pt_roundedCorners'>roundedCorners</h3>",
	},
	{
		type: "app",
		data: "178",
	},
	{
        type: "syntax",
        data: 'var canvas = screen.cnv_1.canvas;\n var context = screen.cnv_1.context;\n var rectWidth = 200;\n var rectHeight = 100;\n var rectX = 189;\n var rectY = 50;\n var cornerRadius = 50;\n  context.beginPath();\n context.moveTo(rectX, rectY);\n context.lineTo(rectX + rectWidth - cornerRadius, rectY);\n context.arcTo(rectX + rectWidth, rectY, rectX + rectWidth, rectY + cornerRadius, cornerRadius);\n context.lineTo(rectX + rectWidth, rectY + rectHeight);\n context.lineWidth = 5;\n context.stroke();\n',
    },
	{
		type: "text",
		data: "<h3 id='pt_customShape'>customShape</h3>",
	},
	{
		type: "app",
		data: "179",
	},
	{
        type: "syntax",
        data: '// begin custom shape,\n context.beginPath();\n context.moveTo(170, 80);\n context.bezierCurveTo(130, 100, 130, 150, 230, 150);\n context.bezierCurveTo(250, 180, 320, 180, 340, 150);\n context.bezierCurveTo(420, 150, 420, 120, 390, 100);\n context.bezierCurveTo(430, 40, 370, 30, 340, 50);\n context.bezierCurveTo(320, 5, 250, 20, 250, 50);\n context.bezierCurveTo(200, 5, 150, 20, 170, 80);\n  // complete custom shape\n context.closePath();\n context.lineWidth = 5;\n context.strokeStyle = "blue";\n context.stroke();\n',
    },
	{
		type: "text",
		data: "<h3 id='pt_rectangle'>rectangle</h3>",
	},
	{
		type: "app",
		data: "180",
	},
	{
        type: "syntax",
        data: 'var canvas = screen.cnv_1.canvas;\n var context = screen.cnv_1.context;\n context.beginPath();\n context.rect(188, 50, 200, 100);\n context.fillStyle = "yellow";\n context.fill();\n context.lineWidth = 7;\n context.strokeStyle = "black";\n context.stroke();\n',
    },
	{
		type: "text",
		data: "<h3 id='pt_circle'>circle</h3>",
	},
	{
		type: "app",
		data: "181",
	},
	{
        type: "syntax",
        data: 'var canvas = screen.cnv_1.canvas;\n var context = screen.cnv_1.context;\n var centerX = canvas.width / 2;\n var centerY = canvas.height / 2;\n var radius = 70;\n  context.beginPath();\n context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);\n context.fillStyle = "green";\n context.fill();\n context.lineWidth = 5;\n context.strokeStyle = "#003300";\n context.stroke();\n',
    },
	{
		type: "text",
		data: "<h3 id='pt_semiCircle'>semiCircle</h3>",
	},
	{
		type: "app",
		data: "182",
	},
	{
        type: "syntax",
        data: 'var canvas = screen.cnv_1.canvas;\n var context = screen.cnv_1.context;\n context.beginPath();\n context.arc(288, 75, 70, 0, Math.PI, false);\n context.closePath();\n context.lineWidth = 5;\n context.fillStyle = "red";\n context.fill();\n context.strokeStyle = "#550000";\n context.stroke();\n',
    },
	{
		type: "text",
		data: "<h3 id='pt_shapeColorFill'>shapeColorFill</h3>",
	},
	{
		type: "app",
		data: "183",
	},
	{
        type: "syntax",
        data: '// begin custom shape\n context.beginPath();\n context.moveTo(170, 80);\n context.bezierCurveTo(130, 100, 130, 150, 230, 150);\n context.bezierCurveTo(250, 180, 320, 180, 340, 150);\n context.bezierCurveTo(420, 150, 420, 120, 390, 100);\n context.bezierCurveTo(430, 40, 370, 30, 340, 50);\n context.bezierCurveTo(320, 5, 250, 20, 250, 50);\n context.bezierCurveTo(200, 5, 150, 20, 170, 80);\n  // complete custom shape\n context.closePath();\n context.lineWidth = 5;\n context.fillStyle = "#8ED6FF";\n context.fill();\n context.strokeStyle = "blue";\n context.stroke();\n',
    },
	{
		type: "text",
		data: "<h3 id='pt_gradient'>gradient</h3>",
	},
	{
		type: "app",
		data: "184",
	},
	{
        type: "syntax",
        data: 'var canvas = screen.cnv_1.canvas;\n var context = screen.cnv_1.context;\n  context.rect(0, 0, canvas.width, canvas.height);\n // add linear gradient\n var grd = context.createLinearGradient(0, 0, canvas.width, canvas.height);\n // light blue\n grd.addColorStop(0, "#8ED6FF");\n // dark blue\n grd.addColorStop(1, "#004CB3");\n context.fillStyle = grd;\n context.fill();\n',
    },
	{
		type: "text",
		data: "<h3 id='pt_radialGradient'>radialGradient</h3>",
	},
	{
		type: "app",
		data: "185",
	},
	{
        type: "syntax",
        data: 'var canvas = screen.cnv_1.canvas;\n var context = screen.cnv_1.context;\n context.rect(0, 0, canvas.width, canvas.height);\n // create radial gradient\n var grd = context.createRadialGradient(238, 50, 10, 238, 50, 300);\n // light blue\n grd.addColorStop(0, "#8ED6FF");\n // dark blue\n grd.addColorStop(1, "#004CB3");\n context.fillStyle = grd;\n context.fill();\n',
    },
	{
		type: "text",
		data: "<h3 id='pt_text'>text</h3>",
	},
	{
		type: "app",
		data: "186",
	},
	{
        type: "syntax",
        data: 'var canvas = screen.cnv_1.canvas;\n var context = screen.cnv_1.context;\n context.font = "italic 40pt Calibri";\n context.fillStyle = "blue";\n context.fillText("Hello World!", 150, 100);\n',
    },
	{
		type: "text",
		data: "<h3 id='pt_translate'>translate</h3>",
	},
	{
		type: "app",
		data: "187",
	},
	{
        type: "syntax",
        data: 'var canvas = screen.cnv_1.canvas;\n var context = screen.cnv_1.context;\n var rectWidth = 150;\n var rectHeight = 75;\n // translate context to center of canvas\n context.translate(canvas.width / 2, canvas.height / 2);\n context.fillStyle = "blue";\n context.fillRect(rectWidth / -2, rectHeight / -2, rectWidth, rectHeight);\n',
    },
	{
		type: "text",
		data: "<h3 id='pt_scale'>scale</h3>",
	},
	{
		type: "app",
		data: "188",
	},
	{
        type: "syntax",
        data: 'var canvas = screen.cnv_1.canvas;\n var context = screen.cnv_1.context;\n var rectWidth = 150;\n var rectHeight = 75;\n // translate context to center of canvas\n context.translate(canvas.width / 2, canvas.height / 2);\n // scale y component\n context.scale(1, 0.5);\n context.fillStyle = "blue";\n context.fillRect(rectWidth / -2, rectHeight / -2, rectWidth, rectHeight);\n',
    },
	{
		type: "text",
		data: "<h3 id='pt_rotate'>rotate</h3>",
	},
	{
		type: "app",
		data: "189",
	},
	{
        type: "syntax",
        data: 'var canvas = screen.cnv_1.canvas;\n var context = screen.cnv_1.context;\n var rectWidth = 150;\n var rectHeight = 75;\n // translate context to center of canvas\n context.translate(canvas.width / 2, canvas.height / 2);\n // rotate 45 degrees clockwise\n context.rotate(Math.PI / 4);\n context.fillStyle = "blue";\n context.fillRect(rectWidth / -2, rectHeight / -2, rectWidth, rectHeight);\n',
    },
	{
		type: "text",
		data: "<h3 id='pt_transform'>transform</h3>",
	},
	{
		type: "app",
		data: "190",
	},
	{
        type: "syntax",
        data: 'var canvas = screen.cnv_1.canvas;\n var context = screen.cnv_1.context;\n var rectWidth = 150;\n var rectHeight = 75;\n // translation matrix:\n //  1  0  tx\n //  0  1  ty\n //  0  0  1\n var tx = canvas.width / 2;\n var ty = canvas.height / 2;\n // apply custom transform\n context.transform(1, 0, 0, 1, tx, ty);\n context.fillStyle = "blue";\n context.fillRect(rectWidth / -2, rectHeight / -2, rectWidth, rectHeight);\n',
    },
	{
		type: "text",
		data: "<h3 id='pt_shear'>shear</h3>",
	},
	{
		type: "app",
		data: "191",
	},
	{
        type: "syntax",
        data: 'var canvas = screen.cnv_1.canvas;\n var context = screen.cnv_1.context;\n var rectWidth = 150;\n var rectHeight = 75;\n // shear matrix:\n //  1  sx  0\n //  sy  1  0\n //  0  0  1\n var sx = 0.75;\n // .75 horizontal shear\n var sy = 0;\n // no vertical shear\n // translate context to center of canvas\n context.translate(canvas.width / 2, canvas.height / 2);\n // apply custom transform\n context.transform(1, sy, sx, 1, 0, 0);\n context.fillStyle = "blue";\n context.fillRect(-rectWidth / 2, rectHeight / -2, rectWidth, rectHeight);\n',
    },
	{
		type: "text",
		data: "<h3 id='pt_mirror'>mirror</h3>",
	},
	{
		type: "app",
		data: "192",
	},
	{
        type: "syntax",
        data: 'var canvas = screen.cnv_1.canvas;\n var context = screen.cnv_1.context;\n // translate context to center of canvas\n context.translate(canvas.width / 2, canvas.height / 2);\n // flip context horizontally\n context.scale(-1, 1);\n context.font = "30pt Calibri";\n context.textAlign = "center";\n context.fillStyle = "blue";\n context.fillText("Hello World!", 0, 0);\n',
    },

	]
}, 
{
    name: "Audio Processing",
    desc: [
	 {
        type: "image",
        data: "../media/images/javascript/audionew.jpg",
    },
    {
        type: "text",
        data: "Audio effects are the most important part in any application. In this framework we have used both html5 audio and Audiocontext and tried to give you microscopic access to the audio frequencies. To play the normal audio frequency use this our inbuilt virtual oscillator circuit.",
    },
	{
        type: "image",
        data: "../media/images/javascript/audioOscillator.jpg",
    },
	{
        type: "syntax",
        data: 'screen.audio.oscillator({\n\tbpm: 120, // BITS PER MINUTE\n\tnoteLength: 4, // DURATION OF WAVE \n\twaveType: "sine", // sine,square , sawtooth , triangle\n\tfreqStart: 50, // freq at the start of pulse\n\tfreqEnd: 50, // freq at the end of pulse\n\tgainStart: 1, // gain at the start of pulse\n\tgainEnd: 0.001, // gain at the end of pulse\n});\n',
    },
	{
		type: "text",
		data: "<h3>Play Audio Frequencies from 20 Hz to 20 Khz</h3>",
	},
	{
		type: "text",
		data: "View the below capsule to listen how it feels from going to low to high frequencies.",
	},
	{
		type: "app",
		data: "267",
	},
	{
		type: "text",
		data: "<h3>HTML5 Audio</h3>",
	},
	{
		type: "text",
		data: "Here we have used html5 audio for two purposes.",
	},
	{
        type: "list",
        data:
        {
            "Screen Audio": "Screen audio is the audio which plays at the backend of your app. Here we do not host any media file. So you can provide direct link of your audio file in the screen audio option. That audio will be fetched temporary from the remote location and it will played as the background music for your screen.",
            "Audio Plugin": "Audio plugin has also the same functionality as the screen audio. You have to provide external audio link in the plugin configuration. This plugin gets attached to the screen and plays. The difference between screen audio and audio plugin is mentioned in the below paragraph.",
        },
    },
	{
		type: "text",
		data: "<h3>Diff between Screen Audio and Audio plugin</h3>",
	},
	{
		type: "text",
		data: "Screen audio is the by default audio feature which is attched to the screen. It has its audio player. It is used to perform timeline animation. Timeline animation can be done by setting startTime and endTime property of the components. After etting this property you can control their show hide state with background audio. Please see the below example on how timeline animation is done.",
	},	
	{
		type: "text",
		data: "<h3>Timeline Animation</h3>",
	},
	{
		type: "text",
		data: "Set the startTime and endTime property of the plugin. And the create the timeline Animtion objects like below and mention the plugin instace in it. The audio player will show/hide respective plugin instance as per their values.",
	},	
	{
        type: "syntax",
        data: 'screen.createTimeline([screen.img_1,screen.img_2,screen.img_3,screen.img_4,screen.img_5]);',
    },
	{
		type: "text",
		data: "Please see the below example of horse and hair story.",
	},
	{
		type: "app",
		data: "262",
	},
	{
		type: "text",
		data: "Html5 audio is used only to fetch the external audio but we likes audio context becuase its extreme processing power. In future if this issue of remote audio gets solved then we will replace the html5 audio with audio context. Below are the apps created using audio Context.",
	},
	{
		type: "text",
		data: "<h3>Digital Concert Grand Pianno - 96 Keys</h3>",
	},
	{
		type: "app",
		data: "268",
	},
	{
		type: "text",
		data: "<h3>Digital Drum Pad</h3>",
	},
	{
		type: "app",
		data: "269",
	},
	
	{
		type: "text",
		data: "<h3>Digital Orchestra</h3>",
	},
	{
		type: "app",
		data: "270",
	},
	
	]
},
{
    name: "3D programming Basics",
    desc: [
	{
		type: "app",
		data: "255",
	},
	{
		type: "text",
		data: "Setting 3D view requires many parameters. But we have managed it in the framework. So you only have to create 3D objects and just render it. The main parameters require while creating anything in the 3D world are as follows.",
	},
	{
		type: "table",
		data: 
		[
			["keyword", "explanation"],
			["<b>Scene</b>", "It is your stage where you add 3D objects"],
			["<b>Light</b>", "It is used to illuminate your 3D objects. Different effects and shadows can be produce by configuring the light."],
			["<b>Camera</b>", "It is like a movie camera which shoots your 3D world and you can view its output through our App window"],
		],
	}, 
	{
		type: "text",
		data: "Below is the simple example code how cube is created.",
	},
	{
		type: "app",
		data: "233",
	},
	 {
        type: "syntax",
        data: 'screen._3dEngine(true);\n\nvar geometry = new THREE.BoxGeometry( 100, 100, 100);\nvar material = new THREE.MeshBasicMaterial(\n{\n\tcolor: 0x00ff00,\n\twireframe: true\n});\nvar cube = new THREE.Mesh( geometry, material );\n\nscreen.object3D.scene.add( cube );\nscreen.object3D.camera.position.z = 5;\nscreen.render3D();\n',
    },
	{
		type: "text",
		data: "As shown in the above code. We have initialised 3D object in our framework. So code part consist of only to create 3D object and add it to a screen. To control the predefined main parameters like camera. We have accessed camera and configured it. In this way you can work on 3D. For detailed documentation on working with 3D objects please see the below 3JS link.",
	},
	 {
            type: "text",
            data: "Please click here to view the 3JS documentation and examples.<button type='button' class='externalLink btn btn-default' data='https://threejs.org/'>Click here</button>",
        }, 
	{
		type: "text",
		data: "Below are some 3D objects which we have created.",
	},
	
	{
		type: "text",
		data: "<h3>3D Vectors</h3>",
	},
	{
		type: "app",
		data: "231",
	},
	{
		type: "text",
		data: "<h3>3D lines</h3>",
	},
	{
		type: "app",
		data: "232",
	},
	{
		type: "text",
		data: "<h3>3D cube</h3>",
	},
	{
		type: "app",
		data: "234",
	},
	{
		type: "text",
		data: "<h3>3d Sphere</h3>",
	},
	{
		type: "app",
		data: "257",
	},
	{
		type: "text",
		data: "<h3>3D Isohedron</h3>",
	},
	{
		type: "app",
		data: "235",
	},
	{
		type: "text",
		data: "<h3>3D Octahedron</h3>",
	},
	{
		type: "app",
		data: "236",
	},
	{
		type: "text",
		data: "<h3>Tetra hedron</h3>",
	},
	{
		type: "app",
		data: "237",
	},
	{
		type: "text",
		data: "<h3>3d speher</h3>",
	},
	{
		type: "app",
		data: "238",
	},
	{
		type: "text",
		data: "<h3>ICOSADRON</h3>",
	},
	{
		type: "app",
		data: "239",
	},
	{
		type: "text",
		data: "<h3>OCTAHEDRON</h3>",
	},
	{
		type: "app",
		data: "240",
	},
	{
		type: "text",
		data: "<h3>TETRA HEDRON 2</h3>",
	},
	{
		type: "app",
		data: "241",
	},
	{
		type: "text",
		data: "<h3>3D dome</h3>",
	},
	{
		type: "app",
		data: "242",
	},
	{
		type: "text",
		data: "<h3>3D cylinder</h3>",
	},
	{
		type: "app",
		data: "243",
	},
	
	{
		type: "text",
		data: "<h3>3d cone</h3>",
	},
	{
		type: "app",
		data: "244",
	},
	{
		type: "text",
		data: "<h3>3D PYRAMID</h3>",
	},
	{
		type: "app",
		data: "245",
	},
	{
		type: "text",
		data: "<h3>3D TORUS</h3>",
	},
	{
		type: "app",
		data: "246",
	},
	{
		type: "text",
		data: "<h3>3d torus knot</h3>",
	},
	{
		type: "app",
		data: "247",
	},
	{
		type: "text",
		data: "<h3>3D PRISM</h3>",
	},
	{
		type: "app",
		data: "248",
	},
	{
		type: "text",
		data: "<h3>3D CONE TRUNCATED.</h3>",
	},
	{
		type: "app",
		data: "249",
	},
	{
		type: "text",
		data: "<h3>PYRAMID TRUNCATED</h3>",
	},
	{
		type: "app",
		data: "250",
	},
	{
		type: "text",
		data: "<h3>TORUS</h3>",
	},
	{
		type: "app",
		data: "251",
	},
	{
		type: "text",
		data: "<h3>TORUS KNOT</h3>",
	},
	{
		type: "app",
		data: "252",
	},
	{
		type: "text",
		data: "<h3>3D TEXT</h3>",
	},
	{
		type: "app",
		data: "253",
	},
	{
		type: "text",
		data: "<h3>3D DICE</h3>",
	},
	{
		type: "app",
		data: "258",
	},
	{
		type: "text",
		data: "<h3>3D Moon</h3>",
	},
	{
		type: "app",
		data: "255",
	},
	{
		type: "text",
		data: "<h3>3D SUN</h3>",
	},
	{
		type: "app",
		data: "259",
	},
	
	{
		type: "text",
		data: "<h3>3D CLICK EVENT</h3>",
	},
	{
		type: "app",
		data: "256",
	},
	{
		type: "text",
		data: "<h3>3D earth</h3>",
	},
	{
		type: "app",
		data: "260",
	},
	{
		type: "text",
		data: "<h3>Solar system</h3>",
	},
	{
		type: "app",
		data: "261",
	},
	
	
	]
},



]