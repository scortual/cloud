var docObj = new Object();
docObj.components = new Object();
docObj.components.text = new Object();
docObj.components.textFeild = new Object();
docObj.components.textArea = new Object();
docObj.components.table = new Object();
docObj.components.selectBtn = new Object();
docObj.components.checkbox = new Object();
docObj.components.radioBtn = new Object();
docObj.components.button = new Object();
docObj.components.slider = new Object();
docObj.components.div = new Object();
docObj.components.image = new Object();
docObj.components.canvas = new Object();
docObj.components.graph = new Object();
docObj.components.audio = new Object();
docObj.components.video = new Object();
docObj.components.pulseGenerator = new Object();
docObj.components.led = new Object();
docObj.components.analogClock = new Object();
docObj.components.analogMeter = new Object();
docObj.components.breadboard = new Object();
docObj.components.protractor = new Object();
docObj.components.ruler = new Object();
//================= Common text =======================
// ======== Properties ================
var idText = "This property sets the unique ID of the plug-in. This id is used by the framework to access the plug-in. We recommend not to set the id manually. This framework automatically decides the ID of the plug-in. So allow this property to set by the framework in order to avoid errors.";
var leftText = "This property sets the left position of the plug-in with respect to screen. Its value is in pixels.";
var topText = "This property sets the top position of the plug-in with respect to screen. Its value is in pixels.";
var widthText = "This property sets the width of the plug-in. Its value is in pixels.";
var heightText = "This property sets the height of the plug-in. Its value is in pixels.";
var opacityText = "This property sets the opacity of the plug-in. Its value is from 0 to 1.";
var colorText = "To select color your PC colorPicker will get opened. By code you can set its value in HEX (#000000), RGB (rgb(0,0,0)) AND RGBA rgba(0,0,0,0)) format.";
var bgShowText = "This property decided whether to use transparent background or opaque background.";
var fontSizeText = "This property sets the font size of the text in plug-in. Its value is in pixels.";
var fontfamilyText = "This property is used to define websafe fonts for the text. Its options are <span class='bi'>Nunito sans-serif,<br> Dekko cursive,<br> Acme  sans-serif', <br>Arial Helvetica sans-serif,<br> Arial Black Gadget sans-serif,<br> Times New Roman Times serif,<br> Verdana Geneva,<br> sans-serif,<br> Georgia seri,<br> Trebuchet MS Helvetica sans-serif,<br> Courier New Courier monospace,<br> Lucida Console Monaco monospace,<br> Comic Sans MS cursive sans-serif,<br> Impact Charcoal sans-serif,<br> Lucida Sans Unicode Lucida Grande sans-serif,<br> Tahoma Geneva sans-serif,<br> Palatino Linotype Book Antiqua Palatino serif.</span> ";
var fontStyleText = "This property is used to style the text. Its options are <span class='bi'> normal, italic, oblique, initial, inherit.</span>";
var fontWeightText = "This property is used to bold the text. Its options are <span class='bi'> normal, bold, bolder, lighter, initial, inherit, 100, 200, 300, 400, 500, 600, 700, 800, 900. </span>";
var textDecorationText = "This property is used to decorate the text. Its options <span class='bi'> none, underline, overline, line through, blink.</span>";
var textTransformText = "This property is used to transform the text. Its options are <span class='bi'>  none, capitalize, lowercase, uppercase.</span>";
var textAlignText = "This property is used to align the text. Its options are <span class='bi'>  left, center, right.</span>";
var wordSpacingText = "This property sets the distance between words in a text string. Its value is in pixels.";
var letterSpacingText = "This property sets the distance between the characters in a word. Its value is in pixels.";
var wordWrapText = "This property is used to wrap the string in a text container. So that he did not overflow and go out of the container.";
var textShadowXText = "This property sets the position of X shadow of the text";
var textShadowYText = "This property sets the position of Y shadow of the text";
var textShadowBlurText = "This property sets the blurriness of shadow of the text";
var textShadowColorText = "This property sets the color of shadow of the text";
var startTimeText = "  This property is used in the timeline animation.It is in seconds. In timeline animation the components gets visible at the start time";
var stopTimeText = "  This property is used in the timeline animation.It is in seconds. In timeline animation the components gets visible at the start time";
var dragContainmentText = "This property is used to define the rectangular region of drag for the plug-in. First 2 parameters sets the start point of the region and lies at the top left corner of rectangular region while and the last two parameter decides the end of the region and they lie at the bottom right corner of rectangular region.";
var dragText = "This property is used to make DIV plug-in draggable by the user. Its options are true and false.";
var dropText = "This property is used to make DIV plug-in droppable by the user. Its options are true and false.";
var dragRevertText = "This property is used to set drag revert property DIV plug-in. On setting this property to true plug-in will return to its initial position after drag stop. Its options are true and false.";
var showText = "This property show or hide the plugin layer on the screen. Its options are true and false.";

// ======== read ================

var domElemText = " On sending this read request ,plug-in will return HTML DOM Object. You can then control the plug-in by using normal javascript or jquery.";
var readLeftText = "On requesting this read parameter, plug-in will return its left offset value in pixel.";
var readTopText = "On requesting this read parameter, plug-in will return its top offset value in pixel.";
var readWidthText = "On requesting this read parameter, plug-in will return its width in pixel.";
var readHeightText = "On requesting this read parameter, plug-in will return its height in pixel.";
var readConfigText = "On requesting this read parameter ,plug-in will return configuration property Object.";
var readCssText = "On sending this read request ,plug-in will return its css configuration in JSON object.";

// ============ write ==============
var writeShowText = "On sending this write request ,plug-in will be visible if it is in hidden state.";
var writeHideText = "On sending this write request ,plug-in will be hidden if it is in visible state.";
var writeCssText = "On sending this write request ,plug-in will change the CSS properties of the element.It requires the CSS object string.";

// ================================================== Text Component =============================================================
docObj.components.text = {
        name: "Text plug-in",
        app: 1,
        video: "https://www.youtube.com/embed/o-1LEIhmbU8",
        description: "This plug-in is designed to display Text.",
        properties:
        {
            id: idText,
            x: leftText,
            y: topText,
            width: widthText,
            height: heightText,
            opacity: opacityText,
             show:showText,
            value: "This property sets the text in the text plug-in",
            type: "By default its type is selected as <span class='bi'>normal text </span> and select <span class='bi'>katex</span> if you want to display any mathematical equation or symbol. To view katex syntax please see the katex tab.",
            color: "This property sets the color in the text plug-in." + colorText,
            bgColor: "This property sets the background color in the button plug-in." + colorText,
            bgShow: bgShowText,
            fontSize: fontSizeText,
            fontFamily: fontfamilyText,
            fontStyle: fontStyleText,
            fontWeight: fontWeightText,
            textDecoration: textDecorationText,
            textTransform: textTransformText,
            textAlign: textAlignText,
            textVerticalAlign: "This property is used to align the text vertically. Its options are <span class='bi'>  top, middle, bottom.</span>",
            wordSpacing: wordSpacingText,
            letterSpacing: letterSpacingText,
            wordWrap: wordWrapText,
            textShadowX: textShadowXText,
            textShadowY: textShadowYText,
            textShadowBlur: textShadowBlurText,
            textShadowColor: textShadowColorText,
            startTime: startTimeText,
            stopTime: stopTimeText,
        },
        event_listners:
        {},
        readParams:
        {
            value:
            {
                desc: "On sending this read request ,plug-in will return its value.",
                syntax: 'screen.txt_1.read("value");',
            },
            domElem:
            {
                desc: domElemText,
                syntax: 'screen.txt_1.read("domElem");',
            },
            config:
            {
                desc: readConfigText,
                syntax: 'screen.txt_1.read("config");',
            },
            left:
            {
                desc: readLeftText,
                syntax: 'screen.txt_1.read("left");',
            },
            top:
            {
                desc: readTopText,
                syntax: 'screen.txt_1.read("top");',
            },
            width:
            {
                desc: readWidthText ,
                syntax: 'screen.txt_1.read("width");',
            },
            height:
            {
                desc: readHeightText ,
                syntax: 'screen.txt_1.read("height");',
            },
            css:
            {
                desc: readCssText,
                syntax: 'screen.div_1.read("css");',
            },
        },
        writeParams:
        {
            show:
            {
                desc: writeShowText,
                syntax: 'screen.txt_1.write("show");',
            },
            hide:
            {
                desc: writeHideText,
                syntax: 'screen.txt_1.write("hide");',
            },
            value:
            {
                desc: "On sending this write request ,plug-in will change its value or text.",
                syntax: 'screen.txt_1.write("value","sample text");',
            },
            css:
            {
                desc: writeCssText,
                syntax: 'screen.meter_1.write("css",{"background","red"});',
            },
        },
        directAccess:
        {
            html:
            {
                desc: "To access the plug-in, use <span class='bi'>domelem</span> read request as shown in the below code. Then you can apply javascript or jquery to control it. Please read our basic Javascript / Jquery topic to understand them better.",
                syntax: '// get JAVASCRIPT DOM element<br> var txt_1 = screen.txt_1.read("domElem");<br> // apply javascript code<br> txt_1.html("Scortual");<br>',
            },
        }
    }
    // ================================================== TextFeild Component =============================================================
