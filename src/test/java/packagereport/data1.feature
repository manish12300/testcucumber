Feature: Eating fruits
this features explains about fruits

Scenario Outline: Eating
	Given There are "<start>" fruits

		| type		|	with	|
		|	apples	|	me		|
		|	mango		| john	|
		| orange	|	mohan	|
		
		
	When I eat "<eat>" fruits
	Then I have "<left>" fruits
	
	Examples:
	|	start	|	eat	  |	left	|
	|	12		|5		  |	 7		|
	|	10		|	6		  |		4		|