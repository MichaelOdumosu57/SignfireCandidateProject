#Signafire Candidate Assignment

## Goals

### Goal 1
    match the styling as close as possible in the wireframe
    ergonomic
    modularity
    very neat
    got bootstrap in the API styles
    
###  Goal 2
	display the star tab
	understand if its a logo or a div you are given and make appropriate messages for the SigHeader
	get that message viewer in there

### Goal 3
    Display length of messages starred
    Toggle starring messages

### Goal 4   
	place trash button on right side of star message button
	button font -color
	click to trash a message
	messages should disappear

### Goal 5
	place a view toggle box under the starred count area
	toggle the view to show trashed messages and untrashed messages
		
### Goal 6
	place input box  with a submit button
	user can type any text and click submit
	highlight input query from messages



##Achieved

## Milestone 1 Frontend MVP portion completed
### Achieved 1
	
	matched the stylying of the tweets as close as I could
	getting plenty of modularity
 
### Achieved 2
	displaying start tab
	its a logo for the sigHeader
	completed the sigHeader

### Achieved 3
	displayed length of messages starred
	toggle starring messages 

### Achieved 4
	properly added the trash button and the tweet disappears	

### Achieved 5
	done it properly toggles between garbed and non garbage although garbage loses some of its properties
	found out why garbage lost its properties, db.splice put the tweet in the array so the problem was from the backend

### Achieved 6 
	set up shop
	can highlight the whole text
	must send to backend to determine final highlighting of the string	
	

	



##Tips

    *construct your Components with css

...
for app
...
#TweetComponent
    
    *the indivual messages comprised

#PageComponent
    
    * responsible for holding all the message items,
    * responsible for message items moving around

#StarTab Component
	* responsible for header section inside page

#SigHeader Component
	* responsible for showing the logo as well as that message viewer
	

#sigheader Service
	responsible for getting the logo from the backend
	
#starquantity service
    responible for determing the amount of starred items in the app and getting the list for the back

#toggle service
	responsible for everything toggle

#trash service
	part of tweet component, responsible for trashing the tweet		

# TrashMessages 
	button responsible for the UI  to toggle between trashed and active messages	
# InputMQ component
	responsible for taking input from the user	

# InputMQS service
	responsbile with communicating with other services and components that the messages need to be highlighted