docObj.components.textFeild = {
        name: "TextFeild Plugin",
        app: 2,
        video: "https://www.youtube.com/embed/o-1LEIhmbU8",
        description: "This plug-in is designed to get input values from the user keyboard.",
        properties:
        {
            id: idText,
            x: leftText,
            y: topText,
            width: widthText,
            height: heightText,
            opacity: opacityText,
             show:showText,
            type: "This property is used to set input type of user. Its value are text , number and color.",
            value: "This property is used to set the value of the textFeild.",
            placeHolder: "This is background text which appears when the text field is empty.",
            color: "This property sets the color in the text component. " + colorText,
            bgColor: "This property sets the background color in the button component. " + colorText,
            fontSize: fontSizeText,
            fontFamily: fontfamilyText,
            fontStyle: fontStyleText,
            fontWeight: fontWeightText,
            textDecoration: textDecorationText,
            textTransform: textTransformText,
            textAlign: textAlignText,
            textVerticalAlign: "This property is used to align the text vertically. Its options are <span class='bi'>  top, middle, bottom.</span>",
            wordSpacing: wordSpacingText,
            letterSpacing: letterSpacingText,
            wordWrap: wordWrapText,
            textShadowX: textShadowXText,
            textShadowY: textShadowYText,
            textShadowBlur: textShadowBlurText,
            textShadowColor: textShadowColorText,
            connect: "This property is used to connect a component with the same group component. Here slider,textfeild and text are in the same group. After connecting the other component with this component. The other component will automatically updated on changing the value of this component. ",
            startTime: startTimeText,
            stopTime: stopTimeText,
        },
        event_listners:
        {
            keydown:
            {
                desc: "This event gets triggered when we focus textfeild and press any key. Blinking cursor indicates that textfeild is in focus.",
            },
            keyup:
            {
                desc: "This event gets triggered when we focus textfeild and releases our pressed key .Blinking cursor indicates that textfeild is in focus.",
            },
            keypress:
            {
                desc: "This event gets triggered when we focus  textfeild and keep holding the in ak press condition for some time .Blinking cursor indicates that textfeild is in focus.",
            },
            blur:
            {
                desc: "This event gets triggered when we loose focus on textfeild. Blinking cursor disappears from textfeild.",
            },
            change:
            {
                desc: "This event gets triggered when we the text in textfeild is change by any method either by programatically or using keyboard.",
            },
            focus:
            {
                desc: "This event gets triggered we focus on textfeild. An element gets focus when selected by a mouse click or by 'tab-navigating' to it.",
            },
            focusin:
            {
                desc: "This event gets triggered when we focus inside any element in textfeild. In this case since we dont have any child elements in textfeild so this property will be same as  focus property.",
            },
            focusout:
            {
                desc: "This event gets triggered when we looses focus on textfeild. It means we click outside textfeild and blinkng cursor disappears.",
            }
        },
        readParams:
        {
            value:
            {
                desc: "On sending this read request ,component will return its value.",
                syntax: 'screen.textFeild_1.read("value");',
            },
            domElem:
            {
                desc: domElemText,
                syntax: 'screen.textFeild_1.read("domElem");',
            },
            config:
            {
                desc: readConfigText ,
                syntax: 'screen.textFeild_1.read("config");',
            },
            left:
            {
                desc: readLeftText,
                syntax: 'screen.textFeild_1.read("left");',
            },
            top:
            {
                desc: readTopText ,
                syntax: 'screen.textFeild_1.read("top");',
            },
            width:
            {
                desc: readWidthText ,
                syntax: 'screen.textFeild_1.read("width");',
            },
            height:
            {
                desc: readHeightText ,
                syntax: 'screen.textFeild_1.read("height");',
            },
            css:
            {
                desc: readCssText ,
                syntax: 'screen.textFeild_1.read("css");',
            },
        },
        writeParams:
        {
            show:
            {
                desc: writeShowText ,
                syntax: 'screen.textFeild_1.write("show");',
            },
            hide:
            {
                desc: writeHideText ,
                syntax: 'screen.textFeild_1.write("hide");',
            },
            value:
            {
                desc: "On sending this write request ,component will change its value.",
                syntax: 'screen.textFeild_1.write("value");',
            },
            css:
            {
                desc: writeCssText ,
                syntax: 'screen.textFeild_1.write("css",{"background","red"});',
            },
        },
        directAccess:
        {
            val:
            {
                desc: "To access the component, use <span class='bi'>domelem</span> read request as shown in the below code. Then you can apply javascript or jquery to control it. Please read our basic Javascript / Jquery topic to understand them better.",
                syntax: '// get JAVASCRIPT DOM element<br> var txt_1 = screen.textFeild_1.read("domElem");<br> // apply javascript code<br> txt_1.val("Scortual");<br>',
            },
        }
    }
    // ================================================== TextArea Component =============================================================
docObj.components.textArea = {
        name: "TextArea Plugin",
        app: 3,
        video: "https://www.youtube.com/embed/o-1LEIhmbU8",
        description: "This plug-in is designed to get input values from the user keyboard. It is same as Text-Field. It offers large input area and can take only text as a input while text-Field can take text , number or color value as input.",
        properties:
        {
            id: idText,
            x: leftText,
            y: topText,
            width: widthText,
            height: heightText,
            opacity: opacityText,
             show:showText,
            value: "This property is used to set the value of the text-area.",
            placeHolder: "This is background text which appears when the text field is empty.",
            color: "This property sets the color in the text component. " + colorText,
            bgColor: "This property sets the background color in the button component. " + colorText,
            fontSize: fontSizeText,
            fontFamily: fontfamilyText,
            fontStyle: fontStyleText,
            fontWeight: fontWeightText,
            textDecoration: textDecorationText,
            textTransform: textTransformText,
            textAlign: textAlignText,
            textVerticalAlign: "This property is used to align the text vertically. Its options are <span class='bi'>  top, middle, bottom.</span>",
            wordSpacing: wordSpacingText,
            letterSpacing: letterSpacingText,
            wordWrap: wordWrapText,
            textShadowX: textShadowXText,
            textShadowY: textShadowYText,
            textShadowBlur: textShadowBlurText,
            textShadowColor: textShadowColorText,
            startTime: startTimeText,
            stopTime: stopTimeText,
        },
        event_listners:
        {
            keydown:
            {
                desc: "This event gets triggered when we focus textarea and press any key. Blinking cursor indicates that textarea is in focus.",
            },
            keyup:
            {
                desc: "This event gets triggered when we focus textarea and releases our pressed key .Blinking cursor indicates that textarea is in focus.",
            },
            keypress:
            {
                desc: "This event gets triggered when we focus  textarea and keep holding the in ak press condition for some time .Blinking cursor indicates that textarea is in focus.",
            },
            blur:
            {
                desc: "This event gets triggered when we loose focus on textarea. Blinking cursor disappears from textarea.",
            },
            change:
            {
                desc: "This event gets triggered when we the text in textarea is change by any method either by programatically or using keyboard.",
            },
            focus:
            {
                desc: "This event gets triggered we focus on textarea. An element gets focus when selected by a mouse click or by 'tab-navigating' to it.",
            },
            focusin:
            {
                desc: "This event gets triggered when we focus inside any element in textarea. In this case since we dont have any child elements in textarea so this property will be same as  focus property.",
            },
            focusout:
            {
                desc: "This event gets triggered when we looses focus on textarea. It means we click outside textarea and blinkng cursor disappears.",
            }
        },
        readParams:
        {
            value:
            {
                desc: "On sending this read request ,component will return its value.",
                syntax: 'screen.textArea_1.read("value");',
            },
            domElem:
            {
                desc: domElemText,
                syntax: 'screen.textArea_1.read("domElem");',
            },
            config:
            {
                desc: readConfigText ,
                syntax: 'screen.textArea_1.read("config");',
            },
            left:
            {
                desc: readLeftText,
                syntax: 'screen.textArea_1.read("left");',
            },
            top:
            {
                desc: readTopText ,
                syntax: 'screen.textArea_1.read("top");',
            },
            width:
            {
                desc: readWidthText ,
                syntax: 'screen.textArea_1.read("width");',
            },
            height:
            {
                desc: readHeightText ,
                syntax: 'screen.textArea_1.read("height");',
            },
            css:
            {
                desc: readCssText ,
                syntax: 'screen.textArea_1.read("css");',
            },
        },
        writeParams:
        {
            show:
            {
                desc: writeShowText ,
                syntax: 'screen.textArea_1.write("show");',
            },
            hide:
            {
                desc: writeHideText ,
                syntax: 'screen.textArea_1.write("hide");',
            },
            value:
            {
                desc: "On sending this write request ,component will change its value.",
                syntax: 'screen.textArea_1.write("start");',
            },
            css:
            {
                desc: writeCssText ,
                syntax: 'screen.textArea_1.write("css",{"background","red"});',
            },
        },
        directAccess:
        {
            val:
            {
                desc: "To access the component, use <span class='bi'>domelem</span> read request as shown in the below code. Then you can apply javascript or jquery to control it. Please read our basic Javascript / Jquery topic to understand them better.",
                syntax: '// get JAVASCRIPT DOM element<br> var textArea_1 = screen.textArea_1.read("domElem");<br> // apply javascript code<br> textArea_1.val("Scortual");<br>',
            },
        }
    }
    // ================================================== Table Component =============================================================
docObj.components.table = {
        name: "Table Plugin",
        app: 4,
        video: "https://www.youtube.com/embed/o-1LEIhmbU8",
        description: "This plug-in is created to display table data. It requires input column data in array format.",
        properties:
        {
            id: idText,
            x: leftText,
            y: topText,
            width: widthText,
            height: heightText,
            opacity: opacityText,
             show:showText,
            color: "This property sets the color in the table plugin. " + colorText,
            bgColor: "This property sets the background color in the button component. " + colorText,
            columns: "This property sets the number of columns in a table component.",
            header: "This property sets the header text of the columns of table. It requires comma separated string of table header.",
            fontSize: fontSizeText,
            tableType: "This property sets the table type. Options are<span class='bi'> normal</span> and <span class='bi'>stripped</span>",
            stripColor: "This property sets the background color of strip of the table component. " + colorText,
            outerPadding: "This property sets the outerpadding of table. Its value is in pixels.",
            floatingPts: "This property sets the number of decimal digits of numbers of table plugin.",
            startTime: startTimeText,
            stopTime: stopTimeText,
        },
        event_listners:
        {},
        readParams:
        {
            domElem:
            {
                desc: domElemText,
                syntax: 'screen.table_1.read("domElem");',
            },
            config:
            {
                desc: readConfigText ,
                syntax: 'screen.table_1.read("config");',
            },
            left:
            {
                desc: readLeftText,
                syntax: 'screen.table_1.read("left");',
            },
            top:
            {
                desc: readTopText ,
                syntax: 'screen.table_1.read("top");',
            },
            width:
            {
                desc: readWidthText ,
                syntax: 'screen.table_1.read("width");',
            },
            height:
            {
                desc: readHeightText ,
                syntax: 'screen.table_1.read("height");',
            },
            css:
            {
                desc: readCssText ,
                syntax: 'screen.table_1.read("css");',
            },
        },
        writeParams:
        {
            show:
            {
                desc: writeShowText ,
                syntax: 'screen.table_1.write("show");',
            },
            hide:
            {
                desc: writeHideText ,
                syntax: 'screen.table_1.write("hide");',
            },
            row:
            {
                desc: "On sending this write request ,component will add a row.",
                syntax: 'screen.table_1.write("row");',
            },
            print:
            {
                desc: "On sending this write request , table data will be prepared for the print and you will get print option in your computer.",
                syntax: 'screen.table_1.write("print");',
            },
            css:
            {
                desc: writeCssText ,
                syntax: 'screen.table_1.write("css",{"background","red"});',
            },
        },
    }
    // =============================================================================================================================
    // ================================================== Select List Component =============================================================
