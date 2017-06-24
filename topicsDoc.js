// ============================================================= Topics Array ===============================================

docObj.topics = [
    {
        name: "Scortual - The Future Virtual School",
        desc: [
		 {
            type: "text",
            data: "<h2>What is Scortual?</h2>",
        },
		
		 {
            type: "image",
            data: "http://i.imgur.com/X1uMZmC.png",
        },
		{
            type: "text",
            data: "Scortual is a short form of the Virtual School ( School + Virtual). This is a online framework designed for easy creation of HTML5 apps which are compatble with wide range of mobile devices and desktops. Our main focus is on improving the quality of education and change your imagination about science, technology and education. This is a public framework which anyone can use it to learn science for free from our collection or contribute their concepts and imagination in the form of Virtual Capsules. Remember knowledge increses by sharing not by saving. Your capsule will help other people and students to learn science concepts from your perception. Your perception will add a different dimention to the Science and Education since everyone way of understanding anything is different.",
        },
		{
            type: "text",
            data: "<div class='well docWell' style='text-align:center'>Scortual is a Plug-in-Play online framework for easy creation of HTML5 Educational Apps. Just use your logic and mathematics to create whatever you want to.</div>",
        }, 
		 {
            type: "image",
            data: "http://i.imgur.com/oEVWvMr.png",
        },
		/*
        {
            type: "video",
            data: "https://www.youtube.com/embed/o-1LEIhmbU8",
        },
		*/
		
		 ],
    },
	
	  {
        name: "Virtual Capsule",
        desc: [
            {
            type: "text",
            data: "<h2>What is Virtual Capsule?</h2>",
        },
        
        
		 {
            type: "image",
            data: "http://i.imgur.com/8qo2NeB.png",
        },
        
		 {
            type: "text",
            data: "Virtual Capsule is compact form of your virtual educational package. It consist of your interactive app, video and content. Virtual Capsule will contain one Virtual screen with voice instructions for interactivity, Youtube Video container and its documentation. The capsules are very easy to create. If you know the basic mathematics you can easily create capsule with some simple coding syntax. The coding language is javascript. To know more programming capsules go through our capsules programming section. You can get more info about javascript at W3C school.",
        },
		{
            type: "image",
            data: "http://i.imgur.com/WQJRpLp.png",
        },
		 {
            type: "text",
            data: "As shown in the above figure our capsule editor will fragment capsule into different editable and configurable layers. You can add and configure various plug-in layers and create your interactivite app by writing a simple code.",
        },
		//http://i.imgur.com/WWKQRTx.png
        /*{
        /*{
            type: "text",
            data: "Scortual is a short form of the Virtual School ( School + Virtual). This is on-line Framework designed in JavaScript, HTML5, jQuery, PHP and C++. It was started as a home project to do virtual experiments and we made it on-line so that it would spread education and improve the quality of education. It will also give a platform for young and innovative children to do virtual experiments and will surely boost their logic and imagination. It is designed for instant creation of your interactive content. The framework is designed to work smooth on both desktop and mobile devices. Also the responsive nature of the website interface enables it to fit in any kind of Device Screen.Please see the video where i have explained the entire doc section.",
        },
		*/
		/*
        {
            type: "text",
            data: "Creating an online application which is compatible with all the platforms is very time taking process. So it is designed in such a way that any person , teacher or student having basic knowledge of computer and Mathematics can work on it. Most of the work of configuring plug-ins is done by simple interface with input fields and buttons.",
        },
        {
            type: "image",
            data: "../media/images/docs/maths_eq.jpg",
        },
		{
            type: "text",
            data: "<div class='well docWell'>After using this you will feel that your development time reduced by 70-80%. Because you have to only concentrate on logic part not its view and cross platform compatibility part. When the things becomes much much easier for us we go on creating more and more complex things.</div>",
        }, 
        {
            type: "text",
            data: "The work of coding part comes only in developing a logic of interconnection of the plug-ins. Means here user acts as a communication channel through which the plug-ins communicates with each others. And that part of coding is simple like a mathematical equation which consists of some parameters. Also the syntax to define the mathematical equation is also very simple. Please watch my video to understand it. I am sure once you understand it you can work easily on it. I have made video of every App which i created in the initial version so that it will help you to understand the process better. Since most of the  work of coding is handled by the framework so only tasks remains is just interconnect these plug-ins with your logic",
        },
        {
            type: "text",
            data: "<div class='well'><h4>Who can use this project ?</h4><center><img class='img-responsive img-thumbnail lightShadow docImages' width='50%' src='../media/images/docs/students.jpg' alt='Responsive image'></center><ul><li><i>A Web Developer or programmer who want to present the interactive content online by using our ready to use plug-ins.</i></li><li>Anyone <i>( Students / Childrens / Teachers)</i> who want to learn online science concepts which are shared by other people </li> <li>Anyone who wants to create his own project or do some experiment to test his knowledge and skills</li> <li> The teacher who wants to teach their students by creating his own onlne science simulation.</li></ul></div>",
        },
		 {
            type: "text",
            data: "<div class='well docWell'>We request all the Teachers to use this platform to create their ideas. It will help the students all over the world to learn from your apps. Since each person has different view or perception to understand and to present anything.</div>",
        },
*/
        ]
    },
	
	  {
        name: "Virtual Screen Architecture",
        desc: [
         {
            type: "text",
            data: "<h3>Communication Logic of Plug-ins</h3>",
        },
            {
            type: "image",
            data: "../media/images/docs/arch_1.jpg",
        },
        {
            type: "text",
            data: "As you can see in the above diagram all the plug-ins are connected to control logic or controller. Controller is nothing but USER (you). Here USER (you) plays a role of handling communication between the plug-ins with some logic.",
        },
        {
            type: "image",
            data: "http://i.imgur.com/z2iqz4C.jpg",
        },
        {
            type: "text",
            data: "<div class='well' style='font-size:18px;background:#fff'>Three main points by which Control logic handles this communication flow are as follows.<ul><li>Listen</li><li>Read</li><li>Write</li></ul> Plug-ins can perform only three tasks. <ul><li>It can notify control logic for any event</li><li>It can provide its data when control logic initiate read request</li><li>It can overwrite its data or change state when control logic initiate write request to change any parameters.</li></ul></div>",
        },
        {
            type: "image",
            data: "../media/images/docs/cockpit.jpg",
        },
        {
            type: "text",
            data: "For example just imagine that you are flying an Aeroplane.You are sitting in a cockpit having so many buttons , control signal lights , levers and other electronic gadgets. Since most of major task of flying is handled by the Aeroplane framework so only task left for pilot is just to control the flow of various devices , depending on the status of the devices control other devices of the plane so that it can fly smooth. In a same way the cockpit is our live code editor where you have to listens other plug-in devices status and control other plug-ins devices according to that.  All the plug-ins are able to work individually as per their default configuration or user provided configuration. The work of control logic is just interconnect these plug-ins devices. When any action is performed on any plug-in device it dispatches its event. So work of control logic is to listen what the plug-in device wants to say ,  processes the incoming plug-in data and give that data to another plug-in to display. In short you play the role of pilot while developing any App on Scortual. For eg. Please see the below image.",
        },
        {
            type: "image",
            data: "../media/images/docs/arch_2.jpg",
        },
        {
            type: "text",
            data: "As you can see in the above diagram when any physical action such as slide is done on slider, it will send the data to the control logic. Control logic is nothing but you. Then you have to process this incoming slider data and will send this processed data for display to text plug-in and to graph plug-in. So that all the plug-ins can work in sync at the same time and you will get your desire output",
        },
        ]
    },
    {
        name: "Creating a new Capsule",
        desc: [
            {
                type: "image",
                data: "http://i.imgur.com/P2IsQy5.png",
            },
            /* {
            	type:"video",
            	data:"https://www.youtube.com/embed/o-1LEIhmbU8",
            }, */
            
			{
				type: "list",
				style:"normal",
				data:
				{
					"1": "Once you are login. Go to <span class='hw'>myCapsules</span> tab. Here you will find capsules created by you",
					"2": "To create a new capsule click on the <span class='hw'>create capsule </span>button on the right Top.",
					"3": "It will show you one dialogue box having two input text-fields for <span class='hw'>title</span> and <span class='hw'>description</span>",
					"4": "Description can be left blank. But capsule title is mandatory. The description is short description of your app in 140 characters. It can be updated later also. It is a summary of your capsule which will be displayed on cover page of capsule and on search results.",
				   
				},
			},
        ]
    },
    {
        name: "Screen Grid",
        desc: [
        {
            type: "image",
            data: "http://i.imgur.com/C4dsbvP.png",
        },
        
			{
				type: "list",
				style:"normal",
				data:
				{
					"1": "After clicking create button you will see a blank screen having grid of dimension 1024*786 in pixels. ",
					"2":"Screen Grid is provided to determine approximate position of the plug-ins in pixel. You can position plug-ins anywhere on the screen by dragging them. Please view the topic how to position the plug-ins for more details.",
					"3": "To enable or disable Screen Grid click on the Grid button <button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-th' aria-hidden='true'></span></button> on the topbar of screen.",
					"4": "Screen Grid can also be disable by clicking on the transparent portion outside the screen region.",
				   
				},
			},
		
		],
    },
    {
        name: "Screen - Top Portion",
        desc: [
        {
            type: "image",
            data: "http://i.imgur.com/C4dsbvP.png",
        },
        {
            type: "text",
            data: "On the top of the screen there is one drop-down menu at the left and control buttons on right. All the buttons are explained below",
        },
		{
            type: "text",
            data: "On the Left portion of the top bar screen tab is placed. On clicking screen tab following tabs will appear which are explained as below:",
        },
		{
            type: "table",
            data: [
                ["Tab", "explanation"],
                ["<b>Audio</b>", "It is used to configure background audio properties of the screen."],
                ["<b>Background</b>", "It is used to configure background color or image of the screen."],
                ["<b>clear setup</b>", "This will delete the capsule code and will clear the whole screen."],
           ],
        },
        {
            type: "text",
            data: "On the Right portion of the top bar you will see the following icon buttons:",
        },
		
      
		 {
            type: "table",
            data: [
                ["Button","name", "explanation"],
                ["<center><button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-plus' aria-hidden='true'></span></button></center>","<b> Add Plug-ins</b>", "It is used to add plugins to the screen. On clicking it one dialogue box containing the list of plug-ins will appear on the screen. Click on the plug-in to add it to a screen."],
              /*  ["<center><button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-headphones' aria-hidden='true'></span></button></center>"," <b>Add plug-ins Listeners</b>", "It will show one dialogue box containing the list of all the available plug-ins. Please click on the plug-in to add its listner to a screen."], */
                ["<center><button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-book' aria-hidden='true'></span></button></center>","<b>Plug-in Docs</b>", "It is used to show documentation about properties and events of plugins. On clicking it one dialogue box containing the list of plug-ins will appear on the screen. Click on the plug-in to view its technical documentation."], 
				["<center><button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-console' aria-hidden='true'></span></button></center>","<b> Console/ Debugger select option</b>", "You can use this option to select browser console debugging or our framework debugging. When this option is enabled you can debugg the code via browser console. If this option is disabled you will get error messages from our framework debugger. We recommend you to use chrome browser debugger for detecting errors since it is more advanced."],
				
                ["<center><button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-volume-up' aria-hidden='true'></span></button></center>","<b>Audio mute/unmute </b>", "It is used to mute or unmute the background audio of the screen."],
                ["<center><button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-refresh' aria-hidden='true'></span></button></center>","<b>Refresh Window</b>", "It is used to refresh the capsule screen window"],
                ["<center><button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-fullscreen' aria-hidden='true'></span></button></center>","<b>Fullscreen Mode</b>", "This mode will magnify or scale the capsule screen according to the availbale viewing device screen."],
                ["<center><button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-floppy-save' aria-hidden='true'></span></button></center>","<b>Save Button</b>", "It is used to save capsule code to the server."],
				["<center><button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-th-list' aria-hidden='true'></span></button></center>","<b>Code Versions</b>", "It is used to view the code versions stored in localStorage of the browser. Code versions are very useful in reverting the code in case of errors."],
                ["<center><button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-camera' aria-hidden='true'></span></button></center>","<b>Screenshot Button</b>", "It is used to take a screenshot of the screen. This screenshot is used as a cover image of the capsule."],
                ["<center><button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-th' aria-hidden='true'></span></button></center>","<b>Grid ON/OFF Button</b>", "it is used to show or hide Screen Grid."],
                ["<center><button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-print' aria-hidden='true'></span></button></center>","<b>Print Button</b>", "It is used to print capsule setup."],
				["<center><button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-blackboard' aria-hidden='true'></span></button></center>","<b>Preview Capsule</b>", "This option is used to preview the capsule"],
            ],
        },
		
		],
    },
    {
		name: "Screen - Bottom Portion",
        desc: [
        {
            type: "image",
            data: "http://i.imgur.com/kvn9lYn.png",
        },
        {
            type: "text",
            data: "On the bottom portion of the screen you will the following things:",
        },
      
		{
            type: "table",
            data: [
                ["Name", "explanation"],
                ["<b>Audio player</b>", "This audio player is designed to control background screen audio. It is used to handle time-line animation of the plug-ins. You can hide or show the player on the screen using background audio configuration options."],
                ["<b>Show external media</b>", "On clicking this button it will open a dialogue box showing the external images used in the screen. It will display only those images which are added on the screen using image plug-in."],
                ["<b>Live code editor</b>", "This is live code editor which contains the code of the capsule. It is the backend of the capsule shown on the page. Change the code in the live code editor and click run code. It will show the changes on the screen as per your code."],
               
            ],
        },		
		
		
		],
    },
    {
        name: " Event logger",
        desc: [
        {
            type: "image",
            data: "http://i.imgur.com/kvn9lYn.png",
        },
        {
            type: "text",
            data: "Event logger is black box at the bottom of the screen. It displays the necessary events, notifications and communication messages of the framework",
        }, ],
    },
    {
        name: "Code Editor",
        desc: [
        {
            type: "image",
            data: "http://i.imgur.com/DglZq2L.png",
        },
        {
            type: "text",
            data: "Code editor can be open by clicking the <b><i>Edit Code</b></i> button on the bottom portion of the screen. This code window contains the code of the screen. It is the backend of the screen. It contains the following buttons.",
        },
       
		 {
            type: "table",
            data: [
                ["Button", "Explanation"],
             /*   ["<b>Clear Versions</b>", "On clicking this button All the versions of your code will get cleared. It is necessary to clear the version since local storage allowed to a website by the browser is limited. So clear it at regular interval to allow space for new versions and improve the performance of your browser. However this framework will show you the message when your localStorage get completely filled."],*/
                ["<b>View Versions</b>", "On clicking this button you will see the pop up containing the versions of your code stored on your browser local storage. You can use these versions to revert your code in case if you found any issues in your current code."],
                ["<b>Save Code</b>", "On clicking this button you will see a dialogue box asking for comment for version. These comments are stored along with the versions in browser localstorage. Thses comments will help you while reverting your code from the stored versions."],
                ["<b>Run Code</b>", "On clicking this button you will see the output of the code in the Live code editor on the screen."],
                
            ],
        },
		
		]
    },

	{
        name: "Plugins Access Methods",
        desc: [
         {
            type: "image",
            data: "http://i.imgur.com/Hjgtmfe.png",
        },
		{
            type: "text",
            data: "Screen acts as a container for all the plug-ins. Any plug-in can be accessed by <b><i>screen.plugin_id</i></b>.",
        },
		{
            type: "syntax",
			
            data: 'screen.text_1.write("value","Scortual");',
        },
		{
            type: "text",
            data: "Following are some additional functions which screen provides to configure other properties of the screen.",
        },
		{
            type: "text",
            data: "<h2>Audio Functions</h2>",
        },
		{
            type: "text",
            data: "In screen addition of background audio and custom audio is done by the interface which don't require any user effort of coding. But screen also provides audioContext to give you access to the microscopic data of sound. Here are list of functions which screen provides to control Audio. This functions can be accessed as follows.",
        },
		{
			type: "syntax",
			data: 'screen.audio.oscillator({\n\tbpm: 120, // BITS PER MINUTE\n\tnoteLength: 4, // DURATION OF WAVE \n\twaveType: "sine", // sine,square , sawtooth , triangle\n\tfreqStart: 50, // freq at the start of pulse\n\tfreqEnd: 50, // freq at the end of pulse\n\tgainStart: 1, // gain at the start of pulse\n\tgainEnd: 0.001, // gain at the end of pulse\n});\n',
		},
		{
            type: "text",
            data: "<h2>AudioContext functions</h2>",
        },
        {
            type: "text",
            data: "We have not created many functions for audioContext because it itself is very vast. You can use global audioContext or can use it directly in your code. Following are the functions which is added for normal use. ",
        },
		{
            type: "table",
            data: [
                ["Method", "explanation"],
				["<b>audioContext</b>", "This method returns the screen audioContext object."],
                ["<b>analyserNode</b>", "This method returns the frequency object of  screen audioContext object."],
                
              
               // ["<b>getAudioContext</b>", "This method returns the screen global audioContext."],
               
                ["<b>oscillator</b>", "This method can be used to play the audio frequencies of any value."],
               // ["<b>oscillatorRecordSave</b>", "On clicking this button All the versions of your code will get clear."],
                //["<b>oscillatorRecordStart</b>", "On clicking this button All the versions of your code will get clear."],
               // ["<b>oscillatorRecordStop</b>", "On clicking this button All the versions of your code will get clear."],
               
               // ["<b>recorder</b>", "On clicking this button All the versions of your code will get clear."],
                ["<b>recorder</b>", "It is used to start screen audioContext recorder."],
				 ["<b>recorderStop</b>", "It is used to stop recording."],
                ["<b>recorderSave</b>", "It is used to get saved audio file."],
               
               
               
              ],
        },
		{
            type: "text",
            data: "<h2>Background Audio</h2>",
        },
		{
            type: "table",
            data: [
                ["Method", "explanation"],
               
			    ["<b>mp3</b>", "This method is used to update background audio link and other parameters related with background audio. It is handled by the interface. So no need to update it by manually."],
			    ["<b>playMP3</b>", "This method can be used to play background audio."],
				["<b>stopMP3</b>", "This method can be used to stop background audio."],
				//["<b>showPlayer</b>", "On clicking this button All the versions of your code will get clear."],
				//["<b>audioVolume</b>", "On clicking this button All the versions of your code will get clear."],
				["<b>setAudioTime</b>", "This method can be used to jump the background audio. This require jummp time as a parameter."],
                ["<b>createTimeline</b>", "This method can be used to update screen plugins on background audio timeline. They will be show or hidden depending on their start time and  end time."],
                ["<b>playEffect</b>", "This method can be used to play our custom sound effect in your capsule."],
               
                ],
        },
		
		
		]
    },
	
    {
        name: "Background Audio",
        desc: [
        {
            type: "image",
            data: "http://i.imgur.com/ud9laUN.png",
        },
        {
            type: "text",
            data: "To configure background screen audio please click on the Screen tab. From the list please click on audio. It will show one dialogue box which contains following options.",
        }, 
		
		{
            type: "table",
            data: [
                ["Option", "Explanation"],
                ["<b>MP3 URL</b>", "Provide the direct URL link of the audio mp3 file."],
                 ["<b>Volume</b>", "By default background audio volume is set to 0.5 so that we can hear Screen virtual instruction voice clearly. But as per your requirenment you can set any value here from 0 to 1. Max audio level is 1."],
                ["<b>Player</b>", "This is option select box having options show or hide. It sets the visibility of the audio player on the screen."],
                ["<b>Loop</b>", "It will replay the background audio when it gets complete."],
               
              ],
        },
		 {
            type: "text",
            data: "<div class='alert alert-info' role='alert'> Note: Please provide the direct link of the file in this properties. Make sure cross origin policy is set null by the hosting server so that we can easily play them. There are many services available on the internet where you can store your mp3 file from where you can get a direct link of your mp3 file. eg http://kiwi6.com</div>",
        }, 
		{
            type: "text",
            data: "Audio to the screen can also be added via audio plug-in. But difference between screen audio and audio plug-in is that. Audio plug-in plays the audio as it is. While screen audio is connected with screen audio player. This player is designed to control timeline animation of objects. Timeline animation can be done by setting time property of the plug-in. As per the mentioned time. plug-in will get visible or hidden by the audio controller.",
        },
		{
            type: "text",
            data: "Time-line animation can be done by setting startTime and endTime time property of the plug-in. As per the mentioned time. plug-in will get visible or hidden with respect to audio player time.",
        },
		{
            type: "text",
            data: "Please view the below example to study timeline animation of plugins.",
        },
		{
			type: "app",
			data: "262",
		},
		]
    },
	  {
        name: "Virtual Voice Instructions",
        desc: [
        {
            type: "image",
            data: "http://i.imgur.com/iBUXU0x.jpg",
        },
        {
            type: "text",
            data: "Sound plays important role in interacting with user. So we have added this virtual voice feature to the platform. Mention your virtual voice text in the audio instruction box we will automatically convert that text to virtual voice. This virtual Voice instructions will be played automatically at the  and it will be played at the start of a screen.",
        }
		
		]
    },
	 {
        name: "Sound Effects",
        desc: [
        {
            type: "image",
            data: "../media/images/docs/soundeffects.png",
        },
        {
            type: "text",
            data: "Custom sound effects like big bang or boom boom can be added to the screen to improve user interacting experience. Please see the below available effects.",
        },
		{
            type: "syntax",
            data: "screen.audio.playEffect(\"bell_2\");",
        },
		
		{
            type: "table",
			textCenter:true,
            data: [
                ["Effect Name", "Demo"],
                ["<b>bell_1</b>", '<audio style="box-shadow: 0px 0px 3px 2px #cccccc" src="../media/audio/soundEffects/bell1.mp3" controls=""></audio>'],
                ["<b>bell_2</b>", '<audio style="box-shadow: 0px 0px 3px 2px #cccccc" src="../media/audio/soundEffects/bell2.mp3" controls=""></audio>'],
                ["<b>click</b>", '<audio style="box-shadow: 0px 0px 3px 2px #cccccc" src="../media/audio/soundEffects/click.mp3" controls=""></audio>'],
           ],
        },
		]
    },
    {
        name: "Screen Background",
        desc: [
        {
            type: "image",
            data: "http://i.imgur.com/13GLl3y.png",
        },
        {
            type: "text",
            data: "To configure screen background properties please click on Screen tab on the topbar. From the list please click on background. It will show you one dialogue box having following options.",
        }, 
		{
            type: "table",
            data: [
                ["Option", "Explanation"],
                ["<b>Bg Image</b>", "Provide the direct URL link of the background image file."],
                ["<b>Bg Color</b>", "Provide the background color if you done want to keep background image."],
                ["<b>Select Bg</b>", "It will choose which type of Bg you want to keep image or color."],
               
              ],
        },
		 {
            type: "text",
            data: "To use default blue and black background image. Just enter default-blue or default-black",
        },
		 {
            type: "text",
            data: "<div class='alert alert-info' role='alert'>Note: The only thing for external image url is that server which is serving the image file should allow cross origin access. If cross origin access is not allowed that image may not load in the screen. To get the direct URL link of a image file you can use any image hosting online services. We have used http://imgur.com/ service of image file hosting. It works nicely.</div>",
        },
		
		
		]
    },
    {
        name: "Screen Plug-ins",
        desc: [
        {
            type: "text",
            data: "Plug-ins are the building blocks of this virtual capsules. Capsules works on the communication between plug-ins.",
        },
        {
            type: "image",
            data: "http://i.imgur.com/6pvENHh.png",
        },
         {
            type: "text",
            data: "Total 22 plugins are added in the framework as of now which are listed below.",
        },
        {
				type: "list",
				style:"normal",
				data:
				{
					"1": "text",
					"2": "textFeild",
					"3": "textArea",
					"4": "table",
					"5": "selectBtn",
					"6": "checkbox",
					"7": "radioBtn",
					"8": "button",
					"9": "slider",
					"10": "div",
					"11": "image",
					"12": "canvas",
					"13": "graph",
					"14": "audio",
					"15": "video",
					"16": "pulseGenerator",
					"17": "led",
					"18": "analogClock",
					"19": "analogMeter",
					"20": "breadboard",
					"21": "protractor",
					"22": "ruler",
					
				   
				},},
        {
            type: "text",
            data: "Click on the plus icon <button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-plus' aria-hidden='true'></span></button> on right side of the top bar to add plugins. It will show you one dialogue box containing list of all the plug-ins.",
        },
          {
            type: "image",
            data: "http://i.imgur.com/6pvENHh.png",
        },
          {
            type: "text",
            data: "Click on the plug-in. It will show you one dialogue box contaning the resective plugin properties.",
        },
        {
            type: "image",
            data: "http://i.imgur.com/ENOJWwJ.png",
        },
        {
            type: "text",
            data: "plug-in properties dialogue box contains id of plug-in and its properties. Id is unique name of that plug-in on the screen. Please do not change this name. This framework will automatically choose a unique name depending on the screen plug-ins. Other feild contains the configurable properties like position, dimention etc. Set this properties as per your requirement click on add plug-in. These properties can also be changed after adding plug-in to the screen.",
        },
       
        {
            type: "text",
            data: "Below are listed all the available plug-ins provided in this version. Since this is just a start of project so with the time more and more plug-ins will be listed here.",
        }, ],
        subTopics: docObj.components,
    },
	
    {
        name: "Positioning plug-ins",
        desc: [
        {
            type: "image",
            data: "http://i.imgur.com/Hjgtmfe.png",
        },
        {
            type: "text",
            data: "Positioning of plugins is done by dragging them anywhere in grid mode. On clicking Grid button <button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-th' aria-hidden='true'></span></button> on the topbar , a light red layer will appear on the plug-ins as shown in the image and the screen grid will also get visible. This light layer and grid indicates that now you can move the plug-ins anywhere on the screen.In this mode the plug-ins can be positioned anywhere on the screen by dragging. Once your position is final click on the save button. To check whether position is saved in database or not , Please refresh the window. It will load the app again as per your saved configuration.",
        },
        {
            type: "image",
            data: "http://i.imgur.com/z6ostVN.png",
        }, ]
    },
    {
        name: "Update Plug-in Configuration",
        desc: [
          {
            type: "image",
            data: "http://i.imgur.com/pQKdVun.png",
        },
         
        {
            type: "text",
            data: "Plugins configuration can be changed by their property box. There are 2 ways to open the property box. First is click on the capsule layer column on right of the screen or double click on the red light layer of plugin in the Grid mode.",
        },
        
      {
            type: "image",
            data: "http://i.imgur.com/Hjgtmfe.png",
        },
      
       ]
    },
        {
        name: "Adding Event Listners",
        desc: [
        {
            type: "image",
            data: "http://i.imgur.com/pQKdVun.png",
        },
        {
            type: "text",
            data: "Plugin Event listners can be added to the code by clcking the add event listner button in the property box. The respective plugin event listners will be added to the code as shown in the below figure. You can then write your code in the switch conditions</div>",
        },
		 {
            type: "image",
            data: "http://i.imgur.com/RYwmHzO.png",
        },
        /*
        {
            type: "text",
            data: '<div class="alert alert-danger" role="alert"> We suggest you to use this feature to avoid code syntax error.Please add semi colon at the end of every code line and end of every function line. Semicolons are the logical breaks where compliler compile the code.So do mention semicolon at the end of every code line. If after using this feature if you feel your screen is not working then open browser debugger. It will indicate the line where the error is. Most probable place is the end of your code. So do not save your code and reload screen. After checking all the semicolons use this add event listner.',
        }
        */ ]
    },
	 {
        name: "Interconnection of plug-ins",
        desc: [
		 {
            type: "text",
            data: "This framework is designed by keeping in mind that plug-ins cant communicate with each other. The user will have to establish the communication between them. But here in many capsules we have seen that we have to use some pair of plug-ins again and again. And to connect them we have to write the same code again and again. So to reduce this code we have added connect feature to the plug-ins which are of same data type.",
        },
		{
            type: "image",
            data: "http://i.imgur.com/pQKdVun.png",
        },
         {
            type: "text",
            data: "The connect feature is availble to the text, textfeild and slider plugin. Text plugin is a read only plugin which can be connected by one way communication to slider or textfeild plugin. Change in the values of these plugins will be printed by text plugin. Text feild and slider can be connected to each other by 2 ways. Means any change in slider will be reflected in text feild plugin and similarly any change in the texyfeild plugin will be reflected by slider plugin.",
        },
		
       ]
    },
    {
        name: "Deleting plug-ins",
        desc: [
        {
            type: "image",
            data: "http://i.imgur.com/pQKdVun.png",
        },
        {
            type: "text",
            data: "To delete the plug-ins please open the plug-ins property dialogue box by double clicking on the light red layer of plug-ins or by clicking on the plugin layers on the right. In property box you will see one delete button. On clicking this button, the plug-in layer will be removed from the screen. Do not use this feature blindly otherwise it will spoil your code. Please read below note.",
        },
        {
            type: "text",
            data: '<div class="alert alert-danger" role="alert" style="font-weight:bold;font-style:italic">Note: This feature will work well if you have not performed any logical operations on the plug-ins in your code. But if you have used the plug-in id anywhere in the code then we suggest you to remove all the instances of the plug-in manually. We are not doing this since removing instance blindly can spoil your code and can make it useless. So we left this feature to the USER.</div>',
        }]
    },
    {
        name: "Clear setup",
        desc: [
        {
            type: "image",
            data: "http://i.imgur.com/doZFwCe.png",
        },
        {
            type: "text",
            data: "Click on the Screen tab. Then click on the clear setup on the bottom of the list. It will remove all the plug-ins from the screen and will make the screen blank. Other way to blank screen is that delete all the code in live code editor and click run code. It will blank the whole screen. If you want to save the changes then click save button.",
        }, ]
    },

	
	{
        name: "Audio Jumping",
		
        desc: [
		
		{
            type: "app",
            data: "318",
        },
       
        {
            type: "text",
            data: "Audio jumping feature allows you to play different portion of same audio file as per your requirement. It also allows you to store all our audio data to one single file instead of using multiple audio files. It enables faster loading of the capsule screen since multiple request are reduced to only one. Please see the above Cat example to learn how this feature works. Here we have jumped on the same audio and played it on different conditions.. ",
        },
		
		]
    },
	{
        name: "Using AudioContext",
		
        desc: [
		{
            type: "text",
            data: "<div class='well' style='font-size:15px;background:#fff'>AudioContext gives you power to get microscopic view of your audio frequency and to process the smallest unit of your audio file.</div>",
        },
        {
            type: "image",
            data: "../media/images/docs/audiocontext.jpg",
        },
        {
            type: "text",
            data: "If you dont want much audio processing and want to just play pause audio so for that you can audio plug-in. But if you want to go deep in audio processing and wants to process the smallest frequency data of audio or to control audio filters then you can use AudioContext. This feature can help you get microscopic view of your audio frequency. For example view our piano and voice recorder App.",
        },
		{
            type: "text",
            data: 'Currently Audiocontext dont support loading of external direct link of audio file. So you cant load external file in this but you can create and play with audio frequencies by code.',
        },	
		{
            type: "text",
            data: 'Here are some capsules which we created using audioContext.',
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
	{
		type: "text",
		data: "<h3>Audio Recorder</h3>",
	},
	{
		type: "app",
		data: "271",
	},
	
		]
    },
	
	 {
        name: "Control directly by Javascript",
        desc: [
        {
            type: "image",
            data: "../media/images/docs/jsimage.png",
        },
		 {
            type: "text",
            data: 'We have provided almost all the basic and advanced common properties and functions which are necessary to control plug-ins. But if you are a programmer and wants to do more with your capsule so for that you can use the javascript DOM element of the plug-in. To get that element you can use read request of the plug-in and pass the respective parameter. for eg. like this',
        }, 
		{
            type: "syntax",
			
            data: 'var canvasDomObj = screen.cnv_1.read("domElem");',
        },
		{
            type: "text",
            data: 'You can then apply javascript and jquery directly to the control the dom element.',
        },
        ]
    },
	
	 
    {
        name: "Add Custom CSS",
        desc: [
        {
            type: "image",
            data: "../media/images/docs/CSS3.png",
        },
        {
            type: "text",
            data: 'You can add and get css properties of the plugin element. To get the css property of the plug-in use the following code.',
        },
		{
            type: "syntax",
			
            data: 'var canvasCSSobj = screen.cnv_1.read("css");',
        },
		{
            type: "text",
            data: 'Here you will not get the left top position of the element. Since it is given to the holder DIV which holds the plug-in so get the holderDIV property use javascript parent property to get the holder div',
        },
        {
            type: "text",
            data: 'To write the external CSS property to an element use the following code.',
        }, 
		{
            type: "syntax",
			
            data: 'screen.cnv_1.write("css",cssObj);',
        },
		]
    },
    {
        name: "3D development",
        desc: [
		
        {
            type: "text",
            data: "Now a days smooth 3D simulations is possible due to powerful processor. This framework uses 3JS to handle its 3D operations. 3d operations are compatible with all the devices and desktop without any problem. Please see our 3d Apps development video. You will come yo know how its work.",
        }, 
		 {
            type: "image",
            data: "../media/images/docs/42.jpg",
        },
		 {
            type: "text",
            data: "Please click here to view the 3JS documentation and examples.<button type='button' class='externalLink btn btn-default' data='https://threejs.org/'>Click here</button>",
        }, 
        {
            type: "image",
            data: "../media/images/docs/28.jpg",
        },
		]
    },
    {
        name: "Saving App",
        desc: [
        {
            type: "image",
            data: "http://i.imgur.com/lVZiKCE.png",
        },
        {
            type: "text",
            data: "Two options are provided to save the code. One is at the Topbar having floppy symbol <button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-floppy-save' aria-hidden='true'></span></button> and one is button names save code which is present on the top bar of the Live code editor. On clicking the option it will show you one dialogue box and will ask for the comment to save this version. So make habit of entering the comment about your changes in the code. These comments will help you to revert the code from code versions list in case of problems in your current code.",
        }, 
		 {
            type: "image",
            data: "http://i.imgur.com/SBLZf6N.png",
        },
		]
    },
    {
        name: "Code Versions",
        desc: [
        {
            type: "image",
            data: "http://i.imgur.com/SBLZf6N.png",
        },
        {
            type: "text",
            data: "While coding keeping versions is the most important thing. It helps you to revert the code in case you have done any mistake in your current code. Versions are created automatically when you save the code. All the versions are stored locally on local storage of user PC they are not stored on our servers. ",
        },
        {
            type: "text",
            data: "<h4>Create version</h4>",
        },
        {
            type: "text",
            data: "Versions are created automatically in the local storage when you click on save button,reload capsule or delete any plugin on the screen for safe side.",
        },
        {
            type: "text",
            data: "<h4>View version</h4>",
        },
        {
            type: "text",
            data: "To view the code versions please click on the version list <button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-th-list' aria-hidden='true'></span></button> button on the topbar. It will show you the popup as shown in the above image. This pop up contains list of your versions with their timestamp, date, and comment. You can use these three parameters to identify the version that you want load. We suggest you that if you feel that your version is stable then while saving add comment. So you can also choose your version by comment. Since sometimes we cant remeber exactly date and time.",
        },
        {
            type: "text",
            data: "<h4>Delete version</h4>",
        },
        {
            type: "text",
            data: "Click on clear version button on version list page. It will clear all the versions stored in local storage..",
        }, ]
    },
	
	   {
        name: "Deleting Capsule",
        desc: [
        {
            type: "image",
            data: "http://i.imgur.com/IC1T2aq.png",
        },
        {
            type: "text",
            data: "In software field data is never deleted. Because data of any type can be useful in future. So that's why we have given first delete option is to move it to recycle bin. From recycle bin you can either restore the capsule or permanently delete the capsule. If you deleted the capsule permanantly from your side then it will go to our central recycle bin. If you want to recover permanantly deleted capsule then contact us we will restore your data. Since your data protection is our responsibility so dont worry about that.",
        },
         ]
    },
	  {
        name: "Recycle Bin",
        desc: [
        {
            type: "image",
            data: "http://i.imgur.com/ESmgbym.png",
        },
        {
            type: "text",
            data: "On myCapsules page please click on the Recycle Bin <button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></button> option on the topBar. It will show you one dialogue box. This box will contain list of all your deleted capsules. If you want to restore the capsule please click on the restore button <button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-retweet' aria-hidden='true'></span></button> to recover the capsule or if you want to delete it permanently then click on the cross button to delete it permanantly.<button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-remove-circle' aria-hidden='true'></span></button>.",
        },
         ]
    },
	
	
    {
        name: "Saving Capsule Cover/thumbnail Image",
        desc: [
        {
            type: "image",
            data: "http://i.imgur.com/wQBwW0Q.png",
        },
        {
            type: "text",
            data: "To save the cover image or thumbnail of your capsule please Click on the camera icon <button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-camera' aria-hidden='true'></span></button> on the topbar of screen. It create an image by reading screen pixels. This image will be stored as a thumbnail of the capsule. Also it will display one pop showing that image for you to download.",
        }, 
		{
            type: "image",
            data: "http://i.imgur.com/cKBFSv3.png",
        },
		]
    },
	
	
    {
        name: "Printing Capsule",
        desc: [
        {
            type: "image",
            data: "../media/images/docs/25.jpg",
        },
        {
            type: "text",
            data: "Click on the print button <button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-print' aria-hidden='true'></span></button> on the right of the topbar. It will print the current screen and any table data if it exists on the screen. This feature is added so that it will help you in your project if you want your output on page.",
        }, ]
    },
    {
        name: "Capsule Viewport Options",
        desc: [
       
        {
            type: "text",
            data: "Three types of modes are provided to view the capsule for better user experince since we are not sure in which device and in which resolution the user will view the capsule . Viewport options are as follows.",
        },
		{
            type: "list",
            data:
            {
                "Best Fit mode": "",
                "Spread mode": "",
                "Fullscreen mode": "",
            },
        },
		
		{
            type: "text",
            data: "<b style='font-size: 16px;'>Best Fit mode</b><br>Best Fit mode is shown in the below image. This mode calculates the capsule view port dimension depending on your device screen dimension. So that the complete capsule will be visible to the user without scroll.",
        },
		
		{
            type: "image",
            data: "http://i.imgur.com/jBPHI4U.png",
        },
		
		
		{
            type: "text",
            data: "<b style='font-size: 16px;'>Spread mode</b><br>Spread mode is shown in the below image. This mode tries to cover maximum possible space and maximise itself.",
        },
		{
            type: "image",
            data: "http://i.imgur.com/fucXlr9.png",
        },
		
		{
            type: "text",
            data: "<b style='font-size: 16px;'>Fullscreen mode</b><br>Fullscreen mode is shown in the below image. This mode hides everything around capsule so that only capsule is visible to the user not other things. Capsule view-port dimensions are calculated depending on your device screen resolution.",
        },
		{
            type: "image",
            data: "http://i.imgur.com/vAbMbt4.png",
        },		
		
		]
    },
    {
        name: "Debugging Capsule",
        desc: [
		 {
        type: "text",
        data: "Debugging is not easy. But fortunately, all modern browsers have a built-in debugger. But for that you will have to open the browser debugger while developing. Here we are also developing our own debugger. But that technology is still in the experimental phase it is not as advanced as the chrome debugger. So our debugger will just notify you that something wrong had happened. But what had happened and where the browser debugger can tell you.",
    },
	{
        type: "image",
        data: "http://i.imgur.com/Hjgtmfe.png",
    },
	{
        type: "text",
        data: "To turn on the browser debugger please click on the console button <button type='button' class='btn btn-primary btn-xs'><span class='glyphicon glyphicon-console' aria-hidden='true'></span></button> on the topbar of the screen. If you previously clicked enable console button you will see the button in navy blue color. It means now the debugging will be handled by the browser. If this button is in white color then it means the debuggiing will be handled by our framework. We suggest while developing keep the browser debugger window open and enable the console option. Then you will see the errors in the browser window. We have developed our debugger to notify you every time when there is an error. Since browser debugger wont notify you and your app will stop working. But for the advanced debugging use chrome default debugger.",
    },
        {
            type: "image",
            data: "../media/images/docs/27.jpg",
        },
        {
            type: "text",
            data: "All the error in your code execution will appear in the console window of the browser. To open this please right click on the screen and click on inspect. It will open debuuger of your browser. There click on console , it will show you console window. It will display all the messages or code state of your coding. For more info please refer my videos. They will hep you to understand how it works.",
        }, 
			
		]
    },
	    {
        name: "Capsule Publish Parameters",
        desc: [
        {
            type: "image",
            data: "http://i.imgur.com/flUSSSJ.png",
        },
        {
            type: "text",
            data: "To make your capsule more informative additional information parameters are provided. They are as follows.",
        }, 
		{
            type: "table",
            data: 
			[
                ["Parameters", "Explanation"],
                 ["<b>Capsule instruction audio</b>", "This feild is provided for virtual instruction voice of capsule. This voice will be played at the start of capsule."],
                ["<b>Tags</b>", "We have created some predefined tags such as maths , science etc. They will come automatically once you start typing it. So give that tags to your apps. These tags will be used for searching and filtering of capsules on capsules page."],
                ["<b>You-tube link</b>", "It requires the URL of you-tube page."],
                ["<b>Short description</b>", "It is short description of capsule in 140 characters which is displayed during search."],
                ["<b>Detailed Description</b>", "The detailed description can be created using various fragments such as text , maths , image , video. All that fragments are explained in the next page."],
           ],
        },
		 {
            type: "text",
            data: "Predefined tags added in the framework are as follows",
        },
		{
            type: "table",
            data: 
			[
                ["Tags"],
                ['Plug-ins'],['Javascript Tutorial'],['Canvas Tutorial'],['Kids / Childrens'],['Maths'] ,['Physics'] ,['Chemistry'] ,['Biology'] ,['Image Processing'] ,['Sound Processing'] ,['Web Tools'] ,['3d'] ,['Game'] ,['Animations'], ['Others']
           ],
        },
		
		]
    },
	{
        name: "Capsule Detailed Description",
        desc: [
		{
            type: "image",
            data: "http://i.imgur.com/fURVip9.png",
        },
		 {
            type: "text",
            data: "Capsule Detailed description is divided into various fragments. For each fragment different text-boxes are provided. All the text-boxes are explained below.",
        }, 
		{
            type: "table",
            data: [
                ["Fragment Boxes", "Explanation"],
                ["<b>Text Box</b>", "It is used to submit your normal description text. Formatting toolbar is provided to format the text."],
                ["<b>Maths Box</b>", "It is used to submit katex codes. All these codes are converted into maths equation on capsulDecoder page."],
                ["<b>Image Box</b>", "It is used to submit direct url of image file"],
                ["<b>Video Box</b>", "It is used to submit youtube url link"],
               
           ],
        },
		{
            type: "text",
            data: "<h2>Text Box</h2>",
        }, 
        {
            type: "image",
			width:"undefined",
            data: "../media/images/docs/51.jpg",
        },
		{
            type: "text",
            data: "<h2>Maths Box</h2>",
        }, 
        {
            type: "image",
			width:"undefined",
            data: "../media/images/docs/52.jpg",
        },
		{
            type: "text",
            data: "<h2>Image Box</h2>",
        }, 
        {
            type: "image",
			width:"undefined",
            data: "../media/images/docs/53.jpg",
        },
		{
            type: "text",
            data: "<h2>Video Box</h2>",
        }, 
        {
            type: "image",
			width:"undefined",
            data: "../media/images/docs/54.jpg",
        },
		
		{
            type: "text",
            data: "Below is the screen-shot how this various fragments appear on Apploader page..",
        }, 
        {
            type: "image",
            data: "../media/images/docs/49.jpg",
        },
       
		]
    },
    {
        name: "User Profile",
        desc: [
        {
            type: "image",
            data: "http://i.imgur.com/Jacy6su.png",
        },
        {
            type: "text",
            data: "We have not much worked on User Profile since we dont want to make this framework as social network. User profile page contains the list of capsules posted by the user. And only two fields are provided for user info. One is about me and other is change profile image. So whatever you want to mention about yourself. Write in about me section. Once Login, user has rights to create Capsule, view others Capsules and to comment on any Capsule. To keep this framework clean we have right to remove any objectionable content or comment from this platform. So please keep it clean.",
        }, ]
    },
    {
        name: "Search Capsules",
        desc: [
        {
            type: "image",
            data: "http://i.imgur.com/IF38kHL.png",
        },
        {
            type: "text",
            data: "Search feature is provided on the capsules page. You can search capsules by words or capsule Id from the search box provided on the page. Right navigation bar contains list of tags. By clicking the tags , capsules listed under particular tags will be listed.",
        }, ]
    },
    {
        name: "Katex",
        desc: [
        {
            type: "image",
            data: "../media/images/docs/20.jpg",
        },
        {
            type: "text",
            data: "Katex page is added to create syntax to display mathematical expression and symbols. Since to represent such symbols in html5 is little bit complex. So we used katex library. It makes this work much easier. You can read its documentation and complete function list from the below link.<button type='button' class='externalLink btn btn-default' target='popup' data='https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX'>Katex functions</button>",
        }, ]
    },
    {
        name: "Privacy",
        desc: [
        {
            type: "text",
            data: "We do not host any kind of copyrighted media or images. All type of media element such as image , music and video are just linked from other hosting websites to our capsules. All the information is user provided and is use just for educational purposes.",
        }, ]
    }]