docObj.components.selectBtn = {
        name: "Select List Plugin",
        app: 5,
        video: "https://www.youtube.com/embed/o-1LEIhmbU8",
        description: "This plug-in displays list of options in the drop down format. Any options then can be selected by click or touch. ",
        properties:
        {
            id: idText,
            x: leftText,
            y: topText,
            width: widthText,
            height: heightText,
            opacity: opacityText,
             show:showText,
            options: "This property sets the options of the component. Mentions comma separated options here. eg. option_1,option_2,option_3,option_4",
            index: "This property selects the option index from the list. It is a number. Option index is decided starting from 0. Ex for four options ther indexes will be., 0,1,2,3",
            textAlign: textAlignText,
            color: "This property sets the color of text in the list component. " + colorText,
            bgColor: "This property sets the background color of the list component. " + colorText,
            listBgColor: "This property sets the background color of the dropdown list in the list component. " + colorText,
            listTextColor: "This property sets the color of test of the dropdown list in the list component. " + colorText,
            selectionColor: "This property sets the background selection color of  the dropdown list in the list component. " + colorText,
            startTime: startTimeText,
            stopTime: stopTimeText,
        },
        event_listners:
        {
            change:
            {
                desc: "This property gets triggered when we select any option.",
                //syntax:"screen.slider_1.play = function(){\n\n};",
            },
        },
        readParams:
        {
            value:
            {
                desc: "On sending this read request ,component will return its selectedIndex.",
                syntax: 'screen.selectBtn_1.read("option");',
            },
            domElem:
            {
                desc: domElemText,
                syntax: 'screen.selectBtn_1.read("domElem");',
            },
            config:
            {
                desc: readConfigText ,
                syntax: 'screen.selectBtn_1.read("config");',
            },
            left:
            {
                desc: readLeftText,
                syntax: 'screen.selectBtn_1.read("left");',
            },
            top:
            {
                desc: readTopText  ,
                syntax: 'screen.selectBtn_1.read("top");',
            },
            width:
            {
                desc: readWidthText  ,
                syntax: 'screen.selectBtn_1.read("width");',
            },
            height:
            {
                desc: readHeightText  ,
                syntax: 'screen.selectBtn_1.read("height");',
            },
            css:
            {
                desc: readCssText ,
                syntax: 'screen.selectBtn_1.read("css");',
            },
        },
        writeParams:
        {
            show:
            {
                desc: writeShowText ,
                syntax: 'screen.selectBtn_1.write("show");',
            },
            hide:
            {
                desc: writeHideText ,
                syntax: 'screen.selectBtn_1.write("hide");',
            },
            css:
            {
                desc: writeCssText ,
                syntax: 'screen.selectBtn_1.write("css",{"background","red"});',
            },
        },
    }
    // =============================================================================================================================
    // ================================================== Checkbox Component =============================================================
docObj.components.checkbox = {
        name: "Checkbox Plugin",
        app: 6,
        video: "https://www.youtube.com/embed/o-1LEIhmbU8",
        description: "This plug-in allow you to get user input as checked or unchecked.",
        properties:
        {
            id: idText,
            x: leftText,
            y: topText,
            opacity: opacityText,
             show:showText,
            color: "This property sets the color of label of checkbox. " + colorText,
            bgColor: "This property sets the color of the square box and the right checkmark. " + colorText,
            value: "This property allows you to set label text for the component.",
            //labelColor: "This property sets the color of the label text. " + colorText,
            fontSize: fontSizeText,
            checkBoxWidth: "This property sets the color of square checkbox",
            check: "This property allows you to set selected state of the component.",
            startTime: startTimeText,
            stopTime: stopTimeText,
        },
        event_listners:
        {
            click:
            {
                desc: "This property gets triggered when we click checkbox.",
            },
        },
        readParams:
        {
            check:
            {
                desc: "On sending this read request ,component will be return its checked status.",
                syntax: 'screen.checkbox_1.write("check");',
            },
            domElem:
            {
                desc: domElemText,
                syntax: 'screen.checkbox_1.read("domElem");',
            },
            config:
            {
                desc: readConfigText ,
                syntax: 'screen.checkbox_1.read("config");',
            },
           left:
            {
                desc: readLeftText,
                syntax: 'screen.checkbox_1.read("left");',
            },
            top:
            {
                desc: readTopText  ,
                syntax: 'screen.checkbox_1.read("top");',
            },
            width:
            {
                desc: readWidthText  ,
                syntax: 'screen.checkbox_1.read("width");',
            },
            height:
            {
                desc: readHeightText  ,
                syntax: 'screen.checkbox_1.read("height");',
            },
            css:
            {
                desc: readCssText ,
                syntax: 'screen.checkbox_1.read("css");',
            },
        },
        writeParams:
        {
            show:
            {
                desc: writeShowText ,
                syntax: 'screen.checkbox_1.write("show");',
            },
            hide:
            {
                desc: writeHideText ,
                syntax: 'screen.checkbox_1.write("hide");',
            },
            check:
            {
                desc: writeHideText ,
                syntax: 'screen.checkbox_1.write("check",true);',
            },
            css:
            {
                desc: writeCssText ,
                syntax: 'screen.checkbox_1.write("css",{"background","red"});',
            },
        },
    }
    // =============================================================================================================================
    // ================================================== Radio Button Component =============================================================
docObj.components.radioBtn = {
        name: "Radio Button Plugin",
        app: 7,
        video: "https://www.youtube.com/embed/o-1LEIhmbU8",
        description: "This plug-in displays list of options in the radio button group format. Any options then can be selected by click or touch. ",
        properties:
        {
            id: idText,
            x: leftText,
            y: topText,
            opacity: opacityText,
             show:showText,
            color: "This property sets the  color of the label of radio component. " + colorText,
            bgColor: "This property sets the background color of the radio component." + colorText,
            options: "This property sets the options of the component. Mentions comma separated options here. eg. option_1,option_2,option_3,option_4",
            index: "This property selects an radio button.",
            fontSize: fontSizeText,
            radioWidth: "This property sets the width of radio button circle.",
            startTime: startTimeText,
            stopTime: stopTimeText,
        },
        event_listners:
        {
            click:
            {
                desc: "This property gets triggered when we click checkbox.",
            },
        },
        readParams:
        {
            value:
            {
                desc: "On sending this read request ,component will return its selectedIndex.",
                syntax: 'screen.radioBtn_1.read("index");',
            },
            text:
            {
                desc: "On sending this read request ,component will return its selectedIndex.",
                syntax: 'screen.radioBtn_1.read("index");',
            },
            domElem:
            {
                desc: domElemText,
                syntax: 'screen.radioBtn_1.read("domElem");',
            },
            config:
            {
                desc: readConfigText ,
                syntax: 'screen.radioBtn_1.read("config");',
            },
           left:
            {
                desc: readLeftText,
                syntax: 'screen.radioBtn_1.read("left");',
            },
            top:
            {
                desc: readTopText  ,
                syntax: 'screen.radioBtn_1.read("top");',
            },
            width:
            {
                desc: readWidthText  ,
                syntax: 'screen.radioBtn_1.read("width");',
            },
            height:
            {
                desc: readHeightText  ,
                syntax: 'screen.radioBtn_1.read("height");',
            },
            css:
            {
                desc: readCssText ,
                syntax: 'screen.radioBtn_1.read("css");',
            },
        },
        writeParams:
        {
            show:
            {
                desc: writeShowText ,
                syntax: 'screen.radioBtn_1.write("show");',
            },
            hide:
            {
                desc: writeHideText ,
                syntax: 'screen.radioBtn_1.write("hide");',
            },
            css:
            {
                desc: writeCssText ,
                syntax: 'screen.radioBtn_1.write("css",{"background","red"});',
            },
        },
    }
    /* ============================================ Button Component ==================================================== */
docObj.components.button = {
        name: "Button Plugin",
        app: 8,
        video: "https://www.youtube.com/embed/o-1LEIhmbU8",
        description: "This plug-in displays a button. And it is designed to get user click event.",
        properties:
        {
            id: idText,
            x: leftText,
            y: topText,
            width: widthText,
            opacity: opacityText,
             show:showText,
            value: "This property sets the text in the button component",
            fontSize: fontSizeText,
            color: "This property sets the font color of the text in the button component. " + colorText,
            bgColor: "This property sets the background color in the button component. " + colorText,
            bgShow: "This property sets the custom bgColor. Otherwise bgcolor will be decided from predefined class.",
            disable: "This property disable or enable the button component.",
            glyphicon: "This property displays glyphs/symbol in the button. They can be selected from the component property box.",
            glyphiconId: "This feild is disabled it is used by the framework to update the glymphicon chosen by you.",
            startTime: startTimeText,
            stopTime: stopTimeText,
        },
        event_listners:
        {
            click:
            {
                desc: "This property gets triggered when we click thorough mouse or by touch on mobile or ipad.",
            },
            dblclick:
            {
                desc: "This property gets triggered when we dblclick thorough mouse or by touch on mobile or ipad.",
            },
            mousedown:
            {
                desc: "This property gets triggered when we mousedown thorough mouse or by touch on mobile or ipad.",
            },
            mouseup:
            {
                desc: "This property gets triggered when we mouseup thorough mouse or by touch on mobile or ipad.",
            },
            mousemove:
            {
                desc: "This property gets triggered when we mousemove thorough mouse or by touch on mobile or ipad.",
            },
            mouseenter:
            {
                desc: "This property gets triggered when we mouseenter thorough mouse or by touch on mobile or ipad.",
            },
            mouseout:
            {
                desc: "This property gets triggered when we mouseout thorough mouse or by touch on mobile or ipad.",
            },
        },
        readParams:
        {
            domElem:
            {
                desc: domElemText,
                syntax: 'screen.btn_1.read("domElem");',
            },
            config:
            {
                desc: readConfigText ,
                syntax: 'screen.btn_1.read("config");',
            },
           left:
            {
                desc: readLeftText,
                syntax: 'screen.btn_1.read("left");',
            },
            top:
            {
                desc: readTopText  ,
                syntax: 'screen.btn_1.read("top");',
            },
            width:
            {
                desc: readWidthText  ,
                syntax: 'screen.btn_1.read("width");',
            },
            height:
            {
                desc: readHeightText  ,
                syntax: 'screen.btn_1.read("height");',
            },
            css:
            {
                desc: readCssText ,
                syntax: 'screen.btn_1.read("css");',
            },
        },
        writeParams:
        {
            value:
            {
                desc: "On sending this write request ,component will change its text.",
                syntax: 'screen.btn_1.write("value","sample text");',
            },
            show:
            {
                desc: writeShowText ,
                syntax: 'screen.btn_1.write("show");',
            },
            hide:
            {
                desc: writeHideText ,
                syntax: 'screen.btn_1.write("hide");',
            },
            enable:
            {
                desc: "On sending this write request ,component will get enable if it is disable state.",
                syntax: 'screen.btn_1.write("enable");',
            },
            disable:
            {
                desc: "On sending this write request ,component will get disable if it is enable state.",
                syntax: 'screen.btn_1.write("disable");',
            },
            css:
            {
                desc: writeCssText ,
                syntax: 'screen.btn_1.write("css",{"background","red"});',
            },
        },
        directAccess:
        {
            click:
            {
                desc: "To access the component, use <span class='bi'>domelem</span> read request as shown in the below code. Then you can apply javascript or jquery to control it. Please read our basic Javascript / Jquery topic to understand them better.",
                syntax: '// get JAVASCRIPT DOM element<br> var btn_1 = screen.btn_1.read("domElem");<br> // apply javascript code<br> btn_1.bind("click",clickme);<br> function clickme()<br> {<br> screen.alert("click me");<br> }<br>',
            },
        }
    }
    // ================================================== Slider Component =============================================================
docObj.components.slider = {
        name: "Slider Plugin",
        app: 9,
        video: "https://www.youtube.com/embed/o-1LEIhmbU8",
        description: "This plugin displays a slider. It is used to get user input from specified min-max range.",
        properties:
        {
            id: idText,
            x: leftText,
            y: topText,
            width: widthText,
            height: heightText,
            opacity: opacityText,
             show:showText,
            min: "This property sets the minimum value of Slider. Its value is in number.",
            max: "This property sets the maximum value of Slider. Its value is in number.",
            step: "This property sets the step or unit value by which Slider will increment or decrement. Its value is in number.",
            value: "This property sets the initial value of Slider. Its value is in number.",
            orientation: "This property sets the orientation of Slider. Its options are horizontal and vertical.",
            color: "This property sets the color of the label in the slider component. " + colorText,
            showLabel: "This property sets the display of label of slider component. Its options are show and hide.",
            fontSize: "This property sets the font size of the label of Slider.",
            animate: "This property sets the slow or fast motion of dragger of slider.",
            disable: "This property is used to enable or disable slider.",
            connect: "	This property is used to connect a component with the same group component. Here slider,textfeild and text are in the same group. After connecting the other component with this component. The other component will automatically updated on changing the value of this component.",
            startTime: startTimeText,
            stopTime: stopTimeText,
        },
        event_listners:
        {
            start:
            {
                desc: "This property gets triggered when we slide start begins thorough mouse or by touch on mobile or ipad.",
            },
            slide:
            {
                desc: "This property gets triggered when we slide slider thorough mouse or by touch on mobile or ipad.",
            },
            stop:
            {
                desc: "This property gets triggered when we stop slider or mouseup on it thorough mouse or by touch on mobile or ipad.",
            }
        },
        readParams:
        {
            value:
            {
                desc: readCssText ,
                syntax: 'screen.slider_1.read("value");',
            },
            domElem:
            {
                desc: domElemText,
                syntax: 'screen.slider_1.read("domElem");',
            },
            config:
            {
                desc: readConfigText ,
                syntax: 'screen.slider_1.read("config");',
            },
             left:
            {
                desc: readLeftText,
                syntax: 'screen.slider_1.read("left");',
            },
            top:
            {
                desc: readTopText  ,
                syntax: 'screen.slider_1.read("top");',
            },
            width:
            {
                desc: readWidthText  ,
                syntax: 'screen.slider_1.read("width");',
            },
            height:
            {
                desc: readHeightText  ,
                syntax: 'screen.slider_1.read("height");',
            },
            css:
            {
                desc: writeCssText ,
                syntax: 'screen.slider_1.write("css",{"background","red"});',
            },
        },
        writeParams:
        {
            min:
            {
                desc: "On sending this write request ,slider component will change its min value.",
                syntax: 'screen.slider_1.write("min","0");',
            },
            max:
            {
                desc: "On sending this write request , slider component will change its max value.",
                syntax: 'screen.slider_1.write("max","100");',
            },
            enable:
            {
                desc: "On sending this write request ,component will get enable if it is disable state.",
                syntax: 'screen.slider_1.write("enable");',
            },
            disable:
            {
                desc: "On sending this write request ,component will get disable if it is enable state.",
                syntax: 'screen.slider_1.write("disable");',
            },
            value:
            {
                desc: "On sending this write request ,component will get disable if it is enable state.",
                syntax: 'screen.slider_1.write("disable");',
            },
            show:
            {
                desc: writeShowText ,
                syntax: 'screen.slider_1.write("show");',
            },
            hide:
            {
                desc: writeHideText ,
                syntax: 'screen.slider_1.write("hide");',
            },
            css:
            {
                desc: writeCssText ,
                syntax: 'screen.slider_1.write("css",{"background","red"});',
            },
        },
    }
    // =============================================================================================================================
    // ================================================== DIV Component =============================================================
docObj.components.div = {
        name: "DIV Plug-in",
        app: 10,
        video: "https://www.youtube.com/embed/o-1LEIhmbU8",
        description: "This plug-in is named DIV because it can be use by programmer to extend their functionality in the Apps. If you see normally it is like a rectangular patch which you can put anywhere on your screen. You can also add background image to this rectangular patch.<br><br> This plug-in is different from other plug-ins. This plug-in can be used as a blank container where you can add any external HTML DOM element and can apply any external events. For reference please see the source code of digital piano. Here the the piano body is DIV plug-in and the buttons are the child elements which are added externally. There is no need to add any external events to this child elements you just need to mention their unique id in id attribute. And just add listeners to the parent DIV plug-in. You will get the id of plug-in in the event object of parent.<br><br>To add the child element please see the below syntax for faster addition. To create a new HTML DOM element use the following code. <br> To create any HTML DOM element please use the below code. Please mention unique ID in the id param. This id will return in the event listener object when any event is performed on the Div element<div class='well' style='margin-bottom:10px'><code> var child = screen.createTag('div',id);</code></div> To apply any external CSS style to the plug-in please use the below code. This function will add the css object to the element.<div class='well' style='margin-bottom:10px'><code>screen.applyCSS(child);</code></div>Now your DOM element is ready to add to the DIV plug-in. Please use Write command to make this element child of your DIV plug-in.<div class='well' style='margin-bottom:10px'><code> screen.div_1.write('child',child);</code></div>The above child will be appended as per your configuration.",
        properties:
        {
            id: idText,
            x: leftText,
            y: topText,
            width: widthText,
            height: heightText,
            opacity: opacityText,
             show:showText,
            color : "This property sets the color of the text in DIV component. " + colorText,
            bgColor: "This property sets the background of the DIV component. " + colorText,
            bgShow: bgShowText,
            bgImage: "This property sets the background image of DIV plugin. It requires direct image URL as input.",
            drag: dragText,
            dragRevert: dragRevertText,
            dragContainment: dragContainmentText,
            drop: dropText,
            rotateX: "This property is used to rotate the DIV component around X-axis. Its value is in degrees.",
            rotateY: "This property is used to rotate the DIV component around Y-axis. Its value is in degrees.",
            rotateZ: "This property is used to rotate the DIV component around Z-axis. Its value is in degrees.",
            shadowX: "This property sets the X-offset of shadow. Its value is in pixels.",
            shadowY: "This property sets the Y-offset of shadow. Its value is in pixels.",
            shadowSpread: "This property sets the region of spread of shadow. Its value is in pixels.",
            shadowBlur: "This property sets the blur of the shadow. Its value is in pixels.",
            shadowColor: "This property sets the color of shadow of the DIV component. " + colorText,
            cursor: "This property sets the mouse cursor over DIV component.",
            borderRadius: "This property sets the border radius of DIV component. Its values are in pixels.",
            startTime: startTimeText,
            stopTime: stopTimeText,
        },
        event_listners:
        {
            click:
            {
                desc: "This property gets triggered when we click thorough mouse or by touch on mobile or ipad.",
                syntax: "screen.div_1.click = function(x,y){\n\n};",
            },
            dblclick:
            {
                desc: "This property gets triggered when we dblclick thorough mouse or by touch on mobile or ipad.",
                syntax: "screen.div_1.dblclick = function(x,y){\n\n};",
            },
            mousedown:
            {
                desc: "This property gets triggered when we mousedown thorough mouse or by touch on mobile or ipad.",
                syntax: "screen.div_1.mousedown = function(x,y){\n\n};",
            },
            mouseup:
            {
                desc: "This property gets triggered when we mouseup thorough mouse or by touch on mobile or ipad.",
                syntax: "screen.div_1.mouseup = function(x,y){\n\n};",
            },
            mousemove:
            {
                desc: "This property gets triggered when we mousemove thorough mouse or by touch on mobile or ipad.",
                syntax: "screen.div_1.mousemove = function(x,y){\n\n};",
            },
            mouseenter:
            {
                desc: "This property gets triggered when we mouseenter thorough mouse or by touch on mobile or ipad.",
                syntax: "screen.div_1.mouseenter = function(x,y){\n\n};",
            },
            mouseout:
            {
                desc: "This property gets triggered when we mouseout thorough mouse or by touch on mobile or ipad.",
                syntax: "screen.div_1.mouseout = function(x,y){\n\n};",
            },
        },
        readParams:
        {
            domElem:
            {
                desc: domElemText,
                syntax: 'screen.div_1.read("domElem");',
            },
            config:
            {
                desc: readConfigText ,
                syntax: 'screen.div_1.read("config");',
            },
            left:
            {
                desc: readLeftText,
                syntax: 'screen.div_1.read("left");',
            },
            top:
            {
                desc: readTopText  ,
                syntax: 'screen.div_1.read("top");',
            },
            width:
            {
                desc: readWidthText  ,
                syntax: 'screen.div_1.read("width");',
            },
            height:
            {
                desc: readHeightText  ,
                syntax: 'screen.div_1.read("height");',
            },
            css:
            {
                desc: readCssText ,
                syntax: 'screen.div_1.read("css");',
            },
        },
        writeParams:
        {
            show:
            {
                desc: writeShowText ,
                syntax: 'screen.div_1.write("show");',
            },
            hide:
            {
                desc: writeHideText ,
                syntax: 'screen.div_1.write("hide");',
            },
            css:
            {
                desc: writeCssText ,
                syntax: 'screen.div_1.write("css",{"background","red"});',
            },
            child:
            {
                desc: "On sending this write request ,component will make HTML dom elemnt which is passed as a parameter as its child.",
                syntax: 'screen.div_1.write("child",child);',
            },
        },
    }
    // ================================================== Image Component =============================================================
docObj.components.image = {
        name: "Image Plugin",
        app: 11,
        video: "https://www.youtube.com/embed/o-1LEIhmbU8",
        description: "This plug-in displays image. It requires direct image url path.",
        properties:
        {
            id: idText,
            x: leftText,
            y: topText,
            width: "This property is used to set the width of the IMAGE component. By default it is set at auto. In auto mode it reads the actual width of the source image. On setting the width manually it then tries to fit in user defined width.",
            height: "This property is used to set the height of the IMAGE component. By default it is set at auto. In auto mode it reads the actual width of the source image. On setting the width manually it then tries to fit in user defined width.",
            opacity: opacityText,
            show:showText,
            src: "This property is used to set the direct image url.",
            bgStrech: "This property is used to stretch the image to provided width and height value.",
            filter: "This property is used to add filters to the image element. Its values are normal, grayScale, negative, bright, threshold, sharp, blur",
            drag: dragText,
            dragRevert: dragRevertText,
            dragContainment: dragContainmentText,
            drop: dropText,
            rotate: "This property is used to rotate the IMAGE component around X-axis. Its value is in degrees.",
            scale: "This property is used to scale IMAGE component. Its values are in numbers. Here 1 means 100%",
            cursor: "This property sets the mouse cursor over IMAGE component.",
            startTime: startTimeText,
            stopTime: stopTimeText,
        },
        event_listners:
        {
            click:
            {
                desc: "This property gets triggered when we click thorough mouse or by touch on mobile or ipad.",
            },
            dblclick:
            {
                desc: "This property gets triggered when we dblclick thorough mouse or by touch on mobile or ipad.",
            },
            mousedown:
            {
                desc: "This property gets triggered when we mousedown thorough mouse or by touch on mobile or ipad.",
            },
            mouseup:
            {
                desc: "This property gets triggered when we mouseup thorough mouse or by touch on mobile or ipad.",
            },
            mousemove:
            {
                desc: "This property gets triggered when we mousemove thorough mouse or by touch on mobile or ipad.",
            },
            mouseenter:
            {
                desc: "This property gets triggered when we mouseenter thorough mouse or by touch on mobile or ipad.",
            },
            mouseout:
            {
                desc: "This property gets triggered when we mouseout thorough mouse or by touch on mobile or ipad.",
            },
        },
        readParams:
        {
            imageDataURL:
            {
                desc: "On sending this read request ,component will return its imageDataURL in base 64 png format.",
                syntax: 'screen.img_1.read("imageDataURL");',
            },
            imageData:
            {
                desc: "On sending this read request ,component will return its imageData in Uint8ClampedArray.",
                syntax: 'screen.img_1.read("imageData");',
            },
            left:
            {
                desc: readLeftText,
                syntax: 'screen.img_1.read("left");',
            },
            top:
            {
                desc: readTopText  ,
                syntax: 'screen.img_1.read("top");',
            },
            width:
            {
                desc: readWidthText  ,
                syntax: 'screen.img_1.read("width");',
            },
            height:
            {
                desc: readHeightText  ,
                syntax: 'screen.img_1.read("height");',
            },
            domElem:
            {
                desc: domElemText,
                syntax: 'screen.img_1.read("domElem");',
            },
            config:
            {
                desc: readConfigText ,
                syntax: 'screen.img_1.read("config");',
            },
            css:
            {
                desc: readCssText ,
                syntax: 'screen.img_1.read("css");',
            },
        },
        writeParams:
        {
            show:
            {
                desc: writeShowText ,
                syntax: 'screen.img_1.write("show");',
            },
            hide:
            {
                desc: writeHideText ,
                syntax: 'screen.img_1.write("hide");',
            },
            rotate:
            {
                desc: "On sending this write request ,component will rotate image keeping registration point on center of image.",
                syntax: 'screen.img_1.write("rotate",90);',
            },
            css:
            {
                desc: writeCssText ,
                syntax: 'screen.img_1.write("css",{"background","red"});',
            },
        },
    }
    // ================================================== Canvas Component =============================================================
docObj.components.canvas = {
        name: "Canvas Plugin",
        app: 12,
        imgWidth: "40%",
        video: "https://www.youtube.com/embed/o-1LEIhmbU8",
        description: "As the name suggests it is like a painters canvas. This plug-in can be used for free hand drawing. You can draw anything on any pixels. Its origin lies on top left corner. This plug-in is parent of graph plug-in.The difference between canvas and graph plug-in is that graph plug-in is designed to plot values in Cartesian co-ordinate system. Means you can use our normal maths value to draw anything. While origin of canvas co-ordinate system lies in the upper left corner.On the right side of origin there lies positive x values where on the bottom side of the origin positive y values lies. So this system actually contradicts our normal Cartesian system which has positive values in the upper side of the origin. So thats why graph plug-in is designed.",
        properties:
        {
            id: idText,
            x: leftText,
            y: topText,
            width: widthText,
            height: heightText,
            opacity: opacityText,
             show:showText,
            bgColor: "This property sets the background of the DIV component. " + colorText,
            bgShow: bgShowText,
            drag: dragText,
            dragRevert: dragRevertText,
            dragContainment: dragContainmentText,
            drop: dropText,
			 cssScale: 1,
           
            startTime: startTimeText,
            stopTime: stopTimeText,
        },
        event_listners:
        {
            click:
            {
                desc: "This property gets triggered when we click thorough mouse or by touch on mobile or ipad.",
            },
            dblclick:
            {
                desc: "This property gets triggered when we dblclick thorough mouse or by touch on mobile or ipad.",
            },
            mousedown:
            {
                desc: "This property gets triggered when we mousedown thorough mouse or by touch on mobile or ipad.",
            },
            mouseup:
            {
                desc: "This property gets triggered when we mouseup thorough mouse or by touch on mobile or ipad.",
            },
            mousemove:
            {
                desc: "This property gets triggered when we mousemove thorough mouse or by touch on mobile or ipad.",
            },
            mouseenter:
            {
                desc: "This property gets triggered when we mouseenter thorough mouse or by touch on mobile or ipad.",
            },
            mouseout:
            {
                desc: "This property gets triggered when we mouseout thorough mouse or by touch on mobile or ipad.",
            },
        },
        readParams:
        {
            image:
            {
                desc: "On sending this read request ,canvas component will PNG image dataURL of the drawing. You can use this image data to download the image or to use it in your code.",
                syntax: 'screen.cnv_1.read("image");',
            },
            relativeXY:
            {
                desc: "On sending this read request ,component will return relative XY of values with respect to itself. This request requires 2 prameters x and y. For eg. in mouse events gives x and y values with repect to screen. So if you want to calcuate the x y position of the mouse with respect to canvas. ",
                syntax: 'screen.cnv_1.read("relativeXY",{x:x1,y:y1});',
            },
            domElem:
            {
                desc: domElemText,
                syntax: 'screen.cnv_1.read("domElem");',
            },
            config:
            {
                desc: readConfigText ,
                syntax: 'screen.cnv_1.read("config");',
            },
            left:
            {
                desc: readLeftText,
                syntax: 'screen.cnv_1.read("left");',
            },
            top:
            {
                desc: readTopText  ,
                syntax: 'screen.cnv_1.read("top");',
            },
            width:
            {
                desc: readWidthText  ,
                syntax: 'screen.cnv_1.read("width");',
            },
            height:
            {
                desc: readHeightText  ,
                syntax: 'screen.cnv_1.read("height");',
            },
            css:
            {
                desc: readCssText ,
                syntax: 'screen.cnv_1.read("css");',
            },
        },
        writeParams:
        {
            show:
            {
                desc: writeShowText ,
                syntax: 'screen.cnv_1.write("show");',
            },
            hide:
            {
                desc: writeHideText ,
                syntax: 'screen.cnv_1.write("hide");',
            },
            line:
            {
                desc: "On sending this write request ,component will change its value.",
                syntax: 'screen.cnv_1.write("line");',
            },
            arc:
            {
                desc: "On sending this write request ,component will change its value.",
                syntax: 'screen.cnv_1.write("line");',
            },
            circle:
            {
                desc: "On sending this write request ,component will change its value.",
                syntax: 'screen.cnv_1.write("line");',
            },
            rectangle:
            {
                desc: "On sending this write request ,component will change its value.",
                syntax: 'screen.cnv_1.write("line");',
            },
            image:
            {
                desc: "On sending this write request ,component will change its value.",
                syntax: 'screen.cnv_1.write("image");',
            },
            text:
            {
                desc: "On sending this write request ,component will change its value.",
                syntax: 'screen.cnv_1.write("image");',
            },
            clear:
            {
                desc: "On sending this write request ,component will clear itself.",
                syntax: 'screen.cnv_1.write("clear");',
            },
            css:
            {
                desc: writeCssText ,
                syntax: 'screen.cnv_1.write("css",{"background","red"});',
            },
        },
        directAccess:
        {}
    }
    // ================================================== Cartesian Graph Component =============================================================
docObj.components.graph = {
        name: "Cartesian Graph Plugin",
        app: 13,
        video: "https://www.youtube.com/embed/o-1LEIhmbU8",
        description: "Cartesian Graph plug-in is a  child of canvas plug-in. The difference between canvas and Cartesian graph is that in canvas origin lies in the top left corner and has positive X values on the right and positive y values in the bottom side. While Cartesian graph plug-in is designed with standards of cartesian co-ordinate system. Its y values lies in the upper side of the origin. In normal canvas plug-in to draw any calculus and mathemtical equation one has to do lot of pixel calculation.So cartesian graph hides all these complexities of pixel drawing and works on our normal mathematical values",
        properties:
        {
            id: idText,
            x: leftText,
            y: topText,
            width: widthText,
            height: heightText,
            opacity: opacityText,
             show:showText,
            bgColor: "This property sets the background of the Graph component. " + colorText,
            bgShow: bgShowText,
            quadrants: "This property is used to set the quadrants of th graph component. Its options are , all quadrants , quadrant 1,2, quadrant 2,3, quadrant 4,3 ,quadrant 4,1.",
            gridColor: "This property sets the grid color of the GRAPH component. " + colorText,
            gridLineWidth: "This property sets the width of grid lines of the GRAPH component. Its value in pixels.",
            gridNumberColor: "This property sets the color of grid numbers of GRAPH component. " + colorText,
            gridShow: "This property show or hide the grid of graph component. Its options are true and false.",
            gridXunits: "This property sets the total number units to show on positive and negative X axis. Its value is in number",
            gridXunitInterval: "This property sets the interval at which we have to display labels for units on X axis. ",
            gridYunits: "This property sets the total number units to show on positive and negative Y axis. Its value is in number",
            gridYunitInterval: "This property sets the interval at which we have to display labels for units on Y axis. ",
            gridFontSize: "This property sets the font size of the number labes on grid axis. ",
            gridFontStyle: "This property sets the font style of the number labes on grid axis.Its options are normal,bold and italic.",
            axisColor: "This property sets the X and Y axis color of the GRAPH component. " + colorText,
            axisWidth: "This property sets the width of X and Y axis.",
            axisLabelX: "This property sets the label  of X axis. By default it is set to X",
            axisLabelY: "This property sets the label  of Y axis. By default it is set to Y",
            axisLabelXSuffix: "This property sets the suffix for the numbers labels on the grid X axis.",
            axisLabelYSuffix: "This property sets the suffix for the numbers labels on the grid Y axis.",
            axisFontSize: "This property sets the font size of X AND Y axis labels..",
            pan: "This property enables or disable panning feature of the graph. Its options are true nd false.",
            pointSize: "This property sets the size of the point on the graph.",
            lineWidth: "This property sets the width of the line drawn on the graph.",
            startTime: startTimeText,
            stopTime: stopTimeText,
        },
        event_listners:
        {},
        readParams:
        {
            pixelValue:
            {
                desc: "On sending this read request ,component will return pixel value of point with respect to graph. This request require two parameters x and y",
                syntax: 'screen.graph_1.read("pixelValue",{x:x1,y:y1});',
            },
            pointValue:
            {
                desc: "On sending this read request ,component will return point value of pixel with respect to graph. This request require two parameters x and y.",
                syntax: 'screen.graph_1.read("pointValue",{x:x1,y:y1});',
            },
            domElem:
            {
                desc: domElemText,
                syntax: 'screen.graph_1.read("domElem");',
            },
            config:
            {
                desc: readConfigText ,
                syntax: 'screen.graph_1.read("config");',
            },
            left:
            {
                desc: readLeftText,
                syntax: 'screen.graph_1.read("left");',
            },
            top:
            {
                desc: readTopText  ,
                syntax: 'screen.graph_1.read("top");',
            },
            width:
            {
                desc: readWidthText  ,
                syntax: 'screen.graph_1.read("width");',
            },
            height:
            {
                desc: readHeightText  ,
                syntax: 'screen.graph_1.read("height");',
            },
            css:
            {
                desc: writeCssText ,
                syntax: 'screen.graph_1.read("css");',
            },
        },
        writeParams:
        {
            show:
            {
                desc: writeShowText ,
                syntax: 'screen.graph_1.write("show");',
            },
            hide:
            {
                desc: writeHideText ,
                syntax: 'screen.graph_1.write("hide");',
            },
            line:
            {
                desc: "On sending this write request , graph component will draw line. This write request require the following parameters.",
                syntax: 'screen.graph_1.write("line",{id: 1, arr: lineArr, color: "#ff0000" })',
                list:
                {
                    id: "It is unique id of lines drawn on the graph. It is used to update particular line in case of multiple lines drawn on graph. Please mention different Id's in case of multiple lines to avoid conflict.",
                    arr: "It is array contaning x,y values of points on line.",
                    color: "It is a hex value which gives color to the line on graph.",
                }
            },
            point:
            {
                desc: "On sending this write request , graph component will draw a point. This write request require the following parameters.",
                syntax: 'screen.graph_1.write("point",{id: 1, x: _x, y: _y })',
                list:
                {
                    id: "It is unique id of point drawn on the graph. It is used to update particular point in case of multiple points drawn on graph. Please mention different Id's in case of multiple points to avoid conflict.",
                    x: "It is a x value of point on the graph",
                    y: "It is a y value of point on the graph",
                }
            },
            image:
            {
                desc: "On sending this write request , graph component will draw an external image. This write request require the following parameters.",
                syntax: ' screen.graph_1.write("image",{x:x1,y:y1,image:screen.img_1,reset:true});',
                list:
                {
                    image: "Here external image is the image loaded by the image component. It is the id of image loaded by the image component in the form screen.imgId",
                    x: "It is a x value of image in pixel on the graph",
                    y: "It is a y value of image in pixel on the graph",
                }
            },
            clearImages:
            {
                desc: "On sending this write request , graph component will clear all the external images drawn by the write command 'image' but not lines and points. Since graph component uses separate layer to draw the images",
                syntax: 'screen.graph_1.write("clearImages");',
            },
            clearGraph:
            {
                desc: "On sending this write request , graph component will clear all the lines and points drawn on it but not the external images.",
                syntax: 'screen.graph_1.write("clearGraph");',
            },
            css:
            {
                desc: "On sending this write request , graph component will clear all the lines and points drawn on it but not the external images.",
                syntax: 'screen.graph_1.write("clearGraph");',
            },
        },
    }
    // =============================================================================================================================
    // ================================================== Audio Component =============================================================
docObj.components.audio = {
        name: "Audio Plugin",
        app: 14,
        video: "https://www.youtube.com/embed/o-1LEIhmbU8",
        description: "This plug-in is designed to play audio file. It requires direct url of mp3 file.",
        properties:
        {
            id: idText,
            x: leftText,
            y: topText,
            opacity: opacityText,
             show:showText,
            src: "This property sets the top position of the element with respect to screen. Its value is in pixels.",
            startTime: startTimeText,
            stopTime: stopTimeText,
        },
        event_listners:
        {
            abort:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            canplay:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            canplaythrough:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            durationchange:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            error:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            loadeddata:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            loadedmetadata:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            loadstart:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            pause:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            play:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            playing:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            progress:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            ratechange:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            seeked:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            seeking:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            stalled:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            suspend:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            timeupdate:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            volumechange:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            waiting:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
        },
        readParams:
        {
            domElem:
            {
                desc: domElemText,
                syntax: 'screen.audio_1.read("domElem");',
            },
            config:
            {
                desc: readConfigText ,
                syntax: 'screen.audio_1.read("config");',
            },
            time:
            {
                desc: writeShowText ,
                syntax: 'screen.audio_1.write("show");',
            },
            css:
            {
                desc: readCssText ,
                syntax: 'screen.audio_1.read("css");',
            },
        },
        writeParams:
        {
            show:
            {
                desc: writeShowText ,
                syntax: 'screen.audio_1.write("show");',
            },
            hide:
            {
                desc: writeHideText ,
                syntax: 'screen.audio_1.write("hide");',
            },
            css:
            {
                desc: writeCssText ,
                syntax: 'screen.audio_1.write("css",{"background","red"});',
            },
            play:
            {
                desc: writeShowText ,
                syntax: 'screen.audio_1.write("show");',
            },
            pause:
            {
                desc: writeShowText ,
                syntax: 'screen.audio_1.write("show");',
            },
            time:
            {
                desc: writeShowText ,
                syntax: 'screen.audio_1.write("show");',
            },
            stop:
            {
                desc: writeShowText ,
                syntax: 'screen.audio_1.write("show");',
            },
        },
    }
    // =============================================================================================================================
    // ================================================== Video Component =============================================================
docObj.components.video = {
        name: "Video Plugin",
        app: 15,
        video: "https://www.youtube.com/embed/o-1LEIhmbU8",
        description: "This plug-in is designed play video file. It can also be used to capture the webcam video. It requires direct URL of mp4 or youtube URL to play video.",
        properties:
        {
            id: idText,
            x: leftText,
            y: topText,
            width: widthText,
            height: heightText,
            opacity: opacityText,
             show:showText,
            src: "This property sets the video source. please provide the direct link of MP4 file or youtube URL",
            type: "This property sets the type of video to be fetched. Its options are direct <span class='bi'>MP4</span> and <span class='bi'>Youtube</span>",
            startTime: startTimeText,
            stopTime: stopTimeText,
        },
        event_listners:
        {
            abort:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            canplay:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            canplaythrough:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            durationchange:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            error:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            loadeddata:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            loadedmetadata:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            loadstart:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            pause:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            play:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            playing:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            progress:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            ratechange:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            seeked:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            seeking:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            stalled:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            suspend:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            timeupdate:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            volumechange:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
            waiting:
            {
                desc: "This property gets triggered when we we type something into textbox.",
            },
        },
        readParams:
        {
            time:
            {
                desc: writeShowText ,
                syntax: 'screen.video_1.write("show");',
            },
            domElem:
            {
                desc: domElemText,
                syntax: 'screen.video_1.read("domElem");',
            },
            config:
            {
                desc: readConfigText ,
                syntax: 'screen.video_1.read("config");',
            },
            left:
            {
                desc: readLeftText,
                syntax: 'screen.video_1.read("left");',
            },
            top:
            {
                desc: readTopText  ,
                syntax: 'screen.video_1.read("top");',
            },
            width:
            {
                desc: readWidthText  ,
                syntax: 'screen.video_1.read("width");',
            },
            height:
            {
                desc: readHeightText  ,
                syntax: 'screen.video_1.read("height");',
            },
            css:
            {
                desc: readCssText ,
                syntax: 'screen.video_1.read("css");',
            },
        },
        writeParams:
        {
            openWebcam:
            {
                desc: writeShowText ,
                syntax: 'screen.video_1.write("show");',
            },
            closeWebcam:
            {
                desc: writeShowText ,
                syntax: 'screen.video_1.write("show");',
            },
            show:
            {
                desc: writeShowText ,
                syntax: 'screen.video_1.write("show");',
            },
            hide:
            {
                desc: writeHideText ,
                syntax: 'screen.video_1.write("hide");',
            },
            css:
            {
                desc: writeCssText ,
                syntax: 'screen.video_1.write("css",{"background","red"});',
            },
            play:
            {
                desc: writeShowText ,
                syntax: 'screen.video_1.write("show");',
            },
            pause:
            {
                desc: writeShowText ,
                syntax: 'screen.video_1.write("show");',
            },
            time:
            {
                desc: writeShowText ,
                syntax: 'screen.video_1.write("show");',
            },
            stop:
            {
                desc: writeShowText ,
                syntax: 'screen.video_1.write("show");',
            },
        },
    }
    // =============================================================================================================================
    // ================================================== Pulse Generator Component =============================================================
docObj.components.pulseGenerator = {
        name: "Pulse Generator Plug-in",
        app: 16,
        video: "https://www.youtube.com/embed/o-1LEIhmbU8",
        description: "This Plug-in generates a pulses at a regular interval. It generates 2 types of pulses.<ul><li>In first type of pulse it uses your computer processor clock as a timing unit</li><li>In Second type of pulse it uses your browser rendering rate as a timing unit.</li></ul>So depending on your application please choose the necessary pulse type.<br> Now what is the difference between between 2 pulses and where to use these pulses.<br> In first type of pulse you get a pulses at a regular interval corresponding to the real time of your computer. So in application where you want to do something at a precise regular interval so use these type of pulses. <br>In second type of pulse the pulse duration may not be same with respect to real time. Duration of pulse is depended on your browser rendering rate. So in application where you want to perform any animation so in this case second type of pulse is useful since it will wait for your current animation frame to render. If we use first type of pulse for such application where there is so much browser rendering and animation. Then it will produce lag in the code execution and can produce so many render request without waiting for previous request to complete. In second type of pulse waits for the browser to complete its rendering cycle. So it will not produce any kind of lag.In terms of computer language the duration can be defined as frames per second. Normally browser completes its one frame rendering in 1/60 ms. So this browser rendering rate act as a source of pulses to the pulse generator. You can control the output of pulse generator by using FPS variable. <br> The time which is displayed in pulse generator is the summation of total time between pulses. By this you can find total number of pulses given. To find the pulses divide this time by 1/fps.",
        properties:
        {
            id: idText,
            x: leftText,
            y: topText,
            opacity: opacityText,
             show:showText,
            frame: "This property is used to set the framerate of the component",
            pulseSource: "This property selects the source of the pulses for pulse generator. It uses two kind of input pulses on from real time clock and one from browser rendering rate i.e request frame animation.",
            pulseDuration: "This property decided the duation of the pulses produced by the pulse generator.",
            autoStart: "This property starts the pulse generator automatically after App load.",
            startTime: startTimeText,
            stopTime: stopTimeText,
        },
        event_listners:
        {
            play:
            {
                desc: "This property gets triggered when we slide start begins thorough mouse or by touch on mobile or ipad.",
            },
            pause:
            {
                desc: "This property gets triggered when we slide slider thorough mouse or by touch on mobile or ipad.",
            },
            reset:
            {
                desc: "This property gets triggered when we stop slider or mouseup on it thorough mouse or by touch on mobile or ipad.",
            },
            pulse:
            {
                desc: "This component generates a pulse at a regular interval depending upon the frame rate provided. It uses request frame animation technique to gebratre a pulse for better performance. You can use the pulse in your code to perform some task at regular interval. This function returns the total pulse time plus dt that is time between pulses. ",
            },
            css:
            {
                desc: writeCssText ,
            },
        },
        readParams:
        {
            status:
            {
                desc: "On sending this read request ,component will return its running status. That whether pulses are creating or not.",
                syntax: 'screen.pulseGenerator_1.read("domElem");',
            },
            fps:
            {
                desc: "On sending this read request ,component will return its running status. That whether pulses are creating or not.",
                syntax: 'screen.pulseGenerator_1.read("domElem");',
            },
            duration:
            {
                desc: "On sending this read request ,component will return its running status. That whether pulses are creating or not.",
                syntax: 'screen.pulseGenerator_1.read("domElem");',
            },
            domElem:
            {
                desc: domElemText,
                syntax: 'screen.pulseGenerator_1.read("domElem");',
            },
            config:
            {
                desc: readConfigText ,
                syntax: 'screen.pulseGenerator_1.read("config");',
            },
             left:
            {
                desc: readLeftText,
                syntax: 'screen.pulseGenerator_1.read("left");',
            },
            top:
            {
                desc: readTopText  ,
                syntax: 'screen.pulseGenerator_1.read("top");',
            },
            width:
            {
                desc: readWidthText  ,
                syntax: 'screen.pulseGenerator_1.read("width");',
            },
            height:
            {
                desc: readHeightText  ,
                syntax: 'screen.pulseGenerator_1.read("height");',
            },
            css:
            {
                desc: readCssText ,
                syntax: 'screen.pulseGenerator_1.read("css");',
            },
        },
        writeParams:
        {
            show:
            {
                desc: writeShowText ,
                syntax: 'screen.pulseGenerator_1.write("show");',
            },
            hide:
            {
                desc: writeHideText ,
                syntax: 'screen.pulseGenerator_1.write("hide");',
            },
            fps:
            {
                desc: "On sending this write request ,component will start generating pulse.",
                syntax: 'screen.pulseGenerator_1.write("start");',
            },
            pulseDuration:
            {
                desc: "On sending this write request ,component will start generating pulse.",
                syntax: 'screen.pulseGenerator_1.write("start");',
            },
            start:
            {
                desc: "On sending this write request ,component will start generating pulse.",
                syntax: 'screen.pulseGenerator_1.write("start");',
            },
            stop:
            {
                desc: "On sending this write request ,component will stop generating pulse.",
                syntax: 'screen.pulseGenerator_1.write("stop");',
            },
            css:
            {
                desc: "On sending this write request ,component will stop generating pulse.",
                syntax: 'screen.pulseGenerator_1.write("stop");',
            },
        },
    }
    // =============================================================================================================================
    // ================================================== radio Buttons Comp =============================================================
docObj.components.led = {
        name: "led Plugin",
        app: 17,
        video: "https://www.youtube.com/embed/o-1LEIhmbU8",
        description: "This plug-in can be used as a normal led or blinking led light ",
        properties:
        {
            id: idText,
            x: leftText,
            y: topText,
            width: widthText,
            opacity: opacityText,
             show:showText,
            bgColor: "This property sets the color of the LED component. " + colorText,
            startTime: startTimeText,
            stopTime: stopTimeText,
        },
        event_listners:
        {},
        readParams:
        {
            status:
            {
                desc: "On sending this read request ,component will return whether LED is on or off.",
                syntax: 'screen.led_1.read("status");',
            },
            domElem:
            {
                desc: domElemText,
                syntax: 'screen.led_1.read("domElem");',
            },
            config:
            {
                desc: readConfigText ,
                syntax: 'screen.led_1.read("config");',
            },
             left:
            {
                desc: readLeftText,
                syntax: 'screen.led_1.read("left");',
            },
            top:
            {
                desc: readTopText  ,
                syntax: 'screen.led_1.read("top");',
            },
            width:
            {
                desc: readWidthText  ,
                syntax: 'screen.led_1.read("width");',
            },
            height:
            {
                desc: readHeightText  ,
                syntax: 'screen.led_1.read("height");',
            },
            css:
            {
                desc: readCssText ,
                syntax: 'screen.led_1.read("css");',
            },
        },
        writeParams:
        {
            on:
            {
                desc: writeShowText ,
                syntax: 'screen.led_1.write("on");',
            },
            off:
            {
                desc: writeShowText ,
                syntax: 'screen.led_1.write("off");',
            },
            blink:
            {
                desc: writeShowText ,
                syntax: 'screen.led_1.write("blink");',
            },
            hide:
            {
                desc: writeHideText ,
                syntax: 'screen.led_1.write("hide");',
            },
            css:
            {
                desc: writeCssText ,
                syntax: 'screen.led_1.write("css",{"background","red"});',
            },
        },
    }
    // =============================================================================================================================
    // ================================================== analogClock Component =============================================================
docObj.components.analogClock = {
        name: "analogClock Plugin",
        app: 18,
        imgWidth: "40%",
        video: "https://www.youtube.com/embed/o-1LEIhmbU8",
        description: "This plug-in is normal wall clock that we have in our home. This clock needs external pulses from your code to work.",
        properties:
        {
            id: idText,
            x: leftText,
            y: topText,
            width: widthText,
            height: heightText,
            opacity: opacityText,
             show:showText,
            label: "This property sets the label of clock.",
            startTime: startTimeText,
            stopTime: stopTimeText,
        },
        event_listners:
        {},
        readParams:
        {
            time:
            {
                desc: "On sending this read request ,component will return its value.",
                syntax: 'screen.clock_1.read("time");',
            },
            domElem:
            {
                desc: domElemText,
                syntax: 'screen.clock_1.read("domElem");',
            },
            config:
            {
                desc: readConfigText ,
                syntax: 'screen.clock_1.read("config");',
            },
            left:
            {
                desc: readLeftText,
                syntax: 'screen.clock_1.read("left");',
            },
            top:
            {
                desc: readTopText  ,
                syntax: 'screen.clock_1.read("top");',
            },
            width:
            {
                desc: readWidthText  ,
                syntax: 'screen.clock_1.read("width");',
            },
            height:
            {
                desc: readHeightText  ,
                syntax: 'screen.clock_1.read("height");',
            },
            css:
            {
                desc: readCssText ,
                syntax: 'screen.clock_1.read("css");',
            },
        },
        writeParams:
        {
            show:
            {
                desc: writeShowText ,
                syntax: 'screen.clock_1.write("show");',
            },
            hide:
            {
                desc: writeHideText ,
                syntax: 'screen.clock_1.write("hide");',
            },
            time:
            {
                desc: "On sending this write request ,component will change its time. These component require the following parameters",
                syntax: ' screen.clock_1.write("time",{h:h,m:m,s:s});',
            },
            css:
            {
                desc: writeCssText ,
                syntax: 'screen.clock_1.write("css",{"background","red"});',
            },
        },
    }
    // ================================================== AnalogMeters Component =============================================================
docObj.components.analogMeter = {
        name: "AnalogMeters Plugin",
        app: 19,
        imgWidth: "40%",
        video: "https://www.youtube.com/embed/o-1LEIhmbU8",
        description: "This plug-in can be used to display value in analog meter. It is like a speedometer of your car. It is use to display a number in a specific min/max range. Eg speedometer , voltmeter , ammeter , pressure meter",
        properties:
        {
            id: idText,
            x: leftText,
            y: topText,
            width: widthText,
            height: heightText,
            opacity: opacityText,
             show:showText,
            min: "This property sets the minimum value of range of analog meter. Its value is in numbers.",
            max: "This property sets the maximum value of range of analog meter. Its value is in numbers.",
            value: "This property sets the default value to show of analog meter. Its value is in number.",
            suffix: "This property sets the suffix of lable of analog meter.",
            label: "This property sets the label of analog meter. Its value is in pixels.",
            startTime: startTimeText,
            stopTime: stopTimeText,
        },
        event_listners:
        {},
        readParams:
        {
            value:
            {
                desc: "On sending this read request ,component will return its value.",
                syntax: 'screen.meter_1.read("value");',
            },
            domElem:
            {
                desc: domElemText,
                syntax: 'screen.meter_1.read("domElem");',
            },
            config:
            {
                desc: readConfigText ,
                syntax: 'screen.meter_1.read("config");',
            },
            left:
            {
                desc: readLeftText,
                syntax: 'screen.meter_1.read("left");',
            },
            top:
            {
                desc: readTopText  ,
                syntax: 'screen.meter_1.read("top");',
            },
            width:
            {
                desc: readWidthText  ,
                syntax: 'screen.meter_1.read("width");',
            },
            height:
            {
                desc: readHeightText  ,
                syntax: 'screen.meter_1.read("height");',
            },
            css:
            {
                desc: readCssText ,
                syntax: 'screen.meter_1.read("css");',
            },
        },
        writeParams:
        {
            value:
            {
                desc: "On sending this write request ,component will change its value.",
                syntax: 'screen.meter_1.write("value");',
            },
            show:
            {
                desc: writeShowText ,
                syntax: 'screen.meter_1.write("show");',
            },
            hide:
            {
                desc: writeHideText ,
                syntax: 'screen.meter_1.write("hide");',
            },
            css:
            {
                desc: writeCssText ,
                syntax: 'screen.meter_1.write("css",{"background","red"});',
            },
        },
    }
    // =============================================================================================================================
    // ================================================== Breadboard Component =============================================================
docObj.components.breadboard = {
        name: "Breadboard Plugin",
        app: 20,
        imgWidth: "40%",
        video: "https://www.youtube.com/embed/o-1LEIhmbU8",
        description: "This plug-in is a breadboard component which we use in a physics and electricity lab to make connection of circuit components. In lab we make connection by inserting wires in the dotted holes. In the same way you can connect the dots on this component to from a line. It can be used in electronic apps to show connection of wires of a circuit.",
        properties:
        {
            id: idText,
            x: leftText,
            y: topText,
            width: widthText,
            height: heightText,
            opacity: opacityText,
             show:showText,
            bgColor: "This property sets the background color of the DIV component. " + colorText,
            wireColor: "This property sets the wire color of the DIV component. " + colorText,
            dotColor: "This property sets the dot color of the DIV component. " + colorText,
            jointColor: "This property sets the joint color of the DIV component. " + colorText,
            eraser: "This property show or hide the eraser.",
            connectArr: "This property sets the connections in the breadboard component.",
            opacity: opacityText,
            startTime: startTimeText,
            stopTime: stopTimeText,
        },
        event_listners:
        {},
        readParams:
        {
            css:
            {
                desc: readCssText ,
                syntax: 'screen.breadBoard_1.read("css");',
            },
            connections:
            {
                desc: "On sending this read request ,component will return its connection of lines array in string format.",
                syntax: 'screen.breadBoard_1.read("value");',
            },
            domElem:
            {
                desc: domElemText,
                syntax: 'screen.breadBoard_1.read("domElem");',
            },
            config:
            {
                desc: readConfigText ,
                syntax: 'screen.breadBoard_1.read("config");',
            },
            left:
            {
                desc: readLeftText,
                syntax: 'screen.breadBoard_1.read("left");',
            },
            top:
            {
                desc: readTopText  ,
                syntax: 'screen.breadBoard_1.read("top");',
            },
            width:
            {
                desc: readWidthText  ,
                syntax: 'screen.breadBoard_1.read("width");',
            },
            height:
            {
                desc: readHeightText  ,
                syntax: 'screen.breadBoard_1.read("height");',
            },
        },
        writeParams:
        {
            show:
            {
                desc: writeShowText ,
                syntax: 'screen.breadBoard_1.write("show");',
            },
            hide:
            {
                desc: writeHideText ,
                syntax: 'screen.breadBoard_1.write("hide");',
            },
            connections:
            {
                desc: "On sending this write request ,component will clear its existing connections and will draw new connections of lines depend upon the array value.",
                syntax: 'screen.breadBoard_1.write("connections");',
            },
            css:
            {
                desc: writeCssText ,
                syntax: 'screen.breadBoard_1.write("css",{"background","red"});',
            },
        },
    }
    // ================================================== Protractor Component =============================================================
docObj.components.protractor = {
        name: "Protractor Plugin",
        app: 21,
        imgWidth: "40%",
        video: "https://www.youtube.com/embed/o-1LEIhmbU8",
        description: "This plug-in is designed to measure the angle of lines.",
        properties:
        {
            id: idText,
            x: leftText,
            y: topText,
            width: widthText,
            height: heightText,
            opacity: opacityText,
             show:showText,
            show: "This property shows or hide the protractor component.",
            drag: dragText,
            dragContainment: dragContainmentText,
            scale: "This property is used to scale IMAGE component. Its values are in numbers. Here 1 means 100%",
            startTime: startTimeText,
            stopTime: stopTimeText,
        },
        event_listners:
        {},
        readParams:
        {
            domElem:
            {
                desc: domElemText,
                syntax: 'screen.protractor_1.read("domElem");',
            },
            config:
            {
                desc: readConfigText ,
                syntax: 'screen.protractor_1.read("config");',
            },
         left:
            {
                desc: readLeftText,
                syntax: 'screen.protractor_1.read("left");',
            },
            top:
            {
                desc: readTopText  ,
                syntax: 'screen.protractor_1.read("top");',
            },
            width:
            {
                desc: readWidthText  ,
                syntax: 'screen.protractor_1.read("width");',
            },
            height:
            {
                desc: readHeightText  ,
                syntax: 'screen.protractor_1.read("height");',
            },
            css:
            {
                desc: readConfigText ,
                syntax: 'screen.protractor_1.read("config");',
            },
        },
        writeParams:
        {
            show:
            {
                desc: writeShowText ,
                syntax: 'screen.protractor_1.write("show");',
            },
            hide:
            {
                desc: writeHideText ,
                syntax: 'screen.protractor_1.write("hide");',
            },
            css:
            {
                desc: writeCssText ,
                syntax: 'screen.protractor_1.write("css",{"background","red"});',
            },
        },
    }
    // =============================================================================================================================
    // ================================================== Ruler Component =============================================================
docObj.components.ruler = {
        name: "Ruler Plugin",
        app: 22,
        video: "https://www.youtube.com/embed/o-1LEIhmbU8",
        description: "This plug-in is designed to measure the distance of two points in pixels. It can be also use to connect this component to the graph.",
        properties:
        {
            id: "This property sets the unique ID of the component. This id is used by the framework to access the component. We recommend not to set the id manually. This framework automatically decides the ID of the components. So allow this property to set by the framework in order to avoid errors.",
            x: "This property sets the left position of the element with respect to screen. Its value is in pixels.",
            y: "This property sets the top position of the element with respect to screen. Its value is in pixels.",
            opacity: opacityText,
             show:showText,
            bgColor: "This property sets the background of the DIV component. " + colorText,
            dragContainment: dragContainmentText,
            connect: "This property is used for interconnection of same group component. Here ruler can be connected to graph component. On connecting it to graph it will display the units value in terms of graph scale. It means you can measure distance on graph. By default it mesures distance in pixels.",
            startTime: startTimeText,
            stopTime: stopTimeText,
        },
        event_listners:
        {},
        readParams:
        {
            length:
            {
                desc: readCssText ,
                syntax: 'screen.ruler_1.read("css");',
            },
            domElem:
            {
                desc: domElemText,
                syntax: 'screen.ruler_1.read("domElem");',
            },
            config:
            {
                desc: readConfigText ,
                syntax: 'screen.ruler_1.read("config");',
            },
            left:
            {
                desc: readLeftText,
                syntax: 'screen.ruler_1.read("left");',
            },
            top:
            {
                desc: readTopText  ,
                syntax: 'screen.ruler_1.read("top");',
            },
            width:
            {
                desc: readWidthText  ,
                syntax: 'screen.ruler_1.read("width");',
            },
            height:
            {
                desc: readHeightText  ,
                syntax: 'screen.ruler_1.read("height");',
            },
            css:
            {
                desc: readCssText ,
                syntax: 'screen.ruler_1.read("css");',
            },
        },
        writeParams:
        {
            show:
            {
                desc: writeShowText ,
                syntax: 'screen.ruler_1.write("show");',
            },
            hide:
            {
                desc: writeHideText ,
                syntax: 'screen.ruler_1.write("hide");',
            },
            css:
            {
                desc: writeCssText ,
                syntax: 'screen.ruler_1.write("css",{"background","red"});',
            },
        },
    }
    // =============================================================================================================================
    // =============================================================================================